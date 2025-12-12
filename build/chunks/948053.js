/** Chunk was on 1272 **/
/** chunk id: 948053, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk695346 = require("./695346.js"),
  Chunk960048 = require("./960048.js"),
  Chunk613928 = require("./613928.js"),
  Chunk981631 = require("./981631.js");

function c(e) {
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
let u = {
  async fetchPopularGuildsFromCategories(e, t) {
    try {
      let {
        guilds: n
      } = (await r.tn.post({
        url: o.ANM.GRAVITY_TOPIC_GUILDS,
        body: {
          category_ids: e,
          offset: t
        },
        rejectWithError: false
      })).body;
      return i.Z.dispatch({
        type: "LOAD_ICYMI_POPULAR_GUILDS",
        categoryIds: e,
        guilds: n,
        offset: t
      }), true
    } catch (e) {
      a.Z.captureException(e)
    }
    returnfalse
  },
  async fetchDehydrated() {
    let {
      isInitialLoad: e,
      isReloading: t,
      forceRefresh: n
    } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
    if ((0, Chunk613928.rK)("fetchDehydrated")) {
      exports && Chunk570140.Z.dispatch({
        type: "ICYMI_SET_REFRESHING",
        refreshing: true
      });
      try {
        let l = Date.now(),
          a = await Chunk544891.tn.get({
            url: Chunk981631.ANM.GRAVITY_ITEMS_DEHYDRATED,
            query: {
              refresh: require
            },
            rejectWithError: false
          });
        await Chunk570140.Z.dispatch({
          type: "LOAD_ICYMI_DEHYDRATED",
          items: Chunk960048.body.items,
          loadId: Chunk960048.body.load_id,
          startTime: Chunk695346,
          isReloading: exports,
          isInitialLoad: module
        })
      } catch (e) {
        Chunk960048.Z.captureException(module)
      }
    }
  },
  async gravityJoinGuild(e, t) {
    if ((0, s.rK)("gravityJoinGuild") && 0 !== e.length) try {
      return await r.tn.post({
        url: o.ANM.GRAVITY_JOIN_GUILD,
        body: {
          guild_ids: e,
          location: t
        },
        rejectWithError: false
      }), true
    } catch (e) {
      return a.Z.captureException(e), false
    }
  },
  async fetchForNotification(e, t) {
    if ((0, s.rK)("fetchInitial")) try {
      let n = await r.tn.post({
        url: o.ANM.GRAVITY_ITEMS_HYDRATE,
        body: {
          message_items: [{
            channel_id: e,
            message_id: t
          }],
          activity_items: [],
          generated_candidate_items: []
        },
        rejectWithError: false
      });
      if (0 === n.body.message_items.length) return;
      i.Z.dispatch({
        type: "LOAD_ICYMI_FROM_NOTIFICATION",
        messageItem: n.body.message_items[0]
      })
    } catch (e) {
      a.Z.captureException(e)
    }
  },
  fetchForStatusNotification(e) {
    (0, s.rK)("fetchInitialStatus") && i.Z.dispatch({
      type: "LOAD_ICYMI_FROM_NOTIFICATION",
      customStatusItem: e
    })
  },
  async fetchHydrated(e, t, n) {
    if (!(0, s.rK)("fetchHydrated")) return;
    let {
      messageItems: l,
      activityItems: c,
      generatedCandidateItems: u
    } = n;
    if (0 === l.length && 0 === c.length && 0 === u.length) return void i.Z.dispatch({
      type: "LOAD_ICYMI_HYDRATED",
      requestMessageItems: [],
      requestActivityItems: [],
      requestGeneratedCandidateItems: [],
      messageItems: [],
      activityItems: [],
      generatedCandidateItems: [],
      startingIndex: e,
      endingIndex: t
    });
    try {
      let n = await r.tn.post({
        url: o.ANM.GRAVITY_ITEMS_HYDRATE,
        body: {
          message_items: l,
          activity_items: c,
          generated_candidate_items: u
        },
        rejectWithError: false
      });
      i.Z.dispatch({
        type: "LOAD_ICYMI_HYDRATED",
        requestMessageItems: l,
        requestActivityItems: c,
        requestGeneratedCandidateItems: u,
        messageItems: n.body.message_items,
        activityItems: n.body.activity_items,
        generatedCandidateItems: n.body.generated_candidate_items,
        startingIndex: e,
        endingIndex: t
      })
    } catch (r) {
      a.Z.captureException(r);
      let n = (0, s.y_)(e, t);
      i.Z.dispatch({
        type: "LOAD_ICYMI_HYDRATED_FAILED",
        hydrationId: n
      })
    }
  },
  async getGuildChannelScores() {
    if ((0, Chunk613928.rK)("guildChannelScores")) try {
      let e = await Chunk544891.tn.get({
        url: Chunk981631.ANM.GRAVITY_CUSTOM_SCORES,
        rejectWithError: false
      });
      Chunk570140.Z.dispatch({
        type: "LOAD_ICYMI_CUSTOM_SCORES",
        scores: module.body
      })
    } catch (e) {
      Chunk960048.Z.captureException(module)
    }
  },
  async getRecommendedGuilds() {
    if ((0, Chunk613928.rK)("recommendedGuilds")) try {
      let e = await Chunk544891.tn.get({
        url: Chunk981631.ANM.GRAVITY_RECOMMENDED_GUILDS,
        rejectWithError: false
      });
      Chunk570140.Z.dispatch({
        type: "LOAD_ICYMI_RECOMMENDED_GUILDS",
        guilds: module.body.guilds
      })
    } catch (e) {
      Chunk960048.Z.captureException(module)
    }
  },
  async getMediaForCurrentStatus() {
    if (!(0, Chunk613928.rK)("mediaForCurrentStatus")) return;
    let e = Chunk695346.Ok.getSetting();
    if (null != module && null != module.createdAtMs) try {
      let t = await Chunk544891.tn.get({
        url: Chunk981631.ANM.GRAVITY_ATTACHMENTS,
        rejectWithError: false
      });
      Chunk570140.Z.dispatch({
        type: "LOAD_ICYMI_CURRENT_STATUS_MEDIA",
        attachments: exports.body.attachments,
        createdAtMs: Number(module.createdAtMs)
      })
    } catch (e) {
      Chunk960048.Z.captureException(module)
    }
  },
  reloadICYMITab() {
    Chunk570140.Z.dispatch({
      type: "RELOAD_ICYMI"
    })
  },
  loadHydratedAttempt(e) {
    i.Z.dispatch({
      type: "LOAD_ICYMI_HYDRATED_ATTEMPT",
      hydrationId: e
    })
  },
  openICYMITab() {
    Chunk570140.Z.dispatch({
      type: "ICYMI_TAB_OPENED"
    })
  },
  closeICYMITab() {
    Chunk570140.Z.dispatch({
      type: "ICYMI_TAB_CLOSED"
    })
  },
  startItemsDwell(e) {
    i.Z.dispatch({
      type: "ICYMI_ITEMS_DWELL_START",
      items: e
    })
  },
  triggerItemsLongImpression(e) {
    i.Z.dispatch({
      type: "ICYMI_ITEMS_LONG_IMPRESSION",
      items: e
    })
  },
  ackGravityItems: (e, t) => i.Z.dispatch({
    type: "ICYMI_ACK_ITEMS",
    items: e,
    override: t
  }),
  gravityScrollEvent: e => i.Z.dispatch({
    type: "ICYMI_SCROLL_EVENT",
    timestamp: e
  }),
  setFilters: e => i.Z.dispatch({
    type: "SET_ICYMI_FILTERS",
    filters: e
  }),
  giveFeedback: () => Chunk570140.Z.dispatch({
    type: "ICYMI_FEEDBACK_GIVEN"
  }),
  clearReadStates: () => Chunk570140.Z.dispatch({
    type: "CLEAR_ICYMI_READ_STATES"
  }),
  addedRecommendedGuild: () => Chunk570140.Z.dispatch({
    type: "ICYMI_JOINED_RECOMMENDED_GUILD"
  }),
  setVideosMuted(e) {
    i.Z.dispatch({
      type: "ICYMI_SET_VIDEOS_MUTED",
      muted: e
    })
  },
  setTabFocused(e) {
    i.Z.dispatch({
      type: "ICYMI_SET_FOCUSED_TAB",
      focused: e
    })
  },
  setCardHeight(e, t) {
    i.Z.dispatch({
      type: "ICYMI_SET_CARD_HEIGHT",
      itemId: e,
      height: t
    })
  },
  takeSurvey() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Date.now();
    Chunk570140.Z.dispatch({
      type: "ICYMI_TAKE_SURVEY",
      takenAt: module
    })
  },
  itemInteracted(e, t, n) {
    i.Z.dispatch({
      type: "ICYMI_ITEM_INTERACTED",
      itemId: e,
      itemType: t,
      actionType: n
    })
  },
  feedItemActioned(e) {
    i.Z.dispatch(c({
      type: "ICYMI_FEED_ITEM_ACTIONED"
    }, e))
  },
  feedFilterActioned(e) {
    i.Z.dispatch(c({
      type: "ICYMI_FEED_FILTER_ACTIONED"
    }, e))
  },
  feedPageActioned(e) {
    i.Z.dispatch(c({
      type: "ICYMI_FEED_PAGE_ACTIONED"
    }, e))
  }
}