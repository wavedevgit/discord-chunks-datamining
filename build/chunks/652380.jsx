/** Chunk was on 37082 **/
/** chunk id: 652380, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => H,
  b: () => V
}), require("./388685.js"), require("./314940.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk278074 = require("./278074.js"),
  Chunk754700 = require("./754700.js"),
  Chunk887003 = require("./887003.js"),
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
  Chunk683650 = require("./683650.js"),
  Chunk920916 = require("./920916.js"),
  Chunk478977 = require("./478977.jsx"),
  Chunk456799 = require("./456799.jsx"),
  Chunk210851 = require("./210851.jsx"),
  Chunk602683 = require("./602683.jsx"),
  Chunk916028 = require("./916028.js"),
  Chunk749912 = require("./749912.js"),
  Chunk815183 = require("./815183.js"),
  Chunk899457 = require("./899457.js"),
  Chunk409667 = require("./409667.js");

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
let q = ["png", "gif", "webp"],
  D = [...q, "jpg", "jpeg"],
  Q = Array.from(new Set([...D, "gif", "mp4", "webm"]));

function V(e) {
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

function L() {
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
    enrolledAt: Chunk255367,
    completedAt: require,
    claimedAt: Chunk73800,
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
      features: []
    },
    userStatus: null,
    targetedContent: []
  };

function W() {
  var e, t, o, u, B, V, M, W;
  let [U, H] = Chunk73800.useState(Z), z = Chunk73800.useCallback(e => {
    H(I(k({}, e), {
      preview: true
    }))
  }, []), [F, X] = Chunk73800.useState(Chunk899457.a.UNENROLLED), [K, Y] = Chunk73800.useState(false), [G, J] = Chunk73800.useState(false), [$, ee] = Chunk73800.useState(null), et = (W = U.config, (0, Chunk278074.EQ)(W).with({
    configVersion: 2
  }, e => e.rewardsConfig.rewards).exhaustive());

  function en(e, t) {
    if ("hero" === e || "questBarHero" === e || "gameTile" === e || "logotype" === e || "heroVideo" === e || "questBarHeroVideo" === e) {
      var n, r;
      z(I(k({}, U), {
        config: (n = U.config, r = {
          [e]: t
        }, (0, i.EQ)(n).with({
          configVersion: 2
        }, e => I(k({}, e), {
          assets: k({}, e.assets, r)
        })).exhaustive())
      }))
    }
  }

  function er(e, t) {
    let n = U.config.taskConfigV2.tasks,
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
    z(I(k({}, U), {
      config: I(k({}, U.config), {
        taskConfigV2: I(k({}, U.config.taskConfigV2), {
          tasks: I(k({}, n), {
            [l.X.WATCH_VIDEO]: I(k({}, r), {
              assets: s
            })
          })
        })
      })
    }))
  }

  function es(e, t) {
    var n, r, s;
    z(I(k({}, U), {
      config: I(k({}, U.config), {
        videoMetadata: I(k({}, U.config.videoMetadata), {
          messages: null != (s = null == (n = U.config.videoMetadata) ? true : n.messages) ? s : {},
          assets: I(k({}, null == (r = U.config.videoMetadata) ? true : r.assets), {
            [e]: t
          })
        })
      })
    }))
  }

  function eo(e, t) {
    if ("questName" === e || "gameTitle" === e || "gamePublisher" === e) {
      var n, r;
      z(I(k({}, U), {
        config: (n = U.config, r = {
          [e]: t
        }, (0, i.EQ)(n).with({
          configVersion: 2
        }, e => I(k({}, e), {
          messages: k({}, e.messages, r)
        })).exhaustive())
      }))
    }
  }

  function ea(e, t) {
    let n = U.config.taskConfigV2.tasks,
      r = n[l.X.WATCH_VIDEO];
    if (null == r) return;
    let s = I(k({}, r.messages), {
      [e]: t
    });
    z(I(k({}, U), {
      config: I(k({}, U.config), {
        taskConfigV2: I(k({}, U.config.taskConfigV2), {
          tasks: I(k({}, n), {
            [l.X.WATCH_VIDEO]: I(k({}, r), {
              messages: s
            })
          })
        })
      })
    }))
  }

  function ei(e, t, n) {
    if ("name" === e || "nameWithArticle" === e) {
      var r, s;
      z(I(k({}, U), {
        config: (r = U.config, s = {
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

  function el(e, t) {
    z(I(k({}, U), {
      config: I(k({}, U.config), {
        colors: I(k({}, U.config.colors), {
          [e]: t
        })
      })
    }))
  }

  function ec() {
    (0, Chunk509212.Xv)(U.config) ? (0, Chunk920916.m)(U, Chunk497505.jn.GIFT_INVENTORY_FOR_YOU, true) : (0, Chunk110560.openQuestsRewardCodeModal)({
      questId: U.id,
      questContent: Chunk497505.jn.GIFT_INVENTORY_FOR_YOU,
      preview: true,
      previewQuest: U,
      sourceQuestContent: Chunk497505.jn.INTERNAL_PREVIEW_TOOL
    })
  }
  let eu = Chunk73800.useMemo(() => {
      for (let [e, t] of Object.entries(U.config.taskConfigV2.tasks))
        if (null != exports.target) return exports.target;
      return 10 * Chunk70956.Z.Seconds.MINUTE
    }, [U.config.taskConfigV2.tasks]),
    ed = Chunk73800.useMemo(() => Chunk754700.X.WATCH_VIDEO in U.config.taskConfigV2.tasks, [U.config.taskConfigV2.tasks]);
  a()(false !== U.preview && null != U.preview, "Preview config must have property preview: true");
  let ep = U.config.taskConfigV2.tasks[Chunk754700.X.WATCH_VIDEO];
  return <div>{<Chunk481060.X6q variant={"heading-lg/bold"} className={Chunk409667.heading}>{"Quest Preview Tool"}</Chunk481060.X6q>}{<div className={Chunk409667.fields}><Chunk916028.Z onSelect={function(e) {
          ee(e), null != e && (X(function(e) {
            if (null == e.userStatus) return A.a.UNENROLLED;
            if (null != e.userStatus.claimedAt) return A.a.CLAIMED;
            if (null != e.userStatus.completedAt) return A.a.COMPLETED_100;
            let t = (0, m.il)(e),
              n = t.progressSeconds,
              r = t.targetSeconds;
            return n / r >= 1 ? A.a.COMPLETED_100 : n / r >= .75 ? A.a.COMPLETED_75 : n / r >= .5 ? A.a.COMPLETED_50 : n / r >= .25 ? A.a.COMPLETED_25 : A.a.ENROLLED
          }(e)), z(e))
        }} quest={$} /></div>}{<Chunk481060.X6q variant={"heading-md/semibold"} className={Chunk409667.subheading}>{"Task Config"}</Chunk481060.X6q>}{<div className={Chunk409667.fields}><Chunk749912.Z taskDuration={eu} taskConfigV2={U.config.taskConfigV2} onSelect={function(e) {
          z(I(k({}, U), {
            config: I(k({}, U.config), {
              taskConfigV2: e
            })
          }))
        }} /></div>}{<Chunk481060.X6q variant={"heading-md/semibold"} className={Chunk409667.subheading}>{"Messages"}</Chunk481060.X6q>}{<div className={Chunk409667.fields}>{<Chunk602683.Z title={"Quest Name"} assetKey={"questName"} onMessageChange={eo} initialValue={U.config.messages.questName} />}{<Chunk602683.Z title={"Game Title"} assetKey={"gameTitle"} onMessageChange={eo} initialValue={U.config.messages.gameTitle} />}{<Chunk602683.Z title={"Game Publisher"} assetKey={"gamePublisher"} onMessageChange={eo} initialValue={U.config.messages.gamePublisher} />}{ed && <Chunk255367.Fragment>{<Chunk602683.Z title={"Video Title"} assetKey={"videoTitle"} onMessageChange={ea} initialValue={null == ep ? true : ep.messages.videoTitle} />}{<Chunk602683.Z title={"End CTA Title"} assetKey={"videoEndCtaTitle"} onMessageChange={ea} initialValue={null == ep ? true : ep.messages.videoEndCtaTitle} />}{<Chunk602683.Z title={"End CTA Subtitle"} assetKey={"videoEndCtaSubtitle"} onMessageChange={ea} initialValue={null == ep ? true : ep.messages.videoEndCtaSubtitle} />}</Chunk255367.Fragment>}</div>}{<Chunk481060.X6q variant={"heading-md/semibold"} className={Chunk409667.subheading}>{"Assets"}</Chunk481060.X6q>}{<div className={Chunk409667.fields}>{<Chunk210851.Z title={"Hero"} assetKey={"hero"} onFileChange={en} filters={Q} initialValue={U.config.assets.hero} />}{<Chunk210851.Z title={"Hero Video (optional)"} assetKey={"heroVideo"} onFileChange={en} filters={Q} initialValue={null != (V = U.config.assets.heroVideo) ? V : true} />}{<Chunk210851.Z title={"Quest Bar Hero"} assetKey={"questBarHero"} onFileChange={en} filters={Q} initialValue={U.config.assets.questBarHero} />}{<Chunk210851.Z title={"Quest Bar Hero Video (optional)"} assetKey={"questBarHeroVideo"} onFileChange={en} filters={Q} initialValue={null != (M = U.config.assets.questBarHeroVideo) ? M : true} />}{<Chunk210851.Z title={"Game Tile"} assetKey={"gameTile"} onFileChange={en} filters={[...D, "svg"]} initialValue={U.config.assets.gameTile} />}{<Chunk210851.Z title={"Logotype"} assetKey={"logotype"} onFileChange={en} filters={[...q, "svg"]} initialValue={U.config.assets.logotype} />}{ed && <Chunk255367.Fragment>{<Chunk210851.Z title={"Quest Video"} assetKey={"videoPlayerVideo"} onFileChange={er} filters={Q} initialValue={null == ep ? true : ep.assets.video.url} />}{<Chunk210851.Z title={"Quest Video (Low Resolution)"} assetKey={"videoPlayerVideoLowRes"} onFileChange={er} filters={Q} initialValue={null == ep || null == (e = ep.assets.videoLowRes) ? true : module.url} />}{<Chunk210851.Z title={"Video Player Thumbnail (optional)"} assetKey={"videoPlayerThumbnail"} onFileChange={er} filters={D} initialValue={null == ep ? true : ep.assets.video.thumbnail} />}{<Chunk210851.Z title={"Quest Bar Preview Video (optional)"} assetKey={"questBarPreviewVideo"} onFileChange={es} filters={Q} initialValue={null == (t = U.config.videoMetadata) ? true : exports.assets.questBarPreviewVideo} />}{<Chunk210851.Z title={"Quest Home Video (optional)"} assetKey={"questHomeVideo"} onFileChange={es} filters={Q} initialValue={null == (o = U.config.videoMetadata) ? true : Chunk512722.assets.questHomeVideo} />}</Chunk255367.Fragment>}</div>}{et.map((e, t) => <div>{<d.X6q variant={"heading-md/semibold"} className={R.subheading}>{"Reward #"}{t + 1}</d.X6q>}{<div className={R.fields}>{<T.Z title={"Name"} assetKey={"name"} onMessageChange={(e, n) => ei(e, n, t)} initialValue={e.messages.name} />}{<T.Z title={"Name With Article"} assetKey={"nameWithArticle"} onMessageChange={(e, n) => ei(e, n, t)} initialValue={e.messages.nameWithArticle} />}{e.type !== c.w.VIRTUAL_CURRENCY && <S.Z title={"Asset"} assetKey={"asset"} onFileChange={(e, n) => (function(e, t, n) {
            if ("asset" === e) {
              var r;
              z(I(k({}, U), {
                config: (r = U.config, (0, i.EQ)(r).with({
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
          })(e, n, t)} filters={Q} initialValue={e.asset} />}{<d.xJW>{<d.vwX>{"Claim Modal"}</d.vwX>}{<d.zxk variant={"primary"} text={"Open Reward Modal"} onClick={ec} />}</d.xJW>}</div>}</div>)}{<Chunk481060.X6q variant={"heading-md/semibold"} className={Chunk409667.subheading}>{"Colors & Quest States"}</Chunk481060.X6q>}{<div className={Chunk409667.fields}>{<div className={Chunk409667.fields} style={{
          marginBottom: 0
        }}>{<Chunk478977.Z title={"Primary"} colorKey={"primary"} onChange={el} value={U.config.colors.primary} />}{<Chunk478977.Z title={"Secondary"} colorKey={"secondary"} onChange={el} value={U.config.colors.secondary} />}</div>}{<div className={Chunk409667.fields}><Chunk815183.Z /></div>}{<Chunk899457.Z onChange={function(e) {
          switch (X(e), e) {
            case A.a.UNENROLLED:
              z(I(k({}, U), {
                userStatus: null
              }));
              break;
            case A.a.ENROLLED:
              z(I(k({}, U), {
                userStatus: L({
                  enrolledAt: new Date().toISOString()
                })
              }));
              break;
            case A.a.COMPLETED_25:
              z(I(k({}, U), {
                userStatus: L({
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: .25 * eu
                })
              }));
              break;
            case A.a.COMPLETED_50:
              z(I(k({}, U), {
                userStatus: L({
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: .5 * eu
                })
              }));
              break;
            case A.a.COMPLETED_75:
              z(I(k({}, U), {
                userStatus: L({
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: .75 * eu
                })
              }));
              break;
            case A.a.COMPLETED_100:
              z(I(k({}, U), {
                userStatus: L({
                  completedAt: new Date().toISOString(),
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: eu
                })
              }));
              break;
            case A.a.CLAIMED:
              z(I(k({}, U), {
                userStatus: L({
                  claimedAt: new Date().toISOString(),
                  completedAt: new Date().toISOString(),
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: eu
                })
              }))
          }
        }} value={F} />}</div>}{<Chunk481060.X6q variant={"heading-lg/bold"} className={Chunk409667.heading}>{"Component Previews"}</Chunk481060.X6q>}{<div className={Chunk409667.componentPreviews}>{<Chunk456799.Z withBorder={true}>{<Chunk481060.vwX>{"Quest Bar"}</Chunk481060.vwX>}{<div className={Chunk409667.questBarPreviewWrapper}>{(null == (u = U.userStatus) ? true : Chunk458708.claimedAt) != null && <Chunk481060.Text color={"text-secondary"} variant={"text-sm/normal"}>{"The Quest Bar is hidden when the user has claimed the reward."}</Chunk481060.Text>}{<div className={Chunk409667.questBarPreview}><Chunk78826.p isPreview={true} source={"preview"} questId={"0"}><Chunk130653.Z><Chunk210724.P quest={U} /></Chunk130653.Z></Chunk78826.p></div>}</div>}</Chunk456799.Z>}{<Chunk456799.Z withBorder={true}>{<Chunk481060.vwX>{"Quest Home Card"}</Chunk481060.vwX>}{<Chunk78826.p isPreview={true} source={"preview"} questId={"0"}><Chunk415104.Z quest={U} className={Chunk409667.questTile} questContent={Chunk497505.jn.QUEST_HOME_DESKTOP} contentPosition={0} rowIndex={0} sourceQuestContent={Chunk497505.jn.INTERNAL_PREVIEW_TOOL} /></Chunk78826.p>}</Chunk456799.Z>}{<Chunk456799.Z withBorder={true}>{<Chunk481060.vwX>{"Channel Call Header"}</Chunk481060.vwX>}{(null == (B = U.userStatus) ? true : B.claimedAt) != null && <Chunk481060.Text color={"text-secondary"} variant={"text-sm/normal"}>{"The Quest Channel Call Header is hidden when the user has claimed the reward."}</Chunk481060.Text>}{<div className={Chunk409667.questBarPreviewWrapper}><Chunk78826.p isPreview={true} source={"preview"} questId={"0"}><div className={Chunk409667.questChannelCallHeaderPreview}><Chunk134483.Z channelId={"123"} previewQuest={U} isParticipatingOverride={K} /></div></Chunk78826.p></div>}</Chunk456799.Z>}{<div className={Chunk409667.toggleSwitch}><Chunk481060.xJW><Chunk481060.j7V value={K} onChange={function(e) {
              Y(e)
            }} hideBorder={true}>{"Is Participating:"}</Chunk481060.j7V></Chunk481060.xJW></div>}{<Chunk456799.Z withBorder={true}>{<Chunk481060.vwX>{"Quest Card Embed"}</Chunk481060.vwX>}{G ? <Chunk683650.o questId={U.id} /> : <Chunk37303.Z quest={U} location={Chunk497505.jn.QUESTS_EMBED} sourceQuestContent={Chunk497505.jn.INTERNAL_PREVIEW_TOOL} />}</Chunk456799.Z>}{<div className={Chunk409667.toggleSwitch}><Chunk481060.xJW><Chunk481060.j7V value={G} onChange={J} hideBorder={true}>{"Invalid Quests Embed:"}</Chunk481060.j7V></Chunk481060.xJW></div>}{ed && <Chunk456799.Z withBorder={true} allowClicks={true}>{<Chunk481060.vwX>{"Video Player"}</Chunk481060.vwX>}{<Chunk481060.zxk variant={"primary"} text={"Open Video Player Modal"} onClick={() => {
            (0, Chunk481060.ZDy)(async () => {
              let {
                default: e
              } = await Promise.all([require.e("66816"), require.e("32249"), require.e("63942")]).then(require.bind(require, 536687));
              return t => {
                var n;
                return (0, r.jsx)(e, I(k({}, t), {
                  openStartClockTime: performance.now(),
                  videoSessionId: "fake-quest-session-id",
                  questId: null != (n = U.id) ? n : "fake-quest-id",
                  overrideQuest: U,
                  autoplay: true,
                  sourceQuestContent: g.jn.INTERNAL_PREVIEW_TOOL
                }))
              }
            })
          }} />}</Chunk456799.Z>}</div>}</div>
}
class U extends Chunk73800.Component {
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
    return null != module ? <div className={Chunk409667.errorBoundary}>{<Chunk481060.Mgn className={Chunk409667.errorBoundaryIcon} />}{<Chunk481060.X6q variant={"heading-lg/semibold"}>{"Something broke in the Quest preview tool :("}</Chunk481060.X6q>}{<Chunk481060.zxk variant={"secondary"} text={"Reset"} onClick={this.handleResetState} />}{null != module.message && <Chunk481060.Zbd className={Chunk409667.errorMessageWrapper}><code className={Chunk409667.errorMessage}>{module.message}</code></Chunk481060.Zbd>}</div> : <W />
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