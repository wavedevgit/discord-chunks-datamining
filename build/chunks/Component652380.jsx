/** Chunk was on web.js **/
/** chunk id: 652380, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => $,
  b: () => Z
}), require("./388685.js"), require("./314940.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk278074 = require("./278074.js"),
  Chunk754700 = require("./754700.js"),
  Chunk887003 = require("./887003.js"),
  Chunk820827 = require("./820827.js"),
  Chunk458708 = require("./458708.js"),
  Chunk481060 = require("./481060.js"),
  Chunk70956 = require("./70956.js"),
  Chunk509212 = require("./509212.js"),
  Chunk497505 = require("./497505.js"),
  Chunk210724 = require("./210724.jsx"),
  Chunk130653 = require("./130653.jsx"),
  Chunk415104 = require("./415104.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk78826 = require("./78826.jsx"),
  Chunk37303 = require("./37303.jsx"),
  Chunk134483 = require("./134483.jsx"),
  Chunk683650 = require("./683650.jsx"),
  Chunk478977 = require("./478977.jsx"),
  Chunk456799 = require("./456799.jsx"),
  Chunk210851 = require("./210851.jsx"),
  Chunk602683 = require("./602683.jsx"),
  Chunk916028 = require("./916028.jsx"),
  Chunk749912 = require("./749912.jsx"),
  Chunk815183 = require("./815183.jsx"),
  Chunk899457 = require("./899457.jsx"),
  Chunk301188 = require("./301188.js");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      x(e, t, n[t])
    })
  }
  return e
}

function j(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function M(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : j(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let k = 10,
  U = ["png", "gif", "webp"],
  G = [...U, "jpg", "jpeg"],
  B = Array.from(new Set([...G, "gif", "mp4", "webm"]));

function Z(e) {
  var t, n;
  return {
    code: "PREVIEW-MODE-CODE",
    tier: 0,
    platform: h.y$.CROSS_PLATFORM,
    userId: "123",
    questId: e.id,
    claimedAt: null != (n = null == (t = e.userStatus) ? true : t.claimedAt) ? n : ""
  }
}

function F(e) {
  return (0, s.EQ)(e).with({
    configVersion: 2
  }, e => e.rewardsConfig.rewards).exhaustive()
}

function V(e, t) {
  return (0, s.EQ)(e).with({
    configVersion: 2
  }, e => M(L({}, e), {
    assets: L({}, e.assets, t)
  })).exhaustive()
}

function H(e, t, n) {
  return (0, s.EQ)(e).with({
    configVersion: 2
  }, e => M(L({}, e), {
    rewardsConfig: M(L({}, e.rewardsConfig), {
      rewards: e.rewardsConfig.rewards.map((e, r) => r === n ? M(L({}, e), {
        asset: t,
        skuId: ""
      }) : e)
    })
  })).exhaustive()
}

function Y(e, t) {
  return (0, s.EQ)(e).with({
    configVersion: 2
  }, e => M(L({}, e), {
    messages: L({}, e.messages, t)
  })).exhaustive()
}

function W(e, t, n) {
  return (0, s.EQ)(e).with({
    configVersion: 2
  }, e => M(L({}, e), {
    rewardsConfig: M(L({}, e.rewardsConfig), {
      rewards: e.rewardsConfig.rewards.map((e, r) => r === n ? M(L({}, e), {
        messages: L({}, e.messages, t)
      }) : e)
    })
  })).exhaustive()
}

function K() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
    {
      streamProgressSeconds: t = 0,
      completedAt: n = null,
      enrolledAt: r = null,
      claimedAt: i = null
    } = module;
  return {
    userId: "123",
    questId: "1193992107035983872",
    enrolledAt: Chunk951288,
    completedAt: require,
    claimedAt: Chunk647438,
    claimedTier: null,
    lastStreamHeartbeatAt: null,
    streamProgressSeconds: exports,
    dismissedQuestContent: 0,
    progress: {}
  }
}

function z(e) {
  if (null == e.userStatus) return w.a.UNENROLLED;
  if (null != e.userStatus.claimedAt) return w.a.CLAIMED;
  if (null != e.userStatus.completedAt) return w.a.COMPLETED_100;
  let t = (0, p.il)(e),
    n = t.progressSeconds,
    r = t.targetSeconds;
  return n / r >= 1 ? w.a.COMPLETED_100 : n / r >= .75 ? w.a.COMPLETED_75 : n / r >= .5 ? w.a.COMPLETED_50 : n / r >= .25 ? w.a.COMPLETED_25 : w.a.ENROLLED
}
let q = "1193992107035983872",
  X = {
    id: q,
    preview: true,
    config: {
      id: q,
      configVersion: 2,
      startsAt: "2024-01-01T00:00:00+00:00",
      expiresAt: "2030-01-01T00:00:00+00:00",
      application: {
        link: "https://discord.com/",
        id: "123",
        name: "Sky Runners"
      },
      messages: {
        questName: "Sky Runners",
        gameTitle: "Sky Runners",
        gamePublisher: "Discord"
      },
      colors: {
        primary: "#B377F3",
        secondary: "#5865F2"
      },
      rewardsConfig: {
        assignmentMethod: 1,
        rewards: [{
          skuId: "",
          asset: "reward.png",
          assetVideo: null,
          type: Chunk887003.w.REWARD_CODE,
          messages: {
            name: "Orange Buddy Jetpack",
            nameWithArticle: "an Orange Buddy Jetpack",
            redemptionInstructionsByPlatform: {
              0: "This code can be used on any platform!",
              1: "Redeem your code on your Xbox.",
              2: "Redeem your code on your Playstation.",
              3: "Redeem your code on your Switch.",
              4: "Redeem your code on your PC."
            }
          }
        }],
        rewardsExpireAt: "2030-01-01T00:00:00+00:00",
        platforms: [0, 4, 2, 3, 1]
      },
      assets: {
        hero: "hero.png",
        heroVideo: null,
        questBarHero: "quests_bar_hero.webm",
        questBarHeroVideo: null,
        gameTile: "game_tile.png",
        logotype: "game_logotype.png"
      },
      taskConfigV2: {
        joinOperator: Chunk458708.r.AND,
        tasks: {
          [Chunk754700.X.PLAY_ON_DESKTOP]: {
            type: Chunk754700.X.PLAY_ON_DESKTOP,
            target: 300
          }
        }
      },
      features: [],
      sharePolicy: Chunk820827.X.SHAREABLE_EVERYWHERE
    },
    userStatus: null,
    targetedContent: []
  };

function Q() {
  var e, t, a, s, u, d, x;
  let [j, Z] = Chunk647438.useState(X), q = Chunk647438.useCallback(e => {
    Z(M(L({}, e), {
      preview: true
    }))
  }, []), [Q, J] = Chunk647438.useState(Chunk899457.a.UNENROLLED), [$, ee] = Chunk647438.useState(false), [et, en] = Chunk647438.useState(false), [er, ei] = Chunk647438.useState(null), ea = "123", eo = F(j.config);

  function es(e) {
    switch (J(e), e) {
      case w.a.UNENROLLED:
        q(M(L({}, j), {
          userStatus: null
        }));
        break;
      case w.a.ENROLLED:
        q(M(L({}, j), {
          userStatus: K({
            enrolledAt: new Date().toISOString()
          })
        }));
        break;
      case w.a.COMPLETED_25:
        q(M(L({}, j), {
          userStatus: K({
            enrolledAt: new Date().toISOString(),
            streamProgressSeconds: .25 * ey
          })
        }));
        break;
      case w.a.COMPLETED_50:
        q(M(L({}, j), {
          userStatus: K({
            enrolledAt: new Date().toISOString(),
            streamProgressSeconds: .5 * ey
          })
        }));
        break;
      case w.a.COMPLETED_75:
        q(M(L({}, j), {
          userStatus: K({
            enrolledAt: new Date().toISOString(),
            streamProgressSeconds: .75 * ey
          })
        }));
        break;
      case w.a.COMPLETED_100:
        q(M(L({}, j), {
          userStatus: K({
            completedAt: new Date().toISOString(),
            enrolledAt: new Date().toISOString(),
            streamProgressSeconds: ey
          })
        }));
        break;
      case w.a.CLAIMED:
        q(M(L({}, j), {
          userStatus: K({
            claimedAt: new Date().toISOString(),
            completedAt: new Date().toISOString(),
            enrolledAt: new Date().toISOString(),
            streamProgressSeconds: ey
          })
        }))
    }
  }

  function el(e, t) {
    ("hero" === e || "questBarHero" === e || "gameTile" === e || "logotype" === e || "heroVideo" === e || "questBarHeroVideo" === e) && q(M(L({}, j), {
      config: V(j.config, {
        [e]: t
      })
    }))
  }

  function ec(e, t) {
    let n = j.config.taskConfigV2.tasks,
      r = n[l.X.WATCH_VIDEO];
    if (null == r) return;
    let i = L({}, r.assets);
    switch (e) {
      case "videoPlayerVideo":
        i.video = {
          url: t
        };
        break;
      case "videoPlayerVideoLowRes":
        i.videoLowRes = {
          url: t
        };
        break;
      case "videoPlayerThumbnail":
        i.video = M(L({}, i.video), {
          thumbnail: t
        });
        break;
      default:
        return
    }
    q(M(L({}, j), {
      config: M(L({}, j.config), {
        taskConfigV2: M(L({}, j.config.taskConfigV2), {
          tasks: M(L({}, n), {
            [l.X.WATCH_VIDEO]: M(L({}, r), {
              assets: i
            })
          })
        })
      })
    }))
  }

  function eu(e, t) {
    var n, r, i;
    q(M(L({}, j), {
      config: M(L({}, j.config), {
        videoMetadata: M(L({}, j.config.videoMetadata), {
          messages: null != (i = null == (n = j.config.videoMetadata) ? true : n.messages) ? i : {},
          assets: M(L({}, null == (r = j.config.videoMetadata) ? true : r.assets), {
            [e]: t
          })
        })
      })
    }))
  }

  function ed(e, t, n) {
    "asset" === e && q(M(L({}, j), {
      config: H(j.config, t, n)
    }))
  }

  function ef(e, t) {
    ("questName" === e || "gameTitle" === e || "gamePublisher" === e) && q(M(L({}, j), {
      config: Y(j.config, {
        [e]: t
      })
    }))
  }

  function e_(e, t) {
    let n = j.config.taskConfigV2.tasks,
      r = n[l.X.WATCH_VIDEO];
    if (null == r) return;
    let i = M(L({}, r.messages), {
      [e]: t
    });
    q(M(L({}, j), {
      config: M(L({}, j.config), {
        taskConfigV2: M(L({}, j.config.taskConfigV2), {
          tasks: M(L({}, n), {
            [l.X.WATCH_VIDEO]: M(L({}, r), {
              messages: i
            })
          })
        })
      })
    }))
  }

  function ep(e, t, n) {
    ("name" === e || "nameWithArticle" === e) && q(M(L({}, j), {
      config: W(j.config, {
        [e]: t
      }, n)
    }))
  }

  function eh(e, t) {
    q(M(L({}, j), {
      config: M(L({}, j.config), {
        colors: M(L({}, j.config.colors), {
          [e]: t
        })
      })
    }))
  }

  function em(e) {
    ee(e)
  }

  function eg(e) {
    ei(e), null != e && (J(z(e)), q(e))
  }

  function eE() {
    (0, Chunk509212.Xv)(j.config) ? (0, Chunk110560.openQuestCollectibleRewardModal)(j, Chunk497505.jn.GIFT_INVENTORY_FOR_YOU, true) : (0, Chunk110560.openQuestsRewardCodeModal)({
      quest: j,
      questContent: Chunk497505.jn.GIFT_INVENTORY_FOR_YOU,
      preview: true,
      previewQuest: j,
      sourceQuestContent: Chunk497505.jn.INTERNAL_PREVIEW_TOOL
    })
  }

  function eb(e) {
    q(M(L({}, j), {
      config: M(L({}, j.config), {
        taskConfigV2: e
      })
    }))
  }
  let ey = Chunk647438.useMemo(() => {
      for (let [e, t] of Object.entries(j.config.taskConfigV2.tasks))
        if (null != exports.target) return exports.target;
      return k * Chunk70956.Z.Seconds.MINUTE
    }, [j.config.taskConfigV2.tasks]),
    eO = Chunk647438.useMemo(() => Chunk754700.X.WATCH_VIDEO in j.config.taskConfigV2.tasks, [j.config.taskConfigV2.tasks]);
  o()(false !== j.preview && null != j.preview, "Preview config must have property preview: true");
  let ev = j.config.taskConfigV2.tasks[Chunk754700.X.WATCH_VIDEO];
  return (0, Chunk951288.jsxs)("div", {
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-lg/bold",
      className: Chunk301188.heading,
      children: "Quest Preview Tool"
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk301188.fields,
      children: (0, Chunk951288.jsx)(Chunk916028.Z, {
        onSelect: eg,
        quest: er
      })
    }), (0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-md/semibold",
      className: Chunk301188.subheading,
      children: "Task Config"
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk301188.fields,
      children: (0, Chunk951288.jsx)(Chunk749912.Z, {
        taskDuration: ey,
        taskConfigV2: j.config.taskConfigV2,
        onSelect: eb
      })
    }), (0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-md/semibold",
      className: Chunk301188.subheading,
      children: "Messages"
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk301188.fields,
      children: [(0, Chunk951288.jsx)(Chunk602683.Z, {
        title: "Quest Name",
        assetKey: "questName",
        onMessageChange: ef,
        initialValue: j.config.messages.questName
      }), (0, Chunk951288.jsx)(Chunk602683.Z, {
        title: "Game Title",
        assetKey: "gameTitle",
        onMessageChange: ef,
        initialValue: j.config.messages.gameTitle
      }), (0, Chunk951288.jsx)(Chunk602683.Z, {
        title: "Game Publisher",
        assetKey: "gamePublisher",
        onMessageChange: ef,
        initialValue: j.config.messages.gamePublisher
      }), eO && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsx)(Chunk602683.Z, {
          title: "Video Title",
          assetKey: "videoTitle",
          onMessageChange: e_,
          initialValue: null == ev ? true : ev.messages.videoTitle
        }), (0, Chunk951288.jsx)(Chunk602683.Z, {
          title: "End CTA Title",
          assetKey: "videoEndCtaTitle",
          onMessageChange: e_,
          initialValue: null == ev ? true : ev.messages.videoEndCtaTitle
        }), (0, Chunk951288.jsx)(Chunk602683.Z, {
          title: "End CTA Subtitle",
          assetKey: "videoEndCtaSubtitle",
          onMessageChange: e_,
          initialValue: null == ev ? true : ev.messages.videoEndCtaSubtitle
        })]
      })]
    }), (0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-md/semibold",
      className: Chunk301188.subheading,
      children: "Assets"
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk301188.fields,
      children: [(0, Chunk951288.jsx)(Chunk210851.Z, {
        title: "Hero",
        assetKey: "hero",
        onFileChange: el,
        filters: B,
        initialValue: j.config.assets.hero
      }), (0, Chunk951288.jsx)(Chunk210851.Z, {
        title: "Hero Video (optional)",
        assetKey: "heroVideo",
        onFileChange: el,
        filters: B,
        initialValue: null != (d = j.config.assets.heroVideo) ? Chunk458708 : true
      }), (0, Chunk951288.jsx)(Chunk210851.Z, {
        title: "Quest Bar Hero",
        assetKey: "questBarHero",
        onFileChange: el,
        filters: B,
        initialValue: j.config.assets.questBarHero
      }), (0, Chunk951288.jsx)(Chunk210851.Z, {
        title: "Quest Bar Hero Video (optional)",
        assetKey: "questBarHeroVideo",
        onFileChange: el,
        filters: B,
        initialValue: null != (x = j.config.assets.questBarHeroVideo) ? x : true
      }), (0, Chunk951288.jsx)(Chunk210851.Z, {
        title: "Game Tile",
        assetKey: "gameTile",
        onFileChange: el,
        filters: [...G, "svg"],
        initialValue: j.config.assets.gameTile
      }), (0, Chunk951288.jsx)(Chunk210851.Z, {
        title: "Logotype",
        assetKey: "logotype",
        onFileChange: el,
        filters: [...U, "svg"],
        initialValue: j.config.assets.logotype
      }), eO && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsx)(Chunk210851.Z, {
          title: "Quest Video",
          assetKey: "videoPlayerVideo",
          onFileChange: ec,
          filters: B,
          initialValue: null == ev ? true : ev.assets.video.url
        }), (0, Chunk951288.jsx)(Chunk210851.Z, {
          title: "Quest Video (Low Resolution)",
          assetKey: "videoPlayerVideoLowRes",
          onFileChange: ec,
          filters: B,
          initialValue: null == ev || null == (e = ev.assets.videoLowRes) ? true : module.url
        }), (0, Chunk951288.jsx)(Chunk210851.Z, {
          title: "Video Player Thumbnail (optional)",
          assetKey: "videoPlayerThumbnail",
          onFileChange: ec,
          filters: G,
          initialValue: null == ev ? true : ev.assets.video.thumbnail
        }), (0, Chunk951288.jsx)(Chunk210851.Z, {
          title: "Quest Bar Preview Video (optional)",
          assetKey: "questBarPreviewVideo",
          onFileChange: eu,
          filters: B,
          initialValue: null == (t = j.config.videoMetadata) ? true : exports.assets.questBarPreviewVideo
        }), (0, Chunk951288.jsx)(Chunk210851.Z, {
          title: "Quest Home Video (optional)",
          assetKey: "questHomeVideo",
          onFileChange: eu,
          filters: B,
          initialValue: null == (a = j.config.videoMetadata) ? true : Chunk512722.assets.questHomeVideo
        })]
      })]
    }), eo.map((e, t) => (0, r.jsxs)("div", {
      children: [(0, r.jsxs)(f.X6q, {
        variant: "heading-md/semibold",
        className: D.subheading,
        children: ["Reward #", t + 1]
      }), (0, r.jsxs)("div", {
        className: D.fields,
        children: [(0, r.jsx)(C.Z, {
          title: "Name",
          assetKey: "name",
          onMessageChange: (e, n) => ep(e, n, t),
          initialValue: e.messages.name
        }), (0, r.jsx)(C.Z, {
          title: "Name With Article",
          assetKey: "nameWithArticle",
          onMessageChange: (e, n) => ep(e, n, t),
          initialValue: e.messages.nameWithArticle
        }), e.type !== c.w.VIRTUAL_CURRENCY && (0, r.jsx)(A.Z, {
          title: "Asset",
          assetKey: "asset",
          onFileChange: (e, n) => ed(e, n, t),
          filters: B,
          initialValue: e.asset
        }), (0, r.jsxs)(f.xJW, {
          children: [(0, r.jsx)(f.vwX, {
            children: "Claim Modal"
          }), (0, r.jsx)(f.zxk, {
            variant: "primary",
            text: "Open Reward Modal",
            onClick: eE
          })]
        })]
      })]
    }, t)), (0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-md/semibold",
      className: Chunk301188.subheading,
      children: "Colors & Quest States"
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk301188.fields,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk301188.fields,
        style: {
          marginBottom: 0
        },
        children: [(0, Chunk951288.jsx)(Chunk478977.Z, {
          title: "Primary",
          colorKey: "primary",
          onChange: eh,
          value: j.config.colors.primary
        }), (0, Chunk951288.jsx)(Chunk478977.Z, {
          title: "Secondary",
          colorKey: "secondary",
          onChange: eh,
          value: j.config.colors.secondary
        })]
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk301188.fields,
        children: (0, Chunk951288.jsx)(Chunk815183.Z, {})
      }), (0, Chunk951288.jsx)(Chunk899457.Z, {
        onChange: es,
        value: Q
      })]
    }), (0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-lg/bold",
      className: Chunk301188.heading,
      children: "Component Previews"
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk301188.componentPreviews,
      children: [(0, Chunk951288.jsxs)(Chunk456799.Z, {
        withBorder: true,
        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
          children: "Quest Bar"
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk301188.questBarPreviewWrapper,
          children: [(null == (s = j.userStatus) ? true : Chunk278074.claimedAt) != null && (0, Chunk951288.jsx)(Chunk481060.Text, {
            color: "text-secondary",
            variant: "text-sm/normal",
            children: "The Quest Bar is hidden when the user has claimed the reward."
          }), (0, Chunk951288.jsx)("div", {
            className: Chunk301188.questBarPreview,
            children: (0, Chunk951288.jsx)(Chunk78826.p, {
              isPreview: true,
              source: "preview",
              questId: "0",
              children: (0, Chunk951288.jsx)(Chunk130653.Z, {
                children: (0, Chunk951288.jsx)(Chunk210724.P, {
                  quest: j
                })
              })
            })
          })]
        })]
      }), (0, Chunk951288.jsxs)(Chunk456799.Z, {
        withBorder: true,
        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
          children: "Quest Home Card"
        }), (0, Chunk951288.jsx)(Chunk78826.p, {
          isPreview: true,
          source: "preview",
          questId: "0",
          children: (0, Chunk951288.jsx)(Chunk415104.Z, {
            quest: j,
            className: Chunk301188.questTile,
            questContent: Chunk497505.jn.QUEST_HOME_DESKTOP,
            contentPosition: 0,
            rowIndex: 0,
            sourceQuestContent: Chunk497505.jn.INTERNAL_PREVIEW_TOOL
          })
        })]
      }), (0, Chunk951288.jsxs)(Chunk456799.Z, {
        withBorder: true,
        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
          children: "Channel Call Header"
        }), (null == (u = j.userStatus) ? true : Chunk820827.claimedAt) != null && (0, Chunk951288.jsx)(Chunk481060.Text, {
          color: "text-secondary",
          variant: "text-sm/normal",
          children: "The Quest Channel Call Header is hidden when the user has claimed the reward."
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk301188.questBarPreviewWrapper,
          children: (0, Chunk951288.jsx)(Chunk78826.p, {
            isPreview: true,
            source: "preview",
            questId: "0",
            children: (0, Chunk951288.jsx)("div", {
              className: Chunk301188.questChannelCallHeaderPreview,
              children: (0, Chunk951288.jsx)(Chunk134483.Z, {
                channelId: ea,
                previewQuest: j,
                isParticipatingOverride: $
              })
            })
          })
        })]
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk301188.toggleSwitch,
        children: (0, Chunk951288.jsx)(Chunk481060.xJW, {
          children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
            value: $,
            onChange: em,
            hideBorder: true,
            children: "Is Participating:"
          })
        })
      }), (0, Chunk951288.jsxs)(Chunk456799.Z, {
        withBorder: true,
        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
          children: "Quest Card Embed"
        }), et ? (0, Chunk951288.jsx)(Chunk683650.o, {
          questId: j.id
        }) : (0, Chunk951288.jsx)(Chunk37303.Z, {
          quest: j,
          location: Chunk497505.jn.QUESTS_EMBED,
          sourceQuestContent: Chunk497505.jn.INTERNAL_PREVIEW_TOOL
        }, j.id)]
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk301188.toggleSwitch,
        children: (0, Chunk951288.jsx)(Chunk481060.xJW, {
          children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
            value: et,
            onChange: en,
            hideBorder: true,
            children: "Invalid Quests Embed:"
          })
        })
      }), eO && (0, Chunk951288.jsxs)(Chunk456799.Z, {
        withBorder: true,
        allowClicks: true,
        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
          children: "Video Player"
        }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Open Video Player Modal",
          onClick: () => {
            (0, Chunk481060.ZDy)(async () => {
              let {
                default: e
              } = await Promise.all([require.e("90648"), require.e("32249")]).then(require.bind(require, 536687));
              return t => {
                var n;
                return (0, r.jsx)(e, M(L({}, t), {
                  openStartClockTime: performance.now(),
                  videoSessionId: "fake-quest-session-id",
                  questId: null != (n = j.id) ? n : "fake-quest-id",
                  overrideQuest: j,
                  autoplay: true,
                  sourceQuestContent: h.jn.INTERNAL_PREVIEW_TOOL
                }))
              }
            })
          }
        })]
      })]
    })]
  })
}
class J extends Chunk647438.Component {
  componentDidCatch(e) {
    this.setState({
      error: e
    })
  }
  render() {
    let {
      error: e,
      renderKey: t
    } = this.state;
    return null != module ? (0, Chunk951288.jsxs)("div", {
      className: Chunk301188.errorBoundary,
      children: [(0, Chunk951288.jsx)(Chunk481060.Mgn, {
        className: Chunk301188.errorBoundaryIcon
      }), (0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-lg/semibold",
        children: "Something broke in the Quest preview tool :("
      }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
        variant: "secondary",
        text: "Reset",
        onClick: this.handleResetState
      }), null != module.message && (0, Chunk951288.jsx)(Chunk481060.Zbd, {
        className: Chunk301188.errorMessageWrapper,
        children: (0, Chunk951288.jsx)("code", {
          className: Chunk301188.errorMessage,
          children: module.message
        })
      })]
    }) : (0, Chunk951288.jsx)(Q, {}, exports)
  }
  constructor(...e) {
    super(...e), x(this, "state", {
      error: null,
      renderKey: 0
    }), x(this, "handleResetState", () => {
      this.setState(e => ({
        error: null,
        renderKey: e.renderKey + 1
      }))
    })
  }
}
let $ = J