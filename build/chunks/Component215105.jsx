/** Chunk was on web.js **/
/** chunk id: 215105, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./388685.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk106351 = require("./106351.js"),
  Chunk507274 = require("./507274.jsx"),
  Chunk541716 = require("./541716.js"),
  Chunk752305 = require("./752305.js"),
  Chunk893718 = require("./893718.jsx"),
  Chunk131704 = require("./131704.js"),
  Chunk823379 = require("./823379.js"),
  Chunk5192 = require("./5192.js"),
  Chunk51144 = require("./51144.js"),
  Chunk698305 = require("./698305.js"),
  Chunk510659 = require("./510659.jsx"),
  Chunk810097 = require("./810097.jsx"),
  Chunk652853 = require("./652853.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk295907 = require("./295907.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk36190 = require("./36190.js");
let T = (0, Chunk131704.createChannelRecord)({
    id: "1",
    type: Chunk106351.d.DM
  }),
  S = e => {
    let {
      input: t,
      username: n,
      sourceType: r,
      sourceDetails: i
    } = e;
    switch (r) {
      case y.n_.ACTIVITY:
        let a = v.intl.formatToPlainString(v.t.WmvMCo, {
            username: n
          }),
          o = "\n> ".concat(i);
        return null != i ? "".concat(E.jd).concat(a, "*").concat(o, "\n").concat(t) : "".concat(E.jd).concat(a, "*\n").concat(t);
      case y.n_.AVATAR:
        let s = v.intl.formatToPlainString(v.t.lpaBsB, {
          username: n
        });
        return "".concat(E.jd).concat(s, "*\n").concat(t);
      case y.n_.STATUS:
        let l = v.intl.formatToPlainString(v.t.lFXgFV, {
            username: n
          }),
          c = "\n> ".concat(i);
        return null != i ? "".concat(E.jd).concat(l, "*").concat(c, "\n").concat(t) : "".concat(E.jd).concat(l, "*\n").concat(t);
      default:
        (0, _.vE)(r)
    }
  },
  A = e => {
    switch (e) {
      case y.n_.ACTIVITY:
        return v.t.Qn081O;
      case y.n_.AVATAR:
        return v.t.xGNPFK;
      case y.n_.STATUS:
        return v.t.g9BTCM;
      default:
        (0, _.vE)(e)
    }
  };

function C(e) {
  let {
    user: t,
    guildId: n,
    channelId: a,
    sourceType: s,
    sourceDetails: f,
    setPopoutRef: _,
    modalKey: E,
    onAction: C,
    onClose: N,
    entry: R
  } = e, {
    resetInteraction: P,
    setInteractionToast: w
  } = (0, g.Xo)(), {
    primaryColor: D
  } = (0, b.z)(), [x, L] = i.useState(""), [M, k] = i.useState((0, u.JM)(x)), j = i.useRef(false), U = i.useRef(null), G = i.useCallback(e => {
    e.key === O.vn.ESCAPE && (e.stopPropagation(), P())
  }, [P]);
  i.useEffect(() => {
    null == _ || _(null == U ? true : U.current)
  }, [U, _]);
  let B = async e => {
    if (null == e) return;
    s === y.n_.AVATAR ? C({
      action: "SEND_REPLY_AVATAR"
    }) : s === y.n_.STATUS ? C({
      action: "SEND_REPLY_CUSTOM_STATUS"
    }) : C({
      action: "SEND_REPLY_ACTIVITY"
    });
    let n = S({
      input: e,
      username: h.ZP.getName(t),
      sourceType: s,
      sourceDetails: f
    });
    w(null);
    try {
      await (0, m.Z)({
        userId: t.id,
        content: n,
        location: "UserProfileReplyPopout",
        openChannel: false,
        whenReady: false,
        entry: R
      })
    } catch (e) {}
    w(y.P.REPLY)
  }, Z = {
    [I.status]: s === y.n_.STATUS,
    [I.avatar]: s === y.n_.AVATAR,
    [I.activity]: s === y.n_.ACTIVITY
  };
  return (0, r.jsx)(l.V, {
    ref: U,
    onKeyDown: G,
    children: (0, r.jsx)("div", {
      className: o()(I.container, Z, {
        [I.customProfileTheme]: null != D
      }),
      children: (0, r.jsx)(d.ZP, {
        parentModalKey: E,
        emojiPickerCloseOnModalOuterClick: true,
        className: I.input,
        innerClassName: I.inputInner,
        editorClassName: I.editor,
        type: c.Ie.USER_PROFILE_REPLY,
        placeholder: v.intl.formatToPlainString(A(s), {
          username: p.ZP.getName(n, a, t)
        }),
        channel: T,
        textValue: x,
        richValue: M,
        onChange: (e, t, n) => {
          t !== x && (L(t), k(n))
        },
        focused: j.current,
        onFocus: () => {
          j.current = true
        },
        onSubmit: async e => {
          let {
            value: t
          } = e, n = t.trim();
          if (0 === n.length) return {
            shouldClear: false,
            shouldRefocus: false
          };
          try {
            return await B(n), P(), null == N || N(), {
              shouldClear: true,
              shouldRefocus: false
            }
          } catch (e) {
            return {
              shouldClear: false,
              shouldRefocus: false
            }
          }
        }
      })
    })
  })
}