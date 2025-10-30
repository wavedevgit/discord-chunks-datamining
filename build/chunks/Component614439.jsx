/** Chunk was on 29679 **/
/** chunk id: 614439, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  J: () => P,
  Z: () => Z
}), require("./953529.js"), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./35282.js"), require("./804061.js"), require("./704826.js"), require("./413496.js"), require("./433524.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk345074 = require("./345074.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk484614 = require("./484614.jsx"),
  Chunk852860 = require("./852860.jsx"),
  Chunk688465 = require("./688465.jsx"),
  Chunk970061 = require("./970061.jsx"),
  Chunk456268 = require("./456268.js"),
  Chunk134432 = require("./134432.js"),
  Chunk813197 = require("./813197.jsx"),
  Chunk208567 = require("./208567.jsx"),
  Chunk496675 = require("./496675.js"),
  Chunk768581 = require("./768581.js"),
  Chunk63063 = require("./63063.js"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk718157 = require("./718157.jsx"),
  Chunk450474 = require("./450474.jsx"),
  Chunk328159 = require("./328159.jsx"),
  Chunk873029 = require("./873029.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk858936 = require("./858936.js");
let T = "https:" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/servers/",
  P = () => {
    let {
      guild: e,
      guildMetadata: t,
      submitting: n
    } = (0, Chunk442837.cj)([Chunk999382.Z], () => ({
      submitting: Chunk999382.Z.isSubmitting(),
      guild: Chunk999382.Z.getGuild(),
      guildMetadata: Chunk999382.Z.getMetadata()
    }));
    return (0, Chunk951288.jsx)(Chunk852860.Z, {
      submitting: require,
      onReset: () => {
        null != module && Chunk434404.Z.init(module.id)
      },
      onSave: () => {
        null != module && (Chunk434404.Z.saveGuild(module.id, {
          discoverySplash: module.discoverySplash,
          description: module.description
        }), (0, Chunk456268.Vv)({
          guildId: module.id,
          primaryCategoryId: exports.primaryCategoryId,
          keywords: exports.keywords,
          emojiDiscoverabilityEnabled: exports.emojiDiscoverabilityEnabled,
          partnerActionedTimestamp: exports.partnerActionedTimestamp,
          partnerApplicationTimestamp: exports.partnerApplicationTimestamp,
          isPublished: exports.isPublished,
          reasonsToJoin: exports.reasonsToJoin,
          socialLinks: exports.socialLinks.filter(e => e),
          about: exports.about
        }))
      }
    })
  },
  w = () => {
    var e;
    let t = Chunk647438.useRef(null),
      d = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()),
      [P, w] = Chunk647438.useState(false);
    Chunk647438.useEffect(() => {
      P || null == Chunk852860 || ((0, Chunk456268.le)(), (0, Chunk456268.aC)(Chunk852860.id), (0, Chunk456268.i3)(Chunk852860.id), w(true))
    }, [Chunk852860, P]);
    let {
      canManageGuild: Z
    } = (0, Chunk442837.cj)([Chunk496675.Z], () => ({
      canManageGuild: Chunk496675.Z.can(Chunk981631.Plq.MANAGE_GUILD, Chunk852860)
    })), R = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.isGuildMetadataLoaded()), D = (0, Chunk442837.e7)([Chunk999382.Z], () => null != Chunk852860 ? Chunk999382.Z.getMetadata() : null), A = (0, Chunk442837.e7)([Chunk999382.Z], () => null != Chunk852860 && (null == D ? true : D.isPublished) ? Chunk999382.Z.getSlug() : null), [L, k] = Chunk647438.useState([true]), [G, M] = Chunk647438.useState(true), [U, B] = Chunk647438.useState([false]), [F, H] = Chunk647438.useState([""]);
    Chunk647438.useEffect(() => {
      if (null !== D) {
        let e = [],
          t = [];
        D.socialLinks.forEach((n, r) => {
          if ("" !== n) {
            let i = (e => {
              try {
                var t, n, r, i;
                let l = new URL(e).hostname.split(".");
                if (3 === l.length && "bandcamp" === l[1].toLowerCase()) return E.z.bandcamp.presentation;
                let a = null != (n = null == (t = l.shift()) ? true : t.toLowerCase()) ? n : "";
                if ("www" === a && (a = null != (i = null == (r = l.shift()) ? true : r.toLowerCase()) ? i : ""), a in E.z) return E.z[a].presentation;
                return null
              } catch (e) {
                return null
              }
            })(n);
            null !== i ? (t[r] = i, e[r] = true) : e[r] = false
          } else e[r] = true
        }), H(exports), k(module), M(module.every(e => true === e))
      }
    }, [D]);
    let W = (0, Chunk442837.e7)([Chunk999382.Z], () => null != Chunk852860 ? Chunk999382.Z.getErrors() : null);
    if (null == Chunk852860 || null == D) return null;
    let z = e => {
        v.Z.updateGuild({
          discoverySplash: e
        })
      },
      V = e => {
        let t = () => {
          (0, m.W1)(d.id, e), e ? (0, m.Vv)({
            guildId: d.id,
            primaryCategoryId: D.primaryCategoryId,
            keywords: D.keywords,
            emojiDiscoverabilityEnabled: D.emojiDiscoverabilityEnabled,
            partnerActionedTimestamp: D.partnerActionedTimestamp,
            partnerApplicationTimestamp: D.partnerApplicationTimestamp,
            isPublished: true,
            reasonsToJoin: D.reasonsToJoin,
            socialLinks: D.socialLinks,
            about: D.about
          }) : (0, m.Vv)({
            guildId: d.id,
            primaryCategoryId: D.primaryCategoryId,
            keywords: D.keywords,
            emojiDiscoverabilityEnabled: D.emojiDiscoverabilityEnabled,
            partnerActionedTimestamp: D.partnerActionedTimestamp,
            partnerApplicationTimestamp: D.partnerApplicationTimestamp,
            isPublished: false,
            reasonsToJoin: D.reasonsToJoin,
            socialLinks: D.socialLinks,
            about: D.about
          }), v.Z.saveGuild(d.id, {
            discoverySplash: d.discoverySplash,
            description: d.description
          })
        };
        if (e) return void t();
        null != d.vanityURLCode ? n.e("95999").then(n.bind(n, 976540)).then(e => {
          e.default.open(t)
        }) : t()
      },
      K = e => {
        let {
          reason: t = "",
          emoji_name: n = ""
        } = e;
        return null !== t && t.length >= 10 && t.length <= 128 && null !== n
      },
      Y = [{
        title: Chunk388032.intl.string(Chunk388032.t["/SWsH3"]),
        items: [{
          description: Chunk388032.intl.string(Chunk388032.t.DU8jF2),
          completed: null !== Chunk852860.discoverySplash && "" !== Chunk852860.discoverySplash
        }, {
          description: Chunk388032.intl.string(Chunk388032.t.SW5OH6),
          completed: null !== Chunk852860.description && "" !== Chunk852860.description
        }, {
          description: Chunk388032.intl.string(Chunk388032.t.m3b3WL),
          completed: null !== D.about && D.about.length >= 300 && D.about.length <= 2400
        }, {
          description: Chunk388032.intl.string(Chunk388032.t.qpx5MN),
          completed: null !== D.reasonsToJoin && D.reasonsToJoin.every(e => (e => {
            let {
              reason: t = "",
              emoji_name: n = ""
            } = e;
            return (null === t || "" === t) && null === n
          })(e) || K(e)) && D.reasonsToJoin.filter(K).length >= 2
        }]
      }],
      q = (e, t) => {
        let n = [...U];
        n[e] = t, B(n)
      };
    return (0, Chunk951288.jsx)("div", {
      className: Chunk858936.settingsColumn,
      children: (0, Chunk951288.jsx)("div", {
        className: Chunk858936.settingsContainer,
        children: (0, Chunk951288.jsx)(Chunk481060.w0Z, {
          className: Chunk858936.settingsScroller,
          children: (0, Chunk951288.jsx)("main", {
            ref: exports,
            className: Chunk858936.settingsContent,
            children: (0, Chunk951288.jsx)(Chunk481060.JcV, {
              containerRef: exports,
              children: (0, Chunk951288.jsxs)("div", {
                className: Chunk858936.container,
                children: [(0, Chunk951288.jsxs)("div", {
                  className: Chunk858936.mainContent,
                  children: [(0, Chunk951288.jsxs)(Chunk481060.Heading, {
                    variant: "heading-lg/semibold",
                    children: [Chunk388032.intl.string(Chunk388032.t.kGlQGF), (0, Chunk951288.jsx)(Chunk688465.Z, {
                      className: Chunk858936.betaTag
                    })]
                  }), (0, Chunk951288.jsxs)(Chunk481060.Text, {
                    variant: "text-sm/normal",
                    className: Chunk858936.tabMainDescription,
                    children: [Chunk388032.intl.format(Chunk388032.t["+ScrMf"], {
                      discordURL: window.GLOBAL_ENV.MARKETING_ENDPOINT
                    }), " ", Chunk388032.intl.format(Chunk388032.t.T6WtKw, {
                      learnMoreURL: Chunk63063.Z.getArticleURL(Chunk981631.BhN.SERVER_WEB_PAGES)
                    })]
                  }), (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
                    gap: 40,
                    children: [(() => {
                      if (!D.isPublished || null == A) return;
                      let e = T + A;
                      return (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
                        gap: 16,
                        children: [(0, Chunk951288.jsx)(Chunk481060.gNt, {
                          label: Chunk388032.intl.string(Chunk388032.t.safBZ9),
                          children: (0, Chunk951288.jsx)(Chunk484614.Z, {
                            value: module
                          })
                        }), (0, Chunk951288.jsx)(Chunk481060.Button, {
                          variant: "primary",
                          size: "sm",
                          text: Chunk388032.intl.string(Chunk388032.t.NI8iGI),
                          onClick: () => window.open(module)
                        })]
                      })
                    })(), (0, Chunk951288.jsx)(Chunk481060.izJ, {}), (() => {
                      if (null != Chunk852860) return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
                        children: [(0, Chunk951288.jsx)(Chunk718157.E, {
                          label: Chunk388032.intl.string(Chunk388032.t.GjPpSu),
                          description: Chunk388032.intl.string(Chunk388032.t.MVXonM),
                          guildId: Chunk852860.id,
                          guildMetadata: D,
                          isDisabled: !Z
                        }), (0, Chunk951288.jsx)(Chunk450474.Z, {
                          label: Chunk388032.intl.string(Chunk388032.t.oOPlPA),
                          guild: Chunk852860,
                          guildMetadata: D,
                          disabled: !Z
                        }), (null == W ? true : W.category) != null ? (0, Chunk951288.jsx)(Chunk481060.Text, {
                          color: "text-danger",
                          className: Chunk858936.error,
                          variant: "text-sm/normal",
                          children: W.category
                        }) : null]
                      })
                    })(), (0, Chunk951288.jsx)(Chunk481060.izJ, {}), (() => {
                      if (null != Chunk852860) return (0, Chunk951288.jsx)(Chunk481060.gNt, {
                        label: Chunk388032.intl.string(Chunk388032.t["8bT/Cu"]),
                        description: Chunk388032.intl.string(Chunk388032.t.WCWT7A),
                        errorMessage: (null == W ? true : W.discovery_splash) != null ? W.discovery_splash : true,
                        layout: "horizontal",
                        children: (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
                          gap: 16,
                          children: [(0, Chunk951288.jsx)(Chunk208567.Z, {
                            image: Chunk852860.discoverySplash,
                            makeURL: e => x.ZP.getGuildDiscoverySplashURL({
                              id: d.id,
                              splash: e,
                              size: 512 * (0, p.x_)()
                            }),
                            disabled: !Z,
                            onChange: z,
                            hint: Chunk388032.intl.string(Chunk388032.t.uPvxqJ),
                            imageClassName: Chunk858936.imageUploaderInnerSquare,
                            hideSize: true
                          }), (0, Chunk951288.jsxs)(Chunk755721.zx, {
                            size: Chunk755721.zx.Sizes.SMALL,
                            color: Chunk755721.zx.Colors.PRIMARY,
                            children: [Chunk388032.intl.string(Chunk388032.t.yG2pUi), (0, Chunk951288.jsx)(Chunk813197.ZP, {
                              disabled: !Z,
                              onChange: z
                            })]
                          })]
                        })
                      })
                    })(), (0, Chunk951288.jsx)(Chunk481060.izJ, {}), (0, Chunk951288.jsx)(Chunk481060.Kx8, {
                      label: Chunk388032.intl.string(Chunk388032.t["RSfm+i"]),
                      description: Chunk388032.intl.string(Chunk388032.t.IBi6hz),
                      value: null !== Chunk852860.description ? Chunk852860.description : "",
                      placeholder: Chunk388032.intl.string(Chunk388032.t.rFa9Ui),
                      onChange: e => {
                        var t;
                        v.Z.updateGuild({
                          description: null != (t = null == e ? true : e.replaceAll("\n", "")) ? t : ""
                        })
                      },
                      maxLength: Chunk345074.Us,
                      disabled: !Z
                    }), (0, Chunk951288.jsx)(Chunk481060.izJ, {}), (() => {
                      if (null == D) return null;
                      let e = 0 === D.reasonsToJoin.length ? [, , , , ].fill({
                        reason: "",
                        emoji_name: null
                      }) : D.reasonsToJoin;
                      return (0, Chunk951288.jsx)(Chunk481060.gNt, {
                        label: Chunk388032.intl.string(Chunk388032.t.vUmXsR),
                        description: Chunk388032.intl.string(Chunk388032.t.esnBnW),
                        errorMessage: (null == W ? true : W.reasons_to_join) != null ? W.reasons_to_join : true,
                        children: (0, Chunk951288.jsx)(Chunk328159.Z, {
                          reasonMinLength: 10,
                          reasonMaxLength: 128,
                          guildId: Chunk852860.id,
                          reasons: module
                        })
                      })
                    })(), (0, Chunk951288.jsx)(Chunk481060.izJ, {}), (0, Chunk951288.jsx)(Chunk481060.Kx8, {
                      label: Chunk388032.intl.string(Chunk388032.t["lu+BmJ"]),
                      description: Chunk388032.intl.string(Chunk388032.t.ozSi8g),
                      error: (null == W ? true : W.about) != null ? W.about : true,
                      showCharacterCount: true,
                      rows: 10,
                      value: D.about,
                      placeholder: Chunk388032.intl.string(Chunk388032.t.TduTbs),
                      onChange: e => {
                        (0, m.mA)(d.id, e)
                      },
                      minLength: 300,
                      maxLength: 2400,
                      disabled: !Z,
                      defaultDirty: (null == (e = D.about) ? true : module.length) > 0
                    }, "text-area-".concat(R)), (0, Chunk951288.jsx)(Chunk481060.izJ, {}), (0, Chunk951288.jsxs)(Chunk481060.gNt, {
                      label: Chunk388032.intl.string(Chunk388032.t.V5mNyb),
                      description: Chunk388032.intl.string(Chunk388032.t.d3kA9a),
                      errorMessage: (null == W ? true : W.social_links) != null ? W.social_links : true,
                      children: [D.socialLinks.map((e, t) => {
                        let n = F[t],
                          i = Object.values(E.z).find(e => e.presentation === n),
                          l = null != i ? "".concat(i.baseUrl) : true;
                        return (0, r.jsxs)("div", {
                          className: S.socialLinksContainer,
                          onMouseOver: () => q(t, true),
                          onFocus: () => q(t, true),
                          onMouseOut: () => q(t, false),
                          onBlur: () => q(t, false),
                          children: [(0, r.jsx)(o.q4e, {
                            className: D.isPublished ? S.socialLinksDropdownMax : S.socialLinksDropdownMin,
                            options: (e => {
                              let t = Object.entries(E.z).filter(e => !F.includes(e[1].presentation)).map(e => ({
                                label: e[1].presentation,
                                value: e[0]
                              }));
                              return null == e || "" === e ? t : t.concat({
                                label: e,
                                value: e
                              })
                            })(F[t]),
                            placeholder: I.intl.string(I.t.xSALIK),
                            value: F[t],
                            onChange: e => ((e, t) => {
                              let n = [...D.socialLinks],
                                r = [...F],
                                i = [...L];
                              r[t] = e, n[t] = E.z[e].baseUrl, i[t] = true, k(i), H(r), M(i.every(e => true === e)), (0, m.t$)(d.id, n)
                            })(e, t),
                            isDisabled: !Z
                          }), (0, r.jsx)(o.oil, {
                            value: e.replace(null != l ? l : "", ""),
                            onChange: e => ((e, t) => {
                              let n = [...D.socialLinks],
                                r = n[t],
                                i = e;
                              0 === r.length && i.length > 1 && false === RegExp("^https?:").test(i) && (i = "https://" + i), /\.(zip|exe|pdf|dmg|msi|apk|rar|7z|tar|gz|iso|docx?|xlsx?|pptx?|mp4|mp3)$/i.test(i) || (n[t] = i, (0, m.t$)(d.id, n))
                            })("".concat(l).concat(e), t),
                            placeholder: null != l ? true : I.intl.string(I.t.Q6o4pJ),
                            maxLength: 150,
                            disabled: !Z || null == F[t],
                            fullWidth: true,
                            leading: l,
                            trailing: Z ? {
                              icon: o.XHJ,
                              "aria-label": I.intl.string(I.t.N86XcP),
                              onClick: () => (e => {
                                let t = [...U];
                                t.splice(e, 1), B(t);
                                let n = [...L];
                                n.splice(e, 1), k(n);
                                let r = [...F];
                                r.splice(e, 1), H(r);
                                let i = [...D.socialLinks];
                                i.splice(e, 1), (0, m.t$)(d.id, i)
                              })(t)
                            } : true
                          })]
                        }, "social-container-" + t)
                      }), (null == W ? true : W.social_links) != null ? (0, Chunk951288.jsx)(Chunk481060.Text, {
                        color: "text-danger",
                        variant: "text-sm/normal",
                        children: W.social_links
                      }) : null, (0, Chunk951288.jsx)(Chunk481060.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: Chunk388032.intl.string(Chunk388032.t.Qvovjc),
                        onClick: () => {
                          if (D.socialLinks.length < 9) {
                            let e = [...D.socialLinks];
                            (0, Chunk456268.t$)(Chunk852860.id, module.concat("")), H(F.concat(""))
                          }
                        },
                        disabled: !Z || D.socialLinks.length >= 9
                      })]
                    }), D.isPublished && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
                      children: [(0, Chunk951288.jsx)(Chunk481060.izJ, {}), (0, Chunk951288.jsx)(Chunk481060.gNt, {
                        label: Chunk388032.intl.string(Chunk388032.t["5yF7e1"]),
                        description: Chunk388032.intl.string(Chunk388032.t.eOFvqT),
                        children: (0, Chunk951288.jsx)(Chunk481060.Button, {
                          variant: "critical-primary",
                          size: "sm",
                          text: Chunk388032.intl.string(Chunk388032.t["DCHd/G"]),
                          onClick: () => V(false),
                          disabled: !Z
                        })
                      })]
                    }), (null == W ? true : W.is_published) != null ? (0, Chunk951288.jsx)(Chunk481060.Text, {
                      color: "text-danger",
                      variant: "text-sm/normal",
                      children: W.is_published
                    }) : null]
                  })]
                }), !D.isPublished && (0, Chunk951288.jsx)("div", {
                  className: Chunk858936.checklist,
                  children: (0, Chunk951288.jsx)(Chunk970061.Z, {
                    title: Chunk388032.intl.string(Chunk388032.t["2kCyn/"]),
                    children: Y,
                    buttonLabel: Chunk388032.intl.string(Chunk388032.t.tVK6S9),
                    buttonCallback: () => V(true),
                    disabled: !Z || !G
                  })
                })]
              })
            })
          })
        })
      })
    })
  },
  Z = () => null == (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()) ? null : (0, Chunk951288.jsx)(w, {})