/** Chunk was on 97492 **/
/** chunk id: 672341, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => et
}), require("./321073.js"), require("./896048.js"), require("./667532.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk843472 = require("./843472.js"),
  Chunk432371 = require("./432371.js"),
  Chunk775602 = require("./775602.js"),
  Chunk58149 = require("./58149.js"),
  Chunk486227 = require("./486227.js"),
  Chunk454148 = require("./454148.jsx"),
  Chunk718468 = require("./718468.jsx"),
  Chunk816144 = require("./816144.jsx"),
  Chunk928764 = require("./928764.jsx"),
  Chunk640708 = require("./640708.jsx"),
  Chunk265869 = require("./265869.js"),
  Chunk715757 = require("./715757.js"),
  Chunk378570 = require("./378570.js"),
  Chunk349435 = require("./349435.js"),
  Chunk452082 = require("./452082.js"),
  Chunk357179 = require("./357179.jsx"),
  Chunk74114 = require("./74114.js"),
  Chunk221059 = require("./221059.jsx"),
  Chunk513272 = require("./513272.js"),
  Chunk881020 = require("./881020.js"),
  Chunk637384 = require("./637384.jsx"),
  Chunk383233 = require("./383233.js"),
  Chunk222823 = require("./222823.js"),
  Chunk309010 = require("./309010.js"),
  Chunk287809 = require("./287809.js"),
  Chunk405269 = require("./405269.js"),
  Chunk927813 = require("./927813.js"),
  Chunk661191 = require("./661191.js"),
  Chunk375901 = require("./375901.js"),
  Chunk857069 = require("./857069.js"),
  Chunk675171 = require("./675171.js"),
  Chunk806621 = require("./806621.js"),
  Chunk636922 = require("./636922.jsx"),
  Chunk371741 = require("./371741.jsx"),
  Chunk66149 = require("./66149.jsx"),
  Chunk922529 = require("./922529.jsx"),
  Chunk652176 = require("./652176.jsx"),
  Chunk540385 = require("./540385.jsx"),
  Chunk613907 = require("./613907.jsx"),
  Chunk829444 = require("./829444.js"),
  Chunk626360 = require("./626360.js"),
  Chunk381941 = require("./381941.js"),
  Chunk652215 = require("./652215.js"),
  Chunk327337 = require("./327337.js"),
  Chunk985018 = require("./985018.jsx");

function Z(e) {
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
  return null != e && e.type === X.TZK.MESSAGE && e.content.id === e.groupId
}
let ee = Chunk64700.memo(function(e) {
  let {
    file: t,
    channel: n,
    user: l,
    isGroupStart: i,
    compact: a
  } = e;
  return (0, r.jsx)(U.A, {
    compact: a,
    isGroupStart: i,
    channel: n,
    message: new I.Ay({
      id: t.id,
      key: "pending-upload-".concat(t.id),
      type: X.lAJ.DEFAULT,
      author: l,
      channel_id: n.id,
      customRenderedContent: {
        hasSpoilerEmbeds: false,
        hasBailedAst: false,
        content: (0, r.jsx)(p.e, {
          channelId: n.id,
          file: t
        })
      }
    })
  })
});

function et(e) {
  var t, n;
  let l, p, {
      channel: U,
      messages: et,
      unreadCount: en,
      showNewMessagesBar: er,
      messageDisplayCompact: el,
      channelStream: ei,
      uploads: ea,
      scrollManager: es,
      specs: eo,
      filterAfterTimestamp: ec,
      showingQuarantineBanner: eu,
      hideSummaries: ed,
      jumpBarClassName: ef
    } = e,
    ep = P.default.getCurrentUser(),
    eh = () => es.isInitialized() || et.ready,
    eb = (0, k.r)(U),
    eg = et.length > 0 && (null == (n = et.first()) ? true : n.isFirstMessageInForumPost(U)),
    em = (0, o.cI)(U),
    eA = (0, i.bG)([_.A], () => _.A.shouldShowTopicsBar() && !ed),
    ey = (0, x.l)(U.id),
    eO = (0, j.j)(U.id, J.Rx),
    ej = (0, d.E)(U.id),
    ev = (0, G.A)(),
    ex = function(e, t) {
      if (e.isDM() && null != t)
        if (t.type === O._j.STRANGER_DANGER) return (0, r.jsx)(E.e, {
          channelId: e.id,
          warningId: t.id,
          senderId: e.getRecipientId()
        });
        else if (t.type === O._j.LIKELY_ATO) return (0, r.jsx)(f.L, {
        channelId: e.id,
        warningId: t.id,
        senderId: e.getRecipientId()
      });
      else return (0, r.jsx)(v._, {
        channelId: e.id,
        warningId: t.id,
        senderId: e.getRecipientId()
      });
      return null
    }(U, null != (t = null != ey ? ey : eO) ? t : ej),
    eE = U.isForumPost() && !eg ? (0, r.jsx)(b.A, {
      postId: U.id
    }) : null,
    e_ = (0, m.A)(U.id),
    eC = (0, A.W1)(U);
  (0, z.A)();
  let eS = null,
    eI = [],
    eN = ei.map((e, t) => {
      if (e.type === X.TZK.DIVIDER) {
        var n, l;
        let i = null != e.unreadId;
        return null != ec ? null : e.isSummaryDivider ? (0, r.jsx)(S.A, {
          index: t,
          item: e,
          channel: U,
          isBeforeGroup: null == e.content && $(ei[t + 1])
        }) : (0, r.jsx)(H.A, {
          isUnread: i,
          isBeforeGroup: null == e.content && $(ei[t + 1]),
          id: i ? q.q4 : true,
          children: e.content
        }, "divider-".concat(null != (n = null != (l = e.contentKey) ? l : e.unreadId) ? n : t))
      }
      if (e.type === X.TZK.FORUM_POST_ACTION_BAR) return (0, r.jsx)(b.A, {
        parentChannelId: U.parent_id,
        postId: U.id,
        isLastItem: t + 1 === ei.length,
        isFirstMessage: true
      }, "forum-post-action-bar-".concat(U.id));
      if (e.type === X.TZK.MESSAGE_GROUP_BLOCKED || e.type === X.TZK.MESSAGE_GROUP_IGNORED || e.type === X.TZK.MESSAGE_GROUP_SPAMMER) {
        let t;
        return t = e.type === X.TZK.MESSAGE_GROUP_BLOCKED ? Q.t["+FcYM/"] : e.type === X.TZK.MESSAGE_GROUP_IGNORED ? Q.t["VFWjc+"] : Q.t.xfkfTK, (0, r.jsx)(F.A, {
          unreadId: q.q4,
          messages: e,
          channel: U,
          compact: el,
          collapsedReason: t
        }, e.key)
      }
      if (null != ec && ec > e.content.timestamp.getTime() * R.A.Millis.SECOND) return;
      e.type === X.TZK.MESSAGE && null == eS && (eS = e);
      let i = e.groupId === (null == eS ? true : eS.groupId) ? eS.content.id : e.groupId,
        a = eC && e.content.isFirstMessageInForumPost(U),
        s = e.type === X.TZK.THREAD_STARTER_MESSAGE ? V.VO : V.Ay;
      return (0, r.jsx)(s, {
        compact: el && !a,
        channel: U,
        message: e.content,
        groupId: i,
        flashKey: e.flashKey,
        id: (0, M.j)(U.id, e.content.id),
        isLastItem: t >= ei.length - 1,
        renderContentOnly: e_ || a
      }, e.content.id)
    });
  eI.push(...eN);
  let eT = ei[ei.length - 1];
  if (null != ep && ea.forEach((e, t) => {
      let n = 0 === t && (0, L.l)(U, eT, new I.Ay({
        type: X.lAJ.DEFAULT,
        author: ep
      }));
      eI.push((0, r.jsx)(ee, {
        file: e,
        channel: U,
        user: ep,
        isGroupStart: n,
        compact: el
      }, "upload-".concat(e.id)))
    }), et.hasMoreBefore && null == ec) {
    et.length > 0 && eI.unshift((0, r.jsx)("div", {
      style: {
        height: q.N0,
        flex: "0 0 auto"
      }
    }, "buffer"));
    let {
      useReducedMotion: e
    } = c.A;
    (e && eh() || !e) && eI.unshift((0, r.jsx)(K.Ay, Z({
      compact: el
    }, eo), "has-more"))
  }
  if (et.hasMoreBefore && null == ec || eI.unshift((0, r.jsx)(h.A, {
      channel: U,
      showingBanner: eu
    }, "empty-message")), et.hasMoreAfter && eI.push((0, r.jsx)(K.Ay, Z({
      compact: el
    }, eo), "has-more-after")), !eu && eb && eh() && eI.push((0, r.jsx)(W.A, {
      channel: U
    })), en > 0 && er && eh()) {
    let e, t, n = N.Ay.getOldestUnreadTimestamp(U.id),
      i = 0 !== n ? n : D.default.extractTimestamp(U.id),
      s = (0, w.ro)(new Date, new Date(i));
    if (N.Ay.isEstimated(U.id) ? (e = s ? Q.t.wvtbbG : Q.t.tHqbtg, t = Q.t.vaPWFe) : (e = s ? Q.t["BctFH/"] : Q.t["3wXb9P"], t = Q.t["4H8ldG"]), em && (0, o.Kc)(U) && ev.includes(Y.i.SUMMARIES)) {
      let n = N.Ay.ackMessageId(U.id),
        s = (0, C.L)(U.id, N.Ay.getOldestUnreadMessageId(U.id));
      if ((0, u.zV)(X.HAw.SUMMARIES_UNREAD_BAR_VIEWED, {
          num_unread_summaries: s,
          num_unread_messages: en,
          last_ack_message_id: n,
          summaries_enabled_by_user: eA,
          summaries_enabled_for_channel: (0, o.pk)(U)
        }), (0, o.pk)(U)) {
        let n = eA ? Q.intl.format(t, {
          count: en
        }) : Q.intl.format(e, {
          count: en,
          timestamp: i
        });
        if (eA) {
          let e = s > 0 ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(a.Text, {
              variant: "text-sm/medium",
              color: "currentColor",
              children: Q.intl.format(t, {
                count: en
              })
            }), (0, r.jsx)(g.A, {
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
                count: s
              })
            })]
          }) : (0, r.jsx)(a.Text, {
            variant: "text-sm/medium",
            color: "currentColor",
            children: n
          });
          l = (0, r.jsx)(B.OZ, {
            scrollManager: es,
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
            children: s > 0 ? (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "currentColor",
                children: Q.intl.format(t, {
                  count: en
                })
              }), (0, r.jsx)(g.A, {
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
                  count: s
                })
              })]
            }) : (0, r.jsx)(a.Text, {
              variant: "text-sm/medium",
              color: "currentColor",
              children: n
            })
          });
          l = (0, r.jsx)(B.GN, {
            content: e,
            channelId: U.id
          })
        }
      }
    } else ev.includes(Y.i.NEW_MESSAGES) && (l = (0, r.jsx)(B.GN, {
      content: Q.intl.format(e, {
        count: en,
        timestamp: i
      }),
      channelId: U.id
    }))
  }
  if (null == l && (0, o.pk)(U) && eA && ev.includes(Y.i.SUMMARIES) && (l = (0, r.jsx)(B.UK, {
      channel: U,
      scrollManager: es
    })), et.error) p = (0, r.jsx)(B.Ez, {
    loading: et.loadingMore,
    onClick: () => {
      var e;
      return e = U.id, void s.A.fetchMessages({
        channelId: e,
        limit: X.EMb,
        truncate: true
      })
    },
    className: ef
  });
  else if (et.hasMoreAfter && eh()) {
    let {
      jumpReturnTargetId: e
    } = et;
    p = et.loadingMore && et.jumpedToPresent ? (0, r.jsx)(B.Ab, {
      className: ef
    }) : null != e ? (0, r.jsx)(B.Ab, {
      type: B.ks.REPLY,
      onClick: () => {
        s.A.jumpToMessage({
          channelId: U.id,
          messageId: e,
          flash: true
        })
      },
      className: ef
    }) : (0, r.jsx)(B.Ab, {
      onClick: () => {
        let e;
        return s.A.jumpToPresent(U.id, X.EMb), e = T.A.getChannelId(), void(U.id === e && (0, y.iN)(U.id))
      },
      className: ef
    })
  }
  return {
    channelStreamMarkup: eI,
    newMessagesBar: l,
    jumpToPresentBar: p,
    forumPostActionBar: eE,
    safetyWarningBanner: ex
  }
}