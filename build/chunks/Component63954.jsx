/** Chunk was on 10150 **/
/** chunk id: 63954, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  Z: () => Y,
  b: () => M
}), require("./388685.js"), require("./314940.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk278074 = require("./278074.js"),
  Chunk754700 = require("./754700.js"),
  Chunk887003 = require("./887003.js"),
  Chunk820827 = require("./820827.js"),
  Chunk458708 = require("./458708.js"),
  Chunk481060 = require("./481060.js"),
  Chunk509212 = require("./509212.js"),
  Chunk497505 = require("./497505.js"),
  Chunk210724 = require("./210724.jsx"),
  Chunk130653 = require("./130653.jsx"),
  Chunk415104 = require("./415104.jsx"),
  Chunk478977 = require("./478977.jsx"),
  Chunk456799 = require("./456799.jsx"),
  Chunk210851 = require("./210851.jsx"),
  Chunk602683 = require("./602683.jsx"),
  Chunk916028 = require("./916028.jsx"),
  Chunk749912 = require("./749912.jsx"),
  Chunk815183 = require("./815183.jsx"),
  Chunk899457 = require("./899457.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk78826 = require("./78826.jsx"),
  Chunk37303 = require("./37303.jsx"),
  Chunk134483 = require("./134483.jsx"),
  Chunk683650 = require("./683650.jsx"),
  Chunk70956 = require("./70956.js"),
  Chunk188764 = require("./188764.js");

function D(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = s, e
}

function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var s = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(s);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(s).filter(function(e) {
      return Object.getOwnPropertyDescriptor(s, e).enumerable
    }))), n.forEach(function(t) {
      D(e, t, s[t])
    })
  }
  return e
}

function k(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var s = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      s.push.apply(s, n)
    }
    return s
  })(Object(t)).forEach(function(s) {
    Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s))
  }), e
}
let R = ["png", "gif", "webp"],
  I = [...R, "jpg", "jpeg"],
  X = Array.from(new Set([...I, "gif", "mp4", "webm"]));

function M(e) {
  var t, s;
  return {
    code: "PREVIEW-MODE-CODE",
    tier: 0,
    platform: h.y$.CROSS_PLATFORM,
    userId: "123",
    questId: e.id,
    claimedAt: null != (s = null == (t = e.userStatus) ? true : t.claimedAt) ? s : ""
  }
}

function Z() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
    {
      streamProgressSeconds: t = 0,
      completedAt: s = null,
      enrolledAt: n = null,
      claimedAt: r = null
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
let q = "1193992107035983872",
  B = {
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

function K() {
  var e, t, a, u, d, D, M, q;
  let [K, W] = Chunk647438.useState(B), Y = Chunk647438.useCallback(e => {
    W(k(L({}, e), {
      preview: true
    }))
  }, []), [H, Q] = Chunk647438.useState(Chunk899457.a.UNENROLLED), [F, U] = Chunk647438.useState(false), [J, z] = Chunk647438.useState(false), [G, $] = Chunk647438.useState(null), ee = (q = K.config, (0, Chunk278074.EQ)(q).with({
    configVersion: 2
  }, e => e.rewardsConfig.rewards).exhaustive());

  function et(e, t) {
    if ("hero" === e || "questBarHero" === e || "gameTile" === e || "logotype" === e || "heroVideo" === e || "questBarHeroVideo" === e) {
      var s, n;
      Y(k(L({}, K), {
        config: (s = K.config, n = {
          [e]: t
        }, (0, l.EQ)(s).with({
          configVersion: 2
        }, e => k(L({}, e), {
          assets: L({}, e.assets, n)
        })).exhaustive())
      }))
    }
  }

  function es(e, t) {
    let s = K.config.taskConfigV2.tasks,
      n = s[o.X.WATCH_VIDEO];
    if (null == n) return;
    let r = L({}, n.assets);
    switch (e) {
      case "videoPlayerVideo":
        r.video = {
          url: t
        };
        break;
      case "videoPlayerVideoLowRes":
        r.videoLowRes = {
          url: t
        };
        break;
      case "videoPlayerThumbnail":
        r.video = k(L({}, r.video), {
          thumbnail: t
        });
        break;
      default:
        return
    }
    Y(k(L({}, K), {
      config: k(L({}, K.config), {
        taskConfigV2: k(L({}, K.config.taskConfigV2), {
          tasks: k(L({}, s), {
            [o.X.WATCH_VIDEO]: k(L({}, n), {
              assets: r
            })
          })
        })
      })
    }))
  }

  function en(e, t) {
    var s, n, r;
    Y(k(L({}, K), {
      config: k(L({}, K.config), {
        videoMetadata: k(L({}, K.config.videoMetadata), {
          messages: null != (r = null == (s = K.config.videoMetadata) ? true : s.messages) ? r : {},
          assets: k(L({}, null == (n = K.config.videoMetadata) ? true : n.assets), {
            [e]: t
          })
        })
      })
    }))
  }

  function er(e, t) {
    if ("questName" === e || "gameTitle" === e || "gamePublisher" === e) {
      var s, n;
      Y(k(L({}, K), {
        config: (s = K.config, n = {
          [e]: t
        }, (0, l.EQ)(s).with({
          configVersion: 2
        }, e => k(L({}, e), {
          messages: L({}, e.messages, n)
        })).exhaustive())
      }))
    }
  }

  function ea(e, t) {
    let s = K.config.taskConfigV2.tasks,
      n = s[o.X.WATCH_VIDEO];
    if (null == n) return;
    let r = k(L({}, n.messages), {
      [e]: t
    });
    Y(k(L({}, K), {
      config: k(L({}, K.config), {
        taskConfigV2: k(L({}, K.config.taskConfigV2), {
          tasks: k(L({}, s), {
            [o.X.WATCH_VIDEO]: k(L({}, n), {
              messages: r
            })
          })
        })
      })
    }))
  }

  function ei(e, t, s) {
    if ("name" === e || "nameWithArticle" === e) {
      var n, r;
      Y(k(L({}, K), {
        config: (n = K.config, r = {
          [e]: t
        }, (0, l.EQ)(n).with({
          configVersion: 2
        }, e => k(L({}, e), {
          rewardsConfig: k(L({}, e.rewardsConfig), {
            rewards: e.rewardsConfig.rewards.map((e, t) => t === s ? k(L({}, e), {
              messages: L({}, e.messages, r)
            }) : e)
          })
        })).exhaustive())
      }))
    }
  }

  function el(e, t) {
    Y(k(L({}, K), {
      config: k(L({}, K.config), {
        colors: k(L({}, K.config.colors), {
          [e]: t
        })
      })
    }))
  }

  function eo() {
    (0, Chunk509212.Xv)(K.config) ? (0, Chunk110560.openQuestCollectibleRewardModal)(K, Chunk497505.jn.GIFT_INVENTORY_FOR_YOU, true) : (0, Chunk110560.openQuestsRewardCodeModal)({
      quest: K,
      questContent: Chunk497505.jn.GIFT_INVENTORY_FOR_YOU,
      preview: true,
      previewQuest: K,
      sourceQuestContent: Chunk497505.jn.INTERNAL_PREVIEW_TOOL
    })
  }
  let ec = Chunk647438.useMemo(() => {
      for (let [e, t] of Object.entries(K.config.taskConfigV2.tasks))
        if (null != exports.target) return exports.target;
      return 10 * Chunk70956.Z.Seconds.MINUTE
    }, [K.config.taskConfigV2.tasks]),
    eu = Chunk647438.useMemo(() => Chunk754700.X.WATCH_VIDEO in K.config.taskConfigV2.tasks, [K.config.taskConfigV2.tasks]);
  i()(false !== K.preview && null != K.preview, "Preview config must have property preview: true");
  let ed = K.config.taskConfigV2.tasks[Chunk754700.X.WATCH_VIDEO];
  return (0, Chunk951288.jsxs)(Chunk481060.zJl, {
    className: Chunk188764.container,
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-lg/bold",
      className: Chunk188764.heading,
      children: "Quest Preview Tool"
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk188764.fields,
      children: (0, Chunk951288.jsx)(Chunk916028.Z, {
        onSelect: function(e) {
          $(e), null != e && (Q(function(e) {
            if (null == e.userStatus) return E.a.UNENROLLED;
            if (null != e.userStatus.claimedAt) return E.a.CLAIMED;
            if (null != e.userStatus.completedAt) return E.a.COMPLETED_100;
            let t = (0, f.il)(e),
              s = t.progressSeconds,
              n = t.targetSeconds;
            return s / n >= 1 ? E.a.COMPLETED_100 : s / n >= .75 ? E.a.COMPLETED_75 : s / n >= .5 ? E.a.COMPLETED_50 : s / n >= .25 ? E.a.COMPLETED_25 : E.a.ENROLLED
          }(e)), Y(e))
        },
        quest: G
      })
    }), (0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-md/semibold",
      className: Chunk188764.subheading,
      children: "Task Config"
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk188764.fields,
      children: (0, Chunk951288.jsx)(Chunk749912.Z, {
        taskDuration: ec,
        taskConfigV2: K.config.taskConfigV2,
        onSelect: function(e) {
          Y(k(L({}, K), {
            config: k(L({}, K.config), {
              taskConfigV2: e
            })
          }))
        }
      })
    }), (0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-md/semibold",
      className: Chunk188764.subheading,
      children: "Messages"
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk188764.fields,
      children: [(0, Chunk951288.jsx)(Chunk602683.Z, {
        title: "Quest Name",
        assetKey: "questName",
        onMessageChange: er,
        initialValue: K.config.messages.questName
      }), (0, Chunk951288.jsx)(Chunk602683.Z, {
        title: "Game Title",
        assetKey: "gameTitle",
        onMessageChange: er,
        initialValue: K.config.messages.gameTitle
      }), (0, Chunk951288.jsx)(Chunk602683.Z, {
        title: "Game Publisher",
        assetKey: "gamePublisher",
        onMessageChange: er,
        initialValue: K.config.messages.gamePublisher
      }), eu && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsx)(Chunk602683.Z, {
          title: "Video Title",
          assetKey: "videoTitle",
          onMessageChange: ea,
          initialValue: null == ed ? true : ed.messages.videoTitle
        }), (0, Chunk951288.jsx)(Chunk602683.Z, {
          title: "End CTA Title",
          assetKey: "videoEndCtaTitle",
          onMessageChange: ea,
          initialValue: null == ed ? true : ed.messages.videoEndCtaTitle
        }), (0, Chunk951288.jsx)(Chunk602683.Z, {
          title: "End CTA Subtitle",
          assetKey: "videoEndCtaSubtitle",
          onMessageChange: ea,
          initialValue: null == ed ? true : ed.messages.videoEndCtaSubtitle
        })]
      })]
    }), (0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-md/semibold",
      className: Chunk188764.subheading,
      children: "Assets"
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk188764.fields,
      children: [(0, Chunk951288.jsx)(Chunk210851.Z, {
        title: "Hero",
        assetKey: "hero",
        onFileChange: et,
        filters: X,
        initialValue: K.config.assets.hero
      }), (0, Chunk951288.jsx)(Chunk210851.Z, {
        title: "Hero Video (optional)",
        assetKey: "heroVideo",
        onFileChange: et,
        filters: X,
        initialValue: null != (D = K.config.assets.heroVideo) ? D : true
      }), (0, Chunk951288.jsx)(Chunk210851.Z, {
        title: "Quest Bar Hero",
        assetKey: "questBarHero",
        onFileChange: et,
        filters: X,
        initialValue: K.config.assets.questBarHero
      }), (0, Chunk951288.jsx)(Chunk210851.Z, {
        title: "Quest Bar Hero Video (optional)",
        assetKey: "questBarHeroVideo",
        onFileChange: et,
        filters: X,
        initialValue: null != (M = K.config.assets.questBarHeroVideo) ? M : true
      }), (0, Chunk951288.jsx)(Chunk210851.Z, {
        title: "Game Tile",
        assetKey: "gameTile",
        onFileChange: et,
        filters: [...I, "svg"],
        initialValue: K.config.assets.gameTile
      }), (0, Chunk951288.jsx)(Chunk210851.Z, {
        title: "Logotype",
        assetKey: "logotype",
        onFileChange: et,
        filters: [...R, "svg"],
        initialValue: K.config.assets.logotype
      }), eu && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsx)(Chunk210851.Z, {
          title: "Quest Video",
          assetKey: "videoPlayerVideo",
          onFileChange: es,
          filters: X,
          initialValue: null == ed ? true : ed.assets.video.url
        }), (0, Chunk951288.jsx)(Chunk210851.Z, {
          title: "Quest Video (Low Resolution)",
          assetKey: "videoPlayerVideoLowRes",
          onFileChange: es,
          filters: X,
          initialValue: null == ed || null == (e = ed.assets.videoLowRes) ? true : module.url
        }), (0, Chunk951288.jsx)(Chunk210851.Z, {
          title: "Video Player Thumbnail (optional)",
          assetKey: "videoPlayerThumbnail",
          onFileChange: es,
          filters: I,
          initialValue: null == ed ? true : ed.assets.video.thumbnail
        }), (0, Chunk951288.jsx)(Chunk210851.Z, {
          title: "Quest Bar Preview Video (optional)",
          assetKey: "questBarPreviewVideo",
          onFileChange: en,
          filters: X,
          initialValue: null == (t = K.config.videoMetadata) ? true : exports.assets.questBarPreviewVideo
        }), (0, Chunk951288.jsx)(Chunk210851.Z, {
          title: "Quest Home Video (optional)",
          assetKey: "questHomeVideo",
          onFileChange: en,
          filters: X,
          initialValue: null == (a = K.config.videoMetadata) ? true : Chunk512722.assets.questHomeVideo
        })]
      })]
    }), ee.map((e, t) => (0, n.jsxs)("div", {
      children: [(0, n.jsxs)(g.X6q, {
        variant: "heading-md/semibold",
        className: A.subheading,
        children: ["Reward #", t + 1]
      }), (0, n.jsxs)("div", {
        className: A.fields,
        children: [(0, n.jsx)(y.Z, {
          title: "Name",
          assetKey: "name",
          onMessageChange: (e, s) => ei(e, s, t),
          initialValue: e.messages.name
        }), (0, n.jsx)(y.Z, {
          title: "Name With Article",
          assetKey: "nameWithArticle",
          onMessageChange: (e, s) => ei(e, s, t),
          initialValue: e.messages.nameWithArticle
        }), e.type !== c.w.VIRTUAL_CURRENCY && (0, n.jsx)(x.Z, {
          title: "Asset",
          assetKey: "asset",
          onFileChange: (e, s) => (function(e, t, s) {
            if ("asset" === e) {
              var n;
              Y(k(L({}, K), {
                config: (n = K.config, (0, l.EQ)(n).with({
                  configVersion: 2
                }, e => k(L({}, e), {
                  rewardsConfig: k(L({}, e.rewardsConfig), {
                    rewards: e.rewardsConfig.rewards.map((e, n) => n === s ? k(L({}, e), {
                      asset: t,
                      skuId: ""
                    }) : e)
                  })
                })).exhaustive())
              }))
            }
          })(e, s, t),
          filters: X,
          initialValue: e.asset
        }), (0, n.jsxs)(g.xJW, {
          children: [(0, n.jsx)(g.vwX, {
            children: "Claim Modal"
          }), (0, n.jsx)(g.zxk, {
            variant: "primary",
            text: "Open Reward Modal",
            onClick: eo
          })]
        })]
      })]
    }, t)), (0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-md/semibold",
      className: Chunk188764.subheading,
      children: "Colors & Quest States"
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk188764.fields,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk188764.fields,
        style: {
          marginBottom: 0
        },
        children: [(0, Chunk951288.jsx)(Chunk478977.Z, {
          title: "Primary",
          colorKey: "primary",
          onChange: el,
          value: K.config.colors.primary
        }), (0, Chunk951288.jsx)(Chunk478977.Z, {
          title: "Secondary",
          colorKey: "secondary",
          onChange: el,
          value: K.config.colors.secondary
        })]
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk188764.fields,
        children: (0, Chunk951288.jsx)(Chunk815183.Z, {})
      }), (0, Chunk951288.jsx)(Chunk899457.Z, {
        onChange: function(e) {
          switch (Q(e), e) {
            case E.a.UNENROLLED:
              Y(k(L({}, K), {
                userStatus: null
              }));
              break;
            case E.a.ENROLLED:
              Y(k(L({}, K), {
                userStatus: Z({
                  enrolledAt: new Date().toISOString()
                })
              }));
              break;
            case E.a.COMPLETED_25:
              Y(k(L({}, K), {
                userStatus: Z({
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: .25 * ec
                })
              }));
              break;
            case E.a.COMPLETED_50:
              Y(k(L({}, K), {
                userStatus: Z({
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: .5 * ec
                })
              }));
              break;
            case E.a.COMPLETED_75:
              Y(k(L({}, K), {
                userStatus: Z({
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: .75 * ec
                })
              }));
              break;
            case E.a.COMPLETED_100:
              Y(k(L({}, K), {
                userStatus: Z({
                  completedAt: new Date().toISOString(),
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: ec
                })
              }));
              break;
            case E.a.CLAIMED:
              Y(k(L({}, K), {
                userStatus: Z({
                  claimedAt: new Date().toISOString(),
                  completedAt: new Date().toISOString(),
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: ec
                })
              }))
          }
        },
        value: H
      })]
    }), (0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-lg/bold",
      className: Chunk188764.heading,
      children: "Component Previews"
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk188764.componentPreviews,
      children: [(0, Chunk951288.jsxs)(Chunk456799.Z, {
        withBorder: true,
        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
          children: "Quest Bar"
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk188764.questBarPreviewWrapper,
          children: [(null == (u = K.userStatus) ? true : Chunk820827.claimedAt) != null && (0, Chunk951288.jsx)(Chunk481060.Text, {
            color: "text-secondary",
            variant: "text-sm/normal",
            children: "The Quest Bar is hidden when the user has claimed the reward."
          }), (0, Chunk951288.jsx)("div", {
            className: Chunk188764.questBarPreview,
            children: (0, Chunk951288.jsx)(Chunk78826.p, {
              isPreview: true,
              source: "preview",
              questId: "0",
              children: (0, Chunk951288.jsx)(Chunk130653.Z, {
                children: (0, Chunk951288.jsx)(Chunk210724.P, {
                  quest: K
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
            quest: K,
            className: Chunk188764.questTile,
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
        }), (null == (d = K.userStatus) ? true : Chunk458708.claimedAt) != null && (0, Chunk951288.jsx)(Chunk481060.Text, {
          color: "text-secondary",
          variant: "text-sm/normal",
          children: "The Quest Channel Call Header is hidden when the user has claimed the reward."
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk188764.questBarPreviewWrapper,
          children: (0, Chunk951288.jsx)(Chunk78826.p, {
            isPreview: true,
            source: "preview",
            questId: "0",
            children: (0, Chunk951288.jsx)("div", {
              className: Chunk188764.questChannelCallHeaderPreview,
              children: (0, Chunk951288.jsx)(Chunk134483.Z, {
                channelId: "123",
                previewQuest: K,
                isParticipatingOverride: F
              })
            })
          })
        })]
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk188764.toggleSwitch,
        children: (0, Chunk951288.jsx)(Chunk481060.xJW, {
          children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
            value: F,
            onChange: function(e) {
              U(e)
            },
            hideBorder: true,
            children: "Is Participating:"
          })
        })
      }), (0, Chunk951288.jsxs)(Chunk456799.Z, {
        withBorder: true,
        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
          children: "Quest Card Embed"
        }), J ? (0, Chunk951288.jsx)(Chunk683650.o, {
          questId: K.id
        }) : (0, Chunk951288.jsx)(Chunk37303.Z, {
          quest: K,
          location: Chunk497505.jn.QUESTS_EMBED,
          sourceQuestContent: Chunk497505.jn.INTERNAL_PREVIEW_TOOL
        }, K.id)]
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk188764.toggleSwitch,
        children: (0, Chunk951288.jsx)(Chunk481060.xJW, {
          children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
            value: J,
            onChange: z,
            hideBorder: true,
            children: "Invalid Quests Embed:"
          })
        })
      }), eu && (0, Chunk951288.jsxs)(Chunk456799.Z, {
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
                var s;
                return (0, n.jsx)(e, k(L({}, t), {
                  openStartClockTime: performance.now(),
                  videoSessionId: "fake-quest-session-id",
                  questId: null != (s = K.id) ? s : "fake-quest-id",
                  overrideQuest: K,
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
class W extends Chunk647438.Component {
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
      className: Chunk188764.errorBoundary,
      children: [(0, Chunk951288.jsx)(Chunk481060.Mgn, {
        className: Chunk188764.errorBoundaryIcon
      }), (0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-lg/semibold",
        children: "Something broke in the Quest preview tool :("
      }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
        variant: "secondary",
        text: "Reset",
        onClick: this.handleResetState
      }), null != module.message && (0, Chunk951288.jsx)(Chunk481060.Zbd, {
        className: Chunk188764.errorMessageWrapper,
        children: (0, Chunk951288.jsx)("code", {
          className: Chunk188764.errorMessage,
          children: module.message
        })
      })]
    }) : (0, Chunk951288.jsx)(K, {}, exports)
  }
  constructor(...e) {
    super(...e), D(this, "state", {
      error: null,
      renderKey: 0
    }), D(this, "handleResetState", () => {
      this.setState(e => ({
        error: null,
        renderKey: e.renderKey + 1
      }))
    })
  }
}
let Y = W