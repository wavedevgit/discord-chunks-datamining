/** Chunk was on 66201 **/
/** chunk id: 501801, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  mp: () => x,
  tP: () => b,
  xO: () => D
}), require("./539854.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  Chunk404211 = require("./404211.js");

function D(e, t) {
  let n = R.vc[e.targetType];
  return null != n && true === n[t.key]
}
let U = {
  [Chunk981631.vB8.CREATE]: Chunk404211.typeCreate,
  [Chunk981631.vB8.UPDATE]: Chunk404211.typeUpdate,
  [Chunk981631.vB8.DELETE]: Chunk404211.typeDelete
};

function L(e) {
  let {
    applicationId: t
  } = e, n = (0, A.q)(t);
  return null == n ? null : (0, r.jsx)(d.Text, {
    variant: "text-md/normal",
    children: n.name
  })
}

function M(e, t) {
  return (0, r.jsx)("div", {
    className: C.colorHook,
    style: {
      backgroundColor: t
    }
  }, e)
}
class x extends Chunk647438.PureComponent {
  render() {
    let {
      actionType: e,
      targetType: t,
      action: n,
      themeOverride: l
    } = this.props, i = null != Chunk647438 ? Chunk404211["themeOverride".concat((0, Chunk624138.De)(Chunk647438))] : null, a = s()(Chunk404211.icon, U[module], require === Chunk981631.rsA.MESSAGE_DELETE ? Chunk404211.targetMessage : require === Chunk981631.rsA.AUTO_MODERATION_BLOCK_MESSAGE || require === Chunk981631.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL || require === Chunk981631.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || require === Chunk981631.rsA.AUTO_MODERATION_QUARANTINE_USER ? Chunk404211.autoModerationBlockMessage : ({
      [Chunk981631.KFR.ALL]: Chunk404211.targetAll,
      [Chunk981631.KFR.GUILD]: Chunk404211.targetGuild,
      [Chunk981631.KFR.CHANNEL]: Chunk404211.targetChannel,
      [Chunk981631.KFR.CHANNEL_OVERWRITE]: Chunk404211.targetChannel,
      [Chunk981631.KFR.USER]: Chunk404211.targetMember,
      [Chunk981631.KFR.ROLE]: Chunk404211.targetRole,
      [Chunk981631.KFR.ONBOARDING_PROMPT]: Chunk404211.targetOnboarding,
      [Chunk981631.KFR.GUILD_ONBOARDING]: Chunk404211.targetOnboarding,
      [Chunk981631.KFR.HOME_SETTINGS]: Chunk404211.targetOnboarding,
      [Chunk981631.KFR.INTEGRATION]: Chunk404211.targetIntegration,
      [Chunk981631.KFR.INVITE]: Chunk404211.targetInvite,
      [Chunk981631.KFR.WEBHOOK]: Chunk404211.targetWebhook,
      [Chunk981631.KFR.EMOJI]: Chunk404211.targetEmoji,
      [Chunk981631.KFR.STICKER]: Chunk404211.targetSticker,
      [Chunk981631.KFR.STAGE_INSTANCE]: Chunk404211.targetStageInstance,
      [Chunk981631.KFR.GUILD_SCHEDULED_EVENT]: Chunk404211.targetGuildScheduledEvent,
      [Chunk981631.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION]: Chunk404211.targetGuildScheduledEvent,
      [Chunk981631.KFR.THREAD]: Chunk404211.thread,
      [Chunk981631.KFR.APPLICATION_COMMAND]: Chunk404211.applicationCommand,
      [Chunk981631.KFR.AUTO_MODERATION_RULE]: Chunk404211.autoModerationRule,
      [Chunk981631.KFR.GUILD_HOME]: Chunk404211.targetGuildHome,
      [Chunk981631.KFR.GUILD_SOUNDBOARD]: Chunk404211.targetGuildSoundboard,
      [Chunk981631.KFR.VOICE_CHANNEL_STATUS]: Chunk404211.targetChannel,
      [Chunk981631.KFR.GUILD_MEMBER_VERIFICATION]: Chunk404211.targetMember,
      [Chunk981631.KFR.GUILD_PROFILE]: Chunk404211.targetGuild
    })[exports], Chunk120356);
    return (0, Chunk951288.jsx)("div", {
      className: Chunk392711
    })
  }
}

function b(e) {
  let {
    log: t,
    guild: n,
    onContentClick: i,
    className: a
  } = e, u = l.useCallback(e => {
    if (null == t.changes) return null;
    let u = 0,
      A = o().flatten(t.changes.map(i => {
        if (D(t, i)) return null;
        let {
          oldValue: s,
          newValue: a
        } = (() => {
          if ((t.action === S.rsA.CHANNEL_UPDATE || t.action === S.rsA.CHANNEL_CREATE) && i.key === S.zUn.TYPE) {
            var e, n;
            return {
              oldValue: null != (e = i.oldValue) ? e : (0, N.a5)({
                type: i.oldValue
              }),
              newValue: null != (n = i.newValue) ? n : (0, N.a5)({
                type: i.newValue
              })
            }
          }
          if (t.action === S.rsA.MEMBER_UPDATE && i.key === S.zUn.COMMUNICATION_DISABLED_UNTIL) {
            let e = c()(i.newValue);
            return {
              oldValue: i.oldValue,
              newValue: e.isValid() ? e.calendar() : i.newValue
            }
          }
          return t.action === S.rsA.GUILD_UPDATE && i.key === S.zUn.OWNER_ID ? {
            oldValue: f.ZP.getUserTag(i.oldValue, {
              mode: "username"
            }),
            newValue: f.ZP.getUserTag(i.newValue, {
              mode: "username"
            })
          } : i
        })(), A = (() => {
          if (t.action === S.rsA.MEMBER_ROLE_UPDATE) return function(e) {
            let {
              newValue: t
            } = e;
            return Array.isArray(t) ? t.map(e => (0, r.jsx)("div", {
              className: C.subListItem,
              children: e.name
            }, e.id)) : null
          }(i);
          if (t.targetType === S.KFR.ROLE || t.action === S.rsA.CHANNEL_OVERWRITE_CREATE || t.action === S.rsA.CHANNEL_OVERWRITE_UPDATE) return function(e, t) {
            let {
              newValue: n
            } = e;
            return Array.isArray(n) ? n.map((e, n) => (0, r.jsx)("div", {
              className: C.subListItem,
              children: R.hQ(e, t)
            }, n)) : null
          }(i, t);
          if ((t.action === S.rsA.CHANNEL_UPDATE || t.action === S.rsA.THREAD_UPDATE) && i.key === S.zUn.FLAGS) return function(e) {
            let {
              newValue: t,
              oldValue: n
            } = e, l = [];
            return (Array.isArray(n) && (l = l.concat(n.map(e => (0, r.jsx)("div", {
              className: C.subListItem,
              children: R.cT(e)
            }, e)))), Array.isArray(t) && (l = l.concat(t.map(e => (0, r.jsx)("div", {
              className: C.subListItem,
              children: R.em(e)
            }, e)))), l.length > 0) ? l : null
          }(i);
          if ((t.action === S.rsA.ONBOARDING_PROMPT_UPDATE || t.action === S.rsA.ONBOARDING_PROMPT_CREATE) && i.key === S.zUn.OPTIONS) return function(e, t, n) {
            let {
              newValue: l,
              oldValue: i
            } = e, s = e => {
              var t;
              let r = null != n ? null == (t = m.Z.getRole(n.id, e)) ? true : t.name : true;
              return null == r ? null : "@".concat(r)
            }, a = e => {
              var t;
              let n = null == (t = I.Z.getChannel(e)) ? true : t.name;
              return null == n ? null : "#".concat(n)
            }, u = o().keyBy(null != i ? i : [], "id"), c = o().keyBy(null != l ? l : [], "id"), E = o().difference(Object.keys(c), Object.keys(u)).map(e => c[e]), _ = o().difference(Object.keys(u), Object.keys(c)).map(e => u[e]), A = o().intersection(Object.keys(c), Object.keys(u));
            return (0, r.jsxs)("ul", {
              className: C.onboardingChangeLogContainer,
              children: [E.map(e => {
                let {
                  role_ids: n,
                  channel_ids: l,
                  title: i,
                  id: o
                } = e, u = (null != n ? n : []).map(s).filter(h.lm), c = (null != l ? l : []).map(a).filter(h.lm);
                return (0, r.jsxs)("li", {
                  children: [(0, r.jsxs)("div", {
                    className: C.onboardingChangeLogItemTitle,
                    children: [(0, r.jsx)(x, {
                      actionType: S.vB8.CREATE,
                      targetType: t.targetType,
                      action: t.action
                    }), (0, r.jsx)(d.Text, {
                      variant: "text-md/normal",
                      children: p.intl.format(p.t.CZ1tyo, {
                        title: i
                      })
                    })]
                  }), (0, r.jsxs)("div", {
                    className: C.onboardingChangeLogItemChanges,
                    children: [u.length > 0 && (0, r.jsx)(d.Text, {
                      variant: "text-md/normal",
                      children: p.intl.format(p.t["gt/5z1"], {
                        roles: u.join(", ")
                      })
                    }), c.length > 0 && (0, r.jsx)(d.Text, {
                      variant: "text-md/normal",
                      children: p.intl.format(p.t["4q006W"], {
                        channels: c.join(", ")
                      })
                    })]
                  })]
                }, o)
              }), _.map(e => (0, r.jsx)("li", {
                children: (0, r.jsxs)("div", {
                  className: C.onboardingChangeLogItemTitle,
                  children: [(0, r.jsx)(x, {
                    actionType: S.vB8.DELETE,
                    targetType: t.targetType,
                    action: t.action
                  }), (0, r.jsx)(d.Text, {
                    variant: "text-md/normal",
                    children: p.intl.format(p.t["m3dt+K"], {
                      title: e.title
                    })
                  })]
                })
              }, e.id)), A.map(e => ((e, n) => {
                let {
                  title: l,
                  id: i
                } = n, u = e.role_ids.map(s).filter(h.lm), c = e.channel_ids.map(a).filter(h.lm), E = n.role_ids.map(s).filter(h.lm), _ = n.channel_ids.map(a).filter(h.lm), A = o().difference(E, u), T = o().difference(u, E), I = o().difference(_, c), m = o().difference(c, _), g = [];
                return (o().isEqual(e.title, n.title) || g.push("title"), o().isEqual(e.description, n.description) || g.push("description"), 0 === A.length && 0 === T.length && 0 === I.length && 0 === m.length && 0 === g.length) ? null : (0, r.jsxs)("li", {
                  children: [(0, r.jsxs)("div", {
                    className: C.onboardingChangeLogItemTitle,
                    children: [(0, r.jsx)(x, {
                      actionType: S.vB8.UPDATE,
                      targetType: t.targetType,
                      action: t.action
                    }), (0, r.jsx)(d.Text, {
                      variant: "text-md/normal",
                      children: p.intl.format(p.t["WZO+ia"], {
                        title: l
                      })
                    })]
                  }), (0, r.jsxs)("div", {
                    className: C.onboardingChangeLogItemChanges,
                    children: [A.length > 0 && (0, r.jsx)(d.Text, {
                      variant: "text-md/normal",
                      children: p.intl.format(p.t["R+km+d"], {
                        roles: A.join(", ")
                      })
                    }), T.length > 0 && (0, r.jsx)(d.Text, {
                      variant: "text-md/normal",
                      children: p.intl.format(p.t.xIVRoU, {
                        roles: T.join(", ")
                      })
                    }), I.length > 0 && (0, r.jsx)(d.Text, {
                      variant: "text-md/normal",
                      children: p.intl.format(p.t.iYowX4, {
                        channels: I.join(", ")
                      })
                    }), m.length > 0 && (0, r.jsx)(d.Text, {
                      variant: "text-md/normal",
                      children: p.intl.format(p.t.JLdJpL, {
                        channels: m.join(", ")
                      })
                    }), g.map((t, l) => (0, r.jsx)(d.Text, {
                      variant: "text-md/normal",
                      children: p.intl.format(p.t["0698za"], {
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
          if (t.action === S.rsA.HOME_SETTINGS_CREATE || t.action === S.rsA.HOME_SETTINGS_UPDATE) return function(e, t) {
            let {
              oldValue: n,
              newValue: l,
              key: i
            } = e, {
              targetType: s,
              action: a
            } = t;
            switch (i) {
              case S.zUn.WELCOME_MESSAGE:
                return ((e, t) => {
                  var n, l, i, s, a;
                  let o = g.default.getUser(null == t || null == (n = t.author_ids) ? true : n[0]),
                    u = g.default.getUser(null == (l = e.author_ids) ? true : l[0]),
                    c = (null == o ? true : o.id) !== (null == u ? true : u.id) ? (0, r.jsx)("li", {
                      children: (0, r.jsx)("div", {
                        className: C.onboardingChangeLogItemTitle,
                        children: (0, r.jsx)(d.Text, {
                          variant: "text-md/normal",
                          children: p.intl.format(p.t["PrOzA+"], {
                            oldUser: null != (i = null == o ? true : o.username) ? i : p.intl.string(p.t.PoWNfe),
                            newUser: null != (s = null == u ? true : u.username) ? s : p.intl.string(p.t.PoWNfe)
                          })
                        })
                      })
                    }) : null,
                    E = (null == t ? true : t.message) !== e.message ? (0, r.jsx)("li", {
                      children: (0, r.jsx)("div", {
                        className: C.onboardingChangeLogItemTitle,
                        children: (0, r.jsx)(d.Text, {
                          variant: "text-md/normal",
                          children: p.intl.format(p.t.oB7rBb, {
                            oldMessage: null != (a = null == t ? true : t.message) ? a : p.intl.string(p.t.PoWNfe),
                            newMessage: e.message
                          })
                        })
                      })
                    }) : null;
                  return (0, r.jsxs)("ul", {
                    children: [c, E]
                  })
                })(l, n);
              case S.zUn.NEW_MEMBER_ACTIONS:
                return ((e, t) => {
                  let n = e.map(e => e.channel_id),
                    l = t.map(e => e.channel_id),
                    i = o().difference(l, n),
                    u = o().difference(n, l),
                    c = t.filter(e => i.includes(e.channel_id)),
                    E = e.filter(e => u.includes(e.channel_id));
                  return (0, r.jsxs)("ul", {
                    children: [c.map(e => (0, r.jsx)("li", {
                      children: (0, r.jsxs)("div", {
                        className: C.onboardingChangeLogItemTitle,
                        children: [(0, r.jsx)(x, {
                          actionType: S.vB8.CREATE,
                          targetType: s,
                          action: a
                        }), (0, r.jsx)(d.Text, {
                          variant: "text-md/normal",
                          children: p.intl.format(p.t.oFSu66, {
                            name: e.title
                          })
                        })]
                      })
                    }, e.channel_id)), E.map(e => (0, r.jsx)("li", {
                      children: (0, r.jsxs)("div", {
                        className: C.onboardingChangeLogItemTitle,
                        children: [(0, r.jsx)(x, {
                          actionType: S.vB8.DELETE,
                          targetType: s,
                          action: a
                        }), (0, r.jsx)(d.Text, {
                          variant: "text-md/normal",
                          children: p.intl.format(p.t.GssWar, {
                            name: e.title
                          })
                        })]
                      })
                    }, e.channel_id))]
                  })
                })(null != n ? n : [], l);
              case S.zUn.RESOURCE_CHANNELS:
                return ((e, t) => {
                  let n = e.map(e => e.channel_id),
                    l = t.map(e => e.channel_id),
                    i = o().difference(l, n),
                    u = o().difference(n, l),
                    c = t.filter(e => i.includes(e.channel_id)),
                    E = e.filter(e => u.includes(e.channel_id));
                  return (0, r.jsxs)("ul", {
                    children: [c.map(e => (0, r.jsx)("li", {
                      children: (0, r.jsxs)("div", {
                        className: C.onboardingChangeLogItemTitle,
                        children: [(0, r.jsx)(x, {
                          actionType: S.vB8.CREATE,
                          targetType: s,
                          action: a
                        }), (0, r.jsx)(d.Text, {
                          variant: "text-md/normal",
                          children: p.intl.format(p.t.HlGndE, {
                            name: e.title
                          })
                        })]
                      })
                    }, e.channel_id)), E.map(e => (0, r.jsx)("li", {
                      children: (0, r.jsxs)("div", {
                        className: C.onboardingChangeLogItemTitle,
                        children: [(0, r.jsx)(x, {
                          actionType: S.vB8.DELETE,
                          targetType: s,
                          action: a
                        }), (0, r.jsx)(d.Text, {
                          variant: "text-md/normal",
                          children: p.intl.format(p.t["7pysg6"], {
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
        })(), O = e[i.key];
        return function(e) {
          var t, n;
          let {
            changeItem: i,
            subChanges: s,
            changeNumber: a,
            log: o,
            oldValue: u,
            newValue: c,
            change: A
          } = e;
          if (null == i) return console.warn("No change string for", A), null;
          let I = p.intl.format(i, {
            oldValue: u,
            newValue: c,
            count: Array.isArray(c) ? c.length : 0,
            subtarget: null != (n = null != (t = o.options.subtarget) ? t : A.subtarget) ? n : "",
            newColorHook: (e, t) => M(t, A.newValue),
            newColorsHook: (e, t) => {
              let {
                primary_color: n,
                secondary_color: i,
                tertiary_color: s
              } = c;
              return (0, r.jsx)("span", {
                children: [n, i, s].filter(h.lm).map((e, n) => (0, r.jsxs)(l.Fragment, {
                  children: [(0, r.jsx)("span", {
                    className: C.colorsHook,
                    children: "".concat(n > 0 ? ", " : "").concat((0, E.Rf)(e).toUpperCase(), " ")
                  }), M(t, (0, E.Rf)(e))]
                }, n))
              }, t)
            },
            oldColorHook: (e, t) => M(t, A.oldValue),
            oldTagHook: (e, t) => (0, r.jsx)(T.Z, {
              tag: u,
              size: T.Z.Sizes.SMALL
            }, t),
            newTagHook: (e, t) => (0, r.jsx)(T.Z, {
              tag: c,
              size: T.Z.Sizes.SMALL
            }, t),
            oldEmojiHook: (e, t) => (0, r.jsx)(_.Z, {
              emojiId: u
            }, t),
            newEmojiHook: (e, t) => (0, r.jsx)(_.Z, {
              emojiId: c
            }, t),
            applicationHook: (e, t) => {
              var n;
              return (0, r.jsx)(L, {
                applicationId: null != (n = null == u ? true : u.application_id) ? n : null == c ? true : c.application_id
              }, t)
            }
          });
          return null == I ? null : (0, r.jsxs)("div", {
            className: C.detail,
            style: {
              position: "relative",
              top: 1
            },
            children: [(0, r.jsxs)(d.Text, {
              className: C.prefix,
              variant: "code",
              color: function(e) {
                switch (e) {
                  case S.vB8.CREATE:
                    return "text-feedback-positive";
                  case S.vB8.DELETE:
                    return "status-danger";
                  default:
                    return "text-feedback-warning"
                }
              }(o.actionType),
              children: [a < 10 ? "0".concat(a) : a, (0, r.jsx)("span", {
                className: C.dash,
                children: "—"
              })]
            }), (0, r.jsxs)("div", {
              className: C.change,
              children: [(0, r.jsx)("div", {
                className: C.changeStr,
                children: I
              }), null != s ? (0, r.jsx)("div", {
                children: s
              }) : null]
            })]
          }, a)
        }({
          changeItem: "function" == typeof O ? O(i) : O,
          subChanges: A,
          changeNumber: ++u,
          log: t,
          oldValue: s,
          newValue: a,
          change: i
        })
      })).filter(h.lm);
    return (0, r.jsx)(d.P3F, {
      onClick: i,
      className: s()(C.changeDetails, a),
      children: A
    })
  }, [t, n, i, a]);
  return l.useMemo(() => {
    switch (t.targetType) {
      case S.KFR.GUILD:
        return u(R.pY());
      case S.KFR.CHANNEL:
      case S.KFR.CHANNEL_OVERWRITE:
        return u(R.ML());
      case S.KFR.USER:
        return u(R.lU());
      case S.KFR.ROLE:
        return u(R.HE());
      case S.KFR.ONBOARDING_PROMPT:
        return u(R.oD());
      case S.KFR.GUILD_ONBOARDING:
        return u(R.EN());
      case S.KFR.HOME_SETTINGS:
        return u(R.hx());
      case S.KFR.INVITE:
        return u(R.HN());
      case S.KFR.WEBHOOK:
        return u(R.lR());
      case S.KFR.EMOJI:
        return u(R.N$());
      case S.KFR.STICKER:
        return u(R.Bq());
      case S.KFR.INTEGRATION:
        return u(R.K());
      case S.KFR.STAGE_INSTANCE:
        return u(R.C2());
      case S.KFR.GUILD_SCHEDULED_EVENT:
        return u(R.uB());
      case S.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
        return u(R.pi());
      case S.KFR.THREAD:
        return u(R.pA());
      case S.KFR.APPLICATION_COMMAND:
        return u(R.vm(t.changes));
      case S.KFR.AUTO_MODERATION_RULE:
        return u(R.rK());
      case S.KFR.GUILD_SOUNDBOARD:
        return u(R.C0());
      case S.KFR.VOICE_CHANNEL_STATUS:
        return u(R.F1());
      case S.KFR.GUILD_MEMBER_VERIFICATION:
        return u(R.JA());
      case S.KFR.GUILD_PROFILE:
        return u(R.zT())
    }
  }, [t.targetType, t.changes, u])
}