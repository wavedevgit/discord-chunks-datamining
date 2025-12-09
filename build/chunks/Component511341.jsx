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
    case m.n_.ACTIVITY:
      let o = b.intl.formatToPlainString(b.t.EUFEJt, {
          username: n
        }),
        s = "\n> ".concat(i);
      return null != i ? "".concat(p.jd).concat(o, "*").concat(s, "\n").concat(a) : "".concat(p.jd).concat(o, "*\n").concat(a);
    case m.n_.AVATAR:
      let l = b.intl.formatToPlainString(b.t.E6H15q, {
        username: n
      });
      return "".concat(p.jd).concat(l, "*\n").concat(a);
    case m.n_.STATUS:
      let u = b.intl.formatToPlainString(b.t.XPQgL2, {
          username: n
        }),
        d = "\n> ".concat(i);
      return null != i ? "".concat(p.jd).concat(u, "*").concat(d, "\n").concat(a) : "".concat(p.jd).concat(u, "*\n").concat(a);
    default:
      (0, c.vE)(r)
  }
};

function v(e) {
  let {
    user: t,
    guildId: n,
    entry: c,
    sourceType: p,
    sourceDetails: b,
    setPopoutRef: v,
    onAction: S,
    onClose: I
  } = e, {
    resetInteraction: T,
    setInteractionToast: A
  } = (0, f.Xo)(), {
    theme: C
  } = (0, _.z)(), N = (0, a.e7)([l.Z], () => l.Z.theme), P = (0, o.wj)(N) ? !(0, o.wj)(C) : (0, o.wj)(C), R = i.useRef(null);
  i.useEffect(() => {
    null == v || v(null == R ? true : R.current)
  }, [R, v]), i.useEffect(() => {
    let e = e => {
      e.key === E.vn.ESCAPE && (e.stopPropagation(), T())
    };
    return document.addEventListener("keydown", e), () => {
      document.removeEventListener("keydown", e)
    }
  }, [I, T]);
  let D = async e => {
    if (null == e) return;
    p === m.n_.AVATAR ? S({
      action: "SEND_REACT_AVATAR"
    }) : p === m.n_.STATUS ? S({
      action: "SEND_REACT_CUSTOM_STATUS"
    }) : S({
      action: "SEND_REACT_ACTIVITY"
    });
    let n = O({
      emoji: e,
      username: u.ZP.getName(t),
      sourceType: p,
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
    A(m.P.REACT)
  };
  return (0, r.jsx)(s.Z, {
    headerClassName: P ? y.noBoxShadowMargin : true,
    guildId: null != n ? n : true,
    closePopout: g.dG,
    onSelectEmoji: async e => {
      let {
        emoji: t,
        willClose: n
      } = e;
      await D(t), n && (T(), null == I || I())
    },
    pickerIntention: h.Hz.PROFILE
  })
}