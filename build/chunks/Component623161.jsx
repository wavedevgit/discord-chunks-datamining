/** Chunk was on 28386 **/
/** chunk id: 623161, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk110259 = require("./110259.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk139286 = require("./139286.js"),
  Chunk287809 = require("./287809.js"),
  Chunk274303 = require("./274303.js"),
  Chunk970573 = require("./970573.jsx"),
  Chunk347853 = require("./347853.jsx");
require("./573879.js");
var Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk202501 = require("./202501.js");

function _(e) {
  let {
    transitionState: t,
    onClose: a
  } = e, {
    currentUser: _,
    multiAccountUsers: g
  } = (0, r.cf)([o.default, u.A], () => ({
    currentUser: o.default.getCurrentUser(),
    multiAccountUsers: u.A.getUsers()
  })), [h, C] = s.useState(false), [N, p] = s.useState(x.dJq), [T, U] = s.useState(null);
  return s.useEffect(() => {
    if (h) U((0, n.jsx)(c.po8, {
      messageType: c.YCn.ERROR,
      className: b.u,
      children: A.intl.format(A.t.HAuRSM, {
        maxNumAccounts: 5
      })
    })), p(x.dJq);
    else if (null != N) {
      let e = o.default.getUser(N);
      null != e && U((0, n.jsx)(c.po8, {
        messageType: c.YCn.POSITIVE,
        className: b.u,
        children: A.intl.format(A.t["09qide"], {
          username: e.username
        })
      })), C(false)
    }
  }, [N, h]), s.useEffect(() => {
    g.length < 5 && C(false)
  }, [g]), (0, d.A)({
    type: i.ImpressionTypes.MODAL,
    name: i.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING
  }), (0, n.jsxs)(l.Modal, {
    onClose: a,
    transitionState: t,
    size: "md",
    "aria-label": A.intl.string(A.t.WbFpq4),
    title: A.intl.string(A.t.WbFpq4),
    subtitle: A.intl.string(A.t["+1Uk3c"]),
    actions: [{
      text: A.intl.string(A.t["9g2mqT"]),
      variant: "secondary",
      onClick: () => {
        g.length >= 5 ? C(true) : (a(), (0, f.D)())
      }
    }],
    children: [T, (0, n.jsx)(m.A, {
      actionText: A.intl.string(A.t.Wf421J),
      onAction: (e, t) => {
        switch (e) {
          case m.X.LOGIN_REQUIRED:
            a(), (0, f.D)();
            break;
          case m.X.SWITCHED:
            a();
            break;
          case m.X.REMOVED:
            t === (null == _ ? true : _.id) && a(), p(t)
        }
      }
    })]
  })
}