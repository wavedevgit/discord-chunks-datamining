/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => R
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(392711),
  a = n.n(o),
  s = n(818405),
  l = n(587158),
  c = n(286379),
  u = n(903772),
  d = n(442837),
  f = n(481060),
  _ = n(386506),
  p = n(304761),
  h = n(865427),
  g = n(406128),
  m = n(797614),
  E = n(703656),
  v = n(626135),
  b = n(960048),
  y = n(998502),
  O = n(981631),
  S = n(388032),
  I = n(677588);

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function N() {
  let [e, t] = i.useState(!1);
  if (null == (0, d.e7)([p.C], () => {
      var e;
      return (0, h.fD)() ? null === (e = p.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web : null
    })) return null;
  let n = async () => {
    try {
      t(!0), await (0, _.bF)(), window.location.reload(!0)
    } catch (e) {
      t(!1)
    }
  };
  return (0, r.jsx)(f.zxk, {
    size: f.PhG.LARGE,
    onClick: n,
    submitting: e,
    className: I.clearOverrideButton,
    children: S.NW.string(S.t["/Nz9ra"])
  })
}
let A = a().throttle(e => {
  m.Z.increment({
    name: c.V.APP_CRASHED,
    tags: ["reason:".concat(s.v.UNHANDLED_JS_ERROR), "level:".concat(l.c.FATAL), "modded_client:".concat(e)]
  }, !0)
}, 100, {
  trailing: !1
});
class C extends i.PureComponent {
  componentDidCatch(e, t) {
    this.triggerSoftCrash(e, t)
  }
  triggerSoftCrash(e, t) {
    let n = (0, E.s1)().location;
    this.setState({
      error: e,
      info: t
    });
    let r = (0, u.e)(),
      i = b.Z.captureCrash(e, {
        extra: t
      });
    v.default.track(O.rMx.APP_CRASHED, {
      path: n.pathname,
      extra: t,
      error_message: e.message,
      error_stack: e.stack,
      sentry_issue_id: i,
      uses_client_mods: r,
      error_level: "fatal"
    }), A(r), y.ZP.cleanupDisplaySleep()
  }
  _handleSubmitReport() {
    location.reload(!0)
  }
  componentDidMount() {
    null == window.DiscordErrors && (window.DiscordErrors = {
      softCrash: e => {
        this.triggerSoftCrash(e)
      }
    }, this.discordErrorsSet = !0)
  }
  componentWillUnmount() {
    this.discordErrorsSet && (window.DiscordErrors = null, this.discordErrorsSet = !1)
  }
  render() {
    let {
      children: e,
      renderCustomMessage: t
    } = this.props;
    if (null !== this.state.error) {
      let e = (0, r.jsxs)("div", {
          children: [(0, r.jsx)("p", {
            children: S.NW.string(S.t.tx8CkJ)
          }), (0, r.jsx)("p", {
            children: S.NW.string(S.t.CvQlAA)
          })]
        }),
        n = (0, r.jsxs)("div", {
          className: I.buttons,
          children: [(0, r.jsx)(f.zxk, {
            size: f.PhG.LARGE,
            onClick: this._handleSubmitReport,
            children: S.NW.string(S.t["+hivLS"])
          }), (0, r.jsx)(N, {})]
        });
      return (0, r.jsx)(g.Z, {
        title: S.NW.string(S.t["3h+n+/"]),
        note: null != t ? t() : e,
        action: n,
        className: I.errorPage
      })
    }
    return e
  }
  constructor(...e) {
    super(...e), T(this, "state", {
      error: null,
      info: null
    }), T(this, "discordErrorsSet", !1)
  }
}
let R = C