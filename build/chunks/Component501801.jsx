/** Chunk was on 78079 **/
/** chunk id: 501801, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  mp: () => V,
  tP: () => m,
  xO: () => O
}), require("./539854.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk913527 = require("./913527.js"),
  g = require.n(Chunk913527),
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

function O(A, e) {
  let t = p.vc[A.targetType];
  return null != t && true === t[e.key]
}
let Q = {
  [Chunk981631.vB8.CREATE]: Chunk404211.typeCreate,
  [Chunk981631.vB8.UPDATE]: Chunk404211.typeUpdate,
  [Chunk981631.vB8.DELETE]: Chunk404211.typeDelete
};

function P(A) {
  let {
    applicationId: e
  } = A, t = (0, u.q)(e);
  return null == t ? null : (0, n.jsx)(f.Text, {
    variant: "text-md/normal",
    children: t.name
  })
}

function j(A, e) {
  return (0, n.jsx)("div", {
    className: b.colorHook,
    style: {
      backgroundColor: e
    }
  }, A)
}
class V extends Chunk73800.PureComponent {
  render() {
    let {
      actionType: A,
      targetType: e,
      action: t,
      themeOverride: r
    } = this.props, l = null != Chunk73800 ? Chunk404211["themeOverride".concat((0, Chunk624138.De)(Chunk73800))] : null, a = i()(Chunk404211.icon, Q[module], require === Chunk981631.rsA.MESSAGE_DELETE ? Chunk404211.targetMessage : require === Chunk981631.rsA.AUTO_MODERATION_BLOCK_MESSAGE || require === Chunk981631.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL || require === Chunk981631.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || require === Chunk981631.rsA.AUTO_MODERATION_QUARANTINE_USER ? Chunk404211.autoModerationBlockMessage : ({
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
    return (0, Chunk255367.jsx)("div", {
      className: Chunk392711
    })
  }
}

function m(A) {
  let {
    log: e,
    guild: t,
    onContentClick: l,
    className: a
  } = A, o = r.useCallback(A => {
    if (null == e.changes) return null;
    let o = 0,
      u = s().flatten(e.changes.map(l => {
        if (O(e, l)) return null;
        let {
          oldValue: i,
          newValue: a
        } = (() => {
          if ((e.action === I.rsA.CHANNEL_UPDATE || e.action === I.rsA.CHANNEL_CREATE) && l.key === I.zUn.TYPE) {
            var A, t;
            return {
              oldValue: null != (A = l.oldValue) ? A : (0, B.a5)({
                type: l.oldValue
              }),
              newValue: null != (t = l.newValue) ? t : (0, B.a5)({
                type: l.newValue
              })
            }
          }
          if (e.action === I.rsA.MEMBER_UPDATE && l.key === I.zUn.COMMUNICATION_DISABLED_UNTIL) {
            let A = g()(l.newValue);
            return {
              oldValue: l.oldValue,
              newValue: A.isValid() ? A.calendar() : l.newValue
            }
          }
          return e.action === I.rsA.GUILD_UPDATE && l.key === I.zUn.OWNER_ID ? {
            oldValue: M.ZP.getUserTag(l.oldValue, {
              mode: "username"
            }),
            newValue: M.ZP.getUserTag(l.newValue, {
              mode: "username"
            })
          } : l
        })(), u = (() => {
          if (e.action === I.rsA.MEMBER_ROLE_UPDATE) return function(A) {
            let {
              newValue: e
            } = A;
            return Array.isArray(e) ? e.map(A => (0, n.jsx)("div", {
              className: b.subListItem,
              children: A.name
            }, A.id)) : null
          }(l);
          if (e.targetType === I.KFR.ROLE || e.action === I.rsA.CHANNEL_OVERWRITE_CREATE || e.action === I.rsA.CHANNEL_OVERWRITE_UPDATE) return function(A, e) {
            let {
              newValue: t
            } = A;
            return Array.isArray(t) ? t.map((A, t) => (0, n.jsx)("div", {
              className: b.subListItem,
              children: p.hQ(A, e)
            }, t)) : null
          }(l, e);
          if ((e.action === I.rsA.CHANNEL_UPDATE || e.action === I.rsA.THREAD_UPDATE) && l.key === I.zUn.FLAGS) return function(A) {
            let {
              newValue: e,
              oldValue: t
            } = A, r = [];
            return (Array.isArray(t) && (r = r.concat(t.map(A => (0, n.jsx)("div", {
              className: b.subListItem,
              children: p.cT(A)
            }, A)))), Array.isArray(e) && (r = r.concat(e.map(A => (0, n.jsx)("div", {
              className: b.subListItem,
              children: p.em(A)
            }, A)))), r.length > 0) ? r : null
          }(l);
          if ((e.action === I.rsA.ONBOARDING_PROMPT_UPDATE || e.action === I.rsA.ONBOARDING_PROMPT_CREATE) && l.key === I.zUn.OPTIONS) return function(A, e, t) {
            let {
              newValue: r,
              oldValue: l
            } = A, i = A => {
              var e;
              let n = null != t ? null == (e = E.Z.getRole(t.id, A)) ? true : e.name : true;
              return null == n ? null : "@".concat(n)
            }, a = A => {
              var e;
              let t = null == (e = d.Z.getChannel(A)) ? true : e.name;
              return null == t ? null : "#".concat(t)
            }, o = s().keyBy(null != l ? l : [], "id"), g = s().keyBy(null != r ? r : [], "id"), c = s().difference(Object.keys(g), Object.keys(o)).map(A => g[A]), v = s().difference(Object.keys(o), Object.keys(g)).map(A => o[A]), u = s().intersection(Object.keys(g), Object.keys(o));
            return (0, n.jsxs)("ul", {
              className: b.onboardingChangeLogContainer,
              children: [c.map(A => {
                let {
                  role_ids: t,
                  channel_ids: r,
                  title: l,
                  id: s
                } = A, o = (null != t ? t : []).map(i).filter(w.lm), g = (null != r ? r : []).map(a).filter(w.lm);
                return (0, n.jsxs)("li", {
                  children: [(0, n.jsxs)("div", {
                    className: b.onboardingChangeLogItemTitle,
                    children: [(0, n.jsx)(V, {
                      actionType: I.vB8.CREATE,
                      targetType: e.targetType,
                      action: e.action
                    }), (0, n.jsx)(f.Text, {
                      variant: "text-md/normal",
                      children: H.intl.format(H.t.CZ1tys, {
                        title: l
                      })
                    })]
                  }), (0, n.jsxs)("div", {
                    className: b.onboardingChangeLogItemChanges,
                    children: [o.length > 0 && (0, n.jsx)(f.Text, {
                      variant: "text-md/normal",
                      children: H.intl.format(H.t["gt/5z8"], {
                        roles: o.join(", ")
                      })
                    }), g.length > 0 && (0, n.jsx)(f.Text, {
                      variant: "text-md/normal",
                      children: H.intl.format(H.t["4q006e"], {
                        channels: g.join(", ")
                      })
                    })]
                  })]
                }, s)
              }), v.map(A => (0, n.jsx)("li", {
                children: (0, n.jsxs)("div", {
                  className: b.onboardingChangeLogItemTitle,
                  children: [(0, n.jsx)(V, {
                    actionType: I.vB8.DELETE,
                    targetType: e.targetType,
                    action: e.action
                  }), (0, n.jsx)(f.Text, {
                    variant: "text-md/normal",
                    children: H.intl.format(H.t["m3dt+P"], {
                      title: A.title
                    })
                  })]
                })
              }, A.id)), u.map(A => ((A, t) => {
                let {
                  title: r,
                  id: l
                } = t, o = A.role_ids.map(i).filter(w.lm), g = A.channel_ids.map(a).filter(w.lm), c = t.role_ids.map(i).filter(w.lm), v = t.channel_ids.map(a).filter(w.lm), u = s().difference(c, o), h = s().difference(o, c), d = s().difference(v, g), E = s().difference(g, v), C = [];
                return (s().isEqual(A.title, t.title) || C.push("title"), s().isEqual(A.description, t.description) || C.push("description"), 0 === u.length && 0 === h.length && 0 === d.length && 0 === E.length && 0 === C.length) ? null : (0, n.jsxs)("li", {
                  children: [(0, n.jsxs)("div", {
                    className: b.onboardingChangeLogItemTitle,
                    children: [(0, n.jsx)(V, {
                      actionType: I.vB8.UPDATE,
                      targetType: e.targetType,
                      action: e.action
                    }), (0, n.jsx)(f.Text, {
                      variant: "text-md/normal",
                      children: H.intl.format(H.t["WZO+iY"], {
                        title: r
                      })
                    })]
                  }), (0, n.jsxs)("div", {
                    className: b.onboardingChangeLogItemChanges,
                    children: [u.length > 0 && (0, n.jsx)(f.Text, {
                      variant: "text-md/normal",
                      children: H.intl.format(H.t["R+km+f"], {
                        roles: u.join(", ")
                      })
                    }), h.length > 0 && (0, n.jsx)(f.Text, {
                      variant: "text-md/normal",
                      children: H.intl.format(H.t.xIVRoa, {
                        roles: h.join(", ")
                      })
                    }), d.length > 0 && (0, n.jsx)(f.Text, {
                      variant: "text-md/normal",
                      children: H.intl.format(H.t.iYowX1, {
                        channels: d.join(", ")
                      })
                    }), E.length > 0 && (0, n.jsx)(f.Text, {
                      variant: "text-md/normal",
                      children: H.intl.format(H.t.JLdJpK, {
                        channels: E.join(", ")
                      })
                    }), C.map((e, r) => (0, n.jsx)(f.Text, {
                      variant: "text-md/normal",
                      children: H.intl.format(H.t["0698zc"], {
                        key: e,
                        oldValue: A[e],
                        newValue: t[e]
                      })
                    }, r))]
                  })]
                }, l)
              })(o[A], g[A]))]
            }, "options")
          }(l, e, t);
          if (e.action === I.rsA.HOME_SETTINGS_CREATE || e.action === I.rsA.HOME_SETTINGS_UPDATE) return function(A, e) {
            let {
              oldValue: t,
              newValue: r,
              key: l
            } = A, {
              targetType: i,
              action: a
            } = e;
            switch (l) {
              case I.zUn.WELCOME_MESSAGE:
                return ((A, e) => {
                  var t, r, l, i, a;
                  let s = C.default.getUser(null == e || null == (t = e.author_ids) ? true : t[0]),
                    o = C.default.getUser(null == (r = A.author_ids) ? true : r[0]),
                    g = (null == s ? true : s.id) !== (null == o ? true : o.id) ? (0, n.jsx)("li", {
                      children: (0, n.jsx)("div", {
                        className: b.onboardingChangeLogItemTitle,
                        children: (0, n.jsx)(f.Text, {
                          variant: "text-md/normal",
                          children: H.intl.format(H.t.PrOzAw, {
                            oldUser: null != (l = null == s ? true : s.username) ? l : H.intl.string(H.t.PoWNfX),
                            newUser: null != (i = null == o ? true : o.username) ? i : H.intl.string(H.t.PoWNfX)
                          })
                        })
                      })
                    }) : null,
                    c = (null == e ? true : e.message) !== A.message ? (0, n.jsx)("li", {
                      children: (0, n.jsx)("div", {
                        className: b.onboardingChangeLogItemTitle,
                        children: (0, n.jsx)(f.Text, {
                          variant: "text-md/normal",
                          children: H.intl.format(H.t.oB7rBQ, {
                            oldMessage: null != (a = null == e ? true : e.message) ? a : H.intl.string(H.t.PoWNfX),
                            newMessage: A.message
                          })
                        })
                      })
                    }) : null;
                  return (0, n.jsxs)("ul", {
                    children: [g, c]
                  })
                })(r, t);
              case I.zUn.NEW_MEMBER_ACTIONS:
                return ((A, e) => {
                  let t = A.map(A => A.channel_id),
                    r = e.map(A => A.channel_id),
                    l = s().difference(r, t),
                    o = s().difference(t, r),
                    g = e.filter(A => l.includes(A.channel_id)),
                    c = A.filter(A => o.includes(A.channel_id));
                  return (0, n.jsxs)("ul", {
                    children: [g.map(A => (0, n.jsx)("li", {
                      children: (0, n.jsxs)("div", {
                        className: b.onboardingChangeLogItemTitle,
                        children: [(0, n.jsx)(V, {
                          actionType: I.vB8.CREATE,
                          targetType: i,
                          action: a
                        }), (0, n.jsx)(f.Text, {
                          variant: "text-md/normal",
                          children: H.intl.format(H.t["oFSu6+"], {
                            name: A.title
                          })
                        })]
                      })
                    }, A.channel_id)), c.map(A => (0, n.jsx)("li", {
                      children: (0, n.jsxs)("div", {
                        className: b.onboardingChangeLogItemTitle,
                        children: [(0, n.jsx)(V, {
                          actionType: I.vB8.DELETE,
                          targetType: i,
                          action: a
                        }), (0, n.jsx)(f.Text, {
                          variant: "text-md/normal",
                          children: H.intl.format(H.t.GssWam, {
                            name: A.title
                          })
                        })]
                      })
                    }, A.channel_id))]
                  })
                })(null != t ? t : [], r);
              case I.zUn.RESOURCE_CHANNELS:
                return ((A, e) => {
                  let t = A.map(A => A.channel_id),
                    r = e.map(A => A.channel_id),
                    l = s().difference(r, t),
                    o = s().difference(t, r),
                    g = e.filter(A => l.includes(A.channel_id)),
                    c = A.filter(A => o.includes(A.channel_id));
                  return (0, n.jsxs)("ul", {
                    children: [g.map(A => (0, n.jsx)("li", {
                      children: (0, n.jsxs)("div", {
                        className: b.onboardingChangeLogItemTitle,
                        children: [(0, n.jsx)(V, {
                          actionType: I.vB8.CREATE,
                          targetType: i,
                          action: a
                        }), (0, n.jsx)(f.Text, {
                          variant: "text-md/normal",
                          children: H.intl.format(H.t.HlGndH, {
                            name: A.title
                          })
                        })]
                      })
                    }, A.channel_id)), c.map(A => (0, n.jsx)("li", {
                      children: (0, n.jsxs)("div", {
                        className: b.onboardingChangeLogItemTitle,
                        children: [(0, n.jsx)(V, {
                          actionType: I.vB8.DELETE,
                          targetType: i,
                          action: a
                        }), (0, n.jsx)(f.Text, {
                          variant: "text-md/normal",
                          children: H.intl.format(H.t["7pysg4"], {
                            name: A.title
                          })
                        })]
                      })
                    }, A.channel_id))]
                  })
                })(null != t ? t : [], r);
              default:
                return null
            }
          }(l, e);
          return null
        })(), D = A[l.key];
        return function(A) {
          var e, t;
          let {
            changeItem: l,
            subChanges: i,
            changeNumber: a,
            log: s,
            oldValue: o,
            newValue: g,
            change: u
          } = A;
          if (null == l) return console.warn("No change string for", u), null;
          let d = H.intl.format(l, {
            oldValue: o,
            newValue: g,
            count: Array.isArray(g) ? g.length : null,
            subtarget: null != (t = null != (e = s.options.subtarget) ? e : u.subtarget) ? t : null,
            newColorHook: (A, e) => j(e, u.newValue),
            newColorsHook: (A, e) => {
              let {
                primary_color: t,
                secondary_color: l,
                tertiary_color: i
              } = g;
              return (0, n.jsx)("span", {
                children: [t, l, i].filter(w.lm).map((A, t) => (0, n.jsxs)(r.Fragment, {
                  children: [(0, n.jsx)("span", {
                    className: b.colorsHook,
                    children: "".concat(t > 0 ? ", " : "").concat((0, c.Rf)(A).toUpperCase(), " ")
                  }), j(e, (0, c.Rf)(A))]
                }, t))
              }, e)
            },
            oldColorHook: (A, e) => j(e, u.oldValue),
            oldTagHook: (A, e) => (0, n.jsx)(h.Z, {
              tag: o,
              size: h.Z.Sizes.SMALL
            }, e),
            newTagHook: (A, e) => (0, n.jsx)(h.Z, {
              tag: g,
              size: h.Z.Sizes.SMALL
            }, e),
            oldEmojiHook: (A, e) => (0, n.jsx)(v.Z, {
              emojiId: o
            }, e),
            newEmojiHook: (A, e) => (0, n.jsx)(v.Z, {
              emojiId: g
            }, e),
            applicationHook: (A, e) => {
              var t;
              return (0, n.jsx)(P, {
                applicationId: null != (t = null == o ? true : o.application_id) ? t : null == g ? true : g.application_id
              }, e)
            }
          });
          return null == d ? null : (0, n.jsxs)("div", {
            className: b.detail,
            style: {
              position: "relative",
              top: 1
            },
            children: [(0, n.jsxs)(f.Text, {
              className: b.prefix,
              variant: "code",
              color: function(A) {
                switch (A) {
                  case I.vB8.CREATE:
                    return "text-feedback-positive";
                  case I.vB8.DELETE:
                    return "status-danger";
                  default:
                    return "text-feedback-warning"
                }
              }(s.actionType),
              children: [a < 10 ? "0".concat(a) : a, (0, n.jsx)("span", {
                className: b.dash,
                children: "—"
              })]
            }), (0, n.jsxs)("div", {
              className: b.change,
              children: [(0, n.jsx)("div", {
                className: b.changeStr,
                children: d
              }), null != i ? (0, n.jsx)("div", {
                children: i
              }) : null]
            })]
          }, a)
        }({
          changeItem: "function" == typeof D ? D(l) : D,
          subChanges: u,
          changeNumber: ++o,
          log: e,
          oldValue: i,
          newValue: a,
          change: l
        })
      })).filter(w.lm);
    return (0, n.jsx)(f.P3F, {
      onClick: l,
      className: i()(b.changeDetails, a),
      children: u
    })
  }, [e, t, l, a]);
  return r.useMemo(() => {
    switch (e.targetType) {
      case I.KFR.GUILD:
        return o(p.pY());
      case I.KFR.CHANNEL:
      case I.KFR.CHANNEL_OVERWRITE:
        return o(p.ML());
      case I.KFR.USER:
        return o(p.lU());
      case I.KFR.ROLE:
        return o(p.HE());
      case I.KFR.ONBOARDING_PROMPT:
        return o(p.oD());
      case I.KFR.GUILD_ONBOARDING:
        return o(p.EN());
      case I.KFR.HOME_SETTINGS:
        return o(p.hx());
      case I.KFR.INVITE:
        return o(p.HN());
      case I.KFR.WEBHOOK:
        return o(p.lR());
      case I.KFR.EMOJI:
        return o(p.N$());
      case I.KFR.STICKER:
        return o(p.Bq());
      case I.KFR.INTEGRATION:
        return o(p.K());
      case I.KFR.STAGE_INSTANCE:
        return o(p.C2());
      case I.KFR.GUILD_SCHEDULED_EVENT:
        return o(p.uB());
      case I.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
        return o(p.pi());
      case I.KFR.THREAD:
        return o(p.pA());
      case I.KFR.APPLICATION_COMMAND:
        return o(p.vm(e.changes));
      case I.KFR.AUTO_MODERATION_RULE:
        return o(p.rK());
      case I.KFR.GUILD_SOUNDBOARD:
        return o(p.C0());
      case I.KFR.VOICE_CHANNEL_STATUS:
        return o(p.F1());
      case I.KFR.GUILD_MEMBER_VERIFICATION:
        return o(p.JA());
      case I.KFR.GUILD_PROFILE:
        return o(p.zT())
    }
  }, [e.targetType, e.changes, o])
}