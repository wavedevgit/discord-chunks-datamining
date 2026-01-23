/** Chunk was on 94503 **/
/** chunk id: 438407, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Hg: () => x,
  kW: () => D,
  ri: () => M
}), require("./321073.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk989349 = require("./989349.js"),
  c = require.n(Chunk989349),
  Chunk317097 = require("./317097.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk429913 = require("./429913.js"),
  Chunk376310 = require("./376310.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk317525 = require("./317525.js"),
  Chunk287809 = require("./287809.js"),
  Chunk147036 = require("./147036.js"),
  Chunk403362 = require("./403362.js"),
  Chunk240248 = require("./240248.js"),
  Chunk427262 = require("./427262.js"),
  Chunk276373 = require("./276373.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk159529 = require("./159529.js");

function D(e, t) {
  let n = p.Yj[e.targetType];
  return null != n && true === n[t.key]
}
let C = {
  [Chunk652215.RWi.CREATE]: Chunk159529.typeCreate,
  [Chunk652215.RWi.UPDATE]: Chunk159529.typeUpdate,
  [Chunk652215.RWi.DELETE]: Chunk159529.typeDelete
};

function L(e) {
  let {
    applicationId: t
  } = e, n = (0, g.h)(t);
  return null == n ? null : (0, l.jsx)(d.Text, {
    variant: "text-md/normal",
    children: n.name
  })
}

function b(e, t) {
  return (0, l.jsx)("div", {
    className: R.colorHook,
    style: {
      backgroundColor: t
    }
  }, e)
}
class x extends Chunk64700.PureComponent {
  render() {
    let {
      actionType: e,
      targetType: t,
      action: n,
      themeOverride: r
    } = this.props, a = null != r ? R["themeOverride".concat((0, N.$G)(r))] : null, s = i()(R.icon, C[e], n === S.F_X.MESSAGE_DELETE ? R.targetMessage : n === S.F_X.AUTO_MODERATION_BLOCK_MESSAGE || n === S.F_X.AUTO_MODERATION_FLAG_TO_CHANNEL || n === S.F_X.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || n === S.F_X.AUTO_MODERATION_QUARANTINE_USER ? R.autoModerationBlockMessage : ({
      [S.GaG.ALL]: R.targetAll,
      [S.GaG.GUILD]: R.targetGuild,
      [S.GaG.CHANNEL]: R.targetChannel,
      [S.GaG.CHANNEL_OVERWRITE]: R.targetChannel,
      [S.GaG.USER]: R.targetMember,
      [S.GaG.ROLE]: R.targetRole,
      [S.GaG.ONBOARDING_PROMPT]: R.targetOnboarding,
      [S.GaG.GUILD_ONBOARDING]: R.targetOnboarding,
      [S.GaG.HOME_SETTINGS]: R.targetOnboarding,
      [S.GaG.INTEGRATION]: R.targetIntegration,
      [S.GaG.INVITE]: R.targetInvite,
      [S.GaG.WEBHOOK]: R.targetWebhook,
      [S.GaG.EMOJI]: R.targetEmoji,
      [S.GaG.STICKER]: R.targetSticker,
      [S.GaG.STAGE_INSTANCE]: R.targetStageInstance,
      [S.GaG.GUILD_SCHEDULED_EVENT]: R.targetGuildScheduledEvent,
      [S.GaG.GUILD_SCHEDULED_EVENT_EXCEPTION]: R.targetGuildScheduledEvent,
      [S.GaG.THREAD]: R.thread,
      [S.GaG.APPLICATION_COMMAND]: R.applicationCommand,
      [S.GaG.AUTO_MODERATION_RULE]: R.autoModerationRule,
      [S.GaG.GUILD_HOME]: R.targetGuildHome,
      [S.GaG.GUILD_SOUNDBOARD]: R.targetGuildSoundboard,
      [S.GaG.VOICE_CHANNEL_STATUS]: R.targetChannel,
      [S.GaG.GUILD_MEMBER_VERIFICATION]: R.targetMember,
      [S.GaG.GUILD_PROFILE]: R.targetGuild
    })[t], a);
    return (0, l.jsx)("div", {
      className: s
    })
  }
}

function M(e) {
  let {
    log: t,
    guild: n,
    onContentClick: a,
    className: s
  } = e, u = r.useCallback(e => {
    if (null == t.changes) return null;
    let u = 0,
      g = o().flatten(t.changes.map(a => {
        if (D(t, a)) return null;
        let {
          oldValue: i,
          newValue: s
        } = (() => {
          if ((t.action === S.F_X.CHANNEL_UPDATE || t.action === S.F_X.CHANNEL_CREATE) && a.key === S.gGk.TYPE) {
            var e, n;
            return {
              oldValue: null != (e = a.oldValue) ? e : (0, O.Jg)({
                type: a.oldValue
              }),
              newValue: null != (n = a.newValue) ? n : (0, O.Jg)({
                type: a.newValue
              })
            }
          }
          if (t.action === S.F_X.MEMBER_UPDATE && a.key === S.gGk.COMMUNICATION_DISABLED_UNTIL) {
            let e = c()(a.newValue);
            return {
              oldValue: a.oldValue,
              newValue: e.isValid() ? e.calendar() : a.newValue
            }
          }
          return t.action === S.F_X.GUILD_UPDATE && a.key === S.gGk.OWNER_ID ? {
            oldValue: f.Ay.getUserTag(a.oldValue, {
              mode: "username"
            }),
            newValue: f.Ay.getUserTag(a.newValue, {
              mode: "username"
            })
          } : a
        })(), g = (() => {
          if (t.action === S.F_X.MEMBER_ROLE_UPDATE) return function(e) {
            let {
              newValue: t
            } = e;
            return Array.isArray(t) ? t.map(e => (0, l.jsx)("div", {
              className: R.subListItem,
              children: e.name
            }, e.id)) : null
          }(a);
          if (t.targetType === S.GaG.ROLE || t.action === S.F_X.CHANNEL_OVERWRITE_CREATE || t.action === S.F_X.CHANNEL_OVERWRITE_UPDATE) return function(e, t) {
            let {
              newValue: n
            } = e;
            return Array.isArray(n) ? n.map((e, n) => (0, l.jsx)("div", {
              className: R.subListItem,
              children: p.Sn(e, t)
            }, n)) : null
          }(a, t);
          if ((t.action === S.F_X.CHANNEL_UPDATE || t.action === S.F_X.THREAD_UPDATE) && a.key === S.gGk.FLAGS) return function(e) {
            let {
              newValue: t,
              oldValue: n
            } = e, r = [];
            return (Array.isArray(n) && (r = r.concat(n.map(e => (0, l.jsx)("div", {
              className: R.subListItem,
              children: p.eA(e)
            }, e)))), Array.isArray(t) && (r = r.concat(t.map(e => (0, l.jsx)("div", {
              className: R.subListItem,
              children: p.sU(e)
            }, e)))), r.length > 0) ? r : null
          }(a);
          if ((t.action === S.F_X.ONBOARDING_PROMPT_UPDATE || t.action === S.F_X.ONBOARDING_PROMPT_CREATE) && a.key === S.gGk.OPTIONS) return function(e, t, n) {
            let {
              newValue: r,
              oldValue: a
            } = e, i = e => {
              var t;
              let l = null != n ? null == (t = h.A.getRole(n.id, e)) ? true : t.name : true;
              return null == l ? null : "@".concat(l)
            }, s = e => {
              var t;
              let n = null == (t = T.A.getChannel(e)) ? true : t.name;
              return null == n ? null : "#".concat(n)
            }, u = o().keyBy(null != a ? a : [], "id"), c = o().keyBy(null != r ? r : [], "id"), E = o().difference(Object.keys(c), Object.keys(u)).map(e => c[e]), _ = o().difference(Object.keys(u), Object.keys(c)).map(e => u[e]), g = o().intersection(Object.keys(c), Object.keys(u));
            return (0, l.jsxs)("ul", {
              className: R.onboardingChangeLogContainer,
              children: [E.map(e => {
                let {
                  role_ids: n,
                  channel_ids: r,
                  title: a,
                  id: o
                } = e, u = (null != n ? n : []).map(i).filter(m.Vq), c = (null != r ? r : []).map(s).filter(m.Vq);
                return (0, l.jsxs)("li", {
                  children: [(0, l.jsxs)("div", {
                    className: R.onboardingChangeLogItemTitle,
                    children: [(0, l.jsx)(x, {
                      actionType: S.RWi.CREATE,
                      targetType: t.targetType,
                      action: t.action
                    }), (0, l.jsx)(d.Text, {
                      variant: "text-md/normal",
                      children: G.intl.format(G.t.CZ1tyo, {
                        title: a
                      })
                    })]
                  }), (0, l.jsxs)("div", {
                    className: R.onboardingChangeLogItemChanges,
                    children: [u.length > 0 && (0, l.jsx)(d.Text, {
                      variant: "text-md/normal",
                      children: G.intl.format(G.t["gt/5z1"], {
                        roles: u.join(", ")
                      })
                    }), c.length > 0 && (0, l.jsx)(d.Text, {
                      variant: "text-md/normal",
                      children: G.intl.format(G.t["4q006W"], {
                        channels: c.join(", ")
                      })
                    })]
                  })]
                }, o)
              }), _.map(e => (0, l.jsx)("li", {
                children: (0, l.jsxs)("div", {
                  className: R.onboardingChangeLogItemTitle,
                  children: [(0, l.jsx)(x, {
                    actionType: S.RWi.DELETE,
                    targetType: t.targetType,
                    action: t.action
                  }), (0, l.jsx)(d.Text, {
                    variant: "text-md/normal",
                    children: G.intl.format(G.t["m3dt+K"], {
                      title: e.title
                    })
                  })]
                })
              }, e.id)), g.map(e => ((e, n) => {
                let {
                  title: r,
                  id: a
                } = n, u = e.role_ids.map(i).filter(m.Vq), c = e.channel_ids.map(s).filter(m.Vq), E = n.role_ids.map(i).filter(m.Vq), _ = n.channel_ids.map(s).filter(m.Vq), g = o().difference(E, u), A = o().difference(u, E), T = o().difference(_, c), h = o().difference(c, _), I = [];
                return (o().isEqual(e.title, n.title) || I.push("title"), o().isEqual(e.description, n.description) || I.push("description"), 0 === g.length && 0 === A.length && 0 === T.length && 0 === h.length && 0 === I.length) ? null : (0, l.jsxs)("li", {
                  children: [(0, l.jsxs)("div", {
                    className: R.onboardingChangeLogItemTitle,
                    children: [(0, l.jsx)(x, {
                      actionType: S.RWi.UPDATE,
                      targetType: t.targetType,
                      action: t.action
                    }), (0, l.jsx)(d.Text, {
                      variant: "text-md/normal",
                      children: G.intl.format(G.t["WZO+ia"], {
                        title: r
                      })
                    })]
                  }), (0, l.jsxs)("div", {
                    className: R.onboardingChangeLogItemChanges,
                    children: [g.length > 0 && (0, l.jsx)(d.Text, {
                      variant: "text-md/normal",
                      children: G.intl.format(G.t["R+km+d"], {
                        roles: g.join(", ")
                      })
                    }), A.length > 0 && (0, l.jsx)(d.Text, {
                      variant: "text-md/normal",
                      children: G.intl.format(G.t.xIVRoU, {
                        roles: A.join(", ")
                      })
                    }), T.length > 0 && (0, l.jsx)(d.Text, {
                      variant: "text-md/normal",
                      children: G.intl.format(G.t.iYowX4, {
                        channels: T.join(", ")
                      })
                    }), h.length > 0 && (0, l.jsx)(d.Text, {
                      variant: "text-md/normal",
                      children: G.intl.format(G.t.JLdJpL, {
                        channels: h.join(", ")
                      })
                    }), I.map((t, r) => (0, l.jsx)(d.Text, {
                      variant: "text-md/normal",
                      children: G.intl.format(G.t["0698za"], {
                        key: t,
                        oldValue: e[t],
                        newValue: n[t]
                      })
                    }, r))]
                  })]
                }, a)
              })(u[e], c[e]))]
            }, "options")
          }(a, t, n);
          if (t.action === S.F_X.HOME_SETTINGS_CREATE || t.action === S.F_X.HOME_SETTINGS_UPDATE) return function(e, t) {
            var n, r, a, i, s, u, c;
            let {
              oldValue: E,
              newValue: _,
              key: g
            } = e, {
              targetType: A,
              action: T
            } = t;
            switch (g) {
              case S.gGk.WELCOME_MESSAGE:
                let h, O, m, N;
                return h = I.default.getUser(null == E || null == (i = E.author_ids) ? true : i[0]), O = I.default.getUser(null == (s = _.author_ids) ? true : s[0]), m = (null == h ? true : h.id) !== (null == O ? true : O.id) ? (0, l.jsx)("li", {
                  children: (0, l.jsx)("div", {
                    className: R.onboardingChangeLogItemTitle,
                    children: (0, l.jsx)(d.Text, {
                      variant: "text-md/normal",
                      children: G.intl.format(G.t["PrOzA+"], {
                        oldUser: null != (n = null == h ? true : h.username) ? n : G.intl.string(G.t.PoWNfe),
                        newUser: null != (r = null == O ? true : O.username) ? r : G.intl.string(G.t.PoWNfe)
                      })
                    })
                  })
                }) : null, N = (null == E ? true : E.message) !== _.message ? (0, l.jsx)("li", {
                  children: (0, l.jsx)("div", {
                    className: R.onboardingChangeLogItemTitle,
                    children: (0, l.jsx)(d.Text, {
                      variant: "text-md/normal",
                      children: G.intl.format(G.t.oB7rBb, {
                        oldMessage: null != (a = null == E ? true : E.message) ? a : G.intl.string(G.t.PoWNfe),
                        newMessage: _.message
                      })
                    })
                  })
                }) : null, (0, l.jsxs)("ul", {
                  children: [m, N]
                });
              case S.gGk.NEW_MEMBER_ACTIONS:
                let f, p, D, C, L, b;
                return f = (u = null != E ? E : []).map(e => e.channel_id), p = _.map(e => e.channel_id), D = o().difference(p, f), C = o().difference(f, p), L = _.filter(e => D.includes(e.channel_id)), b = u.filter(e => C.includes(e.channel_id)), (0, l.jsxs)("ul", {
                  children: [L.map(e => (0, l.jsx)("li", {
                    children: (0, l.jsxs)("div", {
                      className: R.onboardingChangeLogItemTitle,
                      children: [(0, l.jsx)(x, {
                        actionType: S.RWi.CREATE,
                        targetType: A,
                        action: T
                      }), (0, l.jsx)(d.Text, {
                        variant: "text-md/normal",
                        children: G.intl.format(G.t.oFSu66, {
                          name: e.title
                        })
                      })]
                    })
                  }, e.channel_id)), b.map(e => (0, l.jsx)("li", {
                    children: (0, l.jsxs)("div", {
                      className: R.onboardingChangeLogItemTitle,
                      children: [(0, l.jsx)(x, {
                        actionType: S.RWi.DELETE,
                        targetType: A,
                        action: T
                      }), (0, l.jsx)(d.Text, {
                        variant: "text-md/normal",
                        children: G.intl.format(G.t.GssWar, {
                          name: e.title
                        })
                      })]
                    })
                  }, e.channel_id))]
                });
              case S.gGk.RESOURCE_CHANNELS:
                let M, v, j, U, y, k;
                return M = (c = null != E ? E : []).map(e => e.channel_id), v = _.map(e => e.channel_id), j = o().difference(v, M), U = o().difference(M, v), y = _.filter(e => j.includes(e.channel_id)), k = c.filter(e => U.includes(e.channel_id)), (0, l.jsxs)("ul", {
                  children: [y.map(e => (0, l.jsx)("li", {
                    children: (0, l.jsxs)("div", {
                      className: R.onboardingChangeLogItemTitle,
                      children: [(0, l.jsx)(x, {
                        actionType: S.RWi.CREATE,
                        targetType: A,
                        action: T
                      }), (0, l.jsx)(d.Text, {
                        variant: "text-md/normal",
                        children: G.intl.format(G.t.HlGndE, {
                          name: e.title
                        })
                      })]
                    })
                  }, e.channel_id)), k.map(e => (0, l.jsx)("li", {
                    children: (0, l.jsxs)("div", {
                      className: R.onboardingChangeLogItemTitle,
                      children: [(0, l.jsx)(x, {
                        actionType: S.RWi.DELETE,
                        targetType: A,
                        action: T
                      }), (0, l.jsx)(d.Text, {
                        variant: "text-md/normal",
                        children: G.intl.format(G.t["7pysg6"], {
                          name: e.title
                        })
                      })]
                    })
                  }, e.channel_id))]
                });
              default:
                return null
            }
          }(a, t);
          return null
        })(), N = e[a.key];
        return function(e) {
          var t, n;
          let {
            changeItem: a,
            subChanges: i,
            changeNumber: s,
            log: o,
            oldValue: u,
            newValue: c,
            change: g
          } = e;
          if (null == a) return console.warn("No change string for", g), null;
          let T = G.intl.format(a, {
            oldValue: u,
            newValue: c,
            count: Array.isArray(c) ? c.length : 0,
            subtarget: null != (t = null != (n = o.options.subtarget) ? n : g.subtarget) ? t : "",
            newColorHook: (e, t) => b(t, g.newValue),
            newColorsHook: (e, t) => {
              let {
                primary_color: n,
                secondary_color: a,
                tertiary_color: i
              } = c;
              return (0, l.jsx)("span", {
                children: [n, a, i].filter(m.Vq).map((e, n) => (0, l.jsxs)(r.Fragment, {
                  children: [(0, l.jsx)("span", {
                    className: R.colorsHook,
                    children: "".concat(n > 0 ? ", " : "").concat((0, E.Hl)(e).toUpperCase(), " ")
                  }), b(t, (0, E.Hl)(e))]
                }, n))
              }, t)
            },
            oldColorHook: (e, t) => b(t, g.oldValue),
            oldTagHook: (e, t) => (0, l.jsx)(A.A, {
              tag: u,
              size: A.A.Sizes.SMALL
            }, t),
            newTagHook: (e, t) => (0, l.jsx)(A.A, {
              tag: c,
              size: A.A.Sizes.SMALL
            }, t),
            oldEmojiHook: (e, t) => (0, l.jsx)(_.A, {
              emojiId: u
            }, t),
            newEmojiHook: (e, t) => (0, l.jsx)(_.A, {
              emojiId: c
            }, t),
            applicationHook: (e, t) => {
              var n;
              return (0, l.jsx)(L, {
                applicationId: null != (n = null == u ? true : u.application_id) ? n : null == c ? true : c.application_id
              }, t)
            }
          });
          return null == T ? null : (0, l.jsxs)("div", {
            className: R.detail,
            style: {
              position: "relative",
              top: 1
            },
            children: [(0, l.jsxs)(d.Text, {
              className: R.prefix,
              variant: "code",
              color: function(e) {
                switch (e) {
                  case S.RWi.CREATE:
                    return "text-feedback-positive";
                  case S.RWi.DELETE:
                    return "text-feedback-critical";
                  default:
                    return "text-feedback-warning"
                }
              }(o.actionType),
              children: [s < 10 ? "0".concat(s) : s, (0, l.jsx)("span", {
                className: R.dash,
                children: "—"
              })]
            }), (0, l.jsxs)("div", {
              className: R.change,
              children: [(0, l.jsx)("div", {
                className: R.changeStr,
                children: T
              }), null != i ? (0, l.jsx)("div", {
                children: i
              }) : null]
            })]
          }, s)
        }({
          changeItem: "function" == typeof N ? N(a) : N,
          subChanges: g,
          changeNumber: ++u,
          log: t,
          oldValue: i,
          newValue: s,
          change: a
        })
      })).filter(m.Vq);
    return (0, l.jsx)(d.DUT, {
      onClick: a,
      className: i()(R.changeDetails, s),
      children: g
    })
  }, [t, n, a, s]);
  return r.useMemo(() => {
    switch (t.targetType) {
      case S.GaG.GUILD:
        return u(p.UM());
      case S.GaG.CHANNEL:
      case S.GaG.CHANNEL_OVERWRITE:
        return u(p.gW());
      case S.GaG.USER:
        return u(p.qM());
      case S.GaG.ROLE:
        return u(p.nt());
      case S.GaG.ONBOARDING_PROMPT:
        return u(p.Iv());
      case S.GaG.GUILD_ONBOARDING:
        return u(p.Kj());
      case S.GaG.HOME_SETTINGS:
        return u(p.D_());
      case S.GaG.INVITE:
        return u(p.gQ());
      case S.GaG.WEBHOOK:
        return u(p.CI());
      case S.GaG.EMOJI:
        return u(p.XB());
      case S.GaG.STICKER:
        return u(p.eN());
      case S.GaG.INTEGRATION:
        return u(p.rt());
      case S.GaG.STAGE_INSTANCE:
        return u(p.Yx());
      case S.GaG.GUILD_SCHEDULED_EVENT:
        return u(p.X9());
      case S.GaG.GUILD_SCHEDULED_EVENT_EXCEPTION:
        return u(p.Sy());
      case S.GaG.THREAD:
        return u(p.pu());
      case S.GaG.APPLICATION_COMMAND:
        return u(p.$b(t.changes));
      case S.GaG.AUTO_MODERATION_RULE:
        return u(p.qd());
      case S.GaG.GUILD_SOUNDBOARD:
        return u(p.z3());
      case S.GaG.VOICE_CHANNEL_STATUS:
        return u(p.Kw());
      case S.GaG.GUILD_MEMBER_VERIFICATION:
        return u(p.Uq());
      case S.GaG.GUILD_PROFILE:
        return u(p.Df())
    }
  }, [t.targetType, t.changes, u])
}