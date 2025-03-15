/** Chunk was on 17573 **/
r.d(t, {
  mp: () => I,
  tP: () => m,
  xO: () => H
}), r(653041), r(266796);
var n = r(200651),
  l = r(192379),
  i = r(120356),
  a = r.n(i),
  o = r(392711),
  s = r.n(o),
  h = r(913527),
  c = r.n(h),
  v = r(481060),
  u = r(596454),
  d = r(835473),
  E = r(479099),
  f = r(592125),
  p = r(430824),
  M = r(594174),
  _ = r(934415),
  O = r(823379),
  g = r(624138),
  b = r(51144),
  A = r(909746),
  T = r(981631),
  Z = r(388032),
  N = r(690192);

function H(e, t) {
  let r = A.vc[e.targetType];
  return null != r && !0 === r[t.key]
}
let y = {
  [T.vB8.CREATE]: N.typeCreate,
  [T.vB8.UPDATE]: N.typeUpdate,
  [T.vB8.DELETE]: N.typeDelete
};

function j(e) {
  let {
    applicationId: t
  } = e, r = (0, d.q)(t);
  return null == r ? null : (0, n.jsx)(v.Text, {
    variant: "text-md/normal",
    children: r.name
  })
}
class I extends l.PureComponent {
  render() {
    let {
      actionType: e,
      targetType: t,
      action: r,
      themeOverride: l
    } = this.props, i = null != l ? N["themeOverride".concat((0, g.De)(l))] : null, o = a()(N.icon, y[e], r === T.rsA.MESSAGE_DELETE ? N.targetMessage : r === T.rsA.AUTO_MODERATION_BLOCK_MESSAGE || r === T.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL || r === T.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || r === T.rsA.AUTO_MODERATION_QUARANTINE_USER ? N.autoModerationBlockMessage : ({
      [T.KFR.ALL]: N.targetAll,
      [T.KFR.GUILD]: N.targetGuild,
      [T.KFR.CHANNEL]: N.targetChannel,
      [T.KFR.CHANNEL_OVERWRITE]: N.targetChannel,
      [T.KFR.USER]: N.targetMember,
      [T.KFR.ROLE]: N.targetRole,
      [T.KFR.ONBOARDING_PROMPT]: N.targetOnboarding,
      [T.KFR.GUILD_ONBOARDING]: N.targetOnboarding,
      [T.KFR.HOME_SETTINGS]: N.targetOnboarding,
      [T.KFR.INTEGRATION]: N.targetIntegration,
      [T.KFR.INVITE]: N.targetInvite,
      [T.KFR.WEBHOOK]: N.targetWebhook,
      [T.KFR.EMOJI]: N.targetEmoji,
      [T.KFR.STICKER]: N.targetSticker,
      [T.KFR.STAGE_INSTANCE]: N.targetStageInstance,
      [T.KFR.GUILD_SCHEDULED_EVENT]: N.targetGuildScheduledEvent,
      [T.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION]: N.targetGuildScheduledEvent,
      [T.KFR.THREAD]: N.thread,
      [T.KFR.APPLICATION_COMMAND]: N.applicationCommand,
      [T.KFR.AUTO_MODERATION_RULE]: N.autoModerationRule,
      [T.KFR.GUILD_HOME]: N.targetGuildHome,
      [T.KFR.GUILD_SOUNDBOARD]: N.targetGuildSoundboard,
      [T.KFR.VOICE_CHANNEL_STATUS]: N.targetChannel,
      [T.KFR.GUILD_MEMBER_VERIFICATION]: N.targetMember,
      [T.KFR.GUILD_PROFILE]: N.targetGuild
    })[t], i);
    return (0, n.jsx)("div", {
      className: o
    })
  }
}

function m(e) {
  let {
    log: t,
    guild: r,
    onContentClick: i,
    className: o
  } = e, h = l.useCallback(e => {
    if (null == t.changes) return null;
    let l = 0,
      h = s().flatten(t.changes.map(i => {
        if (H(t, i)) return null;
        let {
          oldValue: a,
          newValue: o
        } = (() => {
          if ((t.action === T.rsA.CHANNEL_UPDATE || t.action === T.rsA.CHANNEL_CREATE) && i.key === T.zUn.TYPE) {
            var e, r;
            return {
              oldValue: null !== (e = i.oldValue) && void 0 !== e ? e : (0, _.a5)({
                type: i.oldValue
              }),
              newValue: null !== (r = i.newValue) && void 0 !== r ? r : (0, _.a5)({
                type: i.newValue
              })
            }
          }
          if (t.action === T.rsA.MEMBER_UPDATE && i.key === T.zUn.COMMUNICATION_DISABLED_UNTIL) {
            let e = c()(i.newValue);
            return {
              oldValue: i.oldValue,
              newValue: e.isValid() ? e.calendar() : i.newValue
            }
          }
          return t.action === T.rsA.GUILD_UPDATE && i.key === T.zUn.OWNER_ID ? {
            oldValue: b.ZP.getUserTag(i.oldValue, {
              mode: "username"
            }),
            newValue: b.ZP.getUserTag(i.newValue, {
              mode: "username"
            })
          } : i
        })(), h = (() => {
          if (t.action === T.rsA.MEMBER_ROLE_UPDATE) return function(e) {
            let {
              newValue: t
            } = e;
            return Array.isArray(t) ? t.map(e => (0, n.jsx)("div", {
              className: N.subListItem,
              children: e.name
            }, e.id)) : null
          }(i);
          if (t.targetType === T.KFR.ROLE || t.action === T.rsA.CHANNEL_OVERWRITE_CREATE || t.action === T.rsA.CHANNEL_OVERWRITE_UPDATE) return function(e, t) {
            let {
              newValue: r
            } = e;
            return Array.isArray(r) ? r.map((e, r) => (0, n.jsx)("div", {
              className: N.subListItem,
              children: A.hQ(e, t)
            }, r)) : null
          }(i, t);
          if ((t.action === T.rsA.CHANNEL_UPDATE || t.action === T.rsA.THREAD_UPDATE) && i.key === T.zUn.FLAGS) return function(e) {
            let {
              newValue: t,
              oldValue: r
            } = e, l = [];
            return (Array.isArray(r) && (l = l.concat(r.map(e => (0, n.jsx)("div", {
              className: N.subListItem,
              children: A.cT(e)
            }, e)))), Array.isArray(t) && (l = l.concat(t.map(e => (0, n.jsx)("div", {
              className: N.subListItem,
              children: A.em(e)
            }, e)))), l.length > 0) ? l : null
          }(i);
          if ((t.action === T.rsA.ONBOARDING_PROMPT_UPDATE || t.action === T.rsA.ONBOARDING_PROMPT_CREATE) && i.key === T.zUn.OPTIONS) return function(e, t, r) {
            let {
              newValue: l,
              oldValue: i
            } = e, a = e => {
              var t;
              let n = null != r ? null === (t = p.Z.getRole(r.id, e)) || void 0 === t ? void 0 : t.name : void 0;
              return null == n ? null : "@".concat(n)
            }, o = e => {
              var t;
              let r = null === (t = f.Z.getChannel(e)) || void 0 === t ? void 0 : t.name;
              return null == r ? null : "#".concat(r)
            }, h = (e, r) => {
              let {
                title: l,
                id: i
              } = r, h = e.role_ids.map(a).filter(O.lm), c = e.channel_ids.map(o).filter(O.lm), u = r.role_ids.map(a).filter(O.lm), d = r.channel_ids.map(o).filter(O.lm), E = s().difference(u, h), f = s().difference(h, u), p = s().difference(d, c), M = s().difference(c, d), _ = [];
              return (s().isEqual(e.title, r.title) || _.push("title"), s().isEqual(e.description, r.description) || _.push("description"), 0 === E.length && 0 === f.length && 0 === p.length && 0 === M.length && 0 === _.length) ? null : (0, n.jsxs)("li", {
                children: [(0, n.jsxs)("div", {
                  className: N.onboardingChangeLogItemTitle,
                  children: [(0, n.jsx)(I, {
                    actionType: T.vB8.UPDATE,
                    targetType: t.targetType,
                    action: t.action
                  }), (0, n.jsx)(v.Text, {
                    variant: "text-md/normal",
                    children: Z.NW.format(Z.t["WZO+iY"], {
                      title: l
                    })
                  })]
                }), (0, n.jsxs)("div", {
                  className: N.onboardingChangeLogItemChanges,
                  children: [E.length > 0 && (0, n.jsx)(v.Text, {
                    variant: "text-md/normal",
                    children: Z.NW.format(Z.t["R+km+f"], {
                      roles: E.join(", ")
                    })
                  }), f.length > 0 && (0, n.jsx)(v.Text, {
                    variant: "text-md/normal",
                    children: Z.NW.format(Z.t.xIVRoa, {
                      roles: f.join(", ")
                    })
                  }), p.length > 0 && (0, n.jsx)(v.Text, {
                    variant: "text-md/normal",
                    children: Z.NW.format(Z.t.iYowX1, {
                      channels: p.join(", ")
                    })
                  }), M.length > 0 && (0, n.jsx)(v.Text, {
                    variant: "text-md/normal",
                    children: Z.NW.format(Z.t.JLdJpK, {
                      channels: M.join(", ")
                    })
                  }), _.map((t, l) => (0, n.jsx)(v.Text, {
                    variant: "text-md/normal",
                    children: Z.NW.format(Z.t["0698zc"], {
                      key: t,
                      oldValue: e[t],
                      newValue: r[t]
                    })
                  }, l))]
                })]
              }, i)
            }, c = s().keyBy(null != i ? i : [], "id"), u = s().keyBy(null != l ? l : [], "id"), d = s().difference(Object.keys(u), Object.keys(c)).map(e => u[e]), E = s().difference(Object.keys(c), Object.keys(u)).map(e => c[e]), M = s().intersection(Object.keys(u), Object.keys(c));
            return (0, n.jsxs)("ul", {
              className: N.onboardingChangeLogContainer,
              children: [d.map(e => {
                let {
                  role_ids: r,
                  channel_ids: l,
                  title: i,
                  id: s
                } = e, h = (null != r ? r : []).map(a).filter(O.lm), c = (null != l ? l : []).map(o).filter(O.lm);
                return (0, n.jsxs)("li", {
                  children: [(0, n.jsxs)("div", {
                    className: N.onboardingChangeLogItemTitle,
                    children: [(0, n.jsx)(I, {
                      actionType: T.vB8.CREATE,
                      targetType: t.targetType,
                      action: t.action
                    }), (0, n.jsx)(v.Text, {
                      variant: "text-md/normal",
                      children: Z.NW.format(Z.t.CZ1tys, {
                        title: i
                      })
                    })]
                  }), (0, n.jsxs)("div", {
                    className: N.onboardingChangeLogItemChanges,
                    children: [h.length > 0 && (0, n.jsx)(v.Text, {
                      variant: "text-md/normal",
                      children: Z.NW.format(Z.t["gt/5z8"], {
                        roles: h.join(", ")
                      })
                    }), c.length > 0 && (0, n.jsx)(v.Text, {
                      variant: "text-md/normal",
                      children: Z.NW.format(Z.t["4q006e"], {
                        channels: c.join(", ")
                      })
                    })]
                  })]
                }, s)
              }), E.map(e => (0, n.jsx)("li", {
                children: (0, n.jsxs)("div", {
                  className: N.onboardingChangeLogItemTitle,
                  children: [(0, n.jsx)(I, {
                    actionType: T.vB8.DELETE,
                    targetType: t.targetType,
                    action: t.action
                  }), (0, n.jsx)(v.Text, {
                    variant: "text-md/normal",
                    children: Z.NW.format(Z.t["m3dt+P"], {
                      title: e.title
                    })
                  })]
                })
              }, e.id)), M.map(e => h(c[e], u[e]))]
            }, "options")
          }(i, t, r);
          if (t.action === T.rsA.HOME_SETTINGS_CREATE || t.action === T.rsA.HOME_SETTINGS_UPDATE) return function(e, t) {
            let {
              oldValue: r,
              newValue: l,
              key: i
            } = e, {
              targetType: a,
              action: o
            } = t;
            switch (i) {
              case T.zUn.WELCOME_MESSAGE:
                return ((e, t) => {
                  var r, l, i, a, o;
                  let s = M.default.getUser(null == t ? void 0 : null === (r = t.author_ids) || void 0 === r ? void 0 : r[0]),
                    h = M.default.getUser(null === (l = e.author_ids) || void 0 === l ? void 0 : l[0]),
                    c = (null == s ? void 0 : s.id) !== (null == h ? void 0 : h.id) ? (0, n.jsx)("li", {
                      children: (0, n.jsx)("div", {
                        className: N.onboardingChangeLogItemTitle,
                        children: (0, n.jsx)(v.Text, {
                          variant: "text-md/normal",
                          children: Z.NW.format(Z.t.PrOzAw, {
                            oldUser: null !== (i = null == s ? void 0 : s.username) && void 0 !== i ? i : Z.NW.string(Z.t.PoWNfX),
                            newUser: null !== (a = null == h ? void 0 : h.username) && void 0 !== a ? a : Z.NW.string(Z.t.PoWNfX)
                          })
                        })
                      })
                    }) : null,
                    u = (null == t ? void 0 : t.message) !== e.message ? (0, n.jsx)("li", {
                      children: (0, n.jsx)("div", {
                        className: N.onboardingChangeLogItemTitle,
                        children: (0, n.jsx)(v.Text, {
                          variant: "text-md/normal",
                          children: Z.NW.format(Z.t.oB7rBQ, {
                            oldMessage: null !== (o = null == t ? void 0 : t.message) && void 0 !== o ? o : Z.NW.string(Z.t.PoWNfX),
                            newMessage: e.message
                          })
                        })
                      })
                    }) : null;
                  return (0, n.jsxs)("ul", {
                    children: [c, u]
                  })
                })(l, r);
              case T.zUn.NEW_MEMBER_ACTIONS:
                return ((e, t) => {
                  let r = e.map(e => e.channel_id),
                    l = t.map(e => e.channel_id),
                    i = s().difference(l, r),
                    h = s().difference(r, l),
                    c = t.filter(e => i.includes(e.channel_id)),
                    u = e.filter(e => h.includes(e.channel_id));
                  return (0, n.jsxs)("ul", {
                    children: [c.map(e => (0, n.jsx)("li", {
                      children: (0, n.jsxs)("div", {
                        className: N.onboardingChangeLogItemTitle,
                        children: [(0, n.jsx)(I, {
                          actionType: T.vB8.CREATE,
                          targetType: a,
                          action: o
                        }), (0, n.jsx)(v.Text, {
                          variant: "text-md/normal",
                          children: Z.NW.format(Z.t["oFSu6+"], {
                            name: e.title
                          })
                        })]
                      })
                    }, e.channel_id)), u.map(e => (0, n.jsx)("li", {
                      children: (0, n.jsxs)("div", {
                        className: N.onboardingChangeLogItemTitle,
                        children: [(0, n.jsx)(I, {
                          actionType: T.vB8.DELETE,
                          targetType: a,
                          action: o
                        }), (0, n.jsx)(v.Text, {
                          variant: "text-md/normal",
                          children: Z.NW.format(Z.t.GssWam, {
                            name: e.title
                          })
                        })]
                      })
                    }, e.channel_id))]
                  })
                })(null != r ? r : [], l);
              case T.zUn.RESOURCE_CHANNELS:
                return ((e, t) => {
                  let r = e.map(e => e.channel_id),
                    l = t.map(e => e.channel_id),
                    i = s().difference(l, r),
                    h = s().difference(r, l),
                    c = t.filter(e => i.includes(e.channel_id)),
                    u = e.filter(e => h.includes(e.channel_id));
                  return (0, n.jsxs)("ul", {
                    children: [c.map(e => (0, n.jsx)("li", {
                      children: (0, n.jsxs)("div", {
                        className: N.onboardingChangeLogItemTitle,
                        children: [(0, n.jsx)(I, {
                          actionType: T.vB8.CREATE,
                          targetType: a,
                          action: o
                        }), (0, n.jsx)(v.Text, {
                          variant: "text-md/normal",
                          children: Z.NW.format(Z.t.HlGndH, {
                            name: e.title
                          })
                        })]
                      })
                    }, e.channel_id)), u.map(e => (0, n.jsx)("li", {
                      children: (0, n.jsxs)("div", {
                        className: N.onboardingChangeLogItemTitle,
                        children: [(0, n.jsx)(I, {
                          actionType: T.vB8.DELETE,
                          targetType: a,
                          action: o
                        }), (0, n.jsx)(v.Text, {
                          variant: "text-md/normal",
                          children: Z.NW.format(Z.t["7pysg4"], {
                            name: e.title
                          })
                        })]
                      })
                    }, e.channel_id))]
                  })
                })(null != r ? r : [], l);
              default:
                return null
            }
          }(i, t);
          return null
        })(), d = e[i.key];
        return function(e) {
          var t, r;
          let {
            changeItem: l,
            subChanges: i,
            changeNumber: a,
            log: o,
            oldValue: s,
            newValue: h,
            change: c
          } = e;
          if (null == l) return console.warn("No change string for", c), null;
          let d = Z.NW.format(l, {
            oldValue: s,
            newValue: h,
            count: Array.isArray(h) ? h.length : null,
            subtarget: null !== (r = null !== (t = o.options.subtarget) && void 0 !== t ? t : c.subtarget) && void 0 !== r ? r : null,
            newColorHook: (e, t) => (0, n.jsx)("div", {
              className: N.colorHook,
              style: {
                backgroundColor: c.newValue
              }
            }, t),
            oldColorHook: (e, t) => (0, n.jsx)("div", {
              className: N.colorHook,
              style: {
                backgroundColor: c.oldValue
              }
            }, t),
            oldTagHook: (e, t) => (0, n.jsx)(E.Z, {
              tag: s,
              size: E.Z.Sizes.SMALL
            }, t),
            newTagHook: (e, t) => (0, n.jsx)(E.Z, {
              tag: h,
              size: E.Z.Sizes.SMALL
            }, t),
            oldEmojiHook: (e, t) => (0, n.jsx)(u.Z, {
              emojiId: s
            }, t),
            newEmojiHook: (e, t) => (0, n.jsx)(u.Z, {
              emojiId: h
            }, t),
            applicationHook: (e, t) => {
              var r;
              return (0, n.jsx)(j, {
                applicationId: null !== (r = null == s ? void 0 : s.application_id) && void 0 !== r ? r : null == h ? void 0 : h.application_id
              }, t)
            }
          });
          return null == d ? null : (0, n.jsxs)("div", {
            className: N.detail,
            style: {
              position: "relative",
              top: 1
            },
            children: [(0, n.jsxs)(v.Text, {
              className: N.prefix,
              variant: "code",
              color: function(e) {
                switch (e) {
                  case T.vB8.CREATE:
                    return "text-positive";
                  case T.vB8.DELETE:
                    return "status-danger";
                  default:
                    return "text-warning"
                }
              }(o.actionType),
              children: [a < 10 ? "0".concat(a) : a, (0, n.jsx)("span", {
                className: N.dash,
                children: "—"
              })]
            }), (0, n.jsxs)("div", {
              className: N.change,
              children: [(0, n.jsx)("div", {
                className: N.changeStr,
                children: d
              }), null != i ? (0, n.jsx)("div", {
                children: i
              }) : null]
            })]
          }, a)
        }({
          changeItem: "function" == typeof d ? d(i) : d,
          subChanges: h,
          changeNumber: ++l,
          log: t,
          oldValue: a,
          newValue: o,
          change: i
        })
      })).filter(O.lm);
    return (0, n.jsx)(v.P3F, {
      onClick: i,
      className: a()(N.changeDetails, o),
      children: h
    })
  }, [t, r, i, o]);
  return l.useMemo(() => {
    switch (t.targetType) {
      case T.KFR.GUILD:
        return h(A.pY());
      case T.KFR.CHANNEL:
      case T.KFR.CHANNEL_OVERWRITE:
        return h(A.ML());
      case T.KFR.USER:
        return h(A.lU());
      case T.KFR.ROLE:
        return h(A.HE());
      case T.KFR.ONBOARDING_PROMPT:
        return h(A.oD());
      case T.KFR.GUILD_ONBOARDING:
        return h(A.EN());
      case T.KFR.HOME_SETTINGS:
        return h(A.hx());
      case T.KFR.INVITE:
        return h(A.HN());
      case T.KFR.WEBHOOK:
        return h(A.lR());
      case T.KFR.EMOJI:
        return h(A.N$());
      case T.KFR.STICKER:
        return h(A.Bq());
      case T.KFR.INTEGRATION:
        return h(A.K());
      case T.KFR.STAGE_INSTANCE:
        return h(A.C2());
      case T.KFR.GUILD_SCHEDULED_EVENT:
        return h(A.uB());
      case T.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
        return h(A.pi());
      case T.KFR.THREAD:
        return h(A.pA());
      case T.KFR.APPLICATION_COMMAND:
        return h(A.vm(t.changes));
      case T.KFR.AUTO_MODERATION_RULE:
        return h(A.rK());
      case T.KFR.GUILD_SOUNDBOARD:
        return h(A.C0());
      case T.KFR.VOICE_CHANNEL_STATUS:
        return h(A.F1());
      case T.KFR.GUILD_MEMBER_VERIFICATION:
        return h(A.JA());
      case T.KFR.GUILD_PROFILE:
        return h(A.zT())
    }
  }, [t.targetType, t.changes, h])
}