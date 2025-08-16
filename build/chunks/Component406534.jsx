/** Chunk was on 36499 **/
/** chunk id: 406534, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => en
}), require("./539854.js"), require("./388685.js"), require("./290780.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function $(e) {
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

function ee(e) {
  return null != e && e.type === X.ys_.MESSAGE && e.content.id === e.groupId
}
let et = Chunk647438.memo(function(e) {
  let {
    file: t,
    channel: n,
    user: i,
    isGroupStart: l,
    compact: a
  } = e;
  return (0, r.jsx)(B.Z, {
    compact: a,
    isGroupStart: l,
    channel: n,
    message: new Z.ZP({
      id: t.id,
      key: "pending-upload-".concat(t.id),
      type: X.uaV.DEFAULT,
      author: i,
      channel_id: n.id,
      customRenderedContent: {
        hasSpoilerEmbeds: false,
        content: (0, r.jsx)(f.p, {
          filename: t.name,
          progress: null != t.progress ? t.progress : 0,
          size: t.currentSize,
          onCancelUpload: () => {
            s.Z.cancel(n.id, t)
          }
        })
      }
    })
  })
});

function en(e) {
  var t, n;
  let i, s, {
      channel: f,
      messages: B,
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
    eh = A.default.getCurrentUser(),
    ef = () => eo.isInitialized() || B.ready,
    em = (0, U.$)(f),
    eg = B.length > 0 && (null == (t = B.first()) ? true : t.isFirstMessageInForumPost(f)),
    eb = (0, c.ts)(f),
    ey = (0, l.e7)([S.Z], () => S.Z.shouldShowTopicsBar() && !ed),
    e_ = (0, O.P)(f.id),
    eC = (0, v.z)(f.id, Q.zr),
    ex = (0, p.k)(f.id),
    ev = (0, L.Z)(),
    ej = function(e, t) {
      if (e.isDM() && null != t)
        if (t.type === x.pj.STRANGER_DANGER) return (0, r.jsx)(E.M, {
          channelId: e.id,
          warningId: t.id,
          senderId: e.getRecipientId()
        });
        else if (t.type === x.pj.LIKELY_ATO) return (0, r.jsx)(h.M, {
        channelId: e.id,
        warningId: t.id,
        senderId: e.getRecipientId()
      });
      else return (0, r.jsx)(j.Y, {
        channelId: e.id,
        warningId: t.id,
        senderId: e.getRecipientId()
      });
      return null
    }(f, null != (n = null != e_ ? e_ : eC) ? n : ex),
    eO = f.isForumPost() && !eg ? (0, r.jsx)(g.Z, {
      postId: f.id
    }) : null,
    eE = (0, y.Z)(f.id),
    eS = (0, _.nw)(f);
  (0, q.Z)();
  let eP = null,
    eI = [],
    eZ = el.map((e, t) => {
      if (e.type === X.ys_.DIVIDER) {
        var n, i;
        let l = null != e.unreadId;
        return null != ec ? null : e.isSummaryDivider ? (0, r.jsx)(I.Z, {
          index: t,
          item: e,
          channel: f,
          isBeforeGroup: null == e.content && ee(el[t + 1])
        }) : (0, r.jsx)(G.Z, {
          isUnread: l,
          isBeforeGroup: null == e.content && ee(el[t + 1]),
          id: l ? K.j1 : true,
          children: e.content
        }, "divider-".concat(null != (i = null != (n = e.contentKey) ? n : e.unreadId) ? i : t))
      }
      if (e.type === X.ys_.FORUM_POST_ACTION_BAR) return (0, r.jsx)(g.Z, {
        parentChannelId: f.parent_id,
        postId: f.id,
        isLastItem: t + 1 === el.length,
        isFirstMessage: true
      }, "forum-post-action-bar-".concat(f.id));
      if (e.type === X.ys_.MESSAGE_GROUP_BLOCKED || e.type === X.ys_.MESSAGE_GROUP_IGNORED || e.type === X.ys_.MESSAGE_GROUP_SPAMMER) {
        let t;
        return t = e.type === X.ys_.MESSAGE_GROUP_BLOCKED ? J.t["+FcYMz"] : e.type === X.ys_.MESSAGE_GROUP_IGNORED ? J.t.VFWjc3 : J.t.xfkfTE, (0, r.jsx)(H.Z, {
          unreadId: K.j1,
          messages: e,
          channel: f,
          compact: ei,
          collapsedReason: t
        }, e.key)
      }
      if (null != ec && ec > e.content.timestamp.getTime() * R.Z.Millis.SECOND) return;
      e.type === X.ys_.MESSAGE && null == eP && (eP = e);
      let l = e.groupId === (null == eP ? true : eP.groupId) ? eP.content.id : e.groupId,
        a = eS && e.content.isFirstMessageInForumPost(f),
        o = e.type === X.ys_.THREAD_STARTER_MESSAGE ? F.Ru : F.ZP;
      return (0, r.jsx)(o, {
        compact: ei && !a,
        channel: f,
        message: e.content,
        groupId: l,
        flashKey: e.flashKey,
        id: (0, k.p)(f.id, e.content.id),
        isLastItem: t >= el.length - 1,
        renderContentOnly: eE || a
      }, e.content.id)
    });
  eI.push(...eZ);
  let eT = el[el.length - 1];
  if (null != eh && ea.forEach((e, t) => {
      let n = 0 === t && (0, D.J)(f, eT, new Z.ZP({
        type: X.uaV.DEFAULT,
        author: eh
      }));
      eI.push((0, r.jsx)(et, {
        file: e,
        channel: f,
        user: eh,
        isGroupStart: n,
        compact: ei
      }, "upload-".concat(e.id)))
    }), B.hasMoreBefore && null == ec) {
    B.length > 0 && eI.unshift((0, r.jsx)("div", {
      style: {
        height: K.D4,
        flex: "0 0 auto"
      }
    }, "buffer"));
    let {
      useReducedMotion: e
    } = u.Z;
    (e && ef() || !e) && eI.unshift((0, r.jsx)(z.ZP, $({
      compact: ei
    }, es), "has-more"))
  }
  if (B.hasMoreBefore && null == ec || eI.unshift((0, r.jsx)(m.Z, {
      channel: f,
      showingBanner: eu
    }, "empty-message")), B.hasMoreAfter && eI.push((0, r.jsx)(z.ZP, $({
      compact: ei
    }, es), "has-more-after")), !eu && em && ef() && eI.push((0, r.jsx)(W.Z, {
      channel: f
    })), en > 0 && er && ef()) {
    let e, t, n = T.ZP.getOldestUnreadTimestamp(f.id),
      l = 0 !== n ? n : M.default.extractTimestamp(f.id),
      o = (0, w.KC)(new Date, new Date(l));
    if (T.ZP.isEstimated(f.id) ? (e = o ? J.t.wvtbbG : J.t.tHqbtr, t = J.t.vaPWFR) : (e = o ? J.t.BctFHx : J.t["3wXb9P"], t = J.t["4H8ldH"]), eb && (0, c.tW)(f) && ev.includes(Y.E.SUMMARIES)) {
      let n = T.ZP.ackMessageId(f.id),
        o = (0, P.q)(f.id, T.ZP.getOldestUnreadMessageId(f.id));
      if ((0, d.yw)(X.rMx.SUMMARIES_UNREAD_BAR_VIEWED, {
          num_unread_summaries: o,
          num_unread_messages: en,
          last_ack_message_id: n,
          summaries_enabled_by_user: ey,
          summaries_enabled_for_channel: (0, c.Lp)(f)
        }), (0, c.Lp)(f)) {
        let n = ey ? J.intl.format(t, {
          count: en
        }) : J.intl.format(e, {
          count: en,
          timestamp: l
        });
        if (ey) {
          let e = o > 0 ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(a.Text, {
              variant: "text-sm/medium",
              color: "currentColor",
              children: J.intl.format(t, {
                count: en
              })
            }), (0, r.jsx)(b.Z, {
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
                count: o
              })
            })]
          }) : (0, r.jsx)(a.Text, {
            variant: "text-sm/medium",
            color: "currentColor",
            children: n
          });
          i = (0, r.jsx)(V.G5, {
            scrollManager: eo,
            content: e,
            channel: f
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
              }), (0, r.jsx)(b.Z, {
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
                  count: o
                })
              })]
            }) : (0, r.jsx)(a.Text, {
              variant: "text-sm/medium",
              color: "currentColor",
              children: n
            })
          });
          i = (0, r.jsx)(V.LE, {
            content: e,
            channelId: f.id
          })
        }
      }
    } else ev.includes(Y.E.NEW_MESSAGES) && (i = (0, r.jsx)(V.LE, {
      content: J.intl.format(e, {
        count: en,
        timestamp: l
      }),
      channelId: f.id
    }))
  }
  if (null == i && (0, c.Lp)(f) && ey && ev.includes(Y.E.SUMMARIES) && (i = (0, r.jsx)(V.BO, {
      channel: f,
      scrollManager: eo
    })), B.error) s = (0, r.jsx)(V.Rp, {
    loading: B.loadingMore,
    onClick: () => {
      var e;
      return e = f.id, void o.Z.fetchMessages({
        channelId: e,
        limit: X.AQB,
        truncate: true
      })
    },
    className: ep
  });
  else if (B.hasMoreAfter && ef()) {
    let {
      jumpReturnTargetId: e
    } = B;
    s = B.loadingMore && B.jumpedToPresent ? (0, r.jsx)(V.DR, {
      className: ep
    }) : null != e ? (0, r.jsx)(V.DR, {
      type: V.A7.REPLY,
      onClick: () => {
        o.Z.jumpToMessage({
          channelId: f.id,
          messageId: e,
          flash: true
        })
      },
      className: ep
    }) : (0, r.jsx)(V.DR, {
      onClick: () => (function(e) {
        o.Z.jumpToPresent(e.id, X.AQB);
        let t = N.Z.getChannelId();
        e.id === t && (0, C.Kh)(e.id)
      })(f),
      className: ep
    })
  }
  return {
    channelStreamMarkup: eI,
    newMessagesBar: i,
    jumpToPresentBar: s,
    forumPostActionBar: eO,
    safetyWarningBanner: ej
  }
}