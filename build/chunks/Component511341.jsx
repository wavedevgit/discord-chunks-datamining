/** Chunk was on web.js **/
/** chunk id: 511341, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk907040 = require("./907040.jsx"),
  Chunk210887 = require("./210887.js"),
  Chunk823379 = require("./823379.js"),
  Chunk51144 = require("./51144.js"),
  Chunk698305 = require("./698305.js"),
  Chunk510659 = require("./510659.jsx"),
  Chunk810097 = require("./810097.jsx"),
  Chunk652853 = require("./652853.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk185923 = require("./185923.js"),
  Chunk231338 = require("./231338.js"),
  Chunk295907 = require("./295907.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk396579 = require("./396579.js");
let O = e => {
  let {
    emoji: t,
    username: n,
    sourceType: r,
    sourceDetails: i
  } = e, a = ":".concat(t.name, ":");
  switch (r) {
    case h.n_.ACTIVITY:
      let o = b.intl.formatToPlainString(b.t.EUFEJt, {
          username: n
        }),
        s = "\n> ".concat(i);
      return null != i ? "".concat(_.jd).concat(o, "*").concat(s, "\n").concat(a) : "".concat(_.jd).concat(o, "*\n").concat(a);
    case h.n_.AVATAR:
      let l = b.intl.formatToPlainString(b.t.E6H15q, {
        username: n
      });
      return "".concat(_.jd).concat(l, "*\n").concat(a);
    case h.n_.STATUS:
      let u = b.intl.formatToPlainString(b.t.XPQgL2, {
          username: n
        }),
        d = "\n> ".concat(i);
      return null != i ? "".concat(_.jd).concat(u, "*").concat(d, "\n").concat(a) : "".concat(_.jd).concat(u, "*\n").concat(a);
    default:
      (0, c.vE)(r)
  }
};

function v(e) {
  let {
    user: t,
    guildId: n,
    entry: c,
    sourceType: _,
    sourceDetails: b,
    setPopoutRef: v,
    onAction: I,
    onClose: T
  } = e, {
    resetInteraction: S,
    setInteractionToast: A
  } = (0, f.Xo)(), {
    theme: C
  } = (0, p.z)(), N = (0, a.e7)([l.Z], () => l.Z.theme), R = (0, o.wj)(N) ? !(0, o.wj)(C) : (0, o.wj)(C), P = i.useRef(null);
  i.useEffect(() => {
    null == v || v(null == P ? true : P.current)
  }, [P, v]), i.useEffect(() => {
    let e = e => {
      e.key === E.vn.ESCAPE && (e.stopPropagation(), S())
    };
    return document.addEventListener("keydown", e), () => {
      document.removeEventListener("keydown", e)
    }
  }, [T, S]);
  let D = async e => {
    if (null == e) return;
    _ === h.n_.AVATAR ? I({
      action: "SEND_REACT_AVATAR"
    }) : _ === h.n_.STATUS ? I({
      action: "SEND_REACT_CUSTOM_STATUS"
    }) : I({
      action: "SEND_REACT_ACTIVITY"
    });
    let n = O({
      emoji: e,
      username: u.ZP.getName(t),
      sourceType: _,
      sourceDetails: b
    });
    A(null);
    try {
      await (0, d.Z)({
        userId: t.id,
        content: n,
        location: "UserProfileReactPopout",
        openChannel: false,
        whenReady: false,
        entry: c
      })
    } catch (e) {}
    A(h.P.REACT)
  };
  return (0, r.jsx)(s.Z, {
    headerClassName: R ? y.noBoxShadowMargin : true,
    guildId: null != n ? n : true,
    closePopout: g.dG,
    onSelectEmoji: async e => {
      let {
        emoji: t,
        willClose: n
      } = e;
      await D(t), n && (S(), null == T || T())
    },
    pickerIntention: m.Hz.PROFILE
  })
}