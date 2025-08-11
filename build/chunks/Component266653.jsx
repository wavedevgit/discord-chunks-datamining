/** Chunk was on 55944 **/
/** chunk id: 266653, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  default: () => N
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk213609 = require("./213609.js"),
  Chunk594174 = require("./594174.js"),
  Chunk726745 = require("./726745.js"),
  Chunk760213 = require("./760213.jsx"),
  Chunk383832 = require("./383832.jsx"),
  Chunk71509 = require("./71509.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk248910 = require("./248910.js");

function N(e) {
  let {
    transitionState: t,
    onClose: s
  } = e, {
    currentUser: N,
    multiAccountUsers: T
  } = (0, r.cj)([d.default, u.Z], () => ({
    currentUser: d.default.getCurrentUser(),
    multiAccountUsers: u.Z.getUsers()
  })), [C, p] = i.useState(false), [A, E] = i.useState(_.lds), [v, j] = i.useState(null);
  return i.useEffect(() => {
    if (C) j((0, n.jsx)(c.Wn, {
      messageType: c.QYI.ERROR,
      className: g.infoMessage,
      children: f.intl.format(f.t.HAuRSE, {
        maxNumAccounts: h.$H
      })
    })), E(_.lds);
    else if (null != A) {
      let e = d.default.getUser(A);
      null != e && j((0, n.jsx)(c.Wn, {
        messageType: c.QYI.POSITIVE,
        className: g.infoMessage,
        children: f.intl.format(f.t["09qidX"], {
          username: e.username
        })
      })), p(false)
    }
  }, [A, C]), i.useEffect(() => {
    T.length < h.$H && p(false)
  }, [T]), (0, o.Z)({
    type: a.ImpressionTypes.MODAL,
    name: a.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING
  }), (0, n.jsxs)(l.Modal, {
    onClose: s,
    transitionState: t,
    size: "md",
    "aria-label": f.intl.string(f.t.WbFpq6),
    title: f.intl.string(f.t.WbFpq6),
    subtitle: f.intl.string(f.t["+1Uk3d"]),
    actions: [{
      text: f.intl.string(f.t["9g2mqa"]),
      variant: "secondary",
      onClick: () => {
        if (T.length >= h.$H) return void p(true);
        s(), (0, x.y)()
      }
    }],
    children: [v, (0, n.jsx)(m.Z, {
      actionText: f.intl.string(f.t.Wf421N),
      onAction: (e, t) => {
        switch (e) {
          case m.W.LOGIN_REQUIRED:
            s(), (0, x.y)();
            break;
          case m.W.SWITCHED:
            s();
            break;
          case m.W.REMOVED:
            t === (null == N ? true : N.id) && s(), E(t)
        }
      }
    })]
  })
}