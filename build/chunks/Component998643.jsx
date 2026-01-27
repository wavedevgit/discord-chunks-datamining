/** Chunk was on 86142 **/
/** chunk id: 998643, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => eT
}), require("./747238.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk492462 = require("./492462.js"),
  Chunk110259 = require("./110259.js"),
  Chunk607399 = require("./607399.js"),
  Chunk470562 = require("./470562.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk830215 = require("./830215.js"),
  Chunk869038 = require("./869038.js"),
  Chunk846293 = require("./846293.js"),
  Chunk526423 = require("./526423.js"),
  Chunk745399 = require("./745399.jsx"),
  Chunk549711 = require("./549711.jsx"),
  Chunk829691 = require("./829691.js"),
  Chunk212640 = require("./212640.js"),
  Chunk409934 = require("./409934.jsx"),
  Chunk7936 = require("./7936.jsx"),
  Chunk49463 = require("./49463.js"),
  Chunk122906 = require("./122906.js"),
  Chunk121623 = require("./121623.js"),
  Chunk850381 = require("./850381.jsx"),
  Chunk21599 = require("./21599.js"),
  Chunk614986 = require("./614986.jsx"),
  Chunk957622 = require("./957622.jsx"),
  Chunk463347 = require("./463347.js"),
  Chunk210714 = require("./210714.js"),
  Chunk565287 = require("./565287.jsx"),
  Chunk961350 = require("./961350.js"),
  Chunk30793 = require("./30793.js"),
  Chunk299091 = require("./299091.js"),
  Chunk954571 = require("./954571.js"),
  Chunk139675 = require("./139675.js"),
  Chunk612181 = require("./612181.js"),
  Chunk486020 = require("./486020.js"),
  Chunk952072 = require("./952072.js"),
  Chunk765624 = require("./765624.jsx"),
  Chunk603647 = require("./603647.jsx"),
  Chunk527567 = require("./527567.jsx"),
  Chunk826515 = require("./826515.jsx"),
  Chunk126912 = require("./126912.jsx"),
  Chunk216894 = require("./216894.jsx"),
  Chunk170159 = require("./170159.jsx"),
  Chunk187035 = require("./187035.jsx"),
  Chunk565505 = require("./565505.jsx"),
  Chunk111549 = require("./111549.jsx"),
  Chunk129851 = require("./129851.jsx"),
  Chunk459893 = require("./459893.jsx"),
  Chunk883257 = require("./883257.jsx"),
  Chunk229 = require("./229.jsx"),
  Chunk466133 = require("./466133.jsx"),
  Chunk163050 = require("./163050.jsx"),
  Chunk420382 = require("./420382.jsx"),
  Chunk340451 = require("./340451.jsx"),
  Chunk652215 = require("./652215.js");
require("./436317.js");
var Chunk172799 = require("./172799.js");

function es(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function el(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      es(e, t, n[t])
    })
  }
  return e
}

function ea(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
require("./426620.js"), Chunk311907.Ay.initialize();
let eo = (0, Chunk765624.A)(Chunk129851.A),
  ec = (0, Chunk765624.A)(Chunk459893.A),
  ed = (0, Chunk765624.A)(Chunk111549.A),
  eu = (0, Chunk765624.A)(Chunk187035.A),
  eh = (0, Chunk765624.A)(Chunk170159.A),
  ep = (0, Chunk765624.A)(Chunk614986.A),
  eg = (0, Chunk765624.A)(Chunk229.A),
  e_ = (0, Chunk765624.A)(Chunk420382.A),
  ef = (0, Chunk765624.A)(Chunk527567.A),
  em = (0, Chunk765624.A)(Chunk340451.A),
  eA = (0, Chunk765624.A)(Chunk7936.A),
  ex = (0, Chunk765624.A)(Chunk163050.A),
  eE = (0, Chunk765624.A)(Chunk126912.A),
  ev = (0, Chunk765624.A)(Chunk409934.A),
  eb = (0, Chunk765624.A)(Chunk850381.A),
  ey = (0, Chunk765624.A)(Chunk826515.A),
  ej = (0, Chunk765624.A)(Chunk216894.A),
  eI = (0, Chunk765624.A)(Chunk883257.A),
  eO = (0, Chunk765624.A)(Chunk466133.A),
  eS = (0, Chunk765624.A)(Chunk745399.A),
  eN = (0, Chunk765624.A)(Chunk957622.A);
class eC extends Chunk64700.PureComponent {
  static getDerivedStateFromProps(e, t) {
    var n;
    let {
      invite: r,
      location: i
    } = e, {
      backgroundId: l
    } = t, a = null != (n = (0, s.parse)(i.search).redirect_to) ? n : null;
    (null == a || "" === a || a.startsWith(er.BVt.ME) || !(0, o.e)(a) && !(0, A.RZ)(a)) && (a = null);
    let c = null;
    if (null == r) c = (0, D.u8)(a);
    else if ((null == r ? true : r.state) === er.elq.RESOLVED) {
      let {
        guild: e,
        target_application: t
      } = r;
      null != t ? null != l && (c = (0, L.uD)(t.id, l, 1024)) : null != e && "string" == typeof e.splash && (c = B.Ay.getGuildSplashURL({
        id: e.id,
        splash: e.splash
      }))
    }
    return {
      redirectTo: a,
      splash: c
    }
  }
  componentDidMount() {
    let {
      inviteKey: e,
      hasLoadedExperiments: t,
      isAuthenticated: n
    } = this.props;
    null != e && (!t && n && u.A.getExperiments(true), k.default.track(er.HAw.INVITE_OPENED, {
      invite_code: (0, I.m0)(e),
      load_time: U.A.getTimeSinceNavigationStart()
    }, {
      flush: true
    })), t && this.resolveInvite(), this.resolveGiftCode(), this.resolveGuildTemplate(), g.A.initialize(), (0, C.D)()
  }
  componentDidUpdate(e) {
    var t, n;
    !e.hasLoadedExperiments && this.props.hasLoadedExperiments && this.resolveInvite(), (null == (t = e.invite) ? true : t.state) !== (null == (n = this.props.invite) ? true : n.state) && this.maybeFetchApplicationSplash()
  }
  componentWillUnmount() {
    g.A.terminate()
  }
  maybeFetchApplicationSplash() {
    let {
      invite: e
    } = this.props;
    if ((null == e ? true : e.state) === er.elq.RESOLVED) {
      let {
        target_application: t
      } = e;
      null != t && (0, L.RG)(t.id, ["embedded_splash"]).then(e => {
        let [t] = e;
        return this.setState({
          backgroundId: t
        })
      })
    }
  }
  async resolveInvite() {
    let {
      inviteKey: e
    } = this.props;
    if (null == e) return;
    let {
      invite: t
    } = await p.Ay.resolveInvite(e, er.S3d.INVITE);
    null != t && ((0, m.v)(t), null != t.type && ei.uR.has(t.type) && p.Ay.openNativeAppModal(e))
  }
  resolveGuildTemplate() {
    let {
      guildTemplateCode: e
    } = this.props;
    null != e && (k.default.track(er.HAw.GUILD_TEMPLATE_OPENED, {
      guild_template_code: e,
      load_time: U.A.getTimeSinceNavigationStart()
    }, {
      flush: true
    }), y.A.resolveGuildTemplate(e), y.A.openNativeAppModal(e))
  }
  resolveGiftCode() {
    let {
      giftCode: e
    } = this.props;
    null != e && h.A.resolveGiftCode(e, true, true).then(t => {
      null != t && null == t.giftCode.promotion && d.h.wait(() => h.A.openNativeGiftCodeModal(e))
    })
  }
  render() {
    let {
      splash: e,
      redirectTo: t
    } = this.state, {
      inviteKey: n
    } = this.props;
    return (0, r.jsxs)(M.A, {
      splash: e,
      children: [(0, r.jsx)(f.A, {
        path: er.BVt.LOGIN_HANDOFF,
        render: e => (0, r.jsx)(ec, ea(el({}, e), {
          redirectTo: t
        }))
      }), (0, r.jsx)(f.A, {
        path: er.BVt.LOGIN_ONE_TIME,
        render: e => (0, r.jsx)(eN, el({}, e))
      }), (0, r.jsx)(f.A, {
        impressionName: l.ImpressionNames.USER_LOGIN,
        path: er.BVt.LOGIN,
        render: e => (0, r.jsx)(eo, ea(el({}, e), {
          redirectTo: t
        }))
      }), (0, r.jsx)(f.A, {
        impressionName: l.ImpressionNames.USER_REGISTRATION,
        path: er.BVt.REGISTER,
        render: e => (0, r.jsx)(eg, ea(el({}, e), {
          redirectTo: t
        }))
      }), (0, r.jsx)(f.A, {
        path: er.BVt.GIFT_CODE_LOGIN(":giftCode"),
        render: e => (0, r.jsx)(eh, el({
          login: true
        }, e))
      }), (0, r.jsx)(f.A, {
        path: er.BVt.GIFT_CODE(":giftCode"),
        render: e => (0, r.jsx)(eh, el({}, e))
      }), (0, r.jsx)(f.A, {
        path: [er.BVt.INVITE_LOGIN(":inviteCode"), er.BVt.INVITE(":inviteCode")],
        render: e => {
          let {
            match: {
              params: {
                inviteCode: t
              },
              path: n
            },
            location: i,
            transitionTo: s
          } = e, l = (0, I.fB)(t, i.search);
          return a.Fr || a.v1 ? (0, r.jsx)(ep, {
            inviteKey: l,
            transitionTo: s
          }, l) : (0, r.jsx)(ed, {
            inviteKey: l,
            location: i,
            transitionTo: s,
            login: n === er.BVt.INVITE_LOGIN(":inviteCode")
          })
        }
      }), (0, r.jsx)(f.A, {
        path: [er.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"), er.BVt.GUILD_TEMPLATE(":guildTemplateCode")],
        render: e => {
          let {
            match: {
              params: {
                guildTemplateCode: t
              },
              path: n
            },
            location: i,
            transitionTo: s
          } = e;
          return a.Fr || a.v1 ? (0, r.jsx)(Q.A, {
            code: t
          }, t) : (0, r.jsx)(eu, {
            code: t,
            location: i,
            transitionTo: s,
            login: n === er.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode")
          })
        }
      }), (0, r.jsx)(f.A, {
        path: er.BVt.VERIFY,
        render: e => (0, r.jsx)(em, el({}, e))
      }), (0, r.jsx)(f.A, {
        path: er.BVt.VERIFY_HUB_EMAIL,
        render: e => (0, r.jsx)(eb, el({}, e))
      }), (0, r.jsx)(f.A, {
        path: er.BVt.VERIFY_REQUEST,
        render: e => (0, r.jsx)(eA, el({}, e))
      }), (0, r.jsx)(f.A, {
        path: er.BVt.DISABLE_EMAIL_NOTIFICATIONS,
        render: e => (0, r.jsx)(eE, el({}, e))
      }), (0, r.jsx)(f.A, {
        path: er.BVt.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
        render: e => (0, r.jsx)(ev, el({}, e))
      }), (0, r.jsx)(f.A, {
        path: er.BVt.AUTHORIZE_IP,
        render: e => (0, r.jsx)(e_, el({}, e))
      }), (0, r.jsx)(f.A, {
        path: er.BVt.REJECT_IP,
        render: e => (0, r.jsx)(ex, el({
          source: er.BVt.REJECT_IP
        }, e))
      }), (0, r.jsx)(f.A, {
        path: er.BVt.REJECT_MFA,
        render: e => (0, r.jsx)(ex, el({
          source: er.BVt.REJECT_MFA
        }, e))
      }), (0, r.jsx)(f.A, {
        path: er.BVt.AUTHORIZE_PAYMENT,
        render: e => (0, r.jsx)(ef, el({}, e))
      }), (0, r.jsx)(f.A, {
        path: er.BVt.RESET,
        render: e => (0, r.jsx)(ex, el({
          source: er.BVt.RESET
        }, e))
      }), (0, r.jsx)(f.A, {
        path: er.BVt.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
        render: e => (0, r.jsx)(eI, el({}, e))
      }), (0, r.jsx)(f.A, {
        path: er.BVt.CHANNELS_GAME_SHOP(N.pv.guildId(), ":pageIndex", ":skuId", ":slug?"),
        render: e => (0, r.jsx)(ej, el({}, e))
      }), (0, r.jsx)(f.A, {
        path: er.BVt.CHANNEL(N.pv.guildId(), N.pv.channelId({
          optional: true
        }), ":messageId?"),
        render: e => (0, r.jsx)(ey, el({}, e))
      }), (0, r.jsx)(f.A, {
        path: er.BVt.REPORT,
        render: () => (0, r.jsx)(T.Kz, {})
      }), (0, r.jsx)(f.A, {
        path: er.BVt.REPORT_SECOND_LOOK,
        render: e => (0, r.jsx)(eO, el({}, e))
      }), (0, r.jsx)(f.A, {
        path: er.BVt.ACCOUNT_REVERT(":token"),
        render: e => (0, r.jsx)(eS, el({}, e))
      })]
    })
  }
  constructor(...e) {
    super(...e), es(this, "state", {
      splash: null,
      redirectTo: null,
      backgroundId: null
    })
  }
}
let eT = Chunk311907.Ay.connectStores([Chunk961350.default, Chunk299091.A, Chunk30793.A, Chunk49463.A, Chunk122906.A], e => {
  var t, n, r;
  let {
    match: i,
    location: s
  } = e, l = null == i || null == (t = i.params) ? true : t.inviteCode, a = null != l ? (0, I.fB)(l, s.search) : true, o = null == i || null == (n = i.params) ? true : n.giftCode, c = null == i || null == (r = i.params) ? true : r.guildTemplateCode;
  return {
    inviteKey: a,
    isAuthenticated: R.default.isAuthenticated(),
    giftCode: o,
    guildTemplateCode: c,
    gift: null != o ? w.A.get(o) : null,
    invite: null != a ? P.A.getInvite(a) : null,
    guildTemplate: null != c ? b.A.getGuildTemplate(c) : null,
    hasLoadedExperiments: v.A.hasLoadedExperiments
  }
})(eC)