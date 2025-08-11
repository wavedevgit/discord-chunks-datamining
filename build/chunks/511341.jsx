/** Chunk was on web.js **/
/** chunk id: 511341, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk907040 = require("./907040.js"),
  Chunk210887 = require("./210887.js"),
  Chunk823379 = require("./823379.js"),
  Chunk51144 = require("./51144.js"),
  Chunk698305 = require("./698305.js"),
  Chunk510659 = require("./510659.jsx"),
  Chunk810097 = require("./810097.js"),
  Chunk652853 = require("./652853.js"),
  Chunk228168 = require("./228168.js"),
  Chunk185923 = require("./185923.js"),
  Chunk420212 = require("./420212.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk366463 = require("./366463.js");
let O = e => {
  let {
    emoji: t,
    username: n,
    sourceType: r,
    sourceDetails: i
  } = e, o = ":".concat(t.name, ":");
  switch (r) {
    case h.n_.ACTIVITY:
      let a = b.intl.formatToPlainString(b.t.EUFEJi, {
          username: n
        }),
        s = "\n> ".concat(i);
      return null != i ? "".concat(_.jd).concat(a, "*").concat(s, "\n").concat(o) : "".concat(_.jd).concat(a, "*\n").concat(o);
    case h.n_.AVATAR:
      let l = b.intl.formatToPlainString(b.t.E6H15u, {
        username: n
      });
      return "".concat(_.jd).concat(l, "*\n").concat(o);
    case h.n_.STATUS:
      let u = b.intl.formatToPlainString(b.t.XPQgLy, {
          username: n
        }),
        d = "\n> ".concat(i);
      return null != i ? "".concat(_.jd).concat(u, "*").concat(d, "\n").concat(o) : "".concat(_.jd).concat(u, "*\n").concat(o);
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
    theme: N
  } = (0, p.z)(), C = (0, o.e7)([l.Z], () => l.Z.theme), R = (0, a.wj)(C) ? !(0, a.wj)(N) : (0, a.wj)(N), P = i.useRef(null);
  i.useEffect(() => {
    null == v || v(null == P ? true : P.current)
  }, [P, v]), i.useEffect(() => {
    let e = e => {
      e.key === g.vn.ESCAPE && (e.stopPropagation(), S())
    };
    return document.addEventListener("keydown", e), () => {
      document.removeEventListener("keydown", e)
    }
  }, [T, S]);
  let w = async e => {
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
  return <s.Z headerClassName={R ? y.noBoxShadowMargin : true} guildId={null != n ? n : true} closePopout={E.dG} onSelectEmoji={async e => {
      let {
        emoji: t,
        willClose: n
      } = e;
      await w(t), n && (S(), null == T || T())
    }} pickerIntention={m.Hz.PROFILE} />
}