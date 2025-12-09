/** Chunk was on 384 **/
/** chunk id: 614439, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  J: () => w,
  Z: () => R
}), require("./953529.js"), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./35282.js"), require("./804061.js"), require("./704826.js"), require("./413496.js"), require("./433524.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk345074 = require("./345074.js"),
  Chunk442837 = require("./442837.js"),
  Chunk796027 = require("./796027.jsx"),
  Chunk199849 = require("./199849.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk484614 = require("./484614.jsx"),
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
  Chunk133190 = require("./133190.js");
let P = "https:" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/servers/",
  w = () => {
    let {
      guild: e,
      guildMetadata: t,
      submitting: n
    } = (0, Chunk442837.cj)([Chunk999382.Z], () => ({
      submitting: Chunk999382.Z.isSubmitting(),
      guild: Chunk999382.Z.getGuild(),
      guildMetadata: Chunk999382.Z.getMetadata()
    }));
    return (0, Chunk54381.jsx)(Chunk796027.Z, {
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
  Z = () => {
    var e;
    let t = Chunk473749.useRef(null),
      s = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()),
      [w, Z] = Chunk473749.useState(false);
    Chunk473749.useEffect(() => {
      w || null == Chunk796027 || ((0, Chunk456268.le)(), (0, Chunk456268.aC)(Chunk796027.id), (0, Chunk456268.i3)(Chunk796027.id), Z(true))
    }, [Chunk796027, w]);
    let {
      canManageGuild: R
    } = (0, Chunk442837.cj)([Chunk496675.Z], () => ({
      canManageGuild: Chunk496675.Z.can(Chunk981631.Plq.MANAGE_GUILD, Chunk796027)
    })), D = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.isGuildMetadataLoaded()), A = (0, Chunk442837.e7)([Chunk999382.Z], () => null != Chunk796027 ? Chunk999382.Z.getMetadata() : null), L = (0, Chunk442837.e7)([Chunk999382.Z], () => null != Chunk796027 && (null == A ? true : A.isPublished) ? Chunk999382.Z.getSlug() : null), [k, G] = Chunk473749.useState([true]), [M, U] = Chunk473749.useState(true), [B, F] = Chunk473749.useState([false]), [H, W] = Chunk473749.useState([""]);
    Chunk473749.useEffect(() => {
      if (null !== A) {
        let e = [],
          t = [];
        A.socialLinks.forEach((n, r) => {
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
        }), W(exports), G(module), U(module.every(e => true === e))
      }
    }, [A]);
    let z = (0, Chunk442837.e7)([Chunk999382.Z], () => null != Chunk796027 ? Chunk999382.Z.getErrors() : null);
    if (null == Chunk796027 || null == A) return null;
    let V = e => {
        v.Z.updateGuild({
          discoverySplash: e
        })
      },
      K = e => {
        let t = () => {
          (0, p.W1)(s.id, e), e ? (0, p.Vv)({
            guildId: s.id,
            primaryCategoryId: A.primaryCategoryId,
            keywords: A.keywords,
            emojiDiscoverabilityEnabled: A.emojiDiscoverabilityEnabled,
            partnerActionedTimestamp: A.partnerActionedTimestamp,
            partnerApplicationTimestamp: A.partnerApplicationTimestamp,
            isPublished: true,
            reasonsToJoin: A.reasonsToJoin,
            socialLinks: A.socialLinks,
            about: A.about
          }) : (0, p.Vv)({
            guildId: s.id,
            primaryCategoryId: A.primaryCategoryId,
            keywords: A.keywords,
            emojiDiscoverabilityEnabled: A.emojiDiscoverabilityEnabled,
            partnerActionedTimestamp: A.partnerActionedTimestamp,
            partnerApplicationTimestamp: A.partnerApplicationTimestamp,
            isPublished: false,
            reasonsToJoin: A.reasonsToJoin,
            socialLinks: A.socialLinks,
            about: A.about
          }), v.Z.saveGuild(s.id, {
            discoverySplash: s.discoverySplash,
            description: s.description
          })
        };
        if (e) return void t();
        null != s.vanityURLCode ? n.e("95999").then(n.bind(n, 976540)).then(e => {
          e.default.open(t)
        }) : t()
      },
      Y = e => {
        let {
          reason: t = "",
          emoji_name: n = ""
        } = e;
        return null !== t && t.length >= 10 && t.length <= 128 && null !== n
      },
      q = [{
        title: Chunk388032.intl.string(Chunk388032.t["/SWsH3"]),
        items: [{
          description: Chunk388032.intl.string(Chunk388032.t.DU8jF2),
          completed: null !== Chunk796027.discoverySplash && "" !== Chunk796027.discoverySplash
        }, {
          description: Chunk388032.intl.string(Chunk388032.t.SW5OH6),
          completed: null !== Chunk796027.description && "" !== Chunk796027.description
        }, {
          description: Chunk388032.intl.string(Chunk388032.t.m3b3WL),
          completed: null !== A.about && A.about.length >= 300 && A.about.length <= 2400
        }, {
          description: Chunk388032.intl.string(Chunk388032.t.qpx5MN),
          completed: null !== A.reasonsToJoin && A.reasonsToJoin.every(e => (e => {
            let {
              reason: t = "",
              emoji_name: n = ""
            } = e;
            return (null === t || "" === t) && null === n
          })(e) || Y(e)) && A.reasonsToJoin.filter(Y).length >= 2
        }]
      }],
      X = (e, t) => {
        let n = [...B];
        n[e] = t, F(n)
      };
    return (0, Chunk54381.jsx)("div", {
      className: Chunk133190.settingsColumn,
      children: (0, Chunk54381.jsx)("div", {
        className: Chunk133190.settingsContainer,
        children: (0, Chunk54381.jsx)(Chunk481060.w0Z, {
          className: Chunk133190.settingsScroller,
          children: (0, Chunk54381.jsx)("main", {
            ref: exports,
            className: Chunk133190.settingsContent,
            children: (0, Chunk54381.jsx)(Chunk481060.JcV, {
              containerRef: exports,
              children: (0, Chunk54381.jsxs)("div", {
                className: Chunk133190.container,
                children: [(0, Chunk54381.jsxs)("div", {
                  className: Chunk133190.mainContent,
                  children: [(0, Chunk54381.jsxs)(Chunk481060.Heading, {
                    variant: "heading-lg/semibold",
                    children: [Chunk388032.intl.string(Chunk388032.t.kGlQGF), (0, Chunk54381.jsx)(Chunk688465.Z, {
                      className: Chunk133190.betaTag
                    })]
                  }), (0, Chunk54381.jsxs)(Chunk481060.Text, {
                    variant: "text-sm/normal",
                    className: Chunk133190.tabMainDescription,
                    children: [Chunk388032.intl.format(Chunk388032.t["+ScrMf"], {
                      discordURL: window.GLOBAL_ENV.MARKETING_ENDPOINT
                    }), " ", Chunk388032.intl.format(Chunk388032.t.T6WtKw, {
                      learnMoreURL: Chunk63063.Z.getArticleURL(Chunk981631.BhN.SERVER_WEB_PAGES)
                    })]
                  }), (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
                    gap: 40,
                    children: [(() => {
                      if (!A.isPublished || null == L) return;
                      let e = P + L;
                      return (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
                        gap: 16,
                        children: [(0, Chunk54381.jsx)(Chunk481060.gNt, {
                          label: Chunk388032.intl.string(Chunk388032.t.safBZ9),
                          children: (0, Chunk54381.jsx)(Chunk484614.Z, {
                            value: module
                          })
                        }), (0, Chunk54381.jsx)(Chunk481060.Button, {
                          variant: "primary",
                          size: "sm",
                          text: Chunk388032.intl.string(Chunk388032.t.NI8iGI),
                          onClick: () => window.open(module)
                        })]
                      })
                    })(), (0, Chunk54381.jsx)(Chunk481060.izJ, {}), (() => {
                      if (null != Chunk796027) return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
                        children: [(0, Chunk54381.jsx)(Chunk718157.E, {
                          label: Chunk388032.intl.string(Chunk388032.t.GjPpSu),
                          description: Chunk388032.intl.string(Chunk388032.t.MVXonM),
                          guildId: Chunk796027.id,
                          guildMetadata: A,
                          isDisabled: !R
                        }), (0, Chunk54381.jsx)(Chunk450474.Z, {
                          label: Chunk388032.intl.string(Chunk388032.t.oOPlPA),
                          guild: Chunk796027,
                          guildMetadata: A,
                          disabled: !R
                        }), (null == z ? true : z.category) != null ? (0, Chunk54381.jsx)(Chunk481060.Text, {
                          color: "text-feedback-critical",
                          className: Chunk133190.error,
                          variant: "text-sm/normal",
                          children: z.category
                        }) : null]
                      })
                    })(), (0, Chunk54381.jsx)(Chunk481060.izJ, {}), (() => {
                      if (null != Chunk796027) return (0, Chunk54381.jsx)(Chunk481060.gNt, {
                        label: Chunk388032.intl.string(Chunk388032.t["8bT/Cu"]),
                        description: Chunk388032.intl.string(Chunk388032.t.WCWT7A),
                        errorMessage: (null == z ? true : z.discovery_splash) != null ? z.discovery_splash : true,
                        layout: "horizontal",
                        children: (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
                          gap: 16,
                          children: [(0, Chunk54381.jsx)(Chunk208567.Z, {
                            image: Chunk796027.discoverySplash,
                            makeURL: e => j.ZP.getGuildDiscoverySplashURL({
                              id: s.id,
                              splash: e,
                              size: 512 * (0, f.x_)()
                            }),
                            disabled: !R,
                            onChange: V,
                            hint: Chunk388032.intl.string(Chunk388032.t.uPvxqJ),
                            imageClassName: Chunk133190.imageUploaderInnerSquare,
                            hideSize: true
                          }), (0, Chunk54381.jsxs)(Chunk755721.zx, {
                            size: Chunk755721.zx.Sizes.SMALL,
                            color: Chunk755721.zx.Colors.PRIMARY,
                            children: [Chunk388032.intl.string(Chunk388032.t.yG2pUi), (0, Chunk54381.jsx)(Chunk813197.ZP, {
                              disabled: !R,
                              onChange: V
                            })]
                          })]
                        })
                      })
                    })(), (0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsx)(Chunk481060.Kx8, {
                      label: Chunk388032.intl.string(Chunk388032.t["RSfm+i"]),
                      description: Chunk388032.intl.string(Chunk388032.t.IBi6hz),
                      value: null !== Chunk796027.description ? Chunk796027.description : "",
                      placeholder: Chunk388032.intl.string(Chunk388032.t.rFa9Ui),
                      onChange: e => {
                        var t;
                        v.Z.updateGuild({
                          description: null != (t = null == e ? true : e.replaceAll("\n", "")) ? t : ""
                        })
                      },
                      maxLength: Chunk345074.Us,
                      disabled: !R
                    }), (0, Chunk54381.jsx)(Chunk481060.izJ, {}), (() => {
                      if (null == A) return null;
                      let e = 0 === A.reasonsToJoin.length ? [, , , , ].fill({
                        reason: "",
                        emoji_name: null
                      }) : A.reasonsToJoin;
                      return (0, Chunk54381.jsx)(Chunk481060.gNt, {
                        label: Chunk388032.intl.string(Chunk388032.t.vUmXsR),
                        description: Chunk388032.intl.string(Chunk388032.t.esnBnW),
                        errorMessage: (null == z ? true : z.reasons_to_join) != null ? z.reasons_to_join : true,
                        children: (0, Chunk54381.jsx)(Chunk328159.Z, {
                          reasonMinLength: 10,
                          reasonMaxLength: 128,
                          guildId: Chunk796027.id,
                          reasons: module
                        })
                      })
                    })(), (0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsx)(Chunk481060.Kx8, {
                      label: Chunk388032.intl.string(Chunk388032.t["lu+BmJ"]),
                      description: Chunk388032.intl.string(Chunk388032.t.ozSi8g),
                      error: (null == z ? true : z.about) != null ? z.about : true,
                      showCharacterCount: true,
                      rows: 10,
                      value: A.about,
                      placeholder: Chunk388032.intl.string(Chunk388032.t.TduTbs),
                      onChange: e => {
                        (0, p.mA)(s.id, e)
                      },
                      minLength: 300,
                      maxLength: 2400,
                      disabled: !R,
                      defaultDirty: (null == (e = A.about) ? true : module.length) > 0
                    }, "text-area-".concat(D)), (0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsxs)(Chunk481060.gNt, {
                      label: Chunk388032.intl.string(Chunk388032.t.V5mNyb),
                      description: Chunk388032.intl.string(Chunk388032.t.d3kA9a),
                      errorMessage: (null == z ? true : z.social_links) != null ? z.social_links : true,
                      children: [A.socialLinks.map((e, t) => {
                        let n = H[t],
                          i = Object.values(E.z).find(e => e.presentation === n),
                          l = null != i ? "".concat(i.baseUrl) : true;
                        return (0, r.jsxs)("div", {
                          className: T.socialLinksContainer,
                          onMouseOver: () => X(t, true),
                          onFocus: () => X(t, true),
                          onMouseOut: () => X(t, false),
                          onBlur: () => X(t, false),
                          children: [(0, r.jsx)(o.y6, {
                            className: A.isPublished ? T.socialLinksDropdownMax : T.socialLinksDropdownMin,
                            options: (e => {
                              let t = Object.entries(E.z).filter(e => !H.includes(e[1].presentation)).map(e => ({
                                label: e[1].presentation,
                                value: e[0]
                              }));
                              return null == e || "" === e ? t : t.concat({
                                label: e,
                                value: e
                              })
                            })(H[t]),
                            placeholder: S.intl.string(S.t.xSALIK),
                            value: H[t],
                            onChange: e => ((e, t) => {
                              let n = [...A.socialLinks],
                                r = [...H],
                                i = [...k];
                              r[t] = e, n[t] = E.z[e].baseUrl, i[t] = true, G(i), W(r), U(i.every(e => true === e)), (0, p.t$)(s.id, n)
                            })(e, t),
                            isDisabled: !R
                          }), (0, r.jsx)(d.oil, {
                            value: e.replace(null != l ? l : "", ""),
                            onChange: e => ((e, t) => {
                              let n = [...A.socialLinks],
                                r = n[t],
                                i = e;
                              0 === r.length && i.length > 1 && false === RegExp("^https?:").test(i) && (i = "https://" + i), /\.(zip|exe|pdf|dmg|msi|apk|rar|7z|tar|gz|iso|docx?|xlsx?|pptx?|mp4|mp3)$/i.test(i) || (n[t] = i, (0, p.t$)(s.id, n))
                            })("".concat(l).concat(e), t),
                            placeholder: null != l ? true : S.intl.string(S.t.Q6o4pJ),
                            maxLength: 150,
                            disabled: !R || null == H[t],
                            fullWidth: true,
                            leading: l,
                            trailing: R ? {
                              icon: d.XHJ,
                              "aria-label": S.intl.string(S.t.N86XcP),
                              onClick: () => (e => {
                                let t = [...B];
                                t.splice(e, 1), F(t);
                                let n = [...k];
                                n.splice(e, 1), G(n);
                                let r = [...H];
                                r.splice(e, 1), W(r);
                                let i = [...A.socialLinks];
                                i.splice(e, 1), (0, p.t$)(s.id, i)
                              })(t)
                            } : true
                          })]
                        }, "social-container-" + t)
                      }), (null == z ? true : z.social_links) != null ? (0, Chunk54381.jsx)(Chunk481060.Text, {
                        color: "text-feedback-critical",
                        variant: "text-sm/normal",
                        children: z.social_links
                      }) : null, (0, Chunk54381.jsx)(Chunk481060.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: Chunk388032.intl.string(Chunk388032.t.Qvovjc),
                        onClick: () => {
                          if (A.socialLinks.length < 9) {
                            let e = [...A.socialLinks];
                            (0, Chunk456268.t$)(Chunk796027.id, module.concat("")), W(H.concat(""))
                          }
                        },
                        disabled: !R || A.socialLinks.length >= 9
                      })]
                    }), A.isPublished && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
                      children: [(0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsx)(Chunk481060.gNt, {
                        label: Chunk388032.intl.string(Chunk388032.t["5yF7e1"]),
                        description: Chunk388032.intl.string(Chunk388032.t.eOFvqT),
                        children: (0, Chunk54381.jsx)(Chunk481060.Button, {
                          variant: "critical-primary",
                          size: "sm",
                          text: Chunk388032.intl.string(Chunk388032.t["DCHd/G"]),
                          onClick: () => K(false),
                          disabled: !R
                        })
                      })]
                    }), (null == z ? true : z.is_published) != null ? (0, Chunk54381.jsx)(Chunk481060.Text, {
                      color: "text-feedback-critical",
                      variant: "text-sm/normal",
                      children: z.is_published
                    }) : null]
                  })]
                }), !A.isPublished && (0, Chunk54381.jsx)("div", {
                  className: Chunk133190.checklist,
                  children: (0, Chunk54381.jsx)(Chunk970061.Z, {
                    title: Chunk388032.intl.string(Chunk388032.t["2kCyn/"]),
                    children: q,
                    buttonLabel: Chunk388032.intl.string(Chunk388032.t.tVK6S9),
                    buttonCallback: () => K(true),
                    disabled: !R || !M
                  })
                })]
              })
            })
          })
        })
      })
    })
  },
  R = () => null == (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()) ? null : (0, Chunk54381.jsx)(Z, {})