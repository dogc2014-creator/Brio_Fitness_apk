// Genera códigos de activación para brío.
// Uso:  node tools/generar_codigos.js 10
// Crea 10 códigos nuevos, los guarda en codigos.txt (SECRETO, no subir a GitHub)
// y actualiza www/index.html con sus huellas (hashes) para que la app los reconozca.
const fs = require('fs');
const crypto = require('crypto');

const cantidad = parseInt(process.argv[2] || '5', 10);
const ALFABETO = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // sin letras confusas (0, O, 1, I)
const APP = 'www/index.html';
const CODIGOS = 'codigos.txt';

function nuevoCodigo() {
  const grupos = [];
  for (let g = 0; g < 3; g++) {
    let s = '';
    for (let i = 0; i < 4; i++) s += ALFABETO[crypto.randomInt(ALFABETO.length)];
    grupos.push(s);
  }
  return 'BRIO-' + grupos.join('-');
}
const huella = (c) => crypto.createHash('sha256').update(c).digest('hex');

// Huellas que ya existen en la app
let html = fs.readFileSync(APP, 'utf8');
const ini = '/*BRIO_HASHES_INICIO*/', fin = '/*BRIO_HASHES_FIN*/';
const a = html.indexOf(ini), b = html.indexOf(fin);
if (a < 0 || b < 0) throw new Error('No encuentro los marcadores de códigos en ' + APP);
const actuales = [...html.slice(a + ini.length, b).matchAll(/'([0-9a-f]{64})'/g)].map(m => m[1]);

const nuevos = [];
const huellas = [...actuales];
while (nuevos.length < cantidad) {
  const c = nuevoCodigo();
  const h = huella(c);
  if (!huellas.includes(h)) { nuevos.push(c); huellas.push(h); }
}

const lista = huellas.map(h => "'" + h + "'").join(',\n    ');
html = html.slice(0, a + ini.length) + '\n    ' + lista + '\n  ' + html.slice(b);
fs.writeFileSync(APP, html);

fs.appendFileSync(CODIGOS, nuevos.join('\n') + '\n');
console.log(`Listo: ${nuevos.length} códigos nuevos.`);
console.log(`Los códigos están en ${CODIGOS} (son secretos: entregá cada uno a un usuario).`);
