/** Chunk was on 88479 **/
/** chunk id: 460461, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => P,
  Z: () => R
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
  Chunk190287 = require("./190287.jsx"),
  Chunk465520 = require("./465520.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk539981 = require("./539981.js");
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
      canManageGuild: R
    } = (0, Chunk442837.cj)([Chunk496675.Z], () => ({
      canManageGuild: Chunk496675.Z.can(Chunk981631.Plq.MANAGE_GUILD, Chunk852860)
    })), Z = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.isGuildMetadataLoaded()), D = (0, Chunk442837.e7)([Chunk999382.Z], () => null != Chunk852860 ? Chunk999382.Z.getMetadata() : null), A = (0, Chunk442837.e7)([Chunk999382.Z], () => null != Chunk852860 && (null == D ? true : D.isPublished) ? Chunk999382.Z.getSlug() : null), [L, k] = Chunk647438.useState([true]), [M, G] = Chunk647438.useState(true), [U, B] = Chunk647438.useState([false]), [F, H] = Chunk647438.useState([""]);
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
                if (3 === l.length && "bandcamp" === l[1].toLowerCase()) return N.z.bandcamp.presentation;
                let a = null != (n = null == (t = l.shift()) ? true : t.toLowerCase()) ? n : "";
                if ("www" === a && (a = null != (i = null == (r = l.shift()) ? true : r.toLowerCase()) ? i : ""), a in N.z) return N.z[a].presentation;
                return null
              } catch (e) {
                return null
              }
            })(n);
            null !== i ? (t[r] = i, e[r] = true) : e[r] = false
          } else e[r] = true
        }), H(exports), k(module), G(module.every(e => true === e))
      }
    }, [D]);
    let z = (0, Chunk442837.e7)([Chunk999382.Z], () => null != Chunk852860 ? Chunk999382.Z.getErrors() : null);
    if (null == Chunk852860 || null == D) return null;
    let W = e => {
        v.Z.updateGuild({
          discoverySplash: e
        })
      },
      V = e => {
        let t = () => {
          (0, g.W1)(d.id, e), e ? (0, g.Vv)({
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
          }) : (0, g.Vv)({
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
        null != d.vanityURLCode ? n.e("66731").then(n.bind(n, 241485)).then(e => {
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
        title: Chunk388032.intl.string(Chunk388032.t["/SWsHx"]),
        items: [{
          description: Chunk388032.intl.string(Chunk388032.t.DU8jFx),
          completed: null !== Chunk852860.discoverySplash && "" !== Chunk852860.discoverySplash
        }, {
          description: Chunk388032.intl.string(Chunk388032.t.SW5OHx),
          completed: null !== Chunk852860.description && "" !== Chunk852860.description
        }, {
          description: Chunk388032.intl.string(Chunk388032.t.m3b3WF),
          completed: null !== D.about && D.about.length >= 300 && D.about.length <= 2400
        }, {
          description: Chunk388032.intl.string(Chunk388032.t.qpx5MD),
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
      className: Chunk539981.settingsColumn,
      children: (0, Chunk951288.jsx)("div", {
        className: Chunk539981.settingsContainer,
        children: (0, Chunk951288.jsx)(Chunk481060.w0Z, {
          className: Chunk539981.settingsScroller,
          children: (0, Chunk951288.jsx)("main", {
            ref: exports,
            className: Chunk539981.settingsContent,
            children: (0, Chunk951288.jsx)(Chunk481060.JcV, {
              containerRef: exports,
              children: (0, Chunk951288.jsxs)("div", {
                className: Chunk539981.container,
                children: [(0, Chunk951288.jsxs)(Chunk481060.hjN, {
                  className: Chunk539981.mainContent,
                  title: (0, Chunk951288.jsxs)("div", {
                    children: [Chunk388032.intl.string(Chunk388032.t.kGlQGB), " ", (0, Chunk951288.jsx)(Chunk688465.Z, {
                      className: Chunk539981.betaTag
                    })]
                  }),
                  tag: Chunk481060.RB0.H1,
                  children: [(0, Chunk951288.jsxs)(Chunk481060.R94, {
                    className: Chunk539981.tabMainDescription,
                    type: Chunk481060.geA.DESCRIPTION,
                    children: [Chunk388032.intl.format(Chunk388032.t["+ScrMT"], {
                      discordURL: window.GLOBAL_ENV.MARKETING_ENDPOINT
                    }), " ", Chunk388032.intl.format(Chunk388032.t.T6WtKy, {
                      learnMoreURL: Chunk63063.Z.getArticleURL(Chunk981631.BhN.SERVER_WEB_PAGES)
                    })]
                  }), (() => {
                    if (!D.isPublished || null == A) return;
                    let e = T + A;
                    return (0, Chunk951288.jsxs)(Chunk481060.hjN, {
                      className: Chunk539981.noDividerFormSection,
                      children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
                        className: Chunk539981.formTitle,
                        children: Chunk388032.intl.string(Chunk388032.t.safBZ2)
                      }), (0, Chunk951288.jsx)(Chunk484614.Z, {
                        value: module
                      }), (0, Chunk951288.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": true,
                        className: Chunk539981.viewPageButton,
                        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
                          variant: "primary",
                          size: "sm",
                          text: Chunk388032.intl.string(Chunk388032.t.NI8iGB),
                          onClick: () => window.open(module)
                        })
                      })]
                    })
                  })(), (0, Chunk951288.jsx)(Chunk481060.$i$, {
                    className: Chunk539981.divider
                  }), (() => {
                    if (null != Chunk852860) return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
                      children: [(0, Chunk951288.jsxs)(Chunk481060.hjN, {
                        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
                          className: Chunk539981.formTitle,
                          children: Chunk388032.intl.string(Chunk388032.t.GjPpSk)
                        }), (0, Chunk951288.jsx)(Chunk481060.R94, {
                          type: Chunk481060.geA.DESCRIPTION,
                          className: Chunk539981.description,
                          children: Chunk388032.intl.string(Chunk388032.t.MVXonJ)
                        })]
                      }), (0, Chunk951288.jsx)(Chunk718157.E, {
                        guildId: Chunk852860.id,
                        guildMetadata: D,
                        isDisabled: !R
                      }), (0, Chunk951288.jsxs)(Chunk481060.hjN, {
                        className: Chunk539981.noDividerFormSection,
                        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
                          className: Chunk539981.formTitle,
                          children: Chunk388032.intl.string(Chunk388032.t.oOPlPD)
                        }), (0, Chunk951288.jsx)(Chunk450474.Z, {
                          guild: Chunk852860,
                          guildMetadata: D,
                          disabled: !R
                        })]
                      }), (null == z ? true : z.category) != null ? (0, Chunk951288.jsx)(Chunk481060.Text, {
                        color: "text-danger",
                        className: Chunk539981.error,
                        variant: "text-sm/normal",
                        children: z.category
                      }) : null]
                    })
                  })(), (0, Chunk951288.jsx)(Chunk481060.$i$, {
                    className: Chunk539981.divider
                  }), (() => {
                    if (null != Chunk852860) return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
                      children: [(0, Chunk951288.jsxs)(Chunk481060.hjN, {
                        className: Chunk539981.twoColumnFormSection,
                        children: [(0, Chunk951288.jsxs)("div", {
                          children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
                            className: Chunk539981.formTitle,
                            children: Chunk388032.intl.string(Chunk388032.t["8bT/Cg"])
                          }), (0, Chunk951288.jsx)(Chunk481060.R94, {
                            type: Chunk481060.geA.DESCRIPTION,
                            className: Chunk539981.formDescription,
                            children: Chunk388032.intl.string(Chunk388032.t.WCWT7O)
                          }), (0, Chunk951288.jsxs)(Chunk755721.zx, {
                            size: Chunk755721.zx.Sizes.SMALL,
                            color: Chunk755721.zx.Colors.PRIMARY,
                            children: [Chunk388032.intl.string(Chunk388032.t.yG2pUl), (0, Chunk951288.jsx)(Chunk813197.ZP, {
                              disabled: !R,
                              onChange: W
                            })]
                          })]
                        }), (0, Chunk951288.jsx)(Chunk208567.Z, {
                          image: Chunk852860.discoverySplash,
                          makeURL: e => x.ZP.getGuildDiscoverySplashURL({
                            id: d.id,
                            splash: e,
                            size: 512 * (0, p.x_)()
                          }),
                          disabled: !R,
                          onChange: W,
                          hint: Chunk388032.intl.string(Chunk388032.t.uPvxqK),
                          imageClassName: Chunk539981.imageUploaderInnerSquare,
                          hideSize: true
                        })]
                      }), (null == z ? true : z.discovery_splash) != null ? (0, Chunk951288.jsx)(Chunk481060.Text, {
                        color: "text-danger",
                        variant: "text-sm/normal",
                        children: z.discovery_splash
                      }) : null]
                    })
                  })(), (0, Chunk951288.jsx)(Chunk481060.$i$, {
                    className: Chunk539981.divider
                  }), (0, Chunk951288.jsxs)(Chunk481060.hjN, {
                    children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
                      className: Chunk539981.formTitle,
                      children: Chunk388032.intl.string(Chunk388032.t["RSfm+v"])
                    }), (0, Chunk951288.jsx)(Chunk481060.R94, {
                      className: Chunk539981.description,
                      type: Chunk481060.geA.DESCRIPTION,
                      children: Chunk388032.intl.string(Chunk388032.t.IBi6h4)
                    }), (0, Chunk951288.jsx)(Chunk481060.Kx8, {
                      value: null !== Chunk852860.description ? Chunk852860.description : "",
                      placeholder: Chunk388032.intl.string(Chunk388032.t.rFa9Ul),
                      onChange: e => {
                        var t;
                        v.Z.updateGuild({
                          description: null != (t = null == e ? true : e.replaceAll("\n", "")) ? t : ""
                        })
                      },
                      maxLength: Chunk345074.Us,
                      disabled: !R
                    })]
                  }), (0, Chunk951288.jsx)(Chunk481060.$i$, {
                    className: Chunk539981.divider
                  }), (() => {
                    if (null == D) return null;
                    let e = 0 === D.reasonsToJoin.length ? [, , , , ].fill({
                      reason: "",
                      emoji_name: null
                    }) : D.reasonsToJoin;
                    return (0, Chunk951288.jsxs)(Chunk481060.hjN, {
                      children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
                        className: Chunk539981.formTitle,
                        children: Chunk388032.intl.string(Chunk388032.t.vUmXsb)
                      }), (0, Chunk951288.jsx)(Chunk481060.R94, {
                        type: Chunk481060.geA.DESCRIPTION,
                        className: Chunk539981.description,
                        children: Chunk388032.intl.string(Chunk388032.t.esnBnZ)
                      }), (0, Chunk951288.jsx)("div", {
                        className: Chunk539981.reasonToJoin,
                        children: (0, Chunk951288.jsx)(Chunk190287.Z, {
                          reasonMinLength: 10,
                          reasonMaxLength: 128,
                          guildId: Chunk852860.id,
                          reasons: module
                        })
                      }), (null == z ? true : z.reasons_to_join) != null ? (0, Chunk951288.jsx)(Chunk481060.Text, {
                        color: "text-danger",
                        variant: "text-sm/normal",
                        children: z.reasons_to_join
                      }) : null]
                    })
                  })(), (0, Chunk951288.jsx)(Chunk481060.$i$, {
                    className: Chunk539981.divider
                  }), (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
                    children: [(0, Chunk951288.jsxs)(Chunk481060.hjN, {
                      children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
                        className: Chunk539981.formTitle,
                        children: Chunk388032.intl.string(Chunk388032.t["lu+BmJ"])
                      }), (0, Chunk951288.jsx)(Chunk481060.R94, {
                        className: Chunk539981.description,
                        type: Chunk481060.geA.DESCRIPTION,
                        children: Chunk388032.intl.string(Chunk388032.t.ozSi8v)
                      }), (0, Chunk951288.jsx)(Chunk481060.Kx8, {
                        showCharacterCount: true,
                        rows: 10,
                        value: D.about,
                        placeholder: Chunk388032.intl.string(Chunk388032.t.TduTbm),
                        onChange: e => {
                          (0, g.mA)(d.id, e)
                        },
                        minLength: 300,
                        maxLength: 2400,
                        disabled: !R,
                        defaultDirty: (null == (e = D.about) ? true : module.length) > 0
                      }, "text-area-".concat(Z))]
                    }), (null == z ? true : z.about) != null ? (0, Chunk951288.jsx)(Chunk481060.Text, {
                      color: "text-danger",
                      variant: "text-sm/normal",
                      children: z.about
                    }) : null]
                  }), (0, Chunk951288.jsx)(Chunk481060.$i$, {
                    className: Chunk539981.divider
                  }), (0, Chunk951288.jsxs)(Chunk481060.hjN, {
                    children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
                      className: Chunk539981.formTitle,
                      children: Chunk388032.intl.string(Chunk388032.t.V5mNyc)
                    }), (0, Chunk951288.jsx)(Chunk481060.R94, {
                      className: Chunk539981.description,
                      type: Chunk481060.geA.DESCRIPTION,
                      children: Chunk388032.intl.string(Chunk388032.t.d3kA9f)
                    }), D.socialLinks.map((e, t) => {
                      let n = F[t],
                        i = Object.values(N.z).find(e => e.presentation === n),
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
                            let t = Object.entries(N.z).filter(e => !F.includes(e[1].presentation)).map(e => ({
                              label: e[1].presentation,
                              value: e[0]
                            }));
                            return null == e || "" === e ? t : t.concat({
                              label: e,
                              value: e
                            })
                          })(F[t]),
                          placeholder: I.intl.string(I.t.xSALIC),
                          value: F[t],
                          onChange: e => ((e, t) => {
                            let n = [...D.socialLinks],
                              r = [...F],
                              i = [...L];
                            r[t] = e, n[t] = N.z[e].baseUrl, i[t] = true, k(i), H(r), G(i.every(e => true === e)), (0, g.t$)(d.id, n)
                          })(e, t),
                          isDisabled: !R
                        }), (0, r.jsx)(o.oil, {
                          value: e.replace(null != l ? l : "", ""),
                          onChange: e => ((e, t) => {
                            let n = [...D.socialLinks],
                              r = n[t],
                              i = e;
                            0 === r.length && i.length > 1 && false === RegExp("^https?:").test(i) && (i = "https://" + i), /\.(zip|exe|pdf|dmg|msi|apk|rar|7z|tar|gz|iso|docx?|xlsx?|pptx?|mp4|mp3)$/i.test(i) || (n[t] = i, (0, g.t$)(d.id, n))
                          })("".concat(l).concat(e), t),
                          placeholder: null != l ? true : I.intl.string(I.t.Q6o4pK),
                          maxLength: 150,
                          disabled: !R || null == F[t],
                          fullWidth: true,
                          leading: l,
                          trailing: R ? {
                            icon: o.XHJ,
                            "aria-label": I.intl.string(I.t.N86XcH),
                            onClick: () => (e => {
                              let t = [...U];
                              t.splice(e, 1), B(t);
                              let n = [...L];
                              n.splice(e, 1), k(n);
                              let r = [...F];
                              r.splice(e, 1), H(r);
                              let i = [...D.socialLinks];
                              i.splice(e, 1), (0, g.t$)(d.id, i)
                            })(t)
                          } : true
                        })]
                      }, "social-container-" + t)
                    }), (null == z ? true : z.social_links) != null ? (0, Chunk951288.jsx)(Chunk481060.Text, {
                      color: "text-danger",
                      variant: "text-sm/normal",
                      children: z.social_links
                    }) : null, (0, Chunk951288.jsx)(Chunk481060.zxk, {
                      variant: "secondary",
                      size: "sm",
                      text: Chunk388032.intl.string(Chunk388032.t.QvovjY),
                      onClick: () => {
                        if (D.socialLinks.length < 9) {
                          let e = [...D.socialLinks];
                          (0, Chunk456268.t$)(Chunk852860.id, module.concat("")), H(F.concat(""))
                        }
                      },
                      disabled: !R || D.socialLinks.length >= 9
                    })]
                  }), D.isPublished && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
                    children: [(0, Chunk951288.jsx)(Chunk481060.$i$, {
                      className: Chunk539981.divider
                    }), (0, Chunk951288.jsxs)(Chunk481060.hjN, {
                      children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
                        className: Chunk539981.formTitle,
                        children: Chunk388032.intl.string(Chunk388032.t["5yF7e3"])
                      }), (0, Chunk951288.jsx)(Chunk481060.R94, {
                        className: Chunk539981.description,
                        type: Chunk481060.geA.DESCRIPTION,
                        children: Chunk388032.intl.string(Chunk388032.t.eOFvqa)
                      }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
                        variant: "critical-primary",
                        size: "sm",
                        text: Chunk388032.intl.string(Chunk388032.t["DCHd/P"]),
                        onClick: () => V(false),
                        disabled: !R
                      })]
                    })]
                  }), (null == z ? true : z.is_published) != null ? (0, Chunk951288.jsx)(Chunk481060.Text, {
                    color: "text-danger",
                    variant: "text-sm/normal",
                    children: z.is_published
                  }) : null]
                }), !D.isPublished && (0, Chunk951288.jsx)("div", {
                  className: Chunk539981.checklist,
                  children: (0, Chunk951288.jsx)(Chunk970061.Z, {
                    title: Chunk388032.intl.string(Chunk388032.t["2kCyn5"]),
                    children: Y,
                    buttonLabel: Chunk388032.intl.string(Chunk388032.t.tVK6S0),
                    buttonCallback: () => V(true),
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
  R = () => null == (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()) ? null : (0, Chunk951288.jsx)(w, {})