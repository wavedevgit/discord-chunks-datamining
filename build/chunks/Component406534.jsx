/** Chunk was on 13140 **/
/** chunk id: 406534, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => et
}), require("./539854.js"), require("./388685.js"), require("./290780.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function Q(e) {
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
  return null != e && e.type === K.ys_.MESSAGE && e.content.id === e.groupId
}
let ee = Chunk647438.memo(function(e) {
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
    message: new I.ZP({
      id: t.id,
      key: "pending-upload-".concat(t.id),
      type: K.uaV.DEFAULT,
      author: i,
      channel_id: n.id,
      customRenderedContent: {
        hasSpoilerEmbeds: false,
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
    ef = N.default.getCurrentUser(),
    eh = () => eo.isInitialized() || et.ready,
    em = (0, L.$)(U),
    eg = et.length > 0 && (null == (t = et.first()) ? true : t.isFirstMessageInForumPost(U)),
    eb = (0, s.ts)(U),
    e_ = (0, l.e7)([j.Z], () => j.Z.shouldShowTopicsBar() && !ed),
    ey = (0, x.P)(U.id),
    eC = (0, v.z)(U.id, X.zr),
    ev = (0, d.k)(U.id),
    eO = (0, k.Z)(),
    ex = function(e, t) {
      if (e.isDM() && null != t)
        if (t.type === C.pj.STRANGER_DANGER) return (0, r.jsx)(E.M, {
          channelId: e.id,
          warningId: t.id,
          senderId: e.getRecipientId()
        });
        else if (t.type === C.pj.LIKELY_ATO) return (0, r.jsx)(p.M, {
        channelId: e.id,
        warningId: t.id,
        senderId: e.getRecipientId()
      });
      else return (0, r.jsx)(O.Y, {
        channelId: e.id,
        warningId: t.id,
        senderId: e.getRecipientId()
      });
      return null
    }(U, null != (n = null != ey ? ey : eC) ? n : ev),
    eE = U.isForumPost() && !eg ? (0, r.jsx)(m.Z, {
      postId: U.id
    }) : null,
    ej = (0, b.Z)(U.id),
    eS = (0, _.nw)(U);
  (0, z.Z)();
  let eP = null,
    eI = [],
    eZ = el.map((e, t) => {
      if (e.type === K.ys_.DIVIDER) {
        var n, i;
        let l = null != e.unreadId;
        return null != ec ? null : e.isSummaryDivider ? (0, r.jsx)(P.Z, {
          index: t,
          item: e,
          channel: U,
          isBeforeGroup: null == e.content && $(el[t + 1])
        }) : (0, r.jsx)(V.Z, {
          isUnread: l,
          isBeforeGroup: null == e.content && $(el[t + 1]),
          id: l ? Y.j1 : true,
          children: e.content
        }, "divider-".concat(null != (i = null != (n = e.contentKey) ? n : e.unreadId) ? i : t))
      }
      if (e.type === K.ys_.FORUM_POST_ACTION_BAR) return (0, r.jsx)(m.Z, {
        parentChannelId: U.parent_id,
        postId: U.id,
        isLastItem: t + 1 === el.length,
        isFirstMessage: true
      }, "forum-post-action-bar-".concat(U.id));
      if (e.type === K.ys_.MESSAGE_GROUP_BLOCKED || e.type === K.ys_.MESSAGE_GROUP_IGNORED || e.type === K.ys_.MESSAGE_GROUP_SPAMMER) {
        let t;
        return t = e.type === K.ys_.MESSAGE_GROUP_BLOCKED ? J.t["+FcYM/"] : e.type === K.ys_.MESSAGE_GROUP_IGNORED ? J.t["VFWjc+"] : J.t.xfkfTK, (0, r.jsx)(F.Z, {
          unreadId: Y.j1,
          messages: e,
          channel: U,
          compact: ei,
          collapsedReason: t
        }, e.key)
      }
      if (null != ec && ec > e.content.timestamp.getTime() * w.Z.Millis.SECOND) return;
      e.type === K.ys_.MESSAGE && null == eP && (eP = e);
      let l = e.groupId === (null == eP ? true : eP.groupId) ? eP.content.id : e.groupId,
        a = eS && e.content.isFirstMessageInForumPost(U),
        o = e.type === K.ys_.THREAD_STARTER_MESSAGE ? B.Ru : B.ZP;
      return (0, r.jsx)(o, {
        compact: ei && !a,
        channel: U,
        message: e.content,
        groupId: l,
        flashKey: e.flashKey,
        id: (0, R.p)(U.id, e.content.id),
        isLastItem: t >= el.length - 1,
        renderContentOnly: ej || a
      }, e.content.id)
    });
  eI.push(...eZ);
  let eT = el[el.length - 1];
  if (null != ef && ea.forEach((e, t) => {
      let n = 0 === t && (0, D.J)(U, eT, new I.ZP({
        type: K.uaV.DEFAULT,
        author: ef
      }));
      eI.push((0, r.jsx)(ee, {
        file: e,
        channel: U,
        user: ef,
        isGroupStart: n,
        compact: ei
      }, "upload-".concat(e.id)))
    }), et.hasMoreBefore && null == ec) {
    et.length > 0 && eI.unshift((0, r.jsx)("div", {
      style: {
        height: Y.D4,
        flex: "0 0 auto"
      }
    }, "buffer"));
    let {
      useReducedMotion: e
    } = c.Z;
    (e && eh() || !e) && eI.unshift((0, r.jsx)(G.ZP, Q({
      compact: ei
    }, es), "has-more"))
  }
  if (et.hasMoreBefore && null == ec || eI.unshift((0, r.jsx)(h.Z, {
      channel: U,
      showingBanner: eu
    }, "empty-message")), et.hasMoreAfter && eI.push((0, r.jsx)(G.ZP, Q({
      compact: ei
    }, es), "has-more-after")), !eu && em && eh() && eI.push((0, r.jsx)(W.Z, {
      channel: U
    })), en > 0 && er && eh()) {
    let e, t, n = Z.ZP.getOldestUnreadTimestamp(U.id),
      l = 0 !== n ? n : M.default.extractTimestamp(U.id),
      o = (0, A.KC)(new Date, new Date(l));
    if (Z.ZP.isEstimated(U.id) ? (e = o ? J.t.wvtbbG : J.t.tHqbtg, t = J.t.vaPWFe) : (e = o ? J.t["BctFH/"] : J.t["3wXb9P"], t = J.t["4H8ldG"]), eb && (0, s.tW)(U) && eO.includes(q.E.SUMMARIES)) {
      let n = Z.ZP.ackMessageId(U.id),
        o = (0, S.q)(U.id, Z.ZP.getOldestUnreadMessageId(U.id));
      if ((0, u.yw)(K.rMx.SUMMARIES_UNREAD_BAR_VIEWED, {
          num_unread_summaries: o,
          num_unread_messages: en,
          last_ack_message_id: n,
          summaries_enabled_by_user: e_,
          summaries_enabled_for_channel: (0, s.Lp)(U)
        }), (0, s.Lp)(U)) {
        let n = e_ ? J.intl.format(t, {
          count: en
        }) : J.intl.format(e, {
          count: en,
          timestamp: l
        });
        if (e_) {
          let e = o > 0 ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(a.Text, {
              variant: "text-sm/medium",
              color: "currentColor",
              children: J.intl.format(t, {
                count: en
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
              children: J.intl.format(J.t.CBftDc, {
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
                children: J.intl.format(t, {
                  count: en
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
                children: J.intl.format(J.t.CBftDc, {
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
    } else eO.includes(q.E.NEW_MESSAGES) && (i = (0, r.jsx)(H.LE, {
      content: J.intl.format(e, {
        count: en,
        timestamp: l
      }),
      channelId: U.id
    }))
  }
  if (null == i && (0, s.Lp)(U) && e_ && eO.includes(q.E.SUMMARIES) && (i = (0, r.jsx)(H.BO, {
      channel: U,
      scrollManager: eo
    })), et.error) f = (0, r.jsx)(H.Rp, {
    loading: et.loadingMore,
    onClick: () => {
      var e;
      return e = U.id, void o.Z.fetchMessages({
        channelId: e,
        limit: K.AQB,
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
        o.Z.jumpToPresent(e.id, K.AQB);
        let t = T.Z.getChannelId();
        e.id === t && (0, y.Kh)(e.id)
      })(U),
      className: ep
    })
  }
  return {
    channelStreamMarkup: eI,
    newMessagesBar: i,
    jumpToPresentBar: f,
    forumPostActionBar: eE,
    safetyWarningBanner: ex
  }
}