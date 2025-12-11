/** Chunk was on 55944 **/
/** chunk id: 266653, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => C
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk990547 = require("./990547.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk213609 = require("./213609.js"),
  Chunk594174 = require("./594174.js"),
  Chunk726745 = require("./726745.js"),
  Chunk760213 = require("./760213.jsx"),
  Chunk383832 = require("./383832.jsx"),
  Chunk71509 = require("./71509.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk436313 = require("./436313.js");

function C(e) {
  let {
    transitionState: t,
    onClose: n
  } = e, {
    currentUser: C,
    multiAccountUsers: T
  } = (0, l.cj)([d.default, u.Z], () => ({
    currentUser: d.default.getCurrentUser(),
    multiAccountUsers: u.Z.getUsers()
  })), [E, N] = i.useState(false), [_, A] = i.useState(h.lds), [p, v] = i.useState(null);
  return i.useEffect(() => {
    if (E) v((0, s.jsx)(c.Wn, {
      messageType: c.QYI.ERROR,
      className: g.infoMessage,
      children: b.intl.format(b.t.HAuRSM, {
        maxNumAccounts: f.$H
      })
    })), A(h.lds);
    else if (null != _) {
      let e = d.default.getUser(_);
      null != e && v((0, s.jsx)(c.Wn, {
        messageType: c.QYI.POSITIVE,
        className: g.infoMessage,
        children: b.intl.format(b.t["09qide"], {
          username: e.username
        })
      })), N(false)
    }
  }, [_, E]), i.useEffect(() => {
    T.length < f.$H && N(false)
  }, [T]), (0, o.Z)({
    type: a.ImpressionTypes.MODAL,
    name: a.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING
  }), (0, s.jsxs)(r.Modal, {
    onClose: n,
    transitionState: t,
    size: "md",
    "aria-label": b.intl.string(b.t.WbFpq4),
    title: b.intl.string(b.t.WbFpq4),
    subtitle: b.intl.string(b.t["+1Uk3c"]),
    actions: [{
      text: b.intl.string(b.t["9g2mqT"]),
      variant: "secondary",
      onClick: () => {
        if (T.length >= f.$H) return void N(true);
        n(), (0, x.y)()
      }
    }],
    children: [p, (0, s.jsx)(m.Z, {
      actionText: b.intl.string(b.t.Wf421J),
      onAction: (e, t) => {
        switch (e) {
          case m.W.LOGIN_REQUIRED:
            n(), (0, x.y)();
            break;
          case m.W.SWITCHED:
            n();
            break;
          case m.W.REMOVED:
            t === (null == C ? true : C.id) && n(), A(t)
        }
      }
    })]
  })
}