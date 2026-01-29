/** Chunk was on 92917 **/
/** chunk id: 672834, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => eL
}), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk843472 = require("./843472.js"),
  Chunk956793 = require("./956793.js"),
  Chunk401843 = require("./401843.js"),
  Chunk155718 = require("./155718.js"),
  Chunk151660 = require("./151660.jsx"),
  Chunk626584 = require("./626584.js"),
  Chunk659859 = require("./659859.jsx"),
  Chunk785823 = require("./785823.js"),
  Chunk509536 = require("./509536.jsx"),
  Chunk615179 = require("./615179.jsx"),
  Chunk120120 = require("./120120.jsx"),
  Chunk379114 = require("./379114.jsx"),
  Chunk698441 = require("./698441.js"),
  Chunk484724 = require("./484724.jsx"),
  Chunk997509 = require("./997509.js"),
  Chunk850131 = require("./850131.jsx"),
  Chunk31051 = require("./31051.jsx"),
  Chunk659203 = require("./659203.jsx"),
  Chunk446028 = require("./446028.jsx"),
  Chunk302291 = require("./302291.jsx"),
  Chunk282224 = require("./282224.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk849736 = require("./849736.js"),
  Chunk63995 = require("./63995.js"),
  Chunk105530 = require("./105530.js"),
  Chunk353202 = require("./353202.js"),
  Chunk747926 = require("./747926.js"),
  Chunk336589 = require("./336589.jsx"),
  Chunk961350 = require("./961350.js"),
  Chunk470710 = require("./470710.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk290863 = require("./290863.js"),
  Chunk309010 = require("./309010.js"),
  Chunk287809 = require("./287809.js"),
  Chunk977997 = require("./977997.js"),
  Chunk203982 = require("./203982.js"),
  Chunk562153 = require("./562153.js"),
  Chunk728458 = require("./728458.js"),
  Chunk661191 = require("./661191.js"),
  Chunk465364 = require("./465364.js"),
  Chunk877923 = require("./877923.jsx"),
  Chunk291812 = require("./291812.jsx"),
  Chunk898401 = require("./898401.jsx"),
  Chunk447215 = require("./447215.jsx"),
  Chunk97896 = require("./97896.jsx"),
  Chunk939344 = require("./939344.jsx"),
  Chunk451483 = require("./451483.jsx"),
  Chunk855532 = require("./855532.jsx"),
  Chunk724382 = require("./724382.jsx"),
  Chunk333782 = require("./333782.jsx"),
  Chunk441412 = require("./441412.jsx"),
  Chunk986533 = require("./986533.jsx"),
  Chunk320381 = require("./320381.jsx"),
  Chunk749795 = require("./749795.jsx"),
  Chunk821241 = require("./821241.jsx"),
  Chunk541171 = require("./541171.jsx"),
  Chunk229673 = require("./229673.jsx"),
  Chunk494086 = require("./494086.jsx"),
  Chunk734771 = require("./734771.jsx"),
  Chunk753073 = require("./753073.jsx"),
  Chunk640289 = require("./640289.jsx"),
  Chunk293657 = require("./293657.jsx"),
  Chunk269802 = require("./269802.jsx"),
  Chunk576471 = require("./576471.jsx"),
  Chunk808821 = require("./808821.jsx"),
  Chunk933762 = require("./933762.jsx"),
  Chunk840233 = require("./840233.jsx"),
  Chunk536030 = require("./536030.jsx"),
  Chunk912746 = require("./912746.jsx"),
  Chunk817253 = require("./817253.jsx"),
  Chunk911726 = require("./911726.jsx"),
  Chunk904854 = require("./904854.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk502075 = require("./502075.js"),
  Chunk985018 = require("./985018.jsx");

function eP(e) {
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
    author: s
  } = t, {
    guild_id: o
  } = n, c = t.getChannelId(), u = (0, l.bG)([G.A], () => G.A.getGuild(o), [o]), d = i.useCallback(() => {
    null != u && (0, h.K)({
      guildId: u.id,
      location: {
        section: eS.JJy.CHANNEL_TEXT_AREA,
        object: eS.ZSU.BOOST_ANNOUNCEMENT_UPSELL
      }
    })
  }, [u]), p = (0, $.P)({
    user: s,
    channelId: c,
    guildId: n.guild_id,
    messageId: t.id,
    stopPropagation: true
  });
  return (0, r.jsx)(eC.Ay, {
    message: t,
    compact: a,
    guild: u,
    usernameHook: p,
    onClickMessage: d
  })
}

function eR(e) {
  let {
    message: t,
    compact: n,
    channel: i
  } = e, l = (0, $.P)({
    user: t.author,
    channelId: i.id,
    guildId: i.guild_id,
    messageId: t.id
  });
  return (0, r.jsx)(es.A, {
    message: t,
    compact: n,
    usernameHook: l
  })
}
let eD = Object.freeze({
    [Chunk652215.lAJ.DEFAULT]: true,
    [Chunk652215.lAJ.REPLY]: true,
    [Chunk652215.lAJ.CHAT_INPUT_COMMAND]: true,
    [Chunk652215.lAJ.CONTEXT_MENU_COMMAND]: true,
    [Chunk652215.lAJ.RECIPIENT_ADD]: function(e) {
      let {
        message: t,
        channel: n,
        compact: i
      } = e, {
        author: a
      } = t, s = t.getChannelId(), o = (0, l.bG)([V.default], () => V.default.getUser(t.mentions[0]), [t]), c = K.Ay.getName(null, s, o), u = (0, $.P)({
        user: a,
        channelId: s,
        guildId: n.guild_id,
        messageId: t.id
      }), d = (0, $.P)({
        user: o,
        channelId: s,
        guildId: n.guild_id,
        messageId: t.id
      });
      return n.isThread() ? (0, r.jsx)(ex.A, {
        message: t,
        channel: n,
        compact: i,
        targetUser: o,
        actorUsernameHook: u,
        targetUsernameHook: d
      }) : (0, r.jsx)(em.A, {
        message: t,
        compact: i,
        otherUsername: c,
        usernameHook: u,
        otherUsernameHook: d
      })
    },
    [Chunk652215.lAJ.RECIPIENT_REMOVE]: function(e) {
      let {
        message: t,
        channel: n,
        compact: i
      } = e, {
        author: a
      } = t, s = t.getChannelId(), o = (0, l.bG)([V.default], () => V.default.getUser(t.mentions[0]), [t]), c = (0, $.P)({
        user: a,
        channelId: s,
        guildId: n.guild_id,
        messageId: t.id
      }), u = (0, $.P)({
        user: o,
        channelId: s,
        guildId: n.guild_id,
        messageId: t.id
      });
      return n.isThread() ? (0, r.jsx)(eO.A, {
        message: t,
        channel: n,
        compact: i,
        targetUser: o,
        actorUsernameHook: c,
        targetUsernameHook: u
      }) : null != o && o.id !== a.id ? (0, r.jsx)(ef.A, {
        message: t,
        channel: n,
        compact: i,
        usernameHook: c,
        otherUser: o,
        otherUsernameHook: u
      }) : (0, r.jsx)(ef.A, {
        message: t,
        channel: n,
        usernameHook: c
      })
    },
    [Chunk652215.lAJ.CALL]: function(e) {
      let {
        message: t,
        compact: n,
        channel: a
      } = e, {
        id: s,
        author: o
      } = t, u = M.default.getId(), d = t.getChannelId(), p = (0, l.bG)([k.A], () => k.A.isCallActive(d, s), [d, s]), m = (0, l.bG)([z.A], () => z.A.getVoiceState(eS.ME, u)), f = !p && null != t.call && !t.call.participants.includes(u), g = p && (null == m || m.channelId !== d), h = i.useCallback(() => c.default.selectVoiceChannel(d), [d]), _ = (0, $.P)({
        user: o,
        channelId: d,
        guildId: a.guild_id,
        messageId: t.id,
        enableDisplayNameStyles: true
      });
      return (0, r.jsx)(et.A, {
        compact: n,
        message: t,
        missed: f,
        joinable: g,
        usernameHook: _,
        onClickJoinCall: h
      })
    },
    [Chunk652215.lAJ.CHANNEL_NAME_CHANGE]: function(e) {
      let {
        message: t,
        compact: n,
        channel: i
      } = e, {
        author: l
      } = t, a = t.getChannelId(), s = (0, $.P)({
        user: l,
        channelId: a,
        guildId: i.guild_id,
        messageId: t.id
      });
      return (0, r.jsx)(el.A, {
        compact: n,
        message: t,
        usernameHook: s,
        isForumPost: i.isForumPost()
      })
    },
    [Chunk652215.lAJ.CHANNEL_ICON_CHANGE]: function(e) {
      let {
        message: t,
        compact: n,
        channel: i
      } = e, {
        author: l
      } = t, a = t.getChannelId(), s = (0, $.P)({
        user: l,
        channelId: a,
        guildId: i.guild_id,
        messageId: t.id
      });
      return (0, r.jsx)(er.A, {
        compact: n,
        message: t,
        usernameHook: s
      })
    },
    [Chunk652215.lAJ.CHANNEL_PINNED_MESSAGE]: function(e) {
      let {
        message: t,
        compact: n,
        channel: l
      } = e, {
        author: a
      } = t, s = t.getChannelId(), o = i.useCallback(() => {
        if (H.A.getChannelId() !== s) {
          let e = U.A.getChannel(s);
          null != e && (0, T.uh)(e.guild_id, e.id)
        }
        setTimeout(() => W._.dispatch(eS.jej.TOGGLE_CHANNEL_PINS), 0)
      }, [s]), c = (0, $.P)({
        user: a,
        channelId: s,
        guildId: l.guild_id,
        messageId: t.id
      });
      return (0, r.jsx)(ea.A, {
        message: t,
        compact: n,
        usernameHook: c,
        onClickPins: __OVERLAY__ ? null : o
      })
    },
    [Chunk652215.lAJ.USER_JOIN]: function(e) {
      let {
        message: t,
        compact: n,
        channel: i
      } = e, {
        author: l
      } = t, a = t.getChannelId(), s = (0, $.P)({
        user: l,
        channelId: a,
        guildId: i.guild_id,
        messageId: t.id
      });
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(ej.A, {
          message: t,
          compact: n,
          usernameHook: s
        }), (0, r.jsx)(L.I, {
          channel: i,
          message: t
        })]
      })
    },
    [Chunk652215.lAJ.GUILD_BOOST]: ew,
    [Chunk652215.lAJ.GUILD_BOOST_TIER_1]: ew,
    [Chunk652215.lAJ.GUILD_BOOST_TIER_2]: ew,
    [Chunk652215.lAJ.GUILD_BOOST_TIER_3]: ew,
    [Chunk652215.lAJ.CHANNEL_FOLLOW_ADD]: function(e) {
      let {
        message: t,
        compact: n,
        channel: i
      } = e, {
        author: l
      } = t, a = t.getChannelId(), s = (0, $.P)({
        user: l,
        channelId: a,
        guildId: i.guild_id,
        messageId: t.id
      });
      return (0, r.jsx)(en.A, {
        message: t,
        compact: n,
        usernameHook: s
      })
    },
    [Chunk652215.lAJ.GUILD_STREAM]: function(e) {
      let {
        message: t,
        compact: n,
        channel: a
      } = e, {
        author: s,
        author: {
          id: o
        },
        messageReference: c
      } = t, d = t.getChannelId(), p = (0, l.bG)([F.A], () => F.A.findActivity(o, e => e.type === eS.$pd.PLAYING), [o]), m = (0, l.bG)([U.A], () => null != c ? U.A.getChannel(c.channel_id) : null, [c]), f = null == c ? true : c.guild_id, g = (0, $.P)({
        user: s,
        channelId: d,
        guildId: a.guild_id,
        messageId: t.id
      }), h = i.useCallback(() => {
        null != m && null != f && (0, u.Nl)({
          streamType: eT.U4.GUILD,
          ownerId: o,
          channelId: m.id,
          guildId: f
        })
      }, [o, m, f]);
      return null != c && null != m && null != c.guild_id ? (0, r.jsx)(ed.A, {
        message: t,
        compact: n,
        channel: m,
        playingActivity: p,
        onJoinStream: h,
        usernameHook: g
      }) : null
    },
    [Chunk652215.lAJ.GUILD_DISCOVERY_DISQUALIFIED]: function(e) {
      let {
        message: t,
        compact: n
      } = e, i = t.getChannelId(), a = (0, l.bG)([U.A], () => U.A.getChannel(i), [i]), s = null != a ? a.getGuildId() : null;
      return (0, r.jsx)(eo.Rk, {
        message: t,
        compact: n,
        onClick: () => {
          null != s && x.A.open(s, eS.BEX.ACCESS, eS.nd0.ACCESS_DISCOVERABLE)
        }
      })
    },
    [Chunk652215.lAJ.GUILD_DISCOVERY_REQUALIFIED]: Chunk320381.wj,
    [Chunk652215.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: Chunk320381.Cq,
    [Chunk652215.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: Chunk320381.If,
    [Chunk652215.lAJ.THREAD_CREATED]: function(e) {
      let {
        message: t,
        channel: l,
        compact: o
      } = e, c = (0, $.P)({
        user: t.author,
        channelId: t.channel_id,
        guildId: l.guild_id,
        messageId: t.id
      }), u = i.useCallback(async e => {
        var n;
        let r = null == (n = t.messageReference) ? true : n.channel_id;
        if (null != r) {
          await R.A.loadThread(r);
          let t = U.A.getChannel(r);
          null != t && (0, D.JA)(t, e.shiftKey)
        }
      }, [t]), d = i.useCallback(() => {
        (0, a.mMO)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("34160"), n.e("86155")]).then(n.bind(n, 126768));
          return t => (0, r.jsx)(e, eP({
            channel: l
          }, t))
        })
      }, [l]), p = i.useCallback(e => {
        var i;
        let l = U.A.getChannel(null == (i = t.messageReference) ? true : i.channel_id);
        null != l && (0, s.L3)(e, async () => {
          let {
            default: e
          } = await Promise.all([n.e("99011"), n.e("88974"), n.e("86901")]).then(n.bind(n, 44536));
          return t => {
            var n, i;
            return (0, r.jsx)(e, (n = eP({}, t), i = i = {
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
      return (0, r.jsx)(ev.A, {
        message: t,
        compact: o,
        usernameHook: c,
        onClickThread: u,
        onClickViewThreads: d,
        onContextMenuThread: p
      })
    },
    [Chunk652215.lAJ.THREAD_STARTER_MESSAGE]: Chunk912746.A,
    [Chunk652215.lAJ.GUILD_INVITE_REMINDER]: true,
    [Chunk652215.lAJ.AUTO_MODERATION_ACTION]: function(e) {
      let {
        message: t,
        compact: n,
        channel: i
      } = e;
      return (0, g.ER)(t) ? (0, r.jsx)(ee.A, {
        message: t,
        compact: n,
        channel: i
      }) : null
    },
    [Chunk652215.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED]: eR,
    [Chunk652215.lAJ.GUILD_INCIDENT_ALERT_MODE_DISABLED]: eR,
    [Chunk652215.lAJ.GUILD_INCIDENT_REPORT_RAID]: function(e) {
      let {
        message: t,
        compact: n,
        channel: i
      } = e, l = (0, $.P)({
        user: t.author,
        channelId: i.id,
        guildId: i.guild_id,
        messageId: t.id
      });
      return (0, r.jsx)(eu.A, {
        message: t,
        compact: n,
        channel: i,
        usernameHook: l
      })
    },
    [Chunk652215.lAJ.GUILD_INCIDENT_REPORT_FALSE_ALARM]: function(e) {
      let {
        message: t,
        compact: n,
        channel: i
      } = e, l = (0, $.P)({
        user: t.author,
        channelId: i.id,
        guildId: i.guild_id,
        messageId: t.id
      });
      return (0, r.jsx)(ec.A, {
        message: t,
        compact: n,
        channel: i,
        usernameHook: l
      })
    },
    [Chunk652215.lAJ.ROLE_SUBSCRIPTION_PURCHASE]: Chunk379114.A,
    [Chunk652215.lAJ.PURCHASE_NOTIFICATION]: function(e) {
      var t;
      let {
        message: n,
        channel: i,
        compact: l
      } = e;
      return (null == (t = n.purchaseNotification) ? true : t.type) === d.hE.GUILD_PRODUCT ? (0, r.jsx)(b.A, {
        message: n,
        channel: i,
        compact: l
      }) : null
    },
    [Chunk652215.lAJ.INTERACTION_PREMIUM_UPSELL]: true,
    [Chunk652215.lAJ.STAGE_START]: function(e) {
      let {
        message: t,
        channel: n,
        compact: i
      } = e, a = (0, $.P)({
        user: t.author,
        channelId: n.id,
        guildId: n.guild_id,
        messageId: t.id
      }), s = (0, l.bG)([y.Ay], () => y.Ay.getActiveEventByChannel(n.id), [n.id]);
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(eb.A, {
          message: t,
          compact: i,
          usernameHook: a
        }), null != s && s.name === t.content ? (0, r.jsx)(v.A, {
          code: "".concat(n.guild_id, "-").concat(s.id)
        }) : null]
      })
    },
    [Chunk652215.lAJ.STAGE_END]: function(e) {
      let {
        message: t,
        channel: n,
        compact: i
      } = e, l = (0, $.P)({
        user: t.author,
        channelId: n.id,
        guildId: n.guild_id,
        messageId: t.id
      });
      return (0, r.jsx)(eg.A, {
        message: t,
        compact: i,
        usernameHook: l
      })
    },
    [Chunk652215.lAJ.STAGE_SPEAKER]: function(e) {
      let {
        message: t,
        channel: n,
        compact: i
      } = e, l = (0, $.P)({
        user: t.author,
        channelId: n.id,
        guildId: n.guild_id,
        messageId: t.id
      });
      return (0, r.jsx)(e_.A, {
        message: t,
        compact: i,
        usernameHook: l
      })
    },
    [Chunk652215.lAJ.STAGE_RAISE_HAND]: function(e) {
      var t, n;
      let {
        message: i,
        channel: s,
        compact: c
      } = e, u = (0, $.P)({
        user: i.author,
        channelId: s.id,
        guildId: s.guild_id,
        messageId: i.id
      }), d = (0, l.bG)([B.A], () => B.A.can(eS.xBc.MUTE_MEMBERS, s)), p = (0, l.bG)([P.A], () => P.A.getParticipant(s.id, i.author.id)), m = new Date(q.default.extractTimestamp(i.id)).toISOString() === new Date(null != (t = null == p || null == (n = p.voiceState) ? true : n.requestToSpeakTimestamp) ? t : 0).toISOString(), f = d && (null == p ? true : p.rtsState) === w.zF.REQUESTED_TO_SPEAK && m;
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(eh.A, {
          message: i,
          compact: c,
          usernameHook: u
        }), f ? (0, r.jsx)(a.Button, {
          variant: "secondary",
          onClick: () => {
            (0, N.lL)(s, i.author.id, false), o.A.deleteMessage(s.id, i.id, true)
          },
          text: eN.intl.string(eN.t.f0T7hI),
          icon: a.LvC
        }) : null]
      })
    },
    [Chunk652215.lAJ.STAGE_TOPIC]: function(e) {
      let {
        message: t,
        channel: n,
        compact: i
      } = e, l = (0, $.P)({
        user: t.author,
        channelId: n.id,
        guildId: n.guild_id,
        messageId: t.id
      });
      return (0, r.jsx)(eA.A, {
        message: t,
        compact: i,
        usernameHook: l
      })
    },
    [Chunk652215.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: Chunk446028.A,
    [Chunk652215.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED]: Chunk302291.R,
    [Chunk652215.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: Chunk302291.d,
    [Chunk652215.lAJ.PREMIUM_REFERRAL]: function(e) {
      let {
        message: t,
        compact: n
      } = e;
      return (0, r.jsx)(j.A, {
        userTrialOfferId: t.referralTrialOfferId,
        canRenderReferralEmbed: true,
        compact: n
      })
    },
    [Chunk652215.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT]: function(e) {
      let {
        message: t,
        channel: n,
        compact: i
      } = e;
      return (0, r.jsx)(p.A, {
        message: t,
        channel: n,
        compact: i
      })
    },
    [Chunk652215.lAJ.CUSTOM_GIFT]: true,
    [Chunk652215.lAJ.GUILD_GAMING_STATS_PROMPT]: true,
    [Chunk652215.lAJ.VOICE_HANGOUT_INVITE]: true,
    [Chunk652215.lAJ.POLL_RESULT]: Chunk850131.A,
    [Chunk652215.lAJ.CHANGELOG]: true,
    [Chunk652215.lAJ.NITRO_NOTIFICATION]: function(e) {
      let {
        message: t,
        channel: n
      } = e;
      return (0, r.jsx)(X.A, {
        message: t,
        channel: n
      })
    },
    [Chunk652215.lAJ.CHANNEL_LINKED_TO_LOBBY]: function(e) {
      let {
        message: t,
        channel: n,
        compact: i
      } = e;
      return (0, r.jsx)(ei.A, {
        message: t,
        channel: n,
        compact: i
      })
    },
    [Chunk652215.lAJ.GIFTING_PROMPT]: function(e) {
      let {
        message: t,
        channel: n
      } = e, i = t.giftingPrompt, a = (0, l.bG)([V.default], () => V.default.getUser(null == i ? true : i.recipientUserId));
      return null == i || null == a ? null : (0, r.jsx)(Q.A, {
        giftIntentType: i.giftIntentType,
        recipientUser: a,
        channel: n
      })
    },
    [Chunk652215.lAJ.IN_GAME_MESSAGE_NUX]: function(e) {
      let {
        message: t,
        channel: n,
        compact: i
      } = e;
      return (0, r.jsx)(ep.A, {
        message: t,
        channel: n,
        author: t.author,
        compact: i
      })
    },
    [Chunk652215.lAJ.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION]: Chunk615179.Z_,
    [Chunk652215.lAJ.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION]: Chunk615179.QN,
    [Chunk652215.lAJ.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION]: Chunk615179.ez,
    [Chunk652215.lAJ.HD_STREAMING_UPGRADED]: true,
    [Chunk652215.lAJ.EMOJI_ADDED]: function(e) {
      let {
        message: t,
        channel: n,
        compact: i
      } = e, l = (0, $.P)({
        user: t.author,
        channelId: n.id,
        guildId: n.guild_id,
        messageId: t.id
      });
      return (0, r.jsx)(f._W, {
        message: t,
        channel: n,
        compact: i,
        usernameHook: l
      })
    },
    [Chunk652215.lAJ.CHAT_WALLPAPER_SET]: true,
    [Chunk652215.lAJ.CHAT_WALLPAPER_REMOVED]: true,
    [Chunk652215.lAJ.REPORT_TO_MOD_BAN_USER]: Chunk282224.A,
    [Chunk652215.lAJ.REPORT_TO_MOD_KICK_USER]: Chunk282224.A,
    [Chunk652215.lAJ.REPORT_TO_MOD_TIMEOUT_USER]: Chunk282224.A,
    [Chunk652215.lAJ.REPORT_TO_MOD_DELETED_MESSAGE]: Chunk282224.A,
    [Chunk652215.lAJ.REPORT_TO_MOD_CLOSED_REPORT]: Chunk282224.A,
    [Chunk652215.lAJ.PREMIUM_GROUP_INVITE]: function(e) {
      let {
        message: t,
        channel: n,
        compact: i
      } = e;
      return (0, r.jsx)(E.A, {
        message: t,
        channel: n,
        compact: i
      })
    },
    [Chunk652215.lAJ.VOICE_SESSION]: function(e) {
      let {
        message: t,
        channel: n,
        compact: i
      } = e;
      return (0, r.jsx)(eI.A, {
        message: t,
        channel: n,
        compact: i
      })
    },
    66: function(e) {
      let {
        message: t,
        compact: n
      } = e;
      return (0, r.jsx)(ey.A, {
        message: t,
        compact: n
      })
    }
  }),
  eL = Chunk64700.memo(function(e) {
    let {
      message: t,
      channel: n,
      compact: i,
      disableInteraction: l
    } = e, {
      type: a
    } = t, s = eD[a];
    if (null == s) {
      var o;
      return o = Error("unknown message type ".concat(t.type)), Y.A.captureException(o), new m.A("SystemMessage").error("", o), null
    }
    return (0, r.jsx)(Z.Ay, {
      message: t,
      content: (0, J.Ay)(t).content,
      compact: null != i && i,
      children: (0, r.jsx)(s, {
        message: t,
        channel: n,
        compact: i,
        disableInteraction: l
      })
    })
  })