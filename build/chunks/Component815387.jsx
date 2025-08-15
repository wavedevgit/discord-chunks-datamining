/** Chunk was on 66866 **/
/** chunk id: 815387, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eL
}), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk904245 = require("./904245.js"),
  Chunk287734 = require("./287734.js"),
  Chunk872810 = require("./872810.js"),
  Chunk911969 = require("./911969.js"),
  Chunk376484 = require("./376484.jsx"),
  Chunk362604 = require("./362604.jsx"),
  Chunk479110 = require("./479110.jsx"),
  Chunk413189 = require("./413189.jsx"),
  Chunk710845 = require("./710845.js"),
  Chunk387188 = require("./387188.jsx"),
  Chunk825829 = require("./825829.js"),
  Chunk623624 = require("./623624.jsx"),
  Chunk29887 = require("./29887.jsx"),
  Chunk533694 = require("./533694.jsx"),
  Chunk345114 = require("./345114.jsx"),
  Chunk924301 = require("./924301.js"),
  Chunk225890 = require("./225890.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk507435 = require("./507435.jsx"),
  Chunk504733 = require("./504733.jsx"),
  Chunk563959 = require("./563959.jsx"),
  Chunk917318 = require("./917318.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk471253 = require("./471253.js"),
  Chunk565799 = require("./565799.js"),
  Chunk590415 = require("./590415.js"),
  Chunk911560 = require("./911560.js"),
  Chunk488131 = require("./488131.js"),
  Chunk814820 = require("./814820.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk523746 = require("./523746.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk158776 = require("./158776.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk585483 = require("./585483.js"),
  Chunk5192 = require("./5192.js"),
  Chunk960048 = require("./960048.js"),
  Chunk709054 = require("./709054.js"),
  Chunk937889 = require("./937889.js"),
  Chunk15642 = require("./15642.jsx"),
  Chunk260736 = require("./260736.jsx"),
  Chunk930282 = require("./930282.jsx"),
  Chunk818570 = require("./818570.jsx"),
  Chunk942951 = require("./942951.jsx"),
  Chunk9423 = require("./9423.jsx"),
  Chunk789267 = require("./789267.jsx"),
  Chunk262 = require("./262.jsx"),
  Chunk303135 = require("./303135.jsx"),
  Chunk673052 = require("./673052.jsx"),
  Chunk385063 = require("./385063.jsx"),
  Chunk253118 = require("./253118.jsx"),
  Chunk54817 = require("./54817.jsx"),
  Chunk502115 = require("./502115.jsx"),
  Chunk27103 = require("./27103.jsx"),
  Chunk396252 = require("./396252.jsx"),
  Chunk522860 = require("./522860.jsx"),
  Chunk600397 = require("./600397.jsx"),
  Chunk73352 = require("./73352.jsx"),
  Chunk377499 = require("./377499.jsx"),
  Chunk857640 = require("./857640.jsx"),
  Chunk614972 = require("./614972.jsx"),
  Chunk701181 = require("./701181.jsx"),
  Chunk29338 = require("./29338.jsx"),
  Chunk461135 = require("./461135.jsx"),
  Chunk296571 = require("./296571.jsx"),
  Chunk587737 = require("./587737.jsx"),
  Chunk482239 = require("./482239.jsx"),
  Chunk328749 = require("./328749.jsx"),
  Chunk4305 = require("./4305.jsx"),
  Chunk910548 = require("./910548.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk70722 = require("./70722.js"),
  Chunk388032 = require("./388032.jsx");

function eA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function ew(e) {
  let {
    message: t,
    channel: n,
    compact: a
  } = e, {
    author: o
  } = t, {
    guild_id: s
  } = n, c = t.getChannelId(), u = (0, l.e7)([F.Z], () => F.Z.getGuild(s), [s]), d = i.useCallback(() => {
    null != u && (0, E.f)({
      guildId: u.id,
      location: {
        section: eT.jXE.CHANNEL_TEXT_AREA,
        object: eT.qAy.BOOST_ANNOUNCEMENT_UPSELL
      }
    })
  }, [u]), p = (0, et.l)({
    user: o,
    channelId: c,
    guildId: n.guild_id,
    messageId: t.id,
    stopPropagation: true
  });
  return (0, r.jsx)(eS.ZP, {
    message: t,
    compact: a,
    guild: u,
    usernameHook: p,
    onClickMessage: d
  })
}

function eZ(e) {
  let {
    message: t,
    compact: n,
    channel: i
  } = e, l = (0, et.l)({
    user: t.author,
    channelId: i.id,
    guildId: i.guild_id,
    messageId: t.id
  });
  return (0, r.jsx)(ec.Z, {
    message: t,
    compact: n,
    usernameHook: l
  })
}
let eR = Object.freeze({
    [Chunk981631.uaV.DEFAULT]: true,
    [Chunk981631.uaV.REPLY]: true,
    [Chunk981631.uaV.CHAT_INPUT_COMMAND]: true,
    [Chunk981631.uaV.CONTEXT_MENU_COMMAND]: true,
    [Chunk981631.uaV.RECIPIENT_ADD]: function(e) {
      let {
        message: t,
        channel: n,
        compact: i
      } = e, {
        author: a
      } = t, o = t.getChannelId(), s = (0, l.e7)([V.default], () => V.default.getUser(t.mentions[0]), [t]), c = Y.ZP.getName(null, o, s), u = (0, et.l)({
        user: a,
        channelId: o,
        guildId: n.guild_id,
        messageId: t.id
      }), d = (0, et.l)({
        user: s,
        channelId: o,
        guildId: n.guild_id,
        messageId: t.id
      });
      return n.isThread() ? (0, r.jsx)(ey.Z, {
        message: t,
        channel: n,
        compact: i,
        targetUser: s,
        actorUsernameHook: u,
        targetUsernameHook: d
      }) : (0, r.jsx)(e_.Z, {
        message: t,
        compact: i,
        otherUsername: c,
        usernameHook: u,
        otherUsernameHook: d
      })
    },
    [Chunk981631.uaV.RECIPIENT_REMOVE]: function(e) {
      let {
        message: t,
        channel: n,
        compact: i
      } = e, {
        author: a
      } = t, o = t.getChannelId(), s = (0, l.e7)([V.default], () => V.default.getUser(t.mentions[0]), [t]), c = (0, et.l)({
        user: a,
        channelId: o,
        guildId: n.guild_id,
        messageId: t.id
      }), u = (0, et.l)({
        user: s,
        channelId: o,
        guildId: n.guild_id,
        messageId: t.id
      });
      return n.isThread() ? (0, r.jsx)(ex.Z, {
        message: t,
        channel: n,
        compact: i,
        targetUser: s,
        actorUsernameHook: c,
        targetUsernameHook: u
      }) : null != s && s.id !== a.id ? (0, r.jsx)(eg.Z, {
        message: t,
        channel: n,
        compact: i,
        usernameHook: c,
        otherUser: s,
        otherUsernameHook: u
      }) : (0, r.jsx)(eg.Z, {
        message: t,
        channel: n,
        usernameHook: c
      })
    },
    [Chunk981631.uaV.CALL]: function(e) {
      let {
        message: t,
        compact: n,
        channel: a
      } = e, {
        id: o,
        author: s
      } = t, u = M.default.getId(), d = t.getChannelId(), p = (0, l.e7)([k.Z], () => k.Z.isCallActive(d, o), [d, o]), m = (0, l.e7)([z.Z], () => z.Z.getVoiceState(eT.ME, u)), f = !p && null != t.call && !t.call.participants.includes(u), _ = p && (null == m || m.channelId !== d), g = i.useCallback(() => c.default.selectVoiceChannel(d), [d]), h = (0, et.l)({
        user: s,
        channelId: d,
        guildId: a.guild_id,
        messageId: t.id
      });
      return (0, r.jsx)(er.Z, {
        compact: n,
        message: t,
        missed: f,
        joinable: _,
        usernameHook: h,
        onClickJoinCall: g
      })
    },
    [Chunk981631.uaV.CHANNEL_NAME_CHANGE]: function(e) {
      let {
        message: t,
        compact: n,
        channel: i
      } = e, {
        author: l
      } = t, a = t.getChannelId(), o = (0, et.l)({
        user: l,
        channelId: a,
        guildId: i.guild_id,
        messageId: t.id
      });
      return (0, r.jsx)(eo.Z, {
        compact: n,
        message: t,
        usernameHook: o,
        isForumPost: i.isForumPost()
      })
    },
    [Chunk981631.uaV.CHANNEL_ICON_CHANGE]: function(e) {
      let {
        message: t,
        compact: n,
        channel: i
      } = e, {
        author: l
      } = t, a = t.getChannelId(), o = (0, et.l)({
        user: l,
        channelId: a,
        guildId: i.guild_id,
        messageId: t.id
      });
      return (0, r.jsx)(el.Z, {
        compact: n,
        message: t,
        usernameHook: o
      })
    },
    [Chunk981631.uaV.CHANNEL_PINNED_MESSAGE]: function(e) {
      let {
        message: t,
        compact: n,
        channel: l
      } = e, {
        author: a
      } = t, o = t.getChannelId(), s = i.useCallback(() => {
        if (H.Z.getChannelId() !== o) {
          let e = U.Z.getChannel(o);
          null != e && (0, N.XU)(e.guild_id, e.id)
        }
        setTimeout(() => W.S.dispatch(eT.CkL.TOGGLE_CHANNEL_PINS), 0)
      }, [o]), c = (0, et.l)({
        user: a,
        channelId: o,
        guildId: l.guild_id,
        messageId: t.id
      });
      return (0, r.jsx)(es.Z, {
        message: t,
        compact: n,
        usernameHook: c,
        onClickPins: __OVERLAY__ ? null : s
      })
    },
    [Chunk981631.uaV.USER_JOIN]: function(e) {
      let {
        message: t,
        compact: n,
        channel: i
      } = e, {
        author: l
      } = t, a = t.getChannelId(), o = (0, et.l)({
        user: l,
        channelId: a,
        guildId: i.guild_id,
        messageId: t.id
      });
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(eI.Z, {
          message: t,
          compact: n,
          usernameHook: o
        }), (0, r.jsx)(D.f, {
          channel: i,
          message: t
        })]
      })
    },
    [Chunk981631.uaV.GUILD_BOOST]: ew,
    [Chunk981631.uaV.GUILD_BOOST_TIER_1]: ew,
    [Chunk981631.uaV.GUILD_BOOST_TIER_2]: ew,
    [Chunk981631.uaV.GUILD_BOOST_TIER_3]: ew,
    [Chunk981631.uaV.CHANNEL_FOLLOW_ADD]: function(e) {
      let {
        message: t,
        compact: n,
        channel: i
      } = e, {
        author: l
      } = t, a = t.getChannelId(), o = (0, et.l)({
        user: l,
        channelId: a,
        guildId: i.guild_id,
        messageId: t.id
      });
      return (0, r.jsx)(ei.Z, {
        message: t,
        compact: n,
        usernameHook: o
      })
    },
    [Chunk981631.uaV.GUILD_STREAM]: function(e) {
      let {
        message: t,
        compact: n,
        channel: a
      } = e, {
        author: o,
        author: {
          id: s
        },
        messageReference: c
      } = t, d = t.getChannelId(), p = (0, l.e7)([G.Z], () => G.Z.findActivity(s, e => e.type === eT.IIU.PLAYING), [s]), m = (0, l.e7)([U.Z], () => null != c ? U.Z.getChannel(c.channel_id) : null, [c]), f = null == c ? true : c.guild_id, _ = (0, et.l)({
        user: o,
        channelId: d,
        guildId: a.guild_id,
        messageId: t.id
      }), g = i.useCallback(() => {
        null != m && null != f && (0, u.iV)({
          streamType: eP.lo.GUILD,
          ownerId: s,
          channelId: m.id,
          guildId: f
        })
      }, [s, m, f]);
      return null != c && null != m && null != c.guild_id ? (0, r.jsx)(em.Z, {
        message: t,
        compact: n,
        channel: m,
        playingActivity: p,
        onJoinStream: g,
        usernameHook: _
      }) : null
    },
    [Chunk981631.uaV.GUILD_DISCOVERY_DISQUALIFIED]: function(e) {
      let {
        message: t,
        compact: n
      } = e, i = t.getChannelId(), a = (0, l.e7)([U.Z], () => U.Z.getChannel(i), [i]), o = null != a ? a.getGuildId() : null;
      return (0, r.jsx)(eu.FJ, {
        message: t,
        compact: n,
        onClick: () => {
          null != o && j.Z.open(o, eT.pNK.ACCESS, eT.KsC.ACCESS_DISCOVERABLE)
        }
      })
    },
    [Chunk981631.uaV.GUILD_DISCOVERY_REQUALIFIED]: Chunk502115.xe,
    [Chunk981631.uaV.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: Chunk502115.HL,
    [Chunk981631.uaV.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: Chunk502115.Yc,
    [Chunk981631.uaV.THREAD_CREATED]: function(e) {
      let {
        message: t,
        channel: l,
        compact: s
      } = e, c = (0, et.l)({
        user: t.author,
        channelId: t.channel_id,
        guildId: l.guild_id,
        messageId: t.id
      }), u = i.useCallback(async e => {
        var n;
        let r = null == (n = t.messageReference) ? true : n.channel_id;
        if (null != r) {
          await R.Z.loadThread(r);
          let t = U.Z.getChannel(r);
          null != t && (0, L.ok)(t, e.shiftKey)
        }
      }, [t]), d = i.useCallback(() => {
        (0, a.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("91315"), n.e("219")]).then(n.bind(n, 223901));
          return t => (0, r.jsx)(e, eA({
            channel: l
          }, t))
        })
      }, [l]), p = i.useCallback(e => {
        var i;
        let l = U.Z.getChannel(null == (i = t.messageReference) ? true : i.channel_id);
        null != l && (0, o.jW)(e, async () => {
          let {
            default: e
          } = await Promise.all([n.e("90508"), n.e("11300")]).then(n.bind(n, 422200));
          return t => {
            var n, i;
            return (0, r.jsx)(e, (n = eA({}, t), i = i = {
              channel: l
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(i)).forEach(function(e) {
              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
            }), n))
          }
        })
      }, [t]);
      return (0, r.jsx)(eO.Z, {
        message: t,
        compact: s,
        usernameHook: c,
        onClickThread: u,
        onClickViewThreads: d,
        onContextMenuThread: p
      })
    },
    [Chunk981631.uaV.THREAD_STARTER_MESSAGE]: Chunk328749.Z,
    [Chunk981631.uaV.GUILD_INVITE_REMINDER]: true,
    [Chunk981631.uaV.AUTO_MODERATION_ACTION]: function(e) {
      let {
        message: t,
        compact: n,
        channel: i
      } = e;
      return (0, b.nY)(t) ? (0, r.jsx)(en.Z, {
        message: t,
        compact: n,
        channel: i
      }) : null
    },
    [Chunk981631.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED]: eZ,
    [Chunk981631.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED]: eZ,
    [Chunk981631.uaV.GUILD_INCIDENT_REPORT_RAID]: function(e) {
      let {
        message: t,
        compact: n,
        channel: i
      } = e, l = (0, et.l)({
        user: t.author,
        channelId: i.id,
        guildId: i.guild_id,
        messageId: t.id
      });
      return (0, r.jsx)(ep.Z, {
        message: t,
        compact: n,
        channel: i,
        usernameHook: l
      })
    },
    [Chunk981631.uaV.GUILD_INCIDENT_REPORT_FALSE_ALARM]: function(e) {
      let {
        message: t,
        compact: n,
        channel: i
      } = e, l = (0, et.l)({
        user: t.author,
        channelId: i.id,
        guildId: i.guild_id,
        messageId: t.id
      });
      return (0, r.jsx)(ed.Z, {
        message: t,
        compact: n,
        channel: i,
        usernameHook: l
      })
    },
    [Chunk981631.uaV.ROLE_SUBSCRIPTION_PURCHASE]: Chunk345114.Z,
    [Chunk981631.uaV.PURCHASE_NOTIFICATION]: function(e) {
      var t;
      let {
        message: n,
        channel: i,
        compact: l
      } = e;
      return (null == (t = n.purchaseNotification) ? true : t.type) === d.Eh.GUILD_PRODUCT ? (0, r.jsx)(v.Z, {
        message: n,
        channel: i,
        compact: l
      }) : null
    },
    [Chunk981631.uaV.INTERACTION_PREMIUM_UPSELL]: true,
    [Chunk981631.uaV.STAGE_START]: function(e) {
      let {
        message: t,
        channel: n,
        compact: i
      } = e, a = (0, et.l)({
        user: t.author,
        channelId: n.id,
        guildId: n.guild_id,
        messageId: t.id
      }), o = (0, l.e7)([y.ZP], () => y.ZP.getActiveEventByChannel(n.id), [n.id]);
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(eC.Z, {
          message: t,
          compact: i,
          usernameHook: a
        }), null != o && o.name === t.content ? (0, r.jsx)(x.Z, {
          code: "".concat(n.guild_id, "-").concat(o.id)
        }) : null]
      })
    },
    [Chunk981631.uaV.STAGE_END]: function(e) {
      let {
        message: t,
        channel: n,
        compact: i
      } = e, l = (0, et.l)({
        user: t.author,
        channelId: n.id,
        guildId: n.guild_id,
        messageId: t.id
      });
      return (0, r.jsx)(eh.Z, {
        message: t,
        compact: i,
        usernameHook: l
      })
    },
    [Chunk981631.uaV.STAGE_SPEAKER]: function(e) {
      let {
        message: t,
        channel: n,
        compact: i
      } = e, l = (0, et.l)({
        user: t.author,
        channelId: n.id,
        guildId: n.guild_id,
        messageId: t.id
      });
      return (0, r.jsx)(eE.Z, {
        message: t,
        compact: i,
        usernameHook: l
      })
    },
    [Chunk981631.uaV.STAGE_RAISE_HAND]: function(e) {
      var t, n;
      let {
        message: i,
        channel: o,
        compact: c
      } = e, u = (0, et.l)({
        user: i.author,
        channelId: o.id,
        guildId: o.guild_id,
        messageId: i.id
      }), d = (0, l.e7)([B.Z], () => B.Z.can(eT.Plq.MUTE_MEMBERS, o)), p = (0, l.e7)([w.Z], () => w.Z.getParticipant(o.id, i.author.id)), m = new Date(X.default.extractTimestamp(i.id)).toISOString() === new Date(null != (n = null == p || null == (t = p.voiceState) ? true : t.requestToSpeakTimestamp) ? n : 0).toISOString(), f = d && (null == p ? true : p.rtsState) === Z.xO.REQUESTED_TO_SPEAK && m;
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(eb.Z, {
          message: i,
          compact: c,
          usernameHook: u
        }), f ? (0, r.jsx)(a.zxk, {
          variant: "secondary",
          onClick: () => {
            (0, A.DT)(o, i.author.id, false), s.Z.deleteMessage(o.id, i.id, true)
          },
          text: eN.intl.string(eN.t.f0T7hI),
          icon: a.Lrb
        }) : null]
      })
    },
    [Chunk981631.uaV.STAGE_TOPIC]: function(e) {
      let {
        message: t,
        channel: n,
        compact: i
      } = e, l = (0, et.l)({
        user: t.author,
        channelId: n.id,
        guildId: n.guild_id,
        messageId: t.id
      });
      return (0, r.jsx)(ev.Z, {
        message: t,
        compact: i,
        usernameHook: l
      })
    },
    [Chunk981631.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: Chunk504733.Z,
    [Chunk981631.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED]: Chunk563959.P,
    [Chunk981631.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: Chunk563959.e,
    [Chunk981631.uaV.PREMIUM_REFERRAL]: true,
    [Chunk981631.uaV.GUILD_DEADCHAT_REVIVE_PROMPT]: function(e) {
      let {
        message: t,
        channel: n,
        compact: i
      } = e;
      return (0, r.jsx)(m.Z, {
        message: t,
        channel: n,
        compact: i
      })
    },
    [Chunk981631.uaV.CUSTOM_GIFT]: true,
    [Chunk981631.uaV.GUILD_GAMING_STATS_PROMPT]: function(e) {
      let {
        message: t,
        channel: n,
        compact: i
      } = e;
      return (0, r.jsx)(p.Z, {
        message: t,
        channel: n,
        compact: i
      })
    },
    [Chunk981631.uaV.VOICE_HANGOUT_INVITE]: true,
    [Chunk981631.uaV.POLL_RESULT]: Chunk507435.Z,
    [Chunk981631.uaV.CHANGELOG]: true,
    [Chunk981631.uaV.NITRO_NOTIFICATION]: function(e) {
      let {
        message: t,
        channel: n
      } = e;
      return (0, r.jsx)(ee.Z, {
        message: t,
        channel: n
      })
    },
    [Chunk981631.uaV.CHANNEL_LINKED_TO_LOBBY]: function(e) {
      let {
        message: t,
        channel: n,
        compact: i
      } = e;
      return (0, r.jsx)(ea.Z, {
        message: t,
        channel: n,
        compact: i
      })
    },
    [Chunk981631.uaV.GIFTING_PROMPT]: function(e) {
      let {
        message: t,
        channel: n
      } = e, i = t.giftingPrompt, a = (0, l.e7)([V.default], () => V.default.getUser(null == i ? true : i.recipientUserId));
      return null == i || null == a ? null : (0, r.jsx)(Q.Z, {
        giftIntentType: i.giftIntentType,
        recipientUser: a,
        channel: n,
        giftIntentSecondaryAction: i.giftIntentSecondaryAction
      })
    },
    [Chunk981631.uaV.IN_GAME_MESSAGE_NUX]: function(e) {
      let {
        message: t,
        channel: n,
        compact: i
      } = e;
      return (0, r.jsx)(ef.Z, {
        message: t,
        channel: n,
        author: t.author,
        compact: i
      })
    },
    [Chunk981631.uaV.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION]: Chunk29887.Cn,
    [Chunk981631.uaV.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION]: Chunk29887.Ue,
    [Chunk981631.uaV.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION]: Chunk29887.R6,
    [Chunk981631.uaV.HD_STREAMING_UPGRADED]: function(e) {
      let {
        message: t,
        channel: n,
        compact: i
      } = e;
      return (0, r.jsx)(J.Z, {
        message: t,
        channel: n,
        compact: i
      })
    },
    [Chunk981631.uaV.EMOJI_ADDED]: function(e) {
      let {
        message: t,
        channel: n,
        compact: i
      } = e, l = (0, et.l)({
        user: t.author,
        channelId: n.id,
        guildId: n.guild_id,
        messageId: t.id
      });
      return (0, r.jsx)(h.iq, {
        message: t,
        channel: n,
        compact: i,
        usernameHook: l
      })
    },
    [Chunk981631.uaV.CHAT_WALLPAPER_SET]: function(e) {
      let {
        message: t,
        channel: n,
        compact: i
      } = e;
      return (0, r.jsx)(_.Z, {
        message: t,
        channel: n,
        compact: i
      })
    },
    [Chunk981631.uaV.CHAT_WALLPAPER_REMOVED]: function(e) {
      let {
        message: t,
        channel: n,
        compact: i
      } = e;
      return (0, r.jsx)(f.Z, {
        message: t,
        channel: n,
        compact: i
      })
    },
    [Chunk981631.uaV.REPORT_TO_MOD_BAN_USER]: Chunk917318.Z,
    [Chunk981631.uaV.REPORT_TO_MOD_KICK_USER]: Chunk917318.Z,
    [Chunk981631.uaV.REPORT_TO_MOD_TIMEOUT_USER]: Chunk917318.Z,
    [Chunk981631.uaV.REPORT_TO_MOD_DELETED_MESSAGE]: Chunk917318.Z,
    [Chunk981631.uaV.REPORT_TO_MOD_CLOSED_REPORT]: Chunk917318.Z
  }),
  eL = Chunk647438.memo(function(e) {
    let {
      message: t,
      channel: n,
      compact: i,
      disableInteraction: l
    } = e, {
      type: a
    } = t, o = eR[a];
    if (null == o) {
      var s;
      return s = Error("unknown message type ".concat(t.type)), K.Z.captureException(s), new g.Z("SystemMessage").error("", s), null
    }
    return (0, r.jsx)($.ZP, {
      message: t,
      content: (0, q.ZP)(t).content,
      compact: null != i && i,
      children: (0, r.jsx)(o, {
        message: t,
        channel: n,
        compact: i,
        disableInteraction: l
      })
    })
  })