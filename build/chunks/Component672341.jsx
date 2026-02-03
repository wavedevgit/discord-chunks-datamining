/** Chunk was on 61344 **/
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

function Q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function $(e) {
  return null != e && e.type === J.TZK.MESSAGE && e.content.id === e.groupId
}
let ee = Chunk64700.memo(function(e) {
  let {
    file: t,
    channel: n,
    user: r,
    isGroupStart: i,
    compact: a
  } = e;
  return (0, l.jsx)(G.A, {
    compact: a,
    isGroupStart: i,
    channel: n,
    message: new I.Ay({
      id: t.id,
      key: "pending-upload-".concat(t.id),
      type: J.lAJ.DEFAULT,
      author: r,
      channel_id: n.id,
      customRenderedContent: {
        hasSpoilerEmbeds: false,
        hasBailedAst: false,
        content: (0, l.jsx)(p.e, {
          channelId: n.id,
          file: t
        })
      }
    })
  })
});

function et(e) {
  var t, n;
  let r, p, {
      channel: G,
      messages: et,
      unreadCount: en,
      showNewMessagesBar: el,
      messageDisplayCompact: er,
      channelStream: ei,
      uploads: ea,
      scrollManager: es,
      specs: eo,
      filterAfterTimestamp: ec,
      showingQuarantineBanner: eu,
      hideSummaries: ed,
      jumpBarClassName: eh
    } = e,
    ep = P.default.getCurrentUser(),
    ef = () => es.isInitialized() || et.ready,
    em = (0, U.r)(G),
    eg = et.length > 0 && (null == (n = et.first()) ? true : n.isFirstMessageInForumPost(G)),
    eA = (0, o.cI)(G),
    eb = (0, i.bG)([S.A], () => S.A.shouldShowTopicsBar() && !ed),
    e_ = (0, O.l)(G.id),
    ey = (0, v.j)(G.id, Z.Rx),
    ev = (0, d.E)(G.id),
    eE = (0, k.A)(),
    eO = function(e, t) {
      if (e.isDM() && null != t)
        if (t.type === y._j.STRANGER_DANGER) return (0, l.jsx)(C.e, {
          channelId: e.id,
          warningId: t.id,
          senderId: e.getRecipientId()
        });
        else if (t.type === y._j.LIKELY_ATO) return (0, l.jsx)(h.L, {
        channelId: e.id,
        warningId: t.id,
        senderId: e.getRecipientId()
      });
      else return (0, l.jsx)(E._, {
        channelId: e.id,
        warningId: t.id,
        senderId: e.getRecipientId()
      });
      return null
    }(G, null != (t = null != e_ ? e_ : ey) ? t : ev),
    eC = G.isForumPost() && !eg ? (0, l.jsx)(m.A, {
      postId: G.id
    }) : null,
    eS = (0, A.A)(G.id),
    ex = (0, b.W1)(G);
  (0, z.A)();
  let ej = null,
    eI = [],
    eT = ei.map((e, t) => {
      if (e.type === J.TZK.DIVIDER) {
        var n, r;
        let i = null != e.unreadId;
        return null != ec ? null : e.isSummaryDivider ? (0, l.jsx)(j.A, {
          index: t,
          item: e,
          channel: G,
          isBeforeGroup: null == e.content && $(ei[t + 1])
        }) : (0, l.jsx)(B.A, {
          isUnread: i,
          isBeforeGroup: null == e.content && $(ei[t + 1]),
          id: i ? q.q4 : true,
          children: e.content
        }, "divider-".concat(null != (n = null != (r = e.contentKey) ? r : e.unreadId) ? n : t))
      }
      if (e.type === J.TZK.FORUM_POST_ACTION_BAR) return (0, l.jsx)(m.A, {
        parentChannelId: G.parent_id,
        postId: G.id,
        isLastItem: t + 1 === ei.length,
        isFirstMessage: true
      }, "forum-post-action-bar-".concat(G.id));
      if (e.type === J.TZK.MESSAGE_GROUP_BLOCKED || e.type === J.TZK.MESSAGE_GROUP_IGNORED || e.type === J.TZK.MESSAGE_GROUP_SPAMMER) {
        let t;
        return t = e.type === J.TZK.MESSAGE_GROUP_BLOCKED ? X.t["+FcYM/"] : e.type === J.TZK.MESSAGE_GROUP_IGNORED ? X.t["VFWjc+"] : X.t.xfkfTK, (0, l.jsx)(H.A, {
          unreadId: q.q4,
          messages: e,
          channel: G,
          compact: er,
          collapsedReason: t
        }, e.key)
      }
      if (null != ec && ec > e.content.timestamp.getTime() * R.A.Millis.SECOND) return;
      e.type === J.TZK.MESSAGE && null == ej && (ej = e);
      let i = e.groupId === (null == ej ? true : ej.groupId) ? ej.content.id : e.groupId,
        a = ex && e.content.isFirstMessageInForumPost(G),
        s = e.type === J.TZK.THREAD_STARTER_MESSAGE ? F.VO : F.Ay;
      return (0, l.jsx)(s, {
        compact: er && !a,
        channel: G,
        message: e.content,
        groupId: i,
        flashKey: e.flashKey,
        id: (0, M.j)(G.id, e.content.id),
        isLastItem: t >= ei.length - 1,
        renderContentOnly: eS || a
      }, e.content.id)
    });
  eI.push(...eT);
  let eN = ei[ei.length - 1];
  if (null != ep && ea.forEach((e, t) => {
      let n = 0 === t && (0, L.l)(G, eN, new I.Ay({
        type: J.lAJ.DEFAULT,
        author: ep
      }));
      eI.push((0, l.jsx)(ee, {
        file: e,
        channel: G,
        user: ep,
        isGroupStart: n,
        compact: er
      }, "upload-".concat(e.id)))
    }), et.hasMoreBefore && null == ec) {
    et.length > 0 && eI.unshift((0, l.jsx)("div", {
      style: {
        height: q.N0,
        flex: "0 0 auto"
      }
    }, "buffer"));
    let {
      useReducedMotion: e
    } = c.A;
    (e && ef() || !e) && eI.unshift((0, l.jsx)(K.Ay, Q({
      compact: er
    }, eo), "has-more"))
  }
  if (et.hasMoreBefore && null == ec || eI.unshift((0, l.jsx)(f.A, {
      channel: G,
      showingBanner: eu
    }, "empty-message")), et.hasMoreAfter && eI.push((0, l.jsx)(K.Ay, Q({
      compact: er
    }, eo), "has-more-after")), !eu && em && ef() && eI.push((0, l.jsx)(W.A, {
      channel: G
    })), en > 0 && el && ef()) {
    let e, t, n = T.Ay.getOldestUnreadTimestamp(G.id),
      i = 0 !== n ? n : D.default.extractTimestamp(G.id),
      s = (0, w.ro)(new Date, new Date(i));
    if (T.Ay.isEstimated(G.id) ? (e = s ? X.t.wvtbbG : X.t.tHqbtg, t = X.t.vaPWFe) : (e = s ? X.t["BctFH/"] : X.t["3wXb9P"], t = X.t["4H8ldG"]), eA && (0, o.Kc)(G) && eE.includes(Y.i.SUMMARIES)) {
      let n = T.Ay.ackMessageId(G.id),
        s = (0, x.L)(G.id, T.Ay.getOldestUnreadMessageId(G.id));
      if ((0, u.zV)(J.HAw.SUMMARIES_UNREAD_BAR_VIEWED, {
          num_unread_summaries: s,
          num_unread_messages: en,
          last_ack_message_id: n,
          summaries_enabled_by_user: eb,
          summaries_enabled_for_channel: (0, o.pk)(G)
        }), (0, o.pk)(G)) {
        let n = eb ? X.intl.format(t, {
          count: en
        }) : X.intl.format(e, {
          count: en,
          timestamp: i
        });
        if (eb) {
          let e = s > 0 ? (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(a.Text, {
              variant: "text-sm/medium",
              color: "currentColor",
              children: X.intl.format(t, {
                count: en
              })
            }), (0, l.jsx)(g.A, {
              style: {
                paddingLeft: 8,
                paddingRight: 8
              },
              height: 4,
              width: 4
            }), (0, l.jsx)(a.Text, {
              variant: "text-sm/medium",
              color: "currentColor",
              children: X.intl.format(X.t.CBftDc, {
                count: s
              })
            })]
          }) : (0, l.jsx)(a.Text, {
            variant: "text-sm/medium",
            color: "currentColor",
            children: n
          });
          r = (0, l.jsx)(V.OZ, {
            scrollManager: es,
            content: e,
            channel: G
          })
        } else {
          let e = (0, l.jsx)("div", {
            style: {
              display: "flex",
              textTransform: "none",
              alignItems: "center"
            },
            children: s > 0 ? (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "currentColor",
                children: X.intl.format(t, {
                  count: en
                })
              }), (0, l.jsx)(g.A, {
                style: {
                  paddingLeft: 8,
                  paddingRight: 8
                },
                height: 4,
                width: 4
              }), (0, l.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "currentColor",
                children: X.intl.format(X.t.CBftDc, {
                  count: s
                })
              })]
            }) : (0, l.jsx)(a.Text, {
              variant: "text-sm/medium",
              color: "currentColor",
              children: n
            })
          });
          r = (0, l.jsx)(V.GN, {
            content: e,
            channelId: G.id
          })
        }
      }
    } else eE.includes(Y.i.NEW_MESSAGES) && (r = (0, l.jsx)(V.GN, {
      content: X.intl.format(e, {
        count: en,
        timestamp: i
      }),
      channelId: G.id
    }))
  }
  if (null == r && (0, o.pk)(G) && eb && eE.includes(Y.i.SUMMARIES) && (r = (0, l.jsx)(V.UK, {
      channel: G,
      scrollManager: es
    })), et.error) p = (0, l.jsx)(V.Ez, {
    loading: et.loadingMore,
    onClick: () => {
      var e;
      return e = G.id, void s.A.fetchMessages({
        channelId: e,
        limit: J.EMb,
        truncate: true
      })
    },
    className: eh
  });
  else if (et.hasMoreAfter && ef()) {
    let {
      jumpReturnTargetId: e
    } = et;
    p = et.loadingMore && et.jumpedToPresent ? (0, l.jsx)(V.Ab, {
      className: eh
    }) : null != e ? (0, l.jsx)(V.Ab, {
      type: V.ks.REPLY,
      onClick: () => {
        s.A.jumpToMessage({
          channelId: G.id,
          messageId: e,
          flash: true
        })
      },
      className: eh
    }) : (0, l.jsx)(V.Ab, {
      onClick: () => {
        let e;
        return s.A.jumpToPresent(G.id, J.EMb), e = N.A.getChannelId(), void(G.id === e && (0, _.iN)(G.id))
      },
      className: eh
    })
  }
  return {
    channelStreamMarkup: eI,
    newMessagesBar: r,
    jumpToPresentBar: p,
    forumPostActionBar: eC,
    safetyWarningBanner: eO
  }
}