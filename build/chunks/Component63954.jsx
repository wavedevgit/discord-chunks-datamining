/** Chunk was on 33311 **/
/** chunk id: 63954, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => H,
  b: () => Q
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
  Chunk134483 = require("./134483.jsx"),
  Chunk683650 = require("./683650.jsx"),
  Chunk752367 = require("./752367.jsx"),
  Chunk70956 = require("./70956.js"),
  Chunk745776 = require("./745776.js");

function B(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      B(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
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
let D = ["png", "gif", "webp"],
  q = [...D, "jpg", "jpeg"],
  L = Array.from(new Set([...q, "gif", "mp4", "webm"]));

function Q(e) {
  var t, n;
  return {
    code: "PREVIEW-MODE-CODE",
    tier: 0,
    platform: g.y$.CROSS_PLATFORM,
    userId: "123",
    questId: e.id,
    claimedAt: null != (n = null == (t = e.userStatus) ? true : t.claimedAt) ? n : ""
  }
}

function V() {
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
let M = "1193992107035983872",
  Z = {
    id: M,
    preview: true,
    config: {
      id: M,
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

function W() {
  var e, t, o, d, u, B, Q, M;
  let [W, U] = Chunk473749.useState(Z), H = Chunk473749.useCallback(e => {
    U(I(k({}, e), {
      preview: true
    }))
  }, []), [F, z] = Chunk473749.useState(Chunk899457.a.UNENROLLED), [G, K] = Chunk473749.useState(false), [X, Y] = Chunk473749.useState(false), [J, $] = Chunk473749.useState(null), ee = (M = W.config, (0, Chunk278074.EQ)(M).with({
    configVersion: 2
  }, e => e.rewardsConfig.rewards).exhaustive());

  function et(e, t) {
    if ("hero" === e || "questBarHero" === e || "gameTile" === e || "logotype" === e || "heroVideo" === e || "questBarHeroVideo" === e) {
      var n, r;
      H(I(k({}, W), {
        config: (n = W.config, r = {
          [e]: t
        }, (0, i.EQ)(n).with({
          configVersion: 2
        }, e => I(k({}, e), {
          assets: k({}, e.assets, r)
        })).exhaustive())
      }))
    }
  }

  function en(e, t) {
    let n = W.config.taskConfigV2.tasks,
      r = n[l.X.WATCH_VIDEO];
    if (null == r) return;
    let s = k({}, r.assets);
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
        s.video = I(k({}, s.video), {
          thumbnail: t
        });
        break;
      default:
        return
    }
    H(I(k({}, W), {
      config: I(k({}, W.config), {
        taskConfigV2: I(k({}, W.config.taskConfigV2), {
          tasks: I(k({}, n), {
            [l.X.WATCH_VIDEO]: I(k({}, r), {
              assets: s
            })
          })
        })
      })
    }))
  }

  function er(e, t) {
    var n, r, s;
    H(I(k({}, W), {
      config: I(k({}, W.config), {
        videoMetadata: I(k({}, W.config.videoMetadata), {
          messages: null != (s = null == (n = W.config.videoMetadata) ? true : n.messages) ? s : {},
          assets: I(k({}, null == (r = W.config.videoMetadata) ? true : r.assets), {
            [e]: t
          })
        })
      })
    }))
  }

  function es(e, t) {
    if ("questName" === e || "gameTitle" === e || "gamePublisher" === e) {
      var n, r;
      H(I(k({}, W), {
        config: (n = W.config, r = {
          [e]: t
        }, (0, i.EQ)(n).with({
          configVersion: 2
        }, e => I(k({}, e), {
          messages: k({}, e.messages, r)
        })).exhaustive())
      }))
    }
  }

  function eo(e, t) {
    let n = W.config.taskConfigV2.tasks,
      r = n[l.X.WATCH_VIDEO];
    if (null == r) return;
    let s = I(k({}, r.messages), {
      [e]: t
    });
    H(I(k({}, W), {
      config: I(k({}, W.config), {
        taskConfigV2: I(k({}, W.config.taskConfigV2), {
          tasks: I(k({}, n), {
            [l.X.WATCH_VIDEO]: I(k({}, r), {
              messages: s
            })
          })
        })
      })
    }))
  }

  function ea(e, t, n) {
    if ("name" === e || "nameWithArticle" === e) {
      var r, s;
      H(I(k({}, W), {
        config: (r = W.config, s = {
          [e]: t
        }, (0, i.EQ)(r).with({
          configVersion: 2
        }, e => I(k({}, e), {
          rewardsConfig: I(k({}, e.rewardsConfig), {
            rewards: e.rewardsConfig.rewards.map((e, t) => t === n ? I(k({}, e), {
              messages: k({}, e.messages, s)
            }) : e)
          })
        })).exhaustive())
      }))
    }
  }

  function ei(e, t) {
    H(I(k({}, W), {
      config: I(k({}, W.config), {
        colors: I(k({}, W.config.colors), {
          [e]: t
        })
      })
    }))
  }

  function el() {
    (0, Chunk509212.Xv)(W.config) ? (0, Chunk110560.openQuestCollectibleRewardModal)(W, Chunk497505.jn.GIFT_INVENTORY_FOR_YOU, Chunk497505.jn.INTERNAL_PREVIEW_TOOL, true) : (0, Chunk110560.openQuestsRewardCodeModal)({
      quest: W,
      questContent: Chunk497505.jn.GIFT_INVENTORY_FOR_YOU,
      preview: true,
      previewQuest: W,
      sourceQuestContent: Chunk497505.jn.INTERNAL_PREVIEW_TOOL
    })
  }
  let ec = Chunk473749.useMemo(() => {
      for (let [e, t] of Object.entries(W.config.taskConfigV2.tasks))
        if (null != exports.target) return exports.target;
      return 10 * Chunk70956.Z.Seconds.MINUTE
    }, [W.config.taskConfigV2.tasks]),
    ed = Chunk473749.useMemo(() => Chunk754700.X.WATCH_VIDEO in W.config.taskConfigV2.tasks, [W.config.taskConfigV2.tasks]);
  a()(false !== W.preview && null != W.preview, "Preview config must have property preview: true");
  let eu = W.config.taskConfigV2.tasks[Chunk754700.X.WATCH_VIDEO];
  return (0, Chunk54381.jsxs)(Chunk481060.zJl, {
    className: Chunk745776.container,
    children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
      variant: "heading-lg/bold",
      className: Chunk745776.heading,
      children: "Quest Preview Tool"
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk745776.fields,
      children: (0, Chunk54381.jsx)(Chunk916028.Z, {
        onSelect: function(e) {
          $(e), null != e && (z(function(e) {
            if (null == e.userStatus) return O.a.UNENROLLED;
            if (null != e.userStatus.claimedAt) return O.a.CLAIMED;
            if (null != e.userStatus.completedAt) return O.a.COMPLETED_100;
            let t = (0, m.il)(e),
              n = t.progressSeconds,
              r = t.targetSeconds;
            return n / r >= 1 ? O.a.COMPLETED_100 : n / r >= .75 ? O.a.COMPLETED_75 : n / r >= .5 ? O.a.COMPLETED_50 : n / r >= .25 ? O.a.COMPLETED_25 : O.a.ENROLLED
          }(e)), H(e))
        },
        quest: J
      })
    }), (0, Chunk54381.jsx)(Chunk481060.Heading, {
      variant: "heading-md/semibold",
      className: Chunk745776.subheading,
      children: "Task Config"
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk745776.fields,
      children: (0, Chunk54381.jsx)(Chunk749912.Z, {
        taskDuration: ec,
        taskConfigV2: W.config.taskConfigV2,
        onSelect: function(e) {
          H(I(k({}, W), {
            config: I(k({}, W.config), {
              taskConfigV2: e
            })
          }))
        }
      })
    }), (0, Chunk54381.jsx)(Chunk481060.Heading, {
      variant: "heading-md/semibold",
      className: Chunk745776.subheading,
      children: "Messages"
    }), (0, Chunk54381.jsxs)("div", {
      className: Chunk745776.fields,
      children: [(0, Chunk54381.jsx)(Chunk602683.Z, {
        title: "Quest Name",
        assetKey: "questName",
        onMessageChange: es,
        initialValue: W.config.messages.questName
      }), (0, Chunk54381.jsx)(Chunk602683.Z, {
        title: "Game Title",
        assetKey: "gameTitle",
        onMessageChange: es,
        initialValue: W.config.messages.gameTitle
      }), (0, Chunk54381.jsx)(Chunk602683.Z, {
        title: "Game Publisher",
        assetKey: "gamePublisher",
        onMessageChange: es,
        initialValue: W.config.messages.gamePublisher
      }), ed && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
        children: [(0, Chunk54381.jsx)(Chunk602683.Z, {
          title: "Video Title",
          assetKey: "videoTitle",
          onMessageChange: eo,
          initialValue: null == eu ? true : eu.messages.videoTitle
        }), (0, Chunk54381.jsx)(Chunk602683.Z, {
          title: "End CTA Title",
          assetKey: "videoEndCtaTitle",
          onMessageChange: eo,
          initialValue: null == eu ? true : eu.messages.videoEndCtaTitle
        }), (0, Chunk54381.jsx)(Chunk602683.Z, {
          title: "End CTA Subtitle",
          assetKey: "videoEndCtaSubtitle",
          onMessageChange: eo,
          initialValue: null == eu ? true : eu.messages.videoEndCtaSubtitle
        })]
      })]
    }), (0, Chunk54381.jsx)(Chunk481060.Heading, {
      variant: "heading-md/semibold",
      className: Chunk745776.subheading,
      children: "Assets"
    }), (0, Chunk54381.jsxs)("div", {
      className: Chunk745776.fields,
      children: [(0, Chunk54381.jsx)(Chunk210851.Z, {
        title: "Hero",
        assetKey: "hero",
        onFileChange: et,
        filters: L,
        initialValue: W.config.assets.hero
      }), (0, Chunk54381.jsx)(Chunk210851.Z, {
        title: "Hero Video (optional)",
        assetKey: "heroVideo",
        onFileChange: et,
        filters: L,
        initialValue: null != (B = W.config.assets.heroVideo) ? B : true
      }), (0, Chunk54381.jsx)(Chunk210851.Z, {
        title: "Quest Bar Hero",
        assetKey: "questBarHero",
        onFileChange: et,
        filters: L,
        initialValue: W.config.assets.questBarHero
      }), (0, Chunk54381.jsx)(Chunk210851.Z, {
        title: "Quest Bar Hero Video (optional)",
        assetKey: "questBarHeroVideo",
        onFileChange: et,
        filters: L,
        initialValue: null != (Q = W.config.assets.questBarHeroVideo) ? Q : true
      }), (0, Chunk54381.jsx)(Chunk210851.Z, {
        title: "Game Tile",
        assetKey: "gameTile",
        onFileChange: et,
        filters: [...q, "svg"],
        initialValue: W.config.assets.gameTile
      }), (0, Chunk54381.jsx)(Chunk210851.Z, {
        title: "Logotype",
        assetKey: "logotype",
        onFileChange: et,
        filters: [...D, "svg"],
        initialValue: W.config.assets.logotype
      }), ed && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
        children: [(0, Chunk54381.jsx)(Chunk210851.Z, {
          title: "Quest Video",
          assetKey: "videoPlayerVideo",
          onFileChange: en,
          filters: L,
          initialValue: null == eu ? true : eu.assets.video.url
        }), (0, Chunk54381.jsx)(Chunk210851.Z, {
          title: "Quest Video (Low Resolution)",
          assetKey: "videoPlayerVideoLowRes",
          onFileChange: en,
          filters: L,
          initialValue: null == eu || null == (e = eu.assets.videoLowRes) ? true : module.url
        }), (0, Chunk54381.jsx)(Chunk210851.Z, {
          title: "Video Player Thumbnail (optional)",
          assetKey: "videoPlayerThumbnail",
          onFileChange: en,
          filters: q,
          initialValue: null == eu ? true : eu.assets.video.thumbnail
        }), (0, Chunk54381.jsx)(Chunk210851.Z, {
          title: "Quest Bar Preview Video (optional)",
          assetKey: "questBarPreviewVideo",
          onFileChange: er,
          filters: L,
          initialValue: null == (t = W.config.videoMetadata) ? true : exports.assets.questBarPreviewVideo
        }), (0, Chunk54381.jsx)(Chunk210851.Z, {
          title: "Quest Home Video (optional)",
          assetKey: "questHomeVideo",
          onFileChange: er,
          filters: L,
          initialValue: null == (o = W.config.videoMetadata) ? true : Chunk512722.assets.questHomeVideo
        })]
      })]
    }), ee.map((e, t) => (0, r.jsxs)("div", {
      children: [(0, r.jsxs)(p.Heading, {
        variant: "heading-md/semibold",
        className: R.subheading,
        children: ["Reward #", t + 1]
      }), (0, r.jsxs)("div", {
        className: R.fields,
        children: [(0, r.jsx)(v.Z, {
          title: "Name",
          assetKey: "name",
          onMessageChange: (e, n) => ea(e, n, t),
          initialValue: e.messages.name
        }), (0, r.jsx)(v.Z, {
          title: "Name With Article",
          assetKey: "nameWithArticle",
          onMessageChange: (e, n) => ea(e, n, t),
          initialValue: e.messages.nameWithArticle
        }), e.type !== c.w.VIRTUAL_CURRENCY && (0, r.jsx)(j.Z, {
          title: "Asset",
          assetKey: "asset",
          onFileChange: (e, n) => (function(e, t, n) {
            if ("asset" === e) {
              var r;
              H(I(k({}, W), {
                config: (r = W.config, (0, i.EQ)(r).with({
                  configVersion: 2
                }, e => I(k({}, e), {
                  rewardsConfig: I(k({}, e.rewardsConfig), {
                    rewards: e.rewardsConfig.rewards.map((e, r) => r === n ? I(k({}, e), {
                      asset: t,
                      skuId: ""
                    }) : e)
                  })
                })).exhaustive())
              }))
            }
          })(e, n, t),
          filters: L,
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
      className: Chunk745776.subheading,
      children: "Colors & Quest States"
    }), (0, Chunk54381.jsxs)("div", {
      className: Chunk745776.fields,
      children: [(0, Chunk54381.jsxs)("div", {
        className: Chunk745776.fields,
        style: {
          marginBottom: 0
        },
        children: [(0, Chunk54381.jsx)(Chunk478977.Z, {
          title: "Primary",
          colorKey: "primary",
          onChange: ei,
          value: W.config.colors.primary
        }), (0, Chunk54381.jsx)(Chunk478977.Z, {
          title: "Secondary",
          colorKey: "secondary",
          onChange: ei,
          value: W.config.colors.secondary
        })]
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk745776.fields,
        children: (0, Chunk54381.jsx)(Chunk815183.Z, {})
      }), (0, Chunk54381.jsx)(Chunk899457.Z, {
        onChange: function(e) {
          switch (z(e), e) {
            case O.a.UNENROLLED:
              H(I(k({}, W), {
                userStatus: null
              }));
              break;
            case O.a.ENROLLED:
              H(I(k({}, W), {
                userStatus: V({
                  enrolledAt: new Date().toISOString()
                })
              }));
              break;
            case O.a.COMPLETED_25:
              H(I(k({}, W), {
                userStatus: V({
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: .25 * ec
                })
              }));
              break;
            case O.a.COMPLETED_50:
              H(I(k({}, W), {
                userStatus: V({
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: .5 * ec
                })
              }));
              break;
            case O.a.COMPLETED_75:
              H(I(k({}, W), {
                userStatus: V({
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: .75 * ec
                })
              }));
              break;
            case O.a.COMPLETED_100:
              H(I(k({}, W), {
                userStatus: V({
                  completedAt: new Date().toISOString(),
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: ec
                })
              }));
              break;
            case O.a.CLAIMED:
              H(I(k({}, W), {
                userStatus: V({
                  claimedAt: new Date().toISOString(),
                  completedAt: new Date().toISOString(),
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: ec
                })
              }))
          }
        },
        value: F
      })]
    }), (0, Chunk54381.jsx)(Chunk481060.Heading, {
      variant: "heading-lg/bold",
      className: Chunk745776.heading,
      children: "Component Previews"
    }), (0, Chunk54381.jsxs)("div", {
      className: Chunk745776.componentPreviews,
      children: [(0, Chunk54381.jsxs)(Chunk456799.Z, {
        withBorder: true,
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: "heading-sm/semibold",
          children: "Quest Bar"
        }), (0, Chunk54381.jsxs)("div", {
          className: Chunk745776.questBarPreviewWrapper,
          children: [(null == (d = W.userStatus) ? true : Chunk820827.claimedAt) != null && (0, Chunk54381.jsx)(Chunk481060.Text, {
            color: "text-secondary",
            variant: "text-sm/normal",
            children: "The Quest Bar is hidden when the user has claimed the reward."
          }), (0, Chunk54381.jsx)("div", {
            className: Chunk745776.questBarPreview,
            children: (0, Chunk54381.jsx)(Chunk78826.p, {
              isPreview: true,
              source: "preview",
              questId: "0",
              children: (0, Chunk54381.jsx)(Chunk130653.Z, {
                children: (0, Chunk54381.jsx)(Chunk210724.P, {
                  quest: W
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
        }), (0, Chunk54381.jsx)(Chunk78826.p, {
          isPreview: true,
          source: "preview",
          questId: "0",
          children: (0, Chunk54381.jsx)(Chunk415104.Z, {
            quest: W,
            className: Chunk745776.questTile,
            questContent: Chunk497505.jn.QUEST_HOME_DESKTOP,
            contentPosition: 0,
            rowIndex: 0,
            sourceQuestContent: Chunk497505.jn.INTERNAL_PREVIEW_TOOL
          })
        })]
      }), (0, Chunk54381.jsxs)(Chunk456799.Z, {
        withBorder: true,
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: "heading-sm/semibold",
          children: "Channel Call Header"
        }), (null == (u = W.userStatus) ? true : Chunk458708.claimedAt) != null && (0, Chunk54381.jsx)(Chunk481060.Text, {
          color: "text-secondary",
          variant: "text-sm/normal",
          children: "The Quest Channel Call Header is hidden when the user has claimed the reward."
        }), (0, Chunk54381.jsx)("div", {
          className: Chunk745776.questBarPreviewWrapper,
          children: (0, Chunk54381.jsx)(Chunk78826.p, {
            isPreview: true,
            source: "preview",
            questId: "0",
            children: (0, Chunk54381.jsx)("div", {
              className: Chunk745776.questChannelCallHeaderPreview,
              children: (0, Chunk54381.jsx)(Chunk134483.Z, {
                channelId: "123",
                previewQuest: W,
                isParticipatingOverride: G
              })
            })
          })
        })]
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk745776.toggleSwitch,
        children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: "Is Participating:",
          checked: G,
          onChange: function(e) {
            K(e)
          }
        })
      }), (0, Chunk54381.jsxs)(Chunk456799.Z, {
        withBorder: true,
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: "heading-sm/semibold",
          children: "Quest Card Embed"
        }), X ? (0, Chunk54381.jsx)(Chunk683650.o, {
          questId: W.id
        }) : (0, Chunk54381.jsx)(Chunk752367.X, {
          quest: W,
          location: Chunk497505.jn.QUESTS_EMBED,
          sourceQuestContent: Chunk497505.jn.INTERNAL_PREVIEW_TOOL
        }, W.id)]
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk745776.toggleSwitch,
        children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: "Invalid Quests Embed:",
          checked: X,
          onChange: Y
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
              } = await Promise.all([require.e("13193"), require.e("75909"), require.e("61709")]).then(require.bind(require, 215113));
              return t => {
                var n;
                return (0, r.jsx)(e, I(k({}, t), {
                  openStartClockTime: performance.now(),
                  videoSessionId: "fake-quest-session-id",
                  questId: null != (n = W.id) ? n : "fake-quest-id",
                  overrideQuest: W,
                  autoplay: true,
                  sourceQuestContent: g.jn.INTERNAL_PREVIEW_TOOL
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
      className: Chunk745776.errorBoundary,
      children: [(0, Chunk54381.jsx)(Chunk481060.Mgn, {
        className: Chunk745776.errorBoundaryIcon
      }), (0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-lg/semibold",
        children: "Something broke in the Quest preview tool :("
      }), (0, Chunk54381.jsx)(Chunk481060.Button, {
        variant: "secondary",
        text: "Reset",
        onClick: this.handleResetState
      }), null != module.message && (0, Chunk54381.jsx)(Chunk481060.Zbd, {
        className: Chunk745776.errorMessageWrapper,
        children: (0, Chunk54381.jsx)("code", {
          className: Chunk745776.errorMessage,
          children: module.message
        })
      })]
    }) : (0, Chunk54381.jsx)(W, {}, exports)
  }
  constructor(...e) {
    super(...e), B(this, "state", {
      error: null,
      renderKey: 0
    }), B(this, "handleResetState", () => {
      this.setState(e => ({
        error: null,
        renderKey: e.renderKey + 1
      }))
    })
  }
}
let H = U