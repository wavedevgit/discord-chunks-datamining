/** Chunk was on 76215 **/
/** chunk id: 745579, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk55935 = require("./55935.js"),
  Chunk70956 = require("./70956.js"),
  Chunk823379 = require("./823379.js"),
  Chunk875425 = require("./875425.js"),
  Chunk388032 = require("./388032.jsx");
let u = e => {
  let t = Date.now() + e;
  return (0, r.KC)(new Date, new Date(t)) ? o.intl.data.formatTime(t, {
    format: "short"
  }) : o.intl.formatToPlainString(o.t.DN91Jz, {
    time: o.intl.data.formatTime(t, {
      format: "short"
    })
  })
};

function s(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  switch (e) {
    case a.FO.TODAY:
      if (t) return "".concat(o.intl.formatToPlainString(o.t.Rea2gR, {
        hours: 24
      }), " (").concat(u(i.Z.Millis.DAY), ")");
      return o.intl.string(o.t.GQmLrZ);
    case a.FO.HOURS_4:
      if (t) return "".concat(o.intl.formatToPlainString(o.t.Rea2gR, {
        hours: 4
      }), " (").concat(u(4 * i.Z.Millis.HOUR), ")");
      return o.intl.formatToPlainString(o.t.Rea2gR, {
        hours: 4
      });
    case a.FO.HOURS_1:
      if (t) return "".concat(o.intl.formatToPlainString(o.t.Rea2gR, {
        hours: 1
      }), " (").concat(u(i.Z.Millis.HOUR), ")");
      return o.intl.formatToPlainString(o.t.Rea2gR, {
        hours: 1
      });
    case a.FO.MINUTES_30:
      if (t) return "".concat(o.intl.formatToPlainString(o.t.TS3eJb, {
        minutes: 30
      }), " (").concat(u(30 * i.Z.Millis.MINUTE), ")");
      return o.intl.formatToPlainString(o.t.TS3eJb, {
        minutes: 30
      });
    case a.FO.DONT_CLEAR:
      return o.intl.string(o.t.bRn8cq);
    default:
      (0, l.vE)(e)
  }
}