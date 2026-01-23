/** Chunk was on web.js **/
/** chunk id: 187921, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => C
}), require("./896048.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk478437 = require("./478437.js"),
  Chunk305866 = require("./305866.jsx"),
  Chunk355622 = require("./355622.js"),
  Chunk408018 = require("./408018.js"),
  Chunk133343 = require("./133343.jsx"),
  Chunk95701 = require("./95701.js"),
  Chunk403362 = require("./403362.js"),
  Chunk562153 = require("./562153.js"),
  Chunk427262 = require("./427262.js"),
  Chunk448613 = require("./448613.js"),
  Chunk679492 = require("./679492.jsx"),
  Chunk8925 = require("./8925.jsx"),
  Chunk939496 = require("./939496.jsx"),
  Chunk518477 = require("./518477.js"),
  Chunk650583 = require("./650583.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk313877 = require("./313877.js");
let I = (0, Chunk95701.createChannelRecord)({
    id: "1",
    type: Chunk478437.r.DM
  }),
  S = e => {
    let {
      input: t,
      username: n,
      sourceType: r,
      sourceDetails: i
    } = e;
    switch (r) {
      case b.dS.ACTIVITY:
        let a = v.intl.formatToPlainString(v.t.WmvMCo, {
            username: n
          }),
          s = "\n> ".concat(i);
        return null != i ? "".concat(E.c5).concat(a, "*").concat(s, "\n").concat(t) : "".concat(E.c5).concat(a, "*\n").concat(t);
      case b.dS.AVATAR:
        let o = v.intl.formatToPlainString(v.t.lpaBsB, {
          username: n
        });
        return "".concat(E.c5).concat(o, "*\n").concat(t);
      case b.dS.STATUS:
        let l = v.intl.formatToPlainString(v.t.lFXgFV, {
            username: n
          }),
          c = "\n> ".concat(i);
        return null != i ? "".concat(E.c5).concat(l, "*").concat(c, "\n").concat(t) : "".concat(E.c5).concat(l, "*\n").concat(t);
      default:
        (0, p.xb)(r)
    }
  },
  T = e => {
    switch (e) {
      case b.dS.ACTIVITY:
        return v.t.Qn081O;
      case b.dS.AVATAR:
        return v.t.xGNPFK;
      case b.dS.STATUS:
        return v.t.g9BTCM;
      default:
        (0, p.xb)(e)
    }
  };

function C(e) {
  let {
    user: t,
    guildId: n,
    channelId: a,
    sourceType: o,
    sourceDetails: f,
    setPopoutRef: p,
    modalKey: E,
    onAction: C,
    onClose: N,
    entry: w
  } = e, {
    resetInteraction: R,
    setInteractionToast: P
  } = (0, g.Pq)(), {
    primaryColor: D
  } = (0, y.E)(), [x, L] = i.useState(""), [j, M] = i.useState((0, u.x7)(x)), k = i.useRef(false), U = i.useRef(null), G = i.useCallback(e => {
    e.key === O.dh.ESCAPE && (e.stopPropagation(), R())
  }, [R]);
  i.useEffect(() => {
    null == p || p(null == U ? true : U.current)
  }, [U, p]);
  let V = async e => {
    if (null == e) return;
    o === b.dS.AVATAR ? C({
      action: "SEND_REPLY_AVATAR"
    }) : o === b.dS.STATUS ? C({
      action: "SEND_REPLY_CUSTOM_STATUS"
    }) : C({
      action: "SEND_REPLY_ACTIVITY"
    });
    let n = S({
      input: e,
      username: h.Ay.getName(t),
      sourceType: o,
      sourceDetails: f
    });
    P(null);
    try {
      await (0, m.p)({
        userId: t.id,
        content: n,
        location: "UserProfileReplyPopout",
        openChannel: false,
        whenReady: false,
        entry: w
      })
    } catch (e) {}
    P(b.AQ.REPLY)
  }, F = {
    [A.h5]: o === b.dS.STATUS,
    [A.my]: o === b.dS.AVATAR,
    [A.Eb]: o === b.dS.ACTIVITY
  };
  return (0, r.jsx)(l.l, {
    ref: U,
    onKeyDown: G,
    children: (0, r.jsx)("div", {
      className: s()(A.kL, F, {
        [A.GE]: null != D
      }),
      children: (0, r.jsx)(d.Ay, {
        parentModalKey: E,
        emojiPickerCloseOnModalOuterClick: true,
        className: A.hF,
        innerClassName: A.rn,
        editorClassName: A.EN,
        type: c.oU.USER_PROFILE_REPLY,
        placeholder: v.intl.formatToPlainString(T(o), {
          username: _.Ay.getName(n, a, t)
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
            return await V(n), R(), null == N || N(), {
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