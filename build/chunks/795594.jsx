/** Chunk was on web.js **/
/** chunk id: 795594, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => e_,
  Z: () => ep
}), require("./997841.js"), require("./388685.js"), require("./539854.js"), require("./953529.js"), require("./781311.js"), require("./642613.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk658722 = require("./658722.js"),
  l = require.n(Chunk658722),
  Chunk512722 = require("./512722.js"),
  u = require.n(Chunk512722),
  Chunk97519 = require("./97519.js"),
  Chunk243814 = require("./243814.js"),
  Chunk442837 = require("./442837.js"),
  Chunk921072 = require("./921072.js"),
  Chunk524437 = require("./524437.js"),
  Chunk1561 = require("./1561.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk384275 = require("./384275.js"),
  Chunk493683 = require("./493683.js"),
  Chunk87051 = require("./87051.js"),
  Chunk230711 = require("./230711.js"),
  Chunk497321 = require("./497321.jsx"),
  Chunk468026 = require("./468026.jsx"),
  Chunk317381 = require("./317381.js"),
  Chunk513202 = require("./513202.jsx"),
  Chunk367907 = require("./367907.js"),
  Chunk162685 = require("./162685.js"),
  Chunk979200 = require("./979200.js"),
  Chunk870822 = require("./870822.js"),
  Chunk589414 = require("./589414.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk240991 = require("./240991.js"),
  Chunk713938 = require("./713938.js"),
  Chunk973616 = require("./973616.js"),
  Chunk881998 = require("./881998.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk246946 = require("./246946.js"),
  Chunk9156 = require("./9156.js"),
  Chunk768581 = require("./768581.js"),
  Chunk630388 = require("./630388.js"),
  Chunk49012 = require("./49012.js"),
  Chunk621600 = require("./621600.js"),
  Chunk709054 = require("./709054.js"),
  Chunk706454 = require("./706454.js"),
  Chunk210887 = require("./210887.js"),
  Chunk675478 = require("./675478.js"),
  Chunk581883 = require("./581883.js"),
  Chunk436267 = require("./436267.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk869743 = require("./869743.js"),
  Chunk981631 = require("./981631.js"),
  Chunk468788 = require("./468788.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk989604 = require("./989604.js"),
  Chunk73433 = require("./73433.js"),
  Chunk20493 = require("./20493.js");

function eo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ea(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eo(e, t, n[t])
    })
  }
  return e
}
let es = Chunk442837.ZP.connectStores([Chunk210887.Z], () => ({
  theme: Chunk210887.Z.theme
}))(Chunk481060.ubH);

function el(e) {
  let {
    className: t,
    text: n
  } = e;
  return <div className={a()(en.warningOuterContainer, t)}>{<E.d3s size={"md"} color={"currentColor"} className={en.warningIcon} />}{<E.Text color={"text-default"} variant={"text-sm/medium"}>{n}</E.Text>}</div>
}
let ec = e => {
    let {
      disclosure: t
    } = e;
    return i.useMemo(() => {
      switch (t) {
        case p.u$.IP_LOCATION:
          return <E.enf size={"md"} color={"currentColor"} className={en.disclosureIcon} />;
        case p.u$.DISPLAYS_ADVERTISEMENTS:
          return <E.FLu className={en.disclosureIcon} />;
        default:
          return <E.d3s className={en.disclosureIcon} />
      }
    }, [t])
  },
  eu = (e, t) => {
    let n = et.intl.string(et.t.DT39Aw),
      i = et.intl.formatToPlainString(et.t.QWGvxM, {
        applicationName: e.name
      });
    return (0, P.Z)(e) && (n = et.intl.formatToPlainString(et.t["paC+UV"], {
      applicationName: e.name
    }), i = <r.Fragment>{et.intl.formatToPlainString(et.t.inM1Ym, {
        applicationName: e.name
      })}{<Q.Z look={Q.z.WARNING} className={en.infoBox}>{et.intl.string(et.t.LY35Z2)}</Q.Z>}</r.Fragment>), (0, X.Z)(e.id) && (i = <r.Fragment>{i}{<Q.Z className={en.infoBox}>{et.intl.format(et.t.KRnERk, {
          applicationName: e.name
        })}</Q.Z>}</r.Fragment>), (0, E.h7j)(e => <T.default{...ea({
      title: n,
      body: i,
      confirmText: et.intl.string(et.t.xUqheH),
      confirmColor: g.Tt.RED,
      cancelText: et.intl.string(et.t["ETE/oK"]),
      onConfirm: t
    }, e)} />)
  },
  ed = e => {
    let {
      application: t,
      isVisible: n
    } = e, i = () => {
      null != t.terms_of_service_url && (0, V.q)({
        href: t.terms_of_service_url,
        shouldConfirm: true
      })
    }, o = () => {
      null != t.privacy_policy_url && (0, V.q)({
        href: t.privacy_policy_url,
        shouldConfirm: true
      })
    };
    return null != t.terms_of_service_url || null != t.privacy_policy_url ? <div className={en.tosPrivacy}>{null != t.terms_of_service_url ? <m.P tag={"a"} onClick={i} className={en.tos} tabIndex={n ? 0 : false}>{<E.R94 className={en.link}>{et.intl.string(et.t["lx+GeX"])}</E.R94>}{<E.Gr1 className={en.externalLinkIcon} color={"var(--text-link)"} />}</m.P> : null}{null != t.privacy_policy_url ? <div className={en.privacy}>{null != t.terms_of_service_url ? <div className={en.divider} /> : null}{<m.P tag={"a"} onClick={o} className={en.privacy} tabIndex={n ? 0 : false}>{<E.R94 className={en.link}>{et.intl.string(et.t.okSwq6)}</E.R94>}{<E.Gr1 className={en.externalLinkIcon} color={"var(--text-link)"} />}</m.P>}</div> : null}</div> : null
  },
  ef = e => {
    let {
      scopes: t,
      application: o,
      selectedChannelId: s,
      selectedGuildId: l,
      onDelete: c,
      disclosures: d,
      locale: p,
      id: g
    } = e, b = o.id, I = i.useMemo(() => M.ZP.createFromServer(o), [o]), T = (0, F.yE)(I.flags, $.udG.EMBEDDED), S = (0, _.e7)([q.Z], () => {
      var e, t, n, r;
      return null == (r = q.Z.settings.applications) || null == (n = r.appSettings) || null == (t = n[b]) || null == (e = t.appDmSettings) ? true : e.allowMobilePush
    }, [b]), A = C.w.useExperiment({
      location: "oauth2_authorize"
    }), P = o.bot, k = (0, _.e7)([j.Z], () => j.Z.getDMFromUserId(null == P ? true : P.id)), {
      appDMChannelMuteConfig: U,
      dmChannelMuted: G
    } = (0, _.cj)([B.ZP], () => null == k ? {
      appDMChannelMuteConfig: null,
      dmChannelMuted: false
    } : {
      appDMChannelMuteConfig: B.ZP.getChannelMuteConfig(null, k),
      dmChannelMuted: B.ZP.isChannelMuted(null, k)
    }), [V, W] = i.useState(false), [K, Q] = i.useState(false), eo = () => {
      let e = [];
      for (let n of t) e.push(...(0, x.CI)(n, t)), n === f.x.APPLICATIONS_COMMANDS && e.push(et.intl.string(et.t.Ls2XRk));
      if (e.length > 0 || null != d && d.length > 0) return <E.zF9 className={en.appDetailsSection} isExpanded={K} collapsibleContent={(0, r.jsxs)("ul", {
          className: en.appDetailsContent,
          children: [e.map((e, t) => (0, r.jsxs)("li", {
            className: en.permission,
            children: [(0, r.jsx)("i", {
              className: en.permissionCheckmark
            }), (0, r.jsx)(E.R94, {
              children: e
            })]
          }, t)), null == d ? true : d.map((t, n) => {
            let i = (0, R.PM)(t);
            return null != i ? (0, r.jsxs)("li", {
              className: en.permission,
              children: [(0, r.jsx)(ec, {
                disclosure: t
              }), (0, r.jsx)(E.R94, {
                children: i
              })]
            }, n + e.length) : null
          })]
        })}>{t => {
          let {
            onClick: n
          } = t;
          return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)(m.P, {
              className: en.appDetailsSectionHeader,
              onClick: e => {
                Q(!K), n(e)
              },
              children: [(0, r.jsx)(E.X6q, {
                variant: "heading-sm/medium",
                color: "header-primary",
                children: et.intl.string(et.t.xrmhRU)
              }), K ? (0, r.jsx)(E.CJ0, {
                size: "md",
                color: E.TVs.colors.INTERACTIVE_NORMAL
              }) : (0, r.jsx)(E.Fbu, {
                size: "md",
                color: E.TVs.colors.INTERACTIVE_NORMAL
              })]
            }), !K && (0, r.jsx)(E.Text, {
              variant: "text-sm/normal",
              color: "text-secondary",
              className: a()(en.appDetailsContent, en.permissionsDescription),
              children: et.intl.format(et.t.nZOS8v, {
                numPermissions: e.length
              })
            })]
          })
        }}</E.zF9>
    }, es = i.useMemo(() => {
      if (null != o.description && "" !== o.description) return <E.Text className={er.markup} variant={"text-sm/normal"} color={"text-default"}>{(0, L.parseBioReact)(o.description)}</E.Text>
    }, [o.description]), ef = () => {
      let e = null != o.description && "" !== o.description,
        t = null != o.terms_of_service_url || null != o.privacy_policy_url;
      return e || t ? <E.zF9 className={en.appDetailsSection} isExpanded={V} collapsibleContent={(0, r.jsxs)("div", {
          className: en.appDetailsContent,
          children: [e && es, t && (0, r.jsx)(ed, {
            application: o,
            isVisible: V
          })]
        })}>{e => {
          let {
            onClick: t
          } = e;
          return (0, r.jsxs)(m.P, {
            className: en.appDetailsSectionHeader,
            onClick: e => {
              W(!V), t(e)
            },
            children: [(0, r.jsx)(E.X6q, {
              variant: "heading-sm/medium",
              color: "header-primary",
              children: et.intl.string(et.t.fcYgiY)
            }), V ? (0, r.jsx)(E.CJ0, {
              size: "md",
              color: E.TVs.colors.INTERACTIVE_NORMAL
            }) : (0, r.jsx)(E.Fbu, {
              size: "md",
              color: E.TVs.colors.INTERACTIVE_NORMAL
            })]
          })
        }}</E.zF9> : null
    }, e_ = () => {
      let e = Z.ZP.getApplicationIconURL({
          id: o.id,
          icon: o.icon
        }),
        t = null != e ? <D.Z.Child className={en.appAvatarV2} grow={0}><img src={e} alt={""} /></D.Z.Child> : null,
        n = new Date(Y.default.extractTimestamp(g)).toLocaleDateString(p);
      return <div className={en.headerV2}>{t}{<div className={en.headerTextContainerV2}>{<E.X6q variant={"heading-md/semibold"} className={a()(en.headerText, ei.marginBottom4)}>{o.name}</E.X6q>}{<E.Text variant={"text-sm/normal"} color={"text-default"}>{et.intl.format(et.t.yOApCA, {
              date: n
            })}</E.Text>}</div>}{<J.Z appRecord={I} selectedGuildId={l} selectedChannelId={s} />}</div>
    }, ep = e => {
      z.hW.updateAsync("applications", t => {
        b in t.appSettings ? null == t.appSettings[b].appDmSettings ? t.appSettings[b].appDmSettings = h.c$.create({
          allowMobilePush: e
        }) : t.appSettings[b].appDmSettings.allowMobilePush = e : t.appSettings[b] = h.dp.create({
          appDmSettings: h.c$.create({
            allowMobilePush: e
          })
        })
      }, z.fy.INFREQUENT_USER_ACTION), N.ZP.trackWithMetadata($.rMx.NOTIFICATION_SETTINGS_UPDATED, {
        update_type: ee.I.AUTHORIZED_APP_DM_PUSH_NOTIFICATION,
        application_id: o.id,
        label: e ? H.ZB.Unmuted : H.ZB.Muted
      })
    }, eh = i.useCallback(async () => {
      u()(null != P, "dm channel mute setting requires having a bot user");
      let e = k;
      null == e && (e = await y.Z.ensurePrivateChannel(P.id)), G ? O.Z.updateAppDMOverrideSettings(null, e, o.id, {
        muted: false
      }, H.ZB.Unmuted) : (0, E.ZDy)(async () => {
        let {
          default: t
        } = await n.e("8246").then(n.bind(n, 540679));
        return n => <t{...ea({
          channelId: e,
          applicationId: o.id
        }, n)} />
      })
    }, [k, P, G, o.id]), em = () => A.enabled ? <div className={en.directMessagesSection}>{<E.X6q variant={"heading-sm/medium"} color={"header-primary"} className={en.dmSettingsHeader}>{et.intl.string(et.t.NaZyYG)}</E.X6q>}{null != P ? <E.j7V hideBorder={true} onChange={eh} className={en.dmSettingsSwitch} note={(null == U ? true : U.end_time) != null ? et.intl.format(et.t.j7h4AA, {
          endTime: new Date(U.end_time).toLocaleString(et.intl.currentLocale, {
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit"
          })
        }) : true} value={G}><E.Text variant={"text-sm/medium"}>{et.intl.string(et.t.NkwaBg)}</E.Text></E.j7V> : null}{T && A.enabled ? <E.j7V hideBorder={true} onChange={ep} className={en.dmSettingsSwitch} note={et.intl.string(et.t.hw1nKS)} value={S} disabled={G}><E.Text variant={"text-sm/medium"}>{et.intl.string(et.t["Pkw//v"])}</E.Text></E.j7V> : null}</div> : null, eg = (0, X.O)(o.id), eE = (0, w.Z)(o), eb = () => <div className={en.footer}>{eE ? <el className={en.warningContainer} text={et.intl.format(et.t.j4B7ER, {
          applicationName: o.name
        })} /> : eg ? <el className={en.warningContainer} text={et.intl.format(et.t.jUhnwc, {
          applicationName: o.name,
          onConnectionPress: () => v.Z.setSection($.jXE.SETTINGS_CONNECTIONS)
        })} /> : null}{<div className={en.deauthorizeButton}><E.zxk variant={"critical-secondary"} size={"sm"} text={et.intl.string(et.t.xUqheH)} onClick={() => eu(o, c)} /></div>}</div>;
    return <div className={en.authedAppV2}><E.y5t component={e_()}><div className={en.appDetailsContainer}>{ef()}{eo()}{em()}{eb()}</div></E.y5t></div>
  },
  e_ = (0, Chunk97519.U)(() => ({
    searchQuery: ""
  })),
  ep = () => {
    let e = (0, Chunk442837.e7)([Chunk246946.Z], () => Chunk246946.Z.hidePersonalInformation),
      {
        fetchState: t,
        appAuthTokens: n
      } = (0, Chunk442837.cj)([Chunk881998.Z], () => ({
        fetchState: Chunk881998.Z.getFetchState(),
        appAuthTokens: Chunk881998.Z.getNewestTokensForNonChildrenApplications()
      })),
      o = (0, Chunk442837.e7)([Chunk706454.default], () => Chunk706454.default.locale),
      a = (0, Chunk442837.e7)([Chunk317381.ZP], () => Chunk317381.ZP.getSelfEmbeddedActivities()),
      s = (0, Chunk442837.e7)([Chunk592125.Z, Chunk944486.Z], () => Chunk592125.Z.getChannel(Chunk944486.Z.getChannelId())),
      c = null == Chunk658722 ? true : Chunk658722.getGuildId();
    Chunk73800.useEffect(() => {
      Chunk384275.Z.fetch()
    }, []), Chunk73800.useEffect(() => () => {
      e_.setState({
        searchQuery: ""
      })
    }, []);
    let u = e => {
        let {
          id: t,
          application: n
        } = e;
        b.Z.delete(t);
        let r = a.get(n.id);
        null != r && A.Z.leaveActivity({
          location: r.location,
          applicationId: n.id,
          showFeedback: false
        })
      },
      d = e_(e => e.searchQuery),
      f = e => e_.setState({
        searchQuery: e
      }),
      p = e => {
        f(e)
      },
      h = () => {
        Chunk243814("")
      },
      m = () => <div className={Chunk989604.searchContainer}><Chunk481060.E1j query={Chunk97519} onChange={Chunk921072} onClear={Chunk524437} placeholder={Chunk388032.intl.string(Chunk388032.t["5prvKS"])} aria-label={Chunk388032.intl.string(Chunk388032.t["5prvKS"])} /></div>,
      g = (e, t) => <es className={en.__invalid_marginTop20}><E.OZU note={e}>{t}</E.OZU></es>,
      y = Chunk73800.useMemo(() => {
        let e = Chunk97519.trim().toLowerCase();
        return "" === module || null == require ? require : require.length < 100 ? require.filter(t => l()(e, t.application.name.toLowerCase())) : require.filter(t => t.application.name.toLowerCase().includes(e))
      }, [require, Chunk97519]),
      O = () => null == require || null == Chunk493683 || exports !== Chunk881998.M.FETCHED ? <Chunk481060.$jN className={Chunk20493.marginTop20} type={Chunk481060.$jN.Type.SPINNING_CIRCLE} /> : 0 === require.length ? Chunk755721(Chunk388032.intl.string(Chunk388032.t.CpPv5u), Chunk388032.intl.string(Chunk388032.t["E+SM6e"])) : 0 === Chunk493683.length ? <Chunk255367.Fragment>{Chunk1561()}{Chunk755721(null, Chunk388032.intl.string(Chunk388032.t.EVWFNj))}</Chunk255367.Fragment> : <Chunk255367.Fragment>{Chunk1561()}{Chunk493683.sort((e, t) => Number(t.id) - Number(e.id)).map(e => <ef{...ea({
          locale: o,
          onDelete: () => u(e),
          selectedChannelId: null == s ? true : s.id,
          selectedGuildId: null != c ? c : true
        }, e)} />)}</Chunk255367.Fragment>;
    return module ? <Chunk497321.Z /> : <Chunk481060.hjN tag={Chunk481060.RB0.H1} title={Chunk388032.intl.string(Chunk388032.t["f6kk+v"])}><Chunk481060.y5t component={(0, Chunk255367.jsx)(Chunk481060.ToO, {
          className: Chunk20493.marginBottom40,
          type: Chunk481060.sje.PRIMARY,
          title: Chunk388032.intl.string(Chunk388032.t.HU3RFx),
          body: Chunk388032.intl.string(Chunk388032.t.Nu5Yi4)
        })}>{Chunk87051()}</Chunk481060.y5t></Chunk481060.hjN>
  }