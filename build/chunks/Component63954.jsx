/** Chunk was on 83615 **/
/** chunk id: 63954, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => F,
  b: () => V
}), require("./388685.js"), require("./314940.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk278074 = require("./278074.js"),
  Chunk754700 = require("./754700.js"),
  Chunk887003 = require("./887003.js"),
  Chunk820827 = require("./820827.js"),
  Chunk458708 = require("./458708.js"),
  Chunk481060 = require("./481060.js"),
  Chunk49436 = require("./49436.js"),
  Chunk115179 = require("./115179.js"),
  Chunk254579 = require("./254579.js"),
  Chunk455357 = require("./455357.jsx"),
  Chunk210724 = require("./210724.jsx"),
  Chunk130653 = require("./130653.jsx"),
  Chunk801604 = require("./801604.jsx"),
  Chunk557843 = require("./557843.jsx"),
  Chunk686834 = require("./686834.jsx"),
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
  Chunk70956 = require("./70956.js"),
  Chunk188764 = require("./188764.js");

function k(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      k(e, t, n[t])
    })
  }
  return e
}

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let q = ["png", "gif", "webp"],
  L = [...q, "jpg", "jpeg"],
  Q = Array.from(new Set([...L, "gif", "mp4", "webm"]));

function V(e) {
  var t, n;
  return {
    code: "PREVIEW-MODE-CODE",
    tier: 0,
    platform: m.y$.CROSS_PLATFORM,
    userId: "123",
    questId: e.id,
    claimedAt: null != (n = null == (t = e.userStatus) ? true : t.claimedAt) ? n : ""
  }
}

function M() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
    {
      streamProgressSeconds: t = 0,
      completedAt: n = null,
      enrolledAt: r = null,
      claimedAt: s = null
    } = module;
  return {
    userId: "123",
    questId: "1193992107035983872",
    enrolledAt: Chunk54381,
    completedAt: require,
    claimedAt: Chunk473749,
    claimedTier: null,
    lastStreamHeartbeatAt: null,
    streamProgressSeconds: exports,
    dismissedQuestContent: 0,
    progress: {}
  }
}
let Z = "1193992107035983872",
  W = {
    id: Z,
    preview: true,
    config: {
      id: Z,
      configVersion: 2,
      startsAt: "2024-01-01T00:00:00+00:00",
      expiresAt: "2030-01-01T00:00:00+00:00",
      application: {
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
      sharePolicy: Chunk820827.X.SHAREABLE_EVERYWHERE,
      ctaConfig: {
        link: "https://discord.com/",
        buttonLabel: "Learn More"
      }
    },
    userStatus: null,
    targetedContent: []
  };

function H() {
  var e, t, o, d, u, k, V, Z;
  let [H, U] = Chunk473749.useState(W), F = Chunk473749.useCallback(e => {
    U(D(I({}, e), {
      preview: true
    }))
  }, []), [z, G] = Chunk473749.useState(Chunk899457.a.UNENROLLED), [K, X] = Chunk473749.useState(false), [Y, J] = Chunk473749.useState(false), [$, ee] = Chunk473749.useState(null), et = (Z = H.config, (0, Chunk278074.EQ)(Z).with({
    configVersion: 2
  }, e => e.rewardsConfig.rewards).exhaustive());

  function en(e, t) {
    if ("hero" === e || "questBarHero" === e || "gameTile" === e || "logotype" === e || "heroVideo" === e || "questBarHeroVideo" === e) {
      var n, r;
      F(D(I({}, H), {
        config: (n = H.config, r = {
          [e]: t
        }, (0, i.EQ)(n).with({
          configVersion: 2
        }, e => D(I({}, e), {
          assets: I({}, e.assets, r)
        })).exhaustive())
      }))
    }
  }

  function er(e, t) {
    let n = H.config.taskConfigV2.tasks,
      r = n[l.X.WATCH_VIDEO];
    if (null == r) return;
    let s = I({}, r.assets);
    switch (e) {
      case "videoPlayerVideo":
        s.video = {
          url: t
        };
        break;
      case "videoPlayerVideoLowRes":
        s.videoLowRes = {
          url: t
        };
        break;
      case "videoPlayerThumbnail":
        s.video = D(I({}, s.video), {
          thumbnail: t
        });
        break;
      default:
        return
    }
    F(D(I({}, H), {
      config: D(I({}, H.config), {
        taskConfigV2: D(I({}, H.config.taskConfigV2), {
          tasks: D(I({}, n), {
            [l.X.WATCH_VIDEO]: D(I({}, r), {
              assets: s
            })
          })
        })
      })
    }))
  }

  function es(e, t) {
    var n, r, s;
    F(D(I({}, H), {
      config: D(I({}, H.config), {
        videoMetadata: D(I({}, H.config.videoMetadata), {
          messages: null != (s = null == (n = H.config.videoMetadata) ? true : n.messages) ? s : {},
          assets: D(I({}, null == (r = H.config.videoMetadata) ? true : r.assets), {
            [e]: t
          })
        })
      })
    }))
  }

  function eo(e, t) {
    if ("questName" === e || "gameTitle" === e || "gamePublisher" === e) {
      var n, r;
      F(D(I({}, H), {
        config: (n = H.config, r = {
          [e]: t
        }, (0, i.EQ)(n).with({
          configVersion: 2
        }, e => D(I({}, e), {
          messages: I({}, e.messages, r)
        })).exhaustive())
      }))
    }
  }

  function ea(e, t, n) {
    if ("name" === e || "nameWithArticle" === e) {
      var r, s;
      F(D(I({}, H), {
        config: (r = H.config, s = {
          [e]: t
        }, (0, i.EQ)(r).with({
          configVersion: 2
        }, e => D(I({}, e), {
          rewardsConfig: D(I({}, e.rewardsConfig), {
            rewards: e.rewardsConfig.rewards.map((e, t) => t === n ? D(I({}, e), {
              messages: I({}, e.messages, s)
            }) : e)
          })
        })).exhaustive())
      }))
    }
  }

  function ei(e, t) {
    F(D(I({}, H), {
      config: D(I({}, H.config), {
        colors: D(I({}, H.config.colors), {
          [e]: t
        })
      })
    }))
  }

  function el() {
    (0, Chunk115179.Xv)(H.config) ? (0, Chunk110560.openQuestCollectibleRewardModal)(H, Chunk49436.jn.GIFT_INVENTORY_FOR_YOU, Chunk49436.jn.INTERNAL_PREVIEW_TOOL, true) : (0, Chunk110560.openQuestsRewardCodeModal)({
      quest: H,
      questContent: Chunk49436.jn.GIFT_INVENTORY_FOR_YOU,
      preview: true,
      previewQuest: H,
      sourceQuestContent: Chunk49436.jn.INTERNAL_PREVIEW_TOOL
    })
  }
  let ec = Chunk473749.useMemo(() => {
      for (let [e, t] of Object.entries(H.config.taskConfigV2.tasks))
        if (null != exports.target) return exports.target;
      return 10 * Chunk70956.Z.Seconds.MINUTE
    }, [H.config.taskConfigV2.tasks]),
    ed = Chunk473749.useMemo(() => Chunk754700.X.WATCH_VIDEO in H.config.taskConfigV2.tasks, [H.config.taskConfigV2.tasks]);
  a()(false !== H.preview && null != H.preview, "Preview config must have property preview: true");
  let eu = H.config.taskConfigV2.tasks[Chunk754700.X.WATCH_VIDEO];
  return (0, Chunk54381.jsxs)(Chunk481060.zJl, {
    className: Chunk188764.container,
    children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
      variant: "heading-lg/bold",
      className: Chunk188764.heading,
      children: "Quest Preview Tool"
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk188764.fields,
      children: (0, Chunk54381.jsx)(Chunk916028.Z, {
        onSelect: function(e) {
          ee(e), null != e && (G(function(e) {
            if (null == e.userStatus) return N.a.UNENROLLED;
            if (null != e.userStatus.claimedAt) return N.a.CLAIMED;
            if (null != e.userStatus.completedAt) return N.a.COMPLETED_100;
            let t = (0, f.il)(e),
              n = t.progressSeconds,
              r = t.targetSeconds;
            return n / r >= 1 ? N.a.COMPLETED_100 : n / r >= .75 ? N.a.COMPLETED_75 : n / r >= .5 ? N.a.COMPLETED_50 : n / r >= .25 ? N.a.COMPLETED_25 : N.a.ENROLLED
          }(e)), F(e))
        },
        quest: $
      })
    }), (0, Chunk54381.jsx)(Chunk481060.Heading, {
      variant: "heading-md/semibold",
      className: Chunk188764.subheading,
      children: "Task Config"
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk188764.fields,
      children: (0, Chunk54381.jsx)(Chunk749912.Z, {
        taskDuration: ec,
        taskConfigV2: H.config.taskConfigV2,
        onSelect: function(e) {
          F(D(I({}, H), {
            config: D(I({}, H.config), {
              taskConfigV2: e
            })
          }))
        }
      })
    }), (0, Chunk54381.jsx)(Chunk481060.Heading, {
      variant: "heading-md/semibold",
      className: Chunk188764.subheading,
      children: "Messages"
    }), (0, Chunk54381.jsxs)("div", {
      className: Chunk188764.fields,
      children: [(0, Chunk54381.jsx)(Chunk602683.Z, {
        title: "Quest Name",
        assetKey: "questName",
        onMessageChange: eo,
        initialValue: H.config.messages.questName
      }), (0, Chunk54381.jsx)(Chunk602683.Z, {
        title: "Game Title",
        assetKey: "gameTitle",
        onMessageChange: eo,
        initialValue: H.config.messages.gameTitle
      }), (0, Chunk54381.jsx)(Chunk602683.Z, {
        title: "Game Publisher",
        assetKey: "gamePublisher",
        onMessageChange: eo,
        initialValue: H.config.messages.gamePublisher
      }), ed && (0, Chunk54381.jsx)(Chunk602683.Z, {
        title: "Video Title",
        assetKey: "videoTitle",
        onMessageChange: function(e, t) {
          let n = H.config.taskConfigV2.tasks,
            r = n[l.X.WATCH_VIDEO];
          if (null == r) return;
          let s = D(I({}, r.messages), {
            [e]: t
          });
          F(D(I({}, H), {
            config: D(I({}, H.config), {
              taskConfigV2: D(I({}, H.config.taskConfigV2), {
                tasks: D(I({}, n), {
                  [l.X.WATCH_VIDEO]: D(I({}, r), {
                    messages: s
                  })
                })
              })
            })
          }))
        },
        initialValue: null == eu ? true : eu.messages.videoTitle
      })]
    }), (0, Chunk54381.jsx)(Chunk481060.Heading, {
      variant: "heading-md/semibold",
      className: Chunk188764.subheading,
      children: "Assets"
    }), (0, Chunk54381.jsxs)("div", {
      className: Chunk188764.fields,
      children: [(0, Chunk54381.jsx)(Chunk210851.Z, {
        title: "Hero",
        assetKey: "hero",
        onFileChange: en,
        filters: Q,
        initialValue: H.config.assets.hero
      }), (0, Chunk54381.jsx)(Chunk210851.Z, {
        title: "Hero Video (optional)",
        assetKey: "heroVideo",
        onFileChange: en,
        filters: Q,
        initialValue: null != (k = H.config.assets.heroVideo) ? k : true
      }), (0, Chunk54381.jsx)(Chunk210851.Z, {
        title: "Quest Bar Hero",
        assetKey: "questBarHero",
        onFileChange: en,
        filters: Q,
        initialValue: H.config.assets.questBarHero
      }), (0, Chunk54381.jsx)(Chunk210851.Z, {
        title: "Quest Bar Hero Video (optional)",
        assetKey: "questBarHeroVideo",
        onFileChange: en,
        filters: Q,
        initialValue: null != (V = H.config.assets.questBarHeroVideo) ? V : true
      }), (0, Chunk54381.jsx)(Chunk210851.Z, {
        title: "Game Tile",
        assetKey: "gameTile",
        onFileChange: en,
        filters: [...L, "svg"],
        initialValue: H.config.assets.gameTile
      }), (0, Chunk54381.jsx)(Chunk210851.Z, {
        title: "Logotype",
        assetKey: "logotype",
        onFileChange: en,
        filters: [...q, "svg"],
        initialValue: H.config.assets.logotype
      }), ed && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
        children: [(0, Chunk54381.jsx)(Chunk210851.Z, {
          title: "Quest Video",
          assetKey: "videoPlayerVideo",
          onFileChange: er,
          filters: Q,
          initialValue: null == eu ? true : eu.assets.video.url
        }), (0, Chunk54381.jsx)(Chunk210851.Z, {
          title: "Quest Video (Low Resolution)",
          assetKey: "videoPlayerVideoLowRes",
          onFileChange: er,
          filters: Q,
          initialValue: null == eu || null == (e = eu.assets.videoLowRes) ? true : module.url
        }), (0, Chunk54381.jsx)(Chunk210851.Z, {
          title: "Video Player Thumbnail (optional)",
          assetKey: "videoPlayerThumbnail",
          onFileChange: er,
          filters: L,
          initialValue: null == eu ? true : eu.assets.video.thumbnail
        }), (0, Chunk54381.jsx)(Chunk210851.Z, {
          title: "Quest Bar Preview Video (optional)",
          assetKey: "questBarPreviewVideo",
          onFileChange: es,
          filters: Q,
          initialValue: null == (t = H.config.videoMetadata) ? true : exports.assets.questBarPreviewVideo
        }), (0, Chunk54381.jsx)(Chunk210851.Z, {
          title: "Quest Home Video (optional)",
          assetKey: "questHomeVideo",
          onFileChange: es,
          filters: Q,
          initialValue: null == (o = H.config.videoMetadata) ? true : Chunk512722.assets.questHomeVideo
        })]
      })]
    }), et.map((e, t) => (0, r.jsxs)("div", {
      children: [(0, r.jsxs)(p.Heading, {
        variant: "heading-md/semibold",
        className: B.subheading,
        children: ["Reward #", t + 1]
      }), (0, r.jsxs)("div", {
        className: B.fields,
        children: [(0, r.jsx)(S.Z, {
          title: "Name",
          assetKey: "name",
          onMessageChange: (e, n) => ea(e, n, t),
          initialValue: e.messages.name
        }), (0, r.jsx)(S.Z, {
          title: "Name With Article",
          assetKey: "nameWithArticle",
          onMessageChange: (e, n) => ea(e, n, t),
          initialValue: e.messages.nameWithArticle
        }), e.type !== c.w.VIRTUAL_CURRENCY && (0, r.jsx)(O.Z, {
          title: "Asset",
          assetKey: "asset",
          onFileChange: (e, n) => (function(e, t, n) {
            if ("asset" === e) {
              var r;
              F(D(I({}, H), {
                config: (r = H.config, (0, i.EQ)(r).with({
                  configVersion: 2
                }, e => D(I({}, e), {
                  rewardsConfig: D(I({}, e.rewardsConfig), {
                    rewards: e.rewardsConfig.rewards.map((e, r) => r === n ? D(I({}, e), {
                      asset: t,
                      skuId: ""
                    }) : e)
                  })
                })).exhaustive())
              }))
            }
          })(e, n, t),
          filters: Q,
          initialValue: e.asset
        }), (0, r.jsxs)(p.Kqy, {
          direction: "vertical",
          gap: 8,
          children: [(0, r.jsx)(p.Heading, {
            variant: "heading-sm/semibold",
            children: "Claim Modal"
          }), (0, r.jsx)(p.Button, {
            variant: "primary",
            text: "Open Reward Modal",
            onClick: el
          })]
        })]
      })]
    }, t)), (0, Chunk54381.jsx)(Chunk481060.Heading, {
      variant: "heading-md/semibold",
      className: Chunk188764.subheading,
      children: "Colors & Quest States"
    }), (0, Chunk54381.jsxs)("div", {
      className: Chunk188764.fields,
      children: [(0, Chunk54381.jsxs)("div", {
        className: Chunk188764.fields,
        style: {
          marginBottom: 0
        },
        children: [(0, Chunk54381.jsx)(Chunk478977.Z, {
          title: "Primary",
          colorKey: "primary",
          onChange: ei,
          value: H.config.colors.primary
        }), (0, Chunk54381.jsx)(Chunk478977.Z, {
          title: "Secondary",
          colorKey: "secondary",
          onChange: ei,
          value: H.config.colors.secondary
        })]
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk188764.fields,
        children: (0, Chunk54381.jsx)(Chunk815183.Z, {})
      }), (0, Chunk54381.jsx)(Chunk899457.Z, {
        onChange: function(e) {
          switch (G(e), e) {
            case N.a.UNENROLLED:
              F(D(I({}, H), {
                userStatus: null
              }));
              break;
            case N.a.ENROLLED:
              F(D(I({}, H), {
                userStatus: M({
                  enrolledAt: new Date().toISOString()
                })
              }));
              break;
            case N.a.COMPLETED_25:
              F(D(I({}, H), {
                userStatus: M({
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: .25 * ec
                })
              }));
              break;
            case N.a.COMPLETED_50:
              F(D(I({}, H), {
                userStatus: M({
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: .5 * ec
                })
              }));
              break;
            case N.a.COMPLETED_75:
              F(D(I({}, H), {
                userStatus: M({
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: .75 * ec
                })
              }));
              break;
            case N.a.COMPLETED_100:
              F(D(I({}, H), {
                userStatus: M({
                  completedAt: new Date().toISOString(),
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: ec
                })
              }));
              break;
            case N.a.CLAIMED:
              F(D(I({}, H), {
                userStatus: M({
                  claimedAt: new Date().toISOString(),
                  completedAt: new Date().toISOString(),
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: ec
                })
              }))
          }
        },
        value: z
      })]
    }), (0, Chunk54381.jsx)(Chunk481060.Heading, {
      variant: "heading-lg/bold",
      className: Chunk188764.heading,
      children: "Component Previews"
    }), (0, Chunk54381.jsxs)("div", {
      className: Chunk188764.componentPreviews,
      children: [(0, Chunk54381.jsxs)(Chunk456799.Z, {
        withBorder: true,
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: "heading-sm/semibold",
          children: "Quest Bar"
        }), (0, Chunk54381.jsxs)("div", {
          className: Chunk188764.questBarPreviewWrapper,
          children: [(null == (d = H.userStatus) ? true : Chunk820827.claimedAt) != null && (0, Chunk54381.jsx)(Chunk481060.Text, {
            color: "text-subtle",
            variant: "text-sm/normal",
            children: "The Quest Bar is hidden when the user has claimed the reward."
          }), (0, Chunk54381.jsx)("div", {
            className: Chunk188764.questBarPreview,
            children: (0, Chunk54381.jsx)(Chunk455357.x8, {
              isPreview: true,
              source: "preview",
              questId: "0",
              children: (0, Chunk54381.jsx)(Chunk130653.Z, {
                children: (0, Chunk54381.jsx)(Chunk210724.P, {
                  quest: H
                })
              })
            })
          })]
        })]
      }), (0, Chunk54381.jsxs)(Chunk456799.Z, {
        withBorder: true,
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: "heading-sm/semibold",
          children: "Quest Home Card"
        }), (0, Chunk54381.jsx)(Chunk455357.x8, {
          isPreview: true,
          source: "preview",
          questId: "0",
          children: (0, Chunk54381.jsx)(Chunk415104.Z, {
            quest: H,
            className: Chunk188764.questTile,
            questContent: Chunk49436.jn.QUEST_HOME_DESKTOP,
            contentPosition: 0,
            rowIndex: 0,
            sourceQuestContent: Chunk49436.jn.INTERNAL_PREVIEW_TOOL
          })
        })]
      }), (0, Chunk54381.jsxs)(Chunk456799.Z, {
        withBorder: true,
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: "heading-sm/semibold",
          children: "Channel Call Header"
        }), (null == (u = H.userStatus) ? true : Chunk458708.claimedAt) != null && (0, Chunk54381.jsx)(Chunk481060.Text, {
          color: "text-subtle",
          variant: "text-sm/normal",
          children: "The Quest Channel Call Header is hidden when the user has claimed the reward."
        }), (0, Chunk54381.jsx)("div", {
          className: Chunk188764.questBarPreviewWrapper,
          children: (0, Chunk54381.jsx)(Chunk455357.x8, {
            isPreview: true,
            source: "preview",
            questId: "0",
            children: (0, Chunk54381.jsx)("div", {
              className: Chunk188764.questChannelCallHeaderPreview,
              children: (0, Chunk54381.jsx)(Chunk801604.Z, {
                channelId: "123",
                previewQuest: H,
                isParticipatingOverride: K
              })
            })
          })
        })]
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk188764.toggleSwitch,
        children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: "Is Participating:",
          checked: K,
          onChange: function(e) {
            X(e)
          }
        })
      }), (0, Chunk54381.jsxs)(Chunk456799.Z, {
        withBorder: true,
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: "heading-sm/semibold",
          children: "Quest Card Embed"
        }), Y ? (0, Chunk54381.jsx)(Chunk557843.W, {
          questId: H.id
        }) : (0, Chunk54381.jsx)(Chunk686834.X, {
          quest: H,
          location: Chunk49436.jn.QUESTS_EMBED,
          sourceQuestContent: Chunk49436.jn.INTERNAL_PREVIEW_TOOL
        }, H.id)]
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk188764.toggleSwitch,
        children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: "Invalid Quests Embed:",
          checked: Y,
          onChange: J
        })
      }), ed && (0, Chunk54381.jsxs)(Chunk456799.Z, {
        withBorder: true,
        allowClicks: true,
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: "heading-sm/semibold",
          children: "Video Player"
        }), (0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "primary",
          text: "Open Video Player Modal",
          onClick: () => {
            (0, Chunk481060.ZDy)(async () => {
              let {
                default: e
              } = await Promise.all([require.e("13193"), require.e("75909"), require.e("67230")]).then(require.bind(require, 215113));
              return t => {
                var n;
                return (0, r.jsx)(e, D(I({}, t), {
                  openStartClockTime: performance.now(),
                  videoSessionId: "fake-quest-session-id",
                  questId: null != (n = H.id) ? n : "fake-quest-id",
                  overrideQuest: H,
                  autoplay: true,
                  sourceQuestContent: m.jn.INTERNAL_PREVIEW_TOOL
                }))
              }
            })
          }
        })]
      })]
    })]
  })
}
class U extends Chunk473749.Component {
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
    return null != module ? (0, Chunk54381.jsxs)("div", {
      className: Chunk188764.errorBoundary,
      children: [(0, Chunk54381.jsx)(Chunk481060.Mgn, {
        className: Chunk188764.errorBoundaryIcon
      }), (0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-lg/semibold",
        children: "Something broke in the Quest preview tool :("
      }), (0, Chunk54381.jsx)(Chunk481060.Button, {
        variant: "secondary",
        text: "Reset",
        onClick: this.handleResetState
      }), null != module.message && (0, Chunk54381.jsx)(Chunk481060.Zbd, {
        className: Chunk188764.errorMessageWrapper,
        children: (0, Chunk54381.jsx)("code", {
          className: Chunk188764.errorMessage,
          children: module.message
        })
      })]
    }) : (0, Chunk54381.jsx)(H, {}, exports)
  }
  constructor(...e) {
    super(...e), k(this, "state", {
      error: null,
      renderKey: 0
    }), k(this, "handleResetState", () => {
      this.setState(e => ({
        error: null,
        renderKey: e.renderKey + 1
      }))
    })
  }
}
let F = U