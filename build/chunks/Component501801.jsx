/** Chunk was on 20303 **/
/** chunk id: 501801, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  mp: () => v,
  tP: () => M,
  xO: () => D
}), require("./539854.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk913527 = require("./913527.js"),
  c = require.n(Chunk913527),
  Chunk866442 = require("./866442.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk835473 = require("./835473.js"),
  Chunk479099 = require("./479099.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk485386 = require("./485386.js"),
  Chunk594174 = require("./594174.js"),
  Chunk934415 = require("./934415.js"),
  Chunk823379 = require("./823379.js"),
  Chunk624138 = require("./624138.js"),
  Chunk51144 = require("./51144.js"),
  Chunk909746 = require("./909746.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk617314 = require("./617314.js");

function D(e, t) {
  let n = p.vc[e.targetType];
  return null != n && true === n[t.key]
}
let L = {
  [Chunk981631.vB8.CREATE]: Chunk617314.typeCreate,
  [Chunk981631.vB8.UPDATE]: Chunk617314.typeUpdate,
  [Chunk981631.vB8.DELETE]: Chunk617314.typeDelete
};

function b(e) {
  let {
    applicationId: t
  } = e, n = (0, A.q)(t);
  return null == n ? null : (0, r.jsx)(E.Text, {
    variant: "text-md/normal",
    children: n.name
  })
}

function U(e, t) {
  return (0, r.jsx)("div", {
    className: C.colorHook,
    style: {
      backgroundColor: t
    }
  }, e)
}
class v extends Chunk647438.PureComponent {
  render() {
    let {
      actionType: e,
      targetType: t,
      action: n,
      themeOverride: l
    } = this.props, i = null != Chunk647438 ? Chunk617314["themeOverride".concat((0, Chunk624138.De)(Chunk647438))] : null, s = a()(Chunk617314.icon, L[module], require === Chunk981631.rsA.MESSAGE_DELETE ? Chunk617314.targetMessage : require === Chunk981631.rsA.AUTO_MODERATION_BLOCK_MESSAGE || require === Chunk981631.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL || require === Chunk981631.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || require === Chunk981631.rsA.AUTO_MODERATION_QUARANTINE_USER ? Chunk617314.autoModerationBlockMessage : ({
      [Chunk981631.KFR.ALL]: Chunk617314.targetAll,
      [Chunk981631.KFR.GUILD]: Chunk617314.targetGuild,
      [Chunk981631.KFR.CHANNEL]: Chunk617314.targetChannel,
      [Chunk981631.KFR.CHANNEL_OVERWRITE]: Chunk617314.targetChannel,
      [Chunk981631.KFR.USER]: Chunk617314.targetMember,
      [Chunk981631.KFR.ROLE]: Chunk617314.targetRole,
      [Chunk981631.KFR.ONBOARDING_PROMPT]: Chunk617314.targetOnboarding,
      [Chunk981631.KFR.GUILD_ONBOARDING]: Chunk617314.targetOnboarding,
      [Chunk981631.KFR.HOME_SETTINGS]: Chunk617314.targetOnboarding,
      [Chunk981631.KFR.INTEGRATION]: Chunk617314.targetIntegration,
      [Chunk981631.KFR.INVITE]: Chunk617314.targetInvite,
      [Chunk981631.KFR.WEBHOOK]: Chunk617314.targetWebhook,
      [Chunk981631.KFR.EMOJI]: Chunk617314.targetEmoji,
      [Chunk981631.KFR.STICKER]: Chunk617314.targetSticker,
      [Chunk981631.KFR.STAGE_INSTANCE]: Chunk617314.targetStageInstance,
      [Chunk981631.KFR.GUILD_SCHEDULED_EVENT]: Chunk617314.targetGuildScheduledEvent,
      [Chunk981631.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION]: Chunk617314.targetGuildScheduledEvent,
      [Chunk981631.KFR.THREAD]: Chunk617314.thread,
      [Chunk981631.KFR.APPLICATION_COMMAND]: Chunk617314.applicationCommand,
      [Chunk981631.KFR.AUTO_MODERATION_RULE]: Chunk617314.autoModerationRule,
      [Chunk981631.KFR.GUILD_HOME]: Chunk617314.targetGuildHome,
      [Chunk981631.KFR.GUILD_SOUNDBOARD]: Chunk617314.targetGuildSoundboard,
      [Chunk981631.KFR.VOICE_CHANNEL_STATUS]: Chunk617314.targetChannel,
      [Chunk981631.KFR.GUILD_MEMBER_VERIFICATION]: Chunk617314.targetMember,
      [Chunk981631.KFR.GUILD_PROFILE]: Chunk617314.targetGuild
    })[exports], Chunk120356);
    return (0, Chunk951288.jsx)("div", {
      className: Chunk392711
    })
  }
}

function M(e) {
  let {
    log: t,
    guild: n,
    onContentClick: i,
    className: s
  } = e, u = l.useCallback(e => {
    if (null == t.changes) return null;
    let u = 0,
      A = o().flatten(t.changes.map(i => {
        if (D(t, i)) return null;
        let {
          oldValue: a,
          newValue: s
        } = (() => {
          if ((t.action === R.rsA.CHANNEL_UPDATE || t.action === R.rsA.CHANNEL_CREATE) && i.key === R.zUn.TYPE) {
            var e, n;
            return {
              oldValue: null != (e = i.oldValue) ? e : (0, f.a5)({
                type: i.oldValue
              }),
              newValue: null != (n = i.newValue) ? n : (0, f.a5)({
                type: i.newValue
              })
            }
          }
          if (t.action === R.rsA.MEMBER_UPDATE && i.key === R.zUn.COMMUNICATION_DISABLED_UNTIL) {
            let e = c()(i.newValue);
            return {
              oldValue: i.oldValue,
              newValue: e.isValid() ? e.calendar() : i.newValue
            }
          }
          return t.action === R.rsA.GUILD_UPDATE && i.key === R.zUn.OWNER_ID ? {
            oldValue: O.ZP.getUserTag(i.oldValue, {
              mode: "username"
            }),
            newValue: O.ZP.getUserTag(i.newValue, {
              mode: "username"
            })
          } : i
        })(), A = (() => {
          if (t.action === R.rsA.MEMBER_ROLE_UPDATE) return function(e) {
            let {
              newValue: t
            } = e;
            return Array.isArray(t) ? t.map(e => (0, r.jsx)("div", {
              className: C.subListItem,
              children: e.name
            }, e.id)) : null
          }(i);
          if (t.targetType === R.KFR.ROLE || t.action === R.rsA.CHANNEL_OVERWRITE_CREATE || t.action === R.rsA.CHANNEL_OVERWRITE_UPDATE) return function(e, t) {
            let {
              newValue: n
            } = e;
            return Array.isArray(n) ? n.map((e, n) => (0, r.jsx)("div", {
              className: C.subListItem,
              children: p.hQ(e, t)
            }, n)) : null
          }(i, t);
          if ((t.action === R.rsA.CHANNEL_UPDATE || t.action === R.rsA.THREAD_UPDATE) && i.key === R.zUn.FLAGS) return function(e) {
            let {
              newValue: t,
              oldValue: n
            } = e, l = [];
            return (Array.isArray(n) && (l = l.concat(n.map(e => (0, r.jsx)("div", {
              className: C.subListItem,
              children: p.cT(e)
            }, e)))), Array.isArray(t) && (l = l.concat(t.map(e => (0, r.jsx)("div", {
              className: C.subListItem,
              children: p.em(e)
            }, e)))), l.length > 0) ? l : null
          }(i);
          if ((t.action === R.rsA.ONBOARDING_PROMPT_UPDATE || t.action === R.rsA.ONBOARDING_PROMPT_CREATE) && i.key === R.zUn.OPTIONS) return function(e, t, n) {
            let {
              newValue: l,
              oldValue: i
            } = e, a = e => {
              var t;
              let r = null != n ? null == (t = I.Z.getRole(n.id, e)) ? true : t.name : true;
              return null == r ? null : "@".concat(r)
            }, s = e => {
              var t;
              let n = null == (t = T.Z.getChannel(e)) ? true : t.name;
              return null == n ? null : "#".concat(n)
            }, u = o().keyBy(null != i ? i : [], "id"), c = o().keyBy(null != l ? l : [], "id"), d = o().difference(Object.keys(c), Object.keys(u)).map(e => c[e]), _ = o().difference(Object.keys(u), Object.keys(c)).map(e => u[e]), A = o().intersection(Object.keys(c), Object.keys(u));
            return (0, r.jsxs)("ul", {
              className: C.onboardingChangeLogContainer,
              children: [d.map(e => {
                let {
                  role_ids: n,
                  channel_ids: l,
                  title: i,
                  id: o
                } = e, u = (null != n ? n : []).map(a).filter(h.lm), c = (null != l ? l : []).map(s).filter(h.lm);
                return (0, r.jsxs)("li", {
                  children: [(0, r.jsxs)("div", {
                    className: C.onboardingChangeLogItemTitle,
                    children: [(0, r.jsx)(v, {
                      actionType: R.vB8.CREATE,
                      targetType: t.targetType,
                      action: t.action
                    }), (0, r.jsx)(E.Text, {
                      variant: "text-md/normal",
                      children: S.intl.format(S.t.CZ1tys, {
                        title: i
                      })
                    })]
                  }), (0, r.jsxs)("div", {
                    className: C.onboardingChangeLogItemChanges,
                    children: [u.length > 0 && (0, r.jsx)(E.Text, {
                      variant: "text-md/normal",
                      children: S.intl.format(S.t["gt/5z8"], {
                        roles: u.join(", ")
                      })
                    }), c.length > 0 && (0, r.jsx)(E.Text, {
                      variant: "text-md/normal",
                      children: S.intl.format(S.t["4q006e"], {
                        channels: c.join(", ")
                      })
                    })]
                  })]
                }, o)
              }), _.map(e => (0, r.jsx)("li", {
                children: (0, r.jsxs)("div", {
                  className: C.onboardingChangeLogItemTitle,
                  children: [(0, r.jsx)(v, {
                    actionType: R.vB8.DELETE,
                    targetType: t.targetType,
                    action: t.action
                  }), (0, r.jsx)(E.Text, {
                    variant: "text-md/normal",
                    children: S.intl.format(S.t["m3dt+P"], {
                      title: e.title
                    })
                  })]
                })
              }, e.id)), A.map(e => ((e, n) => {
                let {
                  title: l,
                  id: i
                } = n, u = e.role_ids.map(a).filter(h.lm), c = e.channel_ids.map(s).filter(h.lm), d = n.role_ids.map(a).filter(h.lm), _ = n.channel_ids.map(s).filter(h.lm), A = o().difference(d, u), m = o().difference(u, d), T = o().difference(_, c), I = o().difference(c, _), g = [];
                return (o().isEqual(e.title, n.title) || g.push("title"), o().isEqual(e.description, n.description) || g.push("description"), 0 === A.length && 0 === m.length && 0 === T.length && 0 === I.length && 0 === g.length) ? null : (0, r.jsxs)("li", {
                  children: [(0, r.jsxs)("div", {
                    className: C.onboardingChangeLogItemTitle,
                    children: [(0, r.jsx)(v, {
                      actionType: R.vB8.UPDATE,
                      targetType: t.targetType,
                      action: t.action
                    }), (0, r.jsx)(E.Text, {
                      variant: "text-md/normal",
                      children: S.intl.format(S.t["WZO+iY"], {
                        title: l
                      })
                    })]
                  }), (0, r.jsxs)("div", {
                    className: C.onboardingChangeLogItemChanges,
                    children: [A.length > 0 && (0, r.jsx)(E.Text, {
                      variant: "text-md/normal",
                      children: S.intl.format(S.t["R+km+f"], {
                        roles: A.join(", ")
                      })
                    }), m.length > 0 && (0, r.jsx)(E.Text, {
                      variant: "text-md/normal",
                      children: S.intl.format(S.t.xIVRoa, {
                        roles: m.join(", ")
                      })
                    }), T.length > 0 && (0, r.jsx)(E.Text, {
                      variant: "text-md/normal",
                      children: S.intl.format(S.t.iYowX1, {
                        channels: T.join(", ")
                      })
                    }), I.length > 0 && (0, r.jsx)(E.Text, {
                      variant: "text-md/normal",
                      children: S.intl.format(S.t.JLdJpK, {
                        channels: I.join(", ")
                      })
                    }), g.map((t, l) => (0, r.jsx)(E.Text, {
                      variant: "text-md/normal",
                      children: S.intl.format(S.t["0698zc"], {
                        key: t,
                        oldValue: e[t],
                        newValue: n[t]
                      })
                    }, l))]
                  })]
                }, i)
              })(u[e], c[e]))]
            }, "options")
          }(i, t, n);
          if (t.action === R.rsA.HOME_SETTINGS_CREATE || t.action === R.rsA.HOME_SETTINGS_UPDATE) return function(e, t) {
            let {
              oldValue: n,
              newValue: l,
              key: i
            } = e, {
              targetType: a,
              action: s
            } = t;
            switch (i) {
              case R.zUn.WELCOME_MESSAGE:
                return ((e, t) => {
                  var n, l, i, a, s;
                  let o = g.default.getUser(null == t || null == (n = t.author_ids) ? true : n[0]),
                    u = g.default.getUser(null == (l = e.author_ids) ? true : l[0]),
                    c = (null == o ? true : o.id) !== (null == u ? true : u.id) ? (0, r.jsx)("li", {
                      children: (0, r.jsx)("div", {
                        className: C.onboardingChangeLogItemTitle,
                        children: (0, r.jsx)(E.Text, {
                          variant: "text-md/normal",
                          children: S.intl.format(S.t.PrOzAw, {
                            oldUser: null != (i = null == o ? true : o.username) ? i : S.intl.string(S.t.PoWNfX),
                            newUser: null != (a = null == u ? true : u.username) ? a : S.intl.string(S.t.PoWNfX)
                          })
                        })
                      })
                    }) : null,
                    d = (null == t ? true : t.message) !== e.message ? (0, r.jsx)("li", {
                      children: (0, r.jsx)("div", {
                        className: C.onboardingChangeLogItemTitle,
                        children: (0, r.jsx)(E.Text, {
                          variant: "text-md/normal",
                          children: S.intl.format(S.t.oB7rBQ, {
                            oldMessage: null != (s = null == t ? true : t.message) ? s : S.intl.string(S.t.PoWNfX),
                            newMessage: e.message
                          })
                        })
                      })
                    }) : null;
                  return (0, r.jsxs)("ul", {
                    children: [c, d]
                  })
                })(l, n);
              case R.zUn.NEW_MEMBER_ACTIONS:
                return ((e, t) => {
                  let n = e.map(e => e.channel_id),
                    l = t.map(e => e.channel_id),
                    i = o().difference(l, n),
                    u = o().difference(n, l),
                    c = t.filter(e => i.includes(e.channel_id)),
                    d = e.filter(e => u.includes(e.channel_id));
                  return (0, r.jsxs)("ul", {
                    children: [c.map(e => (0, r.jsx)("li", {
                      children: (0, r.jsxs)("div", {
                        className: C.onboardingChangeLogItemTitle,
                        children: [(0, r.jsx)(v, {
                          actionType: R.vB8.CREATE,
                          targetType: a,
                          action: s
                        }), (0, r.jsx)(E.Text, {
                          variant: "text-md/normal",
                          children: S.intl.format(S.t["oFSu6+"], {
                            name: e.title
                          })
                        })]
                      })
                    }, e.channel_id)), d.map(e => (0, r.jsx)("li", {
                      children: (0, r.jsxs)("div", {
                        className: C.onboardingChangeLogItemTitle,
                        children: [(0, r.jsx)(v, {
                          actionType: R.vB8.DELETE,
                          targetType: a,
                          action: s
                        }), (0, r.jsx)(E.Text, {
                          variant: "text-md/normal",
                          children: S.intl.format(S.t.GssWam, {
                            name: e.title
                          })
                        })]
                      })
                    }, e.channel_id))]
                  })
                })(null != n ? n : [], l);
              case R.zUn.RESOURCE_CHANNELS:
                return ((e, t) => {
                  let n = e.map(e => e.channel_id),
                    l = t.map(e => e.channel_id),
                    i = o().difference(l, n),
                    u = o().difference(n, l),
                    c = t.filter(e => i.includes(e.channel_id)),
                    d = e.filter(e => u.includes(e.channel_id));
                  return (0, r.jsxs)("ul", {
                    children: [c.map(e => (0, r.jsx)("li", {
                      children: (0, r.jsxs)("div", {
                        className: C.onboardingChangeLogItemTitle,
                        children: [(0, r.jsx)(v, {
                          actionType: R.vB8.CREATE,
                          targetType: a,
                          action: s
                        }), (0, r.jsx)(E.Text, {
                          variant: "text-md/normal",
                          children: S.intl.format(S.t.HlGndH, {
                            name: e.title
                          })
                        })]
                      })
                    }, e.channel_id)), d.map(e => (0, r.jsx)("li", {
                      children: (0, r.jsxs)("div", {
                        className: C.onboardingChangeLogItemTitle,
                        children: [(0, r.jsx)(v, {
                          actionType: R.vB8.DELETE,
                          targetType: a,
                          action: s
                        }), (0, r.jsx)(E.Text, {
                          variant: "text-md/normal",
                          children: S.intl.format(S.t["7pysg4"], {
                            name: e.title
                          })
                        })]
                      })
                    }, e.channel_id))]
                  })
                })(null != n ? n : [], l);
              default:
                return null
            }
          }(i, t);
          return null
        })(), N = e[i.key];
        return function(e) {
          var t, n;
          let {
            changeItem: i,
            subChanges: a,
            changeNumber: s,
            log: o,
            oldValue: u,
            newValue: c,
            change: A
          } = e;
          if (null == i) return console.warn("No change string for", A), null;
          let T = S.intl.format(i, {
            oldValue: u,
            newValue: c,
            count: Array.isArray(c) ? c.length : null,
            subtarget: null != (n = null != (t = o.options.subtarget) ? t : A.subtarget) ? n : null,
            newColorHook: (e, t) => U(t, A.newValue),
            newColorsHook: (e, t) => {
              let {
                primary_color: n,
                secondary_color: i,
                tertiary_color: a
              } = c;
              return (0, r.jsx)("span", {
                children: [n, i, a].filter(h.lm).map((e, n) => (0, r.jsxs)(l.Fragment, {
                  children: [(0, r.jsx)("span", {
                    className: C.colorsHook,
                    children: "".concat(n > 0 ? ", " : "").concat((0, d.Rf)(e).toUpperCase(), " ")
                  }), U(t, (0, d.Rf)(e))]
                }, n))
              }, t)
            },
            oldColorHook: (e, t) => U(t, A.oldValue),
            oldTagHook: (e, t) => (0, r.jsx)(m.Z, {
              tag: u,
              size: m.Z.Sizes.SMALL
            }, t),
            newTagHook: (e, t) => (0, r.jsx)(m.Z, {
              tag: c,
              size: m.Z.Sizes.SMALL
            }, t),
            oldEmojiHook: (e, t) => (0, r.jsx)(_.Z, {
              emojiId: u
            }, t),
            newEmojiHook: (e, t) => (0, r.jsx)(_.Z, {
              emojiId: c
            }, t),
            applicationHook: (e, t) => {
              var n;
              return (0, r.jsx)(b, {
                applicationId: null != (n = null == u ? true : u.application_id) ? n : null == c ? true : c.application_id
              }, t)
            }
          });
          return null == T ? null : (0, r.jsxs)("div", {
            className: C.detail,
            style: {
              position: "relative",
              top: 1
            },
            children: [(0, r.jsxs)(E.Text, {
              className: C.prefix,
              variant: "code",
              color: function(e) {
                switch (e) {
                  case R.vB8.CREATE:
                    return "text-feedback-positive";
                  case R.vB8.DELETE:
                    return "status-danger";
                  default:
                    return "text-feedback-warning"
                }
              }(o.actionType),
              children: [s < 10 ? "0".concat(s) : s, (0, r.jsx)("span", {
                className: C.dash,
                children: "—"
              })]
            }), (0, r.jsxs)("div", {
              className: C.change,
              children: [(0, r.jsx)("div", {
                className: C.changeStr,
                children: T
              }), null != a ? (0, r.jsx)("div", {
                children: a
              }) : null]
            })]
          }, s)
        }({
          changeItem: "function" == typeof N ? N(i) : N,
          subChanges: A,
          changeNumber: ++u,
          log: t,
          oldValue: a,
          newValue: s,
          change: i
        })
      })).filter(h.lm);
    return (0, r.jsx)(E.P3F, {
      onClick: i,
      className: a()(C.changeDetails, s),
      children: A
    })
  }, [t, n, i, s]);
  return l.useMemo(() => {
    switch (t.targetType) {
      case R.KFR.GUILD:
        return u(p.pY());
      case R.KFR.CHANNEL:
      case R.KFR.CHANNEL_OVERWRITE:
        return u(p.ML());
      case R.KFR.USER:
        return u(p.lU());
      case R.KFR.ROLE:
        return u(p.HE());
      case R.KFR.ONBOARDING_PROMPT:
        return u(p.oD());
      case R.KFR.GUILD_ONBOARDING:
        return u(p.EN());
      case R.KFR.HOME_SETTINGS:
        return u(p.hx());
      case R.KFR.INVITE:
        return u(p.HN());
      case R.KFR.WEBHOOK:
        return u(p.lR());
      case R.KFR.EMOJI:
        return u(p.N$());
      case R.KFR.STICKER:
        return u(p.Bq());
      case R.KFR.INTEGRATION:
        return u(p.K());
      case R.KFR.STAGE_INSTANCE:
        return u(p.C2());
      case R.KFR.GUILD_SCHEDULED_EVENT:
        return u(p.uB());
      case R.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
        return u(p.pi());
      case R.KFR.THREAD:
        return u(p.pA());
      case R.KFR.APPLICATION_COMMAND:
        return u(p.vm(t.changes));
      case R.KFR.AUTO_MODERATION_RULE:
        return u(p.rK());
      case R.KFR.GUILD_SOUNDBOARD:
        return u(p.C0());
      case R.KFR.VOICE_CHANNEL_STATUS:
        return u(p.F1());
      case R.KFR.GUILD_MEMBER_VERIFICATION:
        return u(p.JA());
      case R.KFR.GUILD_PROFILE:
        return u(p.zT())
    }
  }, [t.targetType, t.changes, u])
}