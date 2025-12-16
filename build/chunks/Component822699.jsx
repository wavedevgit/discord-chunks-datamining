/** Chunk was on 27978 **/
/** chunk id: 822699, original params: e,t,n (module,exports,require) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => eZ
}), require("./35282.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk593473 = require("./593473.js"),
  Chunk990547 = require("./990547.js"),
  Chunk873546 = require("./873546.js"),
  Chunk427398 = require("./427398.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk893776 = require("./893776.js"),
  Chunk533307 = require("./533307.js"),
  Chunk447543 = require("./447543.js"),
  Chunk126399 = require("./126399.js"),
  Chunk521379 = require("./521379.jsx"),
  Chunk765717 = require("./765717.jsx"),
  Chunk267394 = require("./267394.js"),
  Chunk280466 = require("./280466.js"),
  Chunk761305 = require("./761305.jsx"),
  Chunk698177 = require("./698177.jsx"),
  Chunk353926 = require("./353926.js"),
  Chunk409059 = require("./409059.js"),
  Chunk962220 = require("./962220.js"),
  Chunk637776 = require("./637776.jsx"),
  Chunk264229 = require("./264229.js"),
  Chunk677760 = require("./677760.jsx"),
  Chunk360887 = require("./360887.jsx"),
  Chunk893607 = require("./893607.js"),
  Chunk108427 = require("./108427.js"),
  Chunk594961 = require("./594961.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk82142 = require("./82142.js"),
  Chunk701190 = require("./701190.js"),
  Chunk626135 = require("./626135.js"),
  Chunk81063 = require("./81063.js"),
  Chunk449934 = require("./449934.js"),
  Chunk768581 = require("./768581.js"),
  Chunk625054 = require("./625054.js"),
  Chunk320830 = require("./320830.jsx"),
  Chunk721751 = require("./721751.jsx"),
  Chunk223543 = require("./223543.jsx"),
  Chunk73906 = require("./73906.jsx"),
  Chunk299852 = require("./299852.jsx"),
  Chunk939900 = require("./939900.jsx"),
  Chunk39514 = require("./39514.jsx"),
  Chunk236446 = require("./236446.jsx"),
  Chunk9325 = require("./9325.jsx"),
  Chunk344295 = require("./344295.jsx"),
  Chunk781428 = require("./781428.jsx"),
  Chunk209411 = require("./209411.jsx"),
  Chunk649156 = require("./649156.jsx"),
  Chunk423527 = require("./423527.jsx"),
  Chunk424044 = require("./424044.jsx"),
  Chunk479495 = require("./479495.jsx"),
  Chunk264873 = require("./264873.jsx"),
  Chunk455502 = require("./455502.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk188785 = require("./188785.js"),
  Chunk245335 = require("./245335.js");

function ea(e, t, n) {
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
      ea(e, t, n[t])
    })
  }
  return e
}

function eo(e, t) {
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
require("./179645.js"), Chunk442837.ZP.initialize();
let ec = (0, Chunk320830.Z)(Chunk781428.Z),
  eu = (0, Chunk320830.Z)(Chunk209411.Z),
  ed = (0, Chunk320830.Z)(Chunk344295.Z),
  eh = (0, Chunk320830.Z)(Chunk236446.Z),
  ef = (0, Chunk320830.Z)(Chunk39514.Z),
  eg = (0, Chunk320830.Z)(Chunk677760.Z),
  em = (0, Chunk320830.Z)(Chunk423527.Z),
  ep = (0, Chunk320830.Z)(Chunk264873.Z),
  ex = (0, Chunk320830.Z)(Chunk223543.Z),
  e_ = (0, Chunk320830.Z)(Chunk455502.Z),
  eE = (0, Chunk320830.Z)(Chunk698177.Z),
  ev = (0, Chunk320830.Z)(Chunk479495.Z),
  eb = (0, Chunk320830.Z)(Chunk299852.Z),
  ej = (0, Chunk320830.Z)(Chunk761305.Z),
  eI = (0, Chunk320830.Z)(Chunk637776.Z),
  eN = (0, Chunk320830.Z)(Chunk73906.Z),
  ey = (0, Chunk320830.Z)(Chunk939900.Z),
  eS = (0, Chunk320830.Z)(Chunk649156.Z),
  eC = (0, Chunk320830.Z)(Chunk424044.Z),
  eT = (0, Chunk320830.Z)(Chunk521379.Z),
  eO = (0, Chunk320830.Z)(Chunk360887.Z);
class eA extends Chunk473749.PureComponent {
  static getDerivedStateFromProps(e, t) {
    var n;
    let {
      invite: r,
      location: i
    } = e, {
      backgroundId: a
    } = t, l = null != (n = (0, s.parse)(i.search).redirect_to) ? n : null;
    (null == l || "" === l || l.startsWith(er.Z5c.ME) || !(0, o.B)(l) && !(0, _.Eu)(l)) && (l = null);
    let c = null;
    if (null == r) c = (0, k.gK)(l);
    else if ((null == r ? true : r.state) === er.r2o.RESOLVED) {
      let {
        guild: e,
        target_application: t
      } = r;
      null != t ? null != a && (c = (0, D.xF)(t.id, a, 1024)) : null != e && "string" == typeof e.splash && (c = w.ZP.getGuildSplashURL({
        id: e.id,
        splash: e.splash
      }))
    }
    return {
      redirectTo: l,
      splash: c
    }
  }
  componentDidMount() {
    let {
      inviteKey: e,
      hasLoadedExperiments: t,
      isAuthenticated: n
    } = this.props;
    null != module && (!exports && require && Chunk893776.Z.getExperiments(true), Chunk626135.default.track(Chunk981631.rMx.INVITE_OPENED, {
      invite_code: (0, Chunk264229.jX)(module),
      load_time: Chunk625054.Z.getTimeSinceNavigationStart()
    }, {
      flush: true
    })), (exports || Chunk188785.a) && this.resolveInvite(), this.resolveGiftCode(), this.resolveGuildTemplate(), Chunk126399.Z.initialize(), (0, Chunk108427.t)()
  }
  componentDidUpdate(e) {
    var t, n;
    e.hasLoadedExperiments || !this.props.hasLoadedExperiments || ei.a || this.resolveInvite(), (null == (t = e.invite) ? true : t.state) !== (null == (n = this.props.invite) ? true : n.state) && this.maybeFetchApplicationSplash()
  }
  componentWillUnmount() {
    Chunk126399.Z.terminate()
  }
  maybeFetchApplicationSplash() {
    let {
      invite: e
    } = this.props;
    if ((null == module ? true : module.state) === Chunk981631.r2o.RESOLVED) {
      let {
        target_application: t
      } = module;
      null != exports && (0, Chunk81063.hR)(exports.id, ["embedded_splash"]).then(e => {
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
    if (null == module) return;
    let {
      invite: t
    } = await Chunk447543.ZP.resolveInvite(module, Chunk981631.Usc.INVITE);
    null != exports && ((0, Chunk267394.A)(exports), null != exports.type && Chunk245335.xf.has(exports.type) && Chunk447543.ZP.openNativeAppModal(module))
  }
  resolveGuildTemplate() {
    let {
      guildTemplateCode: e
    } = this.props;
    null != module && (Chunk626135.default.track(Chunk981631.rMx.GUILD_TEMPLATE_OPENED, {
      guild_template_code: module,
      load_time: Chunk625054.Z.getTimeSinceNavigationStart()
    }, {
      flush: true
    }), Chunk962220.Z.resolveGuildTemplate(module), Chunk962220.Z.openNativeAppModal(module))
  }
  resolveGiftCode() {
    let {
      giftCode: e
    } = this.props;
    null != module && Chunk533307.Z.resolveGiftCode(module, true, true).then(t => {
      null != t && null == t.giftCode.promotion && u.Z.wait(() => h.Z.openNativeGiftCodeModal(e))
    })
  }
  render() {
    let {
      splash: e,
      redirectTo: t
    } = this.state, {
      inviteKey: n
    } = this.props;
    return (0, Chunk54381.jsxs)(Chunk721751.Z, {
      splash: module,
      children: [(0, Chunk54381.jsx)(Chunk765717.Z, {
        path: Chunk981631.Z5c.LOGIN_HANDOFF,
        render: e => (0, r.jsx)(eu, eo(el({}, e), {
          redirectTo: t
        }))
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        path: Chunk981631.Z5c.LOGIN_ONE_TIME,
        render: e => (0, r.jsx)(eO, el({}, e))
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        impressionName: Chunk990547.ImpressionNames.USER_LOGIN,
        path: Chunk981631.Z5c.LOGIN,
        render: e => (0, r.jsx)(ec, eo(el({}, e), {
          redirectTo: t
        }))
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        impressionName: Chunk990547.ImpressionNames.USER_REGISTRATION,
        path: Chunk981631.Z5c.REGISTER,
        render: e => ei.a ? (0, r.jsx)(ed, eo(el({}, e), {
          redirectTo: t,
          inviteKey: n
        })) : (0, r.jsx)(em, eo(el({}, e), {
          redirectTo: t
        }))
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        path: Chunk981631.Z5c.GIFT_CODE_LOGIN(":giftCode"),
        render: e => (0, r.jsx)(ef, el({
          login: true
        }, e))
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        path: Chunk981631.Z5c.GIFT_CODE(":giftCode"),
        render: e => (0, r.jsx)(ef, el({}, e))
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        path: [Chunk981631.Z5c.INVITE_LOGIN(":inviteCode"), Chunk981631.Z5c.INVITE(":inviteCode")],
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
          } = e, a = (0, y.mb)(t, i.search);
          return l.tq || l.Em ? (0, r.jsx)(eg, {
            inviteKey: a,
            transitionTo: s
          }, a) : (0, r.jsx)(ed, {
            inviteKey: a,
            location: i,
            transitionTo: s,
            login: n === er.Z5c.INVITE_LOGIN(":inviteCode")
          })
        }
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        path: [Chunk981631.Z5c.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"), Chunk981631.Z5c.GUILD_TEMPLATE(":guildTemplateCode")],
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
          return l.tq || l.Em ? (0, r.jsx)(z.Z, {
            code: t
          }, t) : (0, r.jsx)(eh, {
            code: t,
            location: i,
            transitionTo: s,
            login: n === er.Z5c.GUILD_TEMPLATE_LOGIN(":guildTemplateCode")
          })
        }
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        path: Chunk981631.Z5c.VERIFY,
        render: e => (0, r.jsx)(e_, el({}, e))
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        path: Chunk981631.Z5c.VERIFY_HUB_EMAIL,
        render: e => (0, r.jsx)(eI, el({}, e))
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        path: Chunk981631.Z5c.VERIFY_REQUEST,
        render: e => (0, r.jsx)(eE, el({}, e))
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        path: Chunk981631.Z5c.DISABLE_EMAIL_NOTIFICATIONS,
        render: e => (0, r.jsx)(eb, el({}, e))
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        path: Chunk981631.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
        render: e => (0, r.jsx)(ej, el({}, e))
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        path: Chunk981631.Z5c.AUTHORIZE_IP,
        render: e => (0, r.jsx)(ep, el({}, e))
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        path: Chunk981631.Z5c.REJECT_IP,
        render: e => (0, r.jsx)(ev, el({
          source: er.Z5c.REJECT_IP
        }, e))
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        path: Chunk981631.Z5c.REJECT_MFA,
        render: e => (0, r.jsx)(ev, el({
          source: er.Z5c.REJECT_MFA
        }, e))
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        path: Chunk981631.Z5c.AUTHORIZE_PAYMENT,
        render: e => (0, r.jsx)(ex, el({}, e))
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        path: Chunk981631.Z5c.RESET,
        render: e => (0, r.jsx)(ev, el({
          source: er.Z5c.RESET
        }, e))
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        path: Chunk981631.Z5c.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
        render: e => (0, r.jsx)(eS, el({}, e))
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        path: Chunk981631.Z5c.CHANNELS_GAME_SHOP(Chunk893607.Hw.guildId(), ":pageIndex", ":skuId", ":slug?"),
        render: e => (0, r.jsx)(ey, el({}, e))
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        path: Chunk981631.Z5c.CHANNEL(Chunk893607.Hw.guildId(), Chunk893607.Hw.channelId({
          optional: true
        }), ":messageId?"),
        render: e => (0, r.jsx)(eN, el({}, e))
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        path: Chunk981631.Z5c.REPORT,
        render: () => (0, Chunk54381.jsx)(Chunk594961.KS, {})
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        path: Chunk981631.Z5c.REPORT_SECOND_LOOK,
        render: e => (0, r.jsx)(eC, el({}, e))
      }), (0, Chunk54381.jsx)(Chunk765717.Z, {
        path: Chunk981631.Z5c.ACCOUNT_REVERT(":token"),
        render: e => (0, r.jsx)(eT, el({}, e))
      })]
    })
  }
  constructor(...e) {
    super(...e), ea(this, "state", {
      splash: null,
      redirectTo: null,
      backgroundId: null
    })
  }
}
let eZ = Chunk442837.ZP.connectStores([Chunk314897.default, Chunk701190.Z, Chunk82142.Z, Chunk353926.Z, Chunk409059.Z], e => {
  var t, n, r;
  let {
    match: i,
    location: s
  } = e, a = null == i || null == (t = i.params) ? true : t.inviteCode, l = ei.a ? ei.Y : true, o = null != a ? (0, y.mb)(a, s.search) : l, c = null == i || null == (n = i.params) ? true : n.giftCode, u = null == i || null == (r = i.params) ? true : r.guildTemplateCode;
  return {
    inviteKey: o,
    isAuthenticated: Z.default.isAuthenticated(),
    giftCode: c,
    guildTemplateCode: u,
    gift: null != c ? P.Z.get(c) : null,
    invite: null != o ? R.Z.getInvite(o) : null,
    guildTemplate: null != u ? j.Z.getGuildTemplate(u) : null,
    hasLoadedExperiments: b.Z.hasLoadedExperiments
  }
})(eA)