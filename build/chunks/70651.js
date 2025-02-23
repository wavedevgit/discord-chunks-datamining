/** Chunk was on 28990 (adafa58fcd5dad70.js) **/
t.d(n, {
  Z: () => a
});
var o = ["neděli", "ponděl\xed", "\xfater\xfd", "středu", "čtvrtek", "p\xe1tek", "sobotu"],
  r = {
    lastWeek: "'posledn\xed' eeee 've' p",
    yesterday: "'včera v' p",
    today: "'dnes v' p",
    tomorrow: "'z\xedtra v' p",
    nextWeek: function(e) {
      return "'v " + o[e.getUTCDay()] + " o' p"
    },
    other: "P"
  };
let a = function(e, n) {
  var t = r[e];
  return "function" == typeof t ? t(n) : t
}