/** Chunk was on 2827 **/
/** chunk id: 704724, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J6: () => d,
  Jz: () => u,
  ky: () => o,
  qY: () => c
});
var Chunk873298 = require("./873298.js"),
  Chunk632119 = require("./632119.js"),
  Chunk444802 = require("./444802.js"),
  Chunk93857 = require("./93857.js");

function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
let o = e => null != e && e !== r.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
  c = (e, t) => {
    let n = (e => {
      let t = s.oQ.getControlledSetting(e),
        {
          goreContentNonFriendDm: n,
          goreContentFriendDm: i
        } = null != t ? t : {};
      return {
        goreContentNonFriendDm: o(n) ? n : (0, l.jj)({
          isDm: true
        }),
        goreContentFriendDm: o(i) ? i : (0, l.jj)({
          isDm: true,
          isFriend: true
        }),
        goreContentGuilds: r.TO.BLUR
      }
    })(e);
    s.oQ.updateControlledSetting(e, a({}, n, t))
  },
  d = e => {
    let {
      teenId: t,
      setting: n,
      isFriend: r = false
    } = e;
    if (o(n)) return n;
    let l = s.sM.getControlledSetting(t);
    return r ? i.Bb[l] : i.fu[l]
  },
  u = (e, t) => {
    let n, i = (n = s.p7.getControlledSetting(e), {
      explicitContentNonFriendDm: d({
        teenId: e,
        setting: null == n ? true : n.explicitContentNonFriendDm
      }),
      explicitContentFriendDm: d({
        teenId: e,
        setting: null == n ? true : n.explicitContentFriendDm,
        isFriend: true
      }),
      explicitContentGuilds: r.TO.BLUR
    });
    s.p7.updateControlledSetting(e, a({}, i, t))
  }