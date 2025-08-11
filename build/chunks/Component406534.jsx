/** Chunk was on web.js **/
/** chunk id: 406534, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ea
}), require("./539854.js"), require("./388685.js"), require("./290780.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk904245 = require("./904245.js"),
  Chunk966390 = require("./966390.js"),
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

function $(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ee(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      $(e, t, n[t])
    })
  }
  return e
}

function et(e) {
  return null != e && e.type === X.ys_.MESSAGE && e.content.id === e.groupId
}

function en(e) {
  s.Z.jumpToPresent(e.id, X.AQB);
  let t = w.Z.getChannelId();
  e.id === t && (0, y.Kh)(e.id)
}

function er(e, t) {
  s.Z.jumpToMessage({
    channelId: e.id,
    messageId: t,
    flash: true
  })
}

function ei(e) {
  s.Z.fetchMessages({
    channelId: e,
    limit: X.AQB,
    truncate: true
  })
}
let eo = Chunk73800.memo(function(e) {
  let {
    file: t,
    channel: n,
    user: i,
    isGroupStart: o,
    compact: a
  } = e;
  return (0, r.jsx)(B.Z, {
    compact: a,
    isGroupStart: o,
    channel: n,
    message: new R.ZP({
      id: t.id,
      key: "pending-upload-".concat(t.id),
      type: X.uaV.DEFAULT,
      author: i,
      channel_id: n.id,
      customRenderedContent: {
        hasSpoilerEmbeds: false,
        content: (0, r.jsx)(p.p, {
          filename: t.name,
          progress: null != t.progress ? t.progress : 0,
          size: t.currentSize,
          onCancelUpload: () => {
            l.Z.cancel(n.id, t)
          }
        })
      }
    })
  })
});

function ea(e) {
  var t, n;
  let i, s, {
      channel: l,
      messages: _,
      unreadCount: p,
      showNewMessagesBar: y,
      messageDisplayCompact: O,
      channelStream: I,
      uploads: S,
      scrollManager: w,
      specs: B,
      filterAfterTimestamp: $,
      showingQuarantineBanner: ea,
      hideSummaries: el,
      jumpBarClassName: ec
    } = e,
    eu = D.default.getCurrentUser(),
    ed = () => w.isInitialized() || _.ready,
    ef = (0, G.$)(l),
    e_ = _.length > 0 && (null == (t = _.first()) ? true : t.isFirstMessageInForumPost(l)),
    ep = (0, c.ts)(l),
    eh = (0, o.e7)([A.Z], () => A.Z.shouldShowTopicsBar() && !el),
    em = (0, T.P)(l.id),
    eg = (0, v.z)(l.id, Q.zr),
    eE = (0, f.k)(l.id),
    eb = (0, U.Z)(),
    ey = es(l, null != (n = null != em ? em : eg) ? n : eE),
    eO = l.isForumPost() && !e_ ? (0, r.jsx)(m.Z, {
      postId: l.id
    }) : null,
    ev = (0, E.Z)(l.id),
    eI = (0, b.nw)(l);
  (0, K.Z)();
  let eT = null,
    eS = [],
    eA = I.map((e, t) => {
      if (e.type === X.ys_.DIVIDER) {
        var n, i;
        let o = null != e.unreadId;
        return null != $ ? null : e.isSummaryDivider ? (0, r.jsx)(C.Z, {
          index: t,
          item: e,
          channel: l,
          isBeforeGroup: null == e.content && et(I[t + 1])
        }) : (0, r.jsx)(V.Z, {
          isUnread: o,
          isBeforeGroup: null == e.content && et(I[t + 1]),
          id: o ? q.j1 : true,
          children: e.content
        }, "divider-".concat(null != (i = null != (n = e.contentKey) ? n : e.unreadId) ? i : t))
      }
      if (e.type === X.ys_.FORUM_POST_ACTION_BAR) return (0, r.jsx)(m.Z, {
        parentChannelId: l.parent_id,
        postId: l.id,
        isLastItem: t + 1 === I.length,
        isFirstMessage: true
      }, "forum-post-action-bar-".concat(l.id));
      if (e.type === X.ys_.MESSAGE_GROUP_BLOCKED || e.type === X.ys_.MESSAGE_GROUP_IGNORED || e.type === X.ys_.MESSAGE_GROUP_SPAMMER) {
        let t;
        return t = e.type === X.ys_.MESSAGE_GROUP_BLOCKED ? J.t["+FcYMz"] : e.type === X.ys_.MESSAGE_GROUP_IGNORED ? J.t.VFWjc3 : J.t.xfkfTE, (0, r.jsx)(F.Z, {
          unreadId: q.j1,
          messages: e,
          channel: l,
          compact: O,
          collapsedReason: t
        }, e.key)
      }
      if (null != $ && $ > e.content.timestamp.getTime() * x.Z.Millis.SECOND) return;
      e.type === X.ys_.MESSAGE && null == eT && (eT = e);
      let o = e.groupId === (null == eT ? true : eT.groupId) ? eT.content.id : e.groupId,
        a = eI && e.content.isFirstMessageInForumPost(l),
        s = e.type === X.ys_.THREAD_STARTER_MESSAGE ? Z.Ru : Z.ZP;
      return (0, r.jsx)(s, {
        compact: O && !a,
        channel: l,
        message: e.content,
        groupId: o,
        flashKey: e.flashKey,
        id: (0, k.p)(l.id, e.content.id),
        isLastItem: t >= I.length - 1,
        renderContentOnly: ev || a
      }, e.content.id)
    });
  eS.push(...eA);
  let eN = I[I.length - 1];
  if (null != eu && S.forEach((e, t) => {
      let n = 0 === t && (0, j.J)(l, eN, new R.ZP({
        type: X.uaV.DEFAULT,
        author: eu
      }));
      eS.push((0, r.jsx)(eo, {
        file: e,
        channel: l,
        user: eu,
        isGroupStart: n,
        compact: O
      }, "upload-".concat(e.id)))
    }), _.hasMoreBefore && null == $) {
    _.length > 0 && eS.unshift((0, r.jsx)("div", {
      style: {
        height: q.D4,
        flex: "0 0 auto"
      }
    }, "buffer"));
    let {
      useReducedMotion: e
    } = u.Z;
    (e && ed() || !e) && eS.unshift((0, r.jsx)(Y.ZP, ee({
      compact: O
    }, B), "has-more"))
  }
  if (_.hasMoreBefore && null == $ || eS.unshift((0, r.jsx)(h.Z, {
      channel: l,
      showingBanner: ea
    }, "empty-message")), _.hasMoreAfter && eS.push((0, r.jsx)(Y.ZP, ee({
      compact: O
    }, B), "has-more-after")), !ea && ef && ed() && eS.push((0, r.jsx)(W.Z, {
      channel: l
    })), p > 0 && y && ed()) {
    let e, t, n = P.ZP.getOldestUnreadTimestamp(l.id),
      o = 0 !== n ? n : M.default.extractTimestamp(l.id),
      s = (0, L.KC)(new Date, new Date(o));
    if (P.ZP.isEstimated(l.id) ? (e = s ? J.t.wvtbbG : J.t.tHqbtr, t = J.t.vaPWFR) : (e = s ? J.t.BctFHx : J.t["3wXb9P"], t = J.t["4H8ldH"]), ep && (0, c.tW)(l) && eb.includes(z.E.SUMMARIES)) {
      let n = P.ZP.ackMessageId(l.id),
        s = (0, N.q)(l.id, P.ZP.getOldestUnreadMessageId(l.id));
      if ((0, d.yw)(X.rMx.SUMMARIES_UNREAD_BAR_VIEWED, {
          num_unread_summaries: s,
          num_unread_messages: p,
          last_ack_message_id: n,
          summaries_enabled_by_user: eh,
          summaries_enabled_for_channel: (0, c.Lp)(l)
        }), (0, c.Lp)(l)) {
        let n = eh ? J.intl.format(t, {
          count: p
        }) : J.intl.format(e, {
          count: p,
          timestamp: o
        });
        if (eh) {
          let e = s > 0 ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(a.Text, {
              variant: "text-sm/medium",
              color: "currentColor",
              children: J.intl.format(t, {
                count: p
              })
            }), (0, r.jsx)(g.Z, {
              style: {
                paddingLeft: 8,
                paddingRight: 8
              },
              height: 4,
              width: 4
            }), (0, r.jsx)(a.Text, {
              variant: "text-sm/medium",
              color: "currentColor",
              children: J.intl.format(J.t.CBftDQ, {
                count: s
              })
            })]
          }) : (0, r.jsx)(a.Text, {
            variant: "text-sm/medium",
            color: "currentColor",
            children: n
          });
          i = (0, r.jsx)(H.G5, {
            scrollManager: w,
            content: e,
            channel: l
          })
        } else {
          let e = (0, r.jsx)("div", {
            style: {
              display: "flex",
              textTransform: "none",
              alignItems: "center"
            },
            children: s > 0 ? (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "currentColor",
                children: J.intl.format(t, {
                  count: p
                })
              }), (0, r.jsx)(g.Z, {
                style: {
                  paddingLeft: 8,
                  paddingRight: 8
                },
                height: 4,
                width: 4
              }), (0, r.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "currentColor",
                children: J.intl.format(J.t.CBftDQ, {
                  count: s
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
            channelId: l.id
          })
        }
      }
    } else eb.includes(z.E.NEW_MESSAGES) && (i = (0, r.jsx)(H.LE, {
      content: J.intl.format(e, {
        count: p,
        timestamp: o
      }),
      channelId: l.id
    }))
  }
  if (null == i && (0, c.Lp)(l) && eh && eb.includes(z.E.SUMMARIES) && (i = (0, r.jsx)(H.BO, {
      channel: l,
      scrollManager: w
    })), _.error) s = (0, r.jsx)(H.Rp, {
    loading: _.loadingMore,
    onClick: () => ei(l.id),
    className: ec
  });
  else if (_.hasMoreAfter && ed()) {
    let {
      jumpReturnTargetId: e
    } = _;
    s = _.loadingMore && _.jumpedToPresent ? (0, r.jsx)(H.DR, {
      className: ec
    }) : null != e ? (0, r.jsx)(H.DR, {
      type: H.A7.REPLY,
      onClick: () => er(l, e),
      className: ec
    }) : (0, r.jsx)(H.DR, {
      onClick: () => en(l),
      className: ec
    })
  }
  return {
    channelStreamMarkup: eS,
    newMessagesBar: i,
    jumpToPresentBar: s,
    forumPostActionBar: eO,
    safetyWarningBanner: ey
  }
}

function es(e, t) {
  if (e.isDM() && null != t)
    if (t.type === O.pj.STRANGER_DANGER) return (0, r.jsx)(S.M, {
      channelId: e.id,
      warningId: t.id,
      senderId: e.getRecipientId()
    });
    else if (t.type === O.pj.LIKELY_ATO) return (0, r.jsx)(_.M, {
    channelId: e.id,
    warningId: t.id,
    senderId: e.getRecipientId()
  });
  else return (0, r.jsx)(I.Y, {
    channelId: e.id,
    warningId: t.id,
    senderId: e.getRecipientId()
  });
  return null
}