/** Chunk was on web.js **/
/** chunk id: 215105, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./388685.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk756065 = require("./756065.js");
let I = (0, Chunk131704.createChannelRecord)({
    id: "1",
    type: Chunk106351.d.DM
  }),
  T = e => {
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
        (0, p.vE)(r)
    }
  },
  C = e => {
    switch (e) {
      case y.n_.ACTIVITY:
        return v.t.Qn081O;
      case y.n_.AVATAR:
        return v.t.xGNPFK;
      case y.n_.STATUS:
        return v.t.g9BTCM;
      default:
        (0, p.vE)(e)
    }
  };

function A(e) {
  let {
    user: t,
    guildId: n,
    channelId: a,
    sourceType: s,
    sourceDetails: f,
    setPopoutRef: p,
    modalKey: E,
    onAction: A,
    onClose: N,
    entry: P
  } = e, {
    resetInteraction: w,
    setInteractionToast: R
  } = (0, g.Xo)(), {
    primaryColor: D
  } = (0, b.z)(), [x, L] = i.useState(""), [j, M] = i.useState((0, u.JM)(x)), k = i.useRef(false), U = i.useRef(null), G = i.useCallback(e => {
    e.key === O.vn.ESCAPE && (e.stopPropagation(), w())
  }, [w]);
  i.useEffect(() => {
    null == p || p(null == U ? true : U.current)
  }, [U, p]);
  let Z = async e => {
    if (null == e) return;
    s === y.n_.AVATAR ? A({
      action: "SEND_REPLY_AVATAR"
    }) : s === y.n_.STATUS ? A({
      action: "SEND_REPLY_CUSTOM_STATUS"
    }) : A({
      action: "SEND_REPLY_ACTIVITY"
    });
    let n = T({
      input: e,
      username: h.ZP.getName(t),
      sourceType: s,
      sourceDetails: f
    });
    R(null);
    try {
      await (0, m.Z)({
        userId: t.id,
        content: n,
        location: "UserProfileReplyPopout",
        openChannel: false,
        whenReady: false,
        entry: P
      })
    } catch (e) {}
    R(y.P.REPLY)
  }, F = {
    [S.status]: s === y.n_.STATUS,
    [S.avatar]: s === y.n_.AVATAR,
    [S.activity]: s === y.n_.ACTIVITY
  };
  return (0, r.jsx)(l.V, {
    ref: U,
    onKeyDown: G,
    children: (0, r.jsx)("div", {
      className: o()(S.container, F, {
        [S.customProfileTheme]: null != D
      }),
      children: (0, r.jsx)(d.ZP, {
        parentModalKey: E,
        emojiPickerCloseOnModalOuterClick: true,
        className: S.input,
        innerClassName: S.inputInner,
        editorClassName: S.editor,
        type: c.Ie.USER_PROFILE_REPLY,
        placeholder: v.intl.formatToPlainString(C(s), {
          username: _.ZP.getName(n, a, t)
        }),
        channel: I,
        textValue: x,
        richValue: j,
        onChange: (e, t, n) => {
          t !== x && (L(t), M(n))
        },
        focused: k.current,
        onFocus: () => {
          k.current = true
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
            return await Z(n), w(), null == N || N(), {
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