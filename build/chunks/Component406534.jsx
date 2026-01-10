/** Chunk was on 81985 **/
/** chunk id: 406534, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => et
}), require("./539854.js"), require("./388685.js"), require("./290780.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk904245 = require("./904245.js"),
  Chunk902840 = require("./902840.js"),
  Chunk607070 = require("./607070.js"),
  Chunk367907 = require("./367907.js"),
  Chunk605984 = require("./605984.js"),
  Chunk453470 = require("./453470.jsx"),
  Chunk40330 = require("./40330.jsx"),
  Chunk600084 = require("./600084.jsx"),
  Chunk62764 = require("./62764.jsx"),
  Chunk79712 = require("./79712.jsx"),
  Chunk736052 = require("./736052.js"),
  Chunk216572 = require("./216572.js"),
  Chunk359110 = require("./359110.js"),
  Chunk359119 = require("./359119.js"),
  Chunk13279 = require("./13279.js"),
  Chunk248789 = require("./248789.jsx"),
  Chunk88101 = require("./88101.js"),
  Chunk576954 = require("./576954.jsx"),
  Chunk765104 = require("./765104.js"),
  Chunk122707 = require("./122707.js"),
  Chunk779836 = require("./779836.jsx"),
  Chunk23750 = require("./23750.js"),
  Chunk306680 = require("./306680.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk55935 = require("./55935.js"),
  Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js"),
  Chunk534091 = require("./534091.js"),
  Chunk554838 = require("./554838.js"),
  Chunk481369 = require("./481369.js"),
  Chunk186877 = require("./186877.js"),
  Chunk294218 = require("./294218.jsx"),
  Chunk534469 = require("./534469.jsx"),
  Chunk993397 = require("./993397.jsx"),
  Chunk511010 = require("./511010.jsx"),
  Chunk524444 = require("./524444.jsx"),
  Chunk977391 = require("./977391.jsx"),
  Chunk921235 = require("./921235.jsx"),
  Chunk97352 = require("./97352.js"),
  Chunk226027 = require("./226027.js"),
  Chunk959517 = require("./959517.js"),
  Chunk981631 = require("./981631.js"),
  Chunk134612 = require("./134612.js"),
  Chunk388032 = require("./388032.jsx");

function J(e) {
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

function $(e) {
  return null != e && e.type === q.ys_.MESSAGE && e.content.id === e.groupId
}
let ee = Chunk473749.memo(function(e) {
  let {
    file: t,
    channel: n,
    user: i,
    isGroupStart: l,
    compact: a
  } = e;
  return (0, r.jsx)(U.Z, {
    compact: a,
    isGroupStart: l,
    channel: n,
    message: new P.ZP({
      id: t.id,
      key: "pending-upload-".concat(t.id),
      type: q.uaV.DEFAULT,
      author: i,
      channel_id: n.id,
      customRenderedContent: {
        hasSpoilerEmbeds: false,
        hasBailedAst: false,
        content: (0, r.jsx)(f.p, {
          channelId: n.id,
          file: t
        })
      }
    })
  })
});

function et(e) {
  var t, n;
  let i, f, {
      channel: U,
      messages: et,
      unreadCount: en,
      showNewMessagesBar: er,
      messageDisplayCompact: ei,
      channelStream: el,
      uploads: ea,
      scrollManager: eo,
      specs: es,
      filterAfterTimestamp: ec,
      showingQuarantineBanner: eu,
      hideSummaries: ed,
      jumpBarClassName: ep
    } = e,
    ef = T.default.getCurrentUser(),
    eh = () => eo.isInitialized() || et.ready,
    eg = (0, L.$)(U),
    em = et.length > 0 && (null == (t = et.first()) ? true : t.isFirstMessageInForumPost(U)),
    eb = (0, s.ts)(U),
    ey = (0, l.e7)([S.Z], () => S.Z.shouldShowTopicsBar() && !ed),
    ev = (0, C.P)(U.id),
    eO = (0, j.z)(U.id, X.zr),
    ej = (0, d.k)(U.id),
    ex = (0, k.Z)(),
    eC = function(e, t) {
      if (e.isDM() && null != t)
        if (t.type === O.pj.STRANGER_DANGER) return (0, r.jsx)(E.M, {
          channelId: e.id,
          warningId: t.id,
          senderId: e.getRecipientId()
        });
        else if (t.type === O.pj.LIKELY_ATO) return (0, r.jsx)(p.M, {
        channelId: e.id,
        warningId: t.id,
        senderId: e.getRecipientId()
      });
      else return (0, r.jsx)(x.Y, {
        channelId: e.id,
        warningId: t.id,
        senderId: e.getRecipientId()
      });
      return null
    }(U, null != (n = null != ev ? ev : eO) ? n : ej),
    eE = U.isForumPost() && !em ? (0, r.jsx)(g.Z, {
      postId: U.id
    }) : null,
    eS = (0, b.Z)(U.id),
    e_ = (0, y.nw)(U);
  (0, W.Z)();
  let eI = null,
    eP = [],
    eZ = el.map((e, t) => {
      if (e.type === q.ys_.DIVIDER) {
        var n, i;
        let l = null != e.unreadId;
        return null != ec ? null : e.isSummaryDivider ? (0, r.jsx)(I.Z, {
          index: t,
          item: e,
          channel: U,
          isBeforeGroup: null == e.content && $(el[t + 1])
        }) : (0, r.jsx)(F.Z, {
          isUnread: l,
          isBeforeGroup: null == e.content && $(el[t + 1]),
          id: l ? Y.j1 : true,
          children: e.content
        }, "divider-".concat(null != (i = null != (n = e.contentKey) ? n : e.unreadId) ? i : t))
      }
      if (e.type === q.ys_.FORUM_POST_ACTION_BAR) return (0, r.jsx)(g.Z, {
        parentChannelId: U.parent_id,
        postId: U.id,
        isLastItem: t + 1 === el.length,
        isFirstMessage: true
      }, "forum-post-action-bar-".concat(U.id));
      if (e.type === q.ys_.MESSAGE_GROUP_BLOCKED || e.type === q.ys_.MESSAGE_GROUP_IGNORED || e.type === q.ys_.MESSAGE_GROUP_SPAMMER) {
        let t;
        return t = e.type === q.ys_.MESSAGE_GROUP_BLOCKED ? Q.t["+FcYM/"] : e.type === q.ys_.MESSAGE_GROUP_IGNORED ? Q.t["VFWjc+"] : Q.t.xfkfTK, (0, r.jsx)(B.Z, {
          unreadId: Y.j1,
          messages: e,
          channel: U,
          compact: ei,
          collapsedReason: t
        }, e.key)
      }
      if (null != ec && ec > e.content.timestamp.getTime() * w.Z.Millis.SECOND) return;
      e.type === q.ys_.MESSAGE && null == eI && (eI = e);
      let l = e.groupId === (null == eI ? true : eI.groupId) ? eI.content.id : e.groupId,
        a = e_ && e.content.isFirstMessageInForumPost(U),
        o = e.type === q.ys_.THREAD_STARTER_MESSAGE ? G.Ru : G.ZP;
      return (0, r.jsx)(o, {
        compact: ei && !a,
        channel: U,
        message: e.content,
        groupId: l,
        flashKey: e.flashKey,
        id: (0, D.p)(U.id, e.content.id),
        isLastItem: t >= el.length - 1,
        renderContentOnly: eS || a
      }, e.content.id)
    });
  eP.push(...eZ);
  let eN = el[el.length - 1];
  if (null != ef && ea.forEach((e, t) => {
      let n = 0 === t && (0, M.J)(U, eN, new P.ZP({
        type: q.uaV.DEFAULT,
        author: ef
      }));
      eP.push((0, r.jsx)(ee, {
        file: e,
        channel: U,
        user: ef,
        isGroupStart: n,
        compact: ei
      }, "upload-".concat(e.id)))
    }), et.hasMoreBefore && null == ec) {
    et.length > 0 && eP.unshift((0, r.jsx)("div", {
      style: {
        height: Y.D4,
        flex: "0 0 auto"
      }
    }, "buffer"));
    let {
      useReducedMotion: e
    } = c.Z;
    (e && eh() || !e) && eP.unshift((0, r.jsx)(V.ZP, J({
      compact: ei
    }, es), "has-more"))
  }
  if (et.hasMoreBefore && null == ec || eP.unshift((0, r.jsx)(h.Z, {
      channel: U,
      showingBanner: eu
    }, "empty-message")), et.hasMoreAfter && eP.push((0, r.jsx)(V.ZP, J({
      compact: ei
    }, es), "has-more-after")), !eu && eg && eh() && eP.push((0, r.jsx)(z.Z, {
      channel: U
    })), en > 0 && er && eh()) {
    let e, t, n = Z.ZP.getOldestUnreadTimestamp(U.id),
      l = 0 !== n ? n : R.default.extractTimestamp(U.id),
      o = (0, A.KC)(new Date, new Date(l));
    if (Z.ZP.isEstimated(U.id) ? (e = o ? Q.t.wvtbbG : Q.t.tHqbtg, t = Q.t.vaPWFe) : (e = o ? Q.t["BctFH/"] : Q.t["3wXb9P"], t = Q.t["4H8ldG"]), eb && (0, s.tW)(U) && ex.includes(K.E.SUMMARIES)) {
      let n = Z.ZP.ackMessageId(U.id),
        o = (0, _.q)(U.id, Z.ZP.getOldestUnreadMessageId(U.id));
      if ((0, u.yw)(q.rMx.SUMMARIES_UNREAD_BAR_VIEWED, {
          num_unread_summaries: o,
          num_unread_messages: en,
          last_ack_message_id: n,
          summaries_enabled_by_user: ey,
          summaries_enabled_for_channel: (0, s.Lp)(U)
        }), (0, s.Lp)(U)) {
        let n = ey ? Q.intl.format(t, {
          count: en
        }) : Q.intl.format(e, {
          count: en,
          timestamp: l
        });
        if (ey) {
          let e = o > 0 ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(a.Text, {
              variant: "text-sm/medium",
              color: "currentColor",
              children: Q.intl.format(t, {
                count: en
              })
            }), (0, r.jsx)(m.Z, {
              style: {
                paddingLeft: 8,
                paddingRight: 8
              },
              height: 4,
              width: 4
            }), (0, r.jsx)(a.Text, {
              variant: "text-sm/medium",
              color: "currentColor",
              children: Q.intl.format(Q.t.CBftDc, {
                count: o
              })
            })]
          }) : (0, r.jsx)(a.Text, {
            variant: "text-sm/medium",
            color: "currentColor",
            children: n
          });
          i = (0, r.jsx)(H.G5, {
            scrollManager: eo,
            content: e,
            channel: U
          })
        } else {
          let e = (0, r.jsx)("div", {
            style: {
              display: "flex",
              textTransform: "none",
              alignItems: "center"
            },
            children: o > 0 ? (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "currentColor",
                children: Q.intl.format(t, {
                  count: en
                })
              }), (0, r.jsx)(m.Z, {
                style: {
                  paddingLeft: 8,
                  paddingRight: 8
                },
                height: 4,
                width: 4
              }), (0, r.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "currentColor",
                children: Q.intl.format(Q.t.CBftDc, {
                  count: o
                })
              })]
            }) : (0, r.jsx)(a.Text, {
              variant: "text-sm/medium",
              color: "currentColor",
              children: n
            })
          });
          i = (0, r.jsx)(H.LE, {
            content: e,
            channelId: U.id
          })
        }
      }
    } else ex.includes(K.E.NEW_MESSAGES) && (i = (0, r.jsx)(H.LE, {
      content: Q.intl.format(e, {
        count: en,
        timestamp: l
      }),
      channelId: U.id
    }))
  }
  if (null == i && (0, s.Lp)(U) && ey && ex.includes(K.E.SUMMARIES) && (i = (0, r.jsx)(H.BO, {
      channel: U,
      scrollManager: eo
    })), et.error) f = (0, r.jsx)(H.Rp, {
    loading: et.loadingMore,
    onClick: () => {
      var e;
      return e = U.id, void o.Z.fetchMessages({
        channelId: e,
        limit: q.AQB,
        truncate: true
      })
    },
    className: ep
  });
  else if (et.hasMoreAfter && eh()) {
    let {
      jumpReturnTargetId: e
    } = et;
    f = et.loadingMore && et.jumpedToPresent ? (0, r.jsx)(H.DR, {
      className: ep
    }) : null != e ? (0, r.jsx)(H.DR, {
      type: H.A7.REPLY,
      onClick: () => {
        o.Z.jumpToMessage({
          channelId: U.id,
          messageId: e,
          flash: true
        })
      },
      className: ep
    }) : (0, r.jsx)(H.DR, {
      onClick: () => (function(e) {
        o.Z.jumpToPresent(e.id, q.AQB);
        let t = N.Z.getChannelId();
        e.id === t && (0, v.Kh)(e.id)
      })(U),
      className: ep
    })
  }
  return {
    channelStreamMarkup: eP,
    newMessagesBar: i,
    jumpToPresentBar: f,
    forumPostActionBar: eE,
    safetyWarningBanner: eC
  }
}