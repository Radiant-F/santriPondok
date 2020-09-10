var santriPondok = [
  "Wandi",
  "Aldi",
  "Acep",
  "Putra",
  "Hafif",
  "Syofyan",
  "Rahmad",
];

document.write("<ol>");
var bnykSantri = santriPondok.length;

for (i = 0; i < santriPondok.length; i++) {
  document.write("<li>");
  document.write(santriPondok[i]);
  document.write("</li>");
}
document.write("</ol>");
