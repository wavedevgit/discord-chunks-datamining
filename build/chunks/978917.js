/** Chunk was on 4267 **/
n.d(a, {
  Z: () => i
});
var t = {
    lastWeek: "'el' eeee 'pasado a la' p",
    yesterday: "'ayer a la' p",
    today: "'hoy a la' p",
    tomorrow: "'ma\xf1ana a la' p",
    nextWeek: "eeee 'a la' p",
    other: "P"
  },
  o = {
    lastWeek: "'el' eeee 'pasado a las' p",
    yesterday: "'ayer a las' p",
    today: "'hoy a las' p",
    tomorrow: "'ma\xf1ana a las' p",
    nextWeek: "eeee 'a las' p",
    other: "P"
  };
let i = function(e, a, n, i) {
  return 1 !== a.getUTCHours() ? o[e] : t[e]
}