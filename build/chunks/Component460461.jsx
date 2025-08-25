/** Chunk was on 52721 **/
/** chunk id: 460461, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => T,
  Z: () => w
}), require("./953529.js"), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./35282.js"), require("./804061.js"), require("./704826.js"), require("./413496.js"), require("./433524.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
let S = "https:" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/servers/",
  T = () => {
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
  P = () => {
    var e;
    let t = Chunk647438.useRef(null),
      c = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()),
      [T, P] = Chunk647438.useState(false);
    Chunk647438.useEffect(() => {
      T || null == Chunk852860 || ((0, Chunk456268.le)(), (0, Chunk456268.aC)(Chunk852860.id), (0, Chunk456268.i3)(Chunk852860.id), P(true))
    }, [Chunk852860, T]);
    let {
      canManageGuild: w
    } = (0, Chunk442837.cj)([Chunk496675.Z], () => ({
      canManageGuild: Chunk496675.Z.can(Chunk981631.Plq.MANAGE_GUILD, Chunk852860)
    })), R = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.isGuildMetadataLoaded()), Z = (0, Chunk442837.e7)([Chunk999382.Z], () => null != Chunk852860 ? Chunk999382.Z.getMetadata() : null), D = (0, Chunk442837.e7)([Chunk999382.Z], () => null != Chunk852860 && (null == Z ? true : Z.isPublished) ? Chunk999382.Z.getSlug() : null), [A, L] = Chunk647438.useState([true]), [k, M] = Chunk647438.useState(true), [G, U] = Chunk647438.useState([false]), [B, F] = Chunk647438.useState([""]);
    Chunk647438.useEffect(() => {
      if (null !== Z) {
        let e = [],
          t = [];
        Z.socialLinks.forEach((n, r) => {
          if ("" !== n) {
            let i = (e => {
              try {
                var t, n, r, i;
                let l = new URL(e).hostname.split(".");
                if (3 === l.length && "bandcamp" === l[1].toLowerCase()) return C.z.bandcamp.presentation;
                let a = null != (n = null == (t = l.shift()) ? true : t.toLowerCase()) ? n : "";
                if ("www" === a && (a = null != (i = null == (r = l.shift()) ? true : r.toLowerCase()) ? i : ""), a in C.z) return C.z[a].presentation;
                return null
              } catch (e) {
                return null
              }
            })(n);
            null !== i ? (t[r] = i, e[r] = true) : e[r] = false
          } else e[r] = true
        }), F(exports), L(module), M(module.every(e => true === e))
      }
    }, [Z]);
    let H = (0, Chunk442837.e7)([Chunk999382.Z], () => null != Chunk852860 ? Chunk999382.Z.getErrors() : null);
    if (null == Chunk852860 || null == Z) return null;
    let z = e => {
        j.Z.updateGuild({
          discoverySplash: e
        })
      },
      W = e => {
        let t = () => {
          (0, m.W1)(c.id, e), e ? (0, m.Vv)({
            guildId: c.id,
            primaryCategoryId: Z.primaryCategoryId,
            keywords: Z.keywords,
            emojiDiscoverabilityEnabled: Z.emojiDiscoverabilityEnabled,
            partnerActionedTimestamp: Z.partnerActionedTimestamp,
            partnerApplicationTimestamp: Z.partnerApplicationTimestamp,
            isPublished: true,
            reasonsToJoin: Z.reasonsToJoin,
            socialLinks: Z.socialLinks,
            about: Z.about
          }) : (0, m.Vv)({
            guildId: c.id,
            primaryCategoryId: Z.primaryCategoryId,
            keywords: Z.keywords,
            emojiDiscoverabilityEnabled: Z.emojiDiscoverabilityEnabled,
            partnerActionedTimestamp: Z.partnerActionedTimestamp,
            partnerApplicationTimestamp: Z.partnerApplicationTimestamp,
            isPublished: false,
            reasonsToJoin: Z.reasonsToJoin,
            socialLinks: Z.socialLinks,
            about: Z.about
          }), j.Z.saveGuild(c.id, {
            discoverySplash: c.discoverySplash,
            description: c.description
          })
        };
        if (e) return void t();
        null != c.vanityURLCode ? n.e("66731").then(n.bind(n, 241485)).then(e => {
          e.default.open(t)
        }) : t()
      },
      V = e => {
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
          completed: null !== Z.about && Z.about.length >= 300 && Z.about.length <= 2400
        }, {
          description: Chunk388032.intl.string(Chunk388032.t.qpx5MD),
          completed: null !== Z.reasonsToJoin && Z.reasonsToJoin.every(e => (e => {
            let {
              reason: t = "",
              emoji_name: n = ""
            } = e;
            return (null === t || "" === t) && null === n
          })(e) || V(e)) && Z.reasonsToJoin.filter(V).length >= 2
        }]
      }],
      K = (e, t) => {
        let n = [...G];
        n[e] = t, U(n)
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
                    if (!Z.isPublished || null == D) return;
                    let e = S + D;
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
                        guildMetadata: Z,
                        isDisabled: !w
                      }), (0, Chunk951288.jsxs)(Chunk481060.hjN, {
                        className: Chunk539981.noDividerFormSection,
                        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
                          className: Chunk539981.formTitle,
                          children: Chunk388032.intl.string(Chunk388032.t.oOPlPD)
                        }), (0, Chunk951288.jsx)(Chunk450474.Z, {
                          guild: Chunk852860,
                          guildMetadata: Z,
                          disabled: !w
                        })]
                      }), (null == H ? true : H.category) != null ? (0, Chunk951288.jsx)(Chunk481060.Text, {
                        color: "text-danger",
                        className: Chunk539981.error,
                        variant: "text-sm/normal",
                        children: H.category
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
                              disabled: !w,
                              onChange: z
                            })]
                          })]
                        }), (0, Chunk951288.jsx)(Chunk208567.Z, {
                          image: Chunk852860.discoverySplash,
                          makeURL: e => b.ZP.getGuildDiscoverySplashURL({
                            id: c.id,
                            splash: e,
                            size: 512 * (0, g.x_)()
                          }),
                          disabled: !w,
                          onChange: z,
                          hint: Chunk388032.intl.string(Chunk388032.t.uPvxqK),
                          imageClassName: Chunk539981.imageUploaderInnerSquare,
                          hideSize: true
                        })]
                      }), (null == H ? true : H.discovery_splash) != null ? (0, Chunk951288.jsx)(Chunk481060.Text, {
                        color: "text-danger",
                        variant: "text-sm/normal",
                        children: H.discovery_splash
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
                    }), (0, Chunk951288.jsx)(Chunk755721.iS, {
                      value: null !== Chunk852860.description ? Chunk852860.description : "",
                      placeholder: Chunk388032.intl.string(Chunk388032.t.rFa9Ul),
                      onChange: e => {
                        var t;
                        j.Z.updateGuild({
                          description: null != (t = null == e ? true : e.replaceAll("\n", "")) ? t : ""
                        })
                      },
                      maxLength: 120,
                      disabled: !w
                    })]
                  }), (0, Chunk951288.jsx)(Chunk481060.$i$, {
                    className: Chunk539981.divider
                  }), (() => {
                    if (null == Z) return null;
                    let e = 0 === Z.reasonsToJoin.length ? [, , , , ].fill({
                      reason: "",
                      emoji_name: null
                    }) : Z.reasonsToJoin;
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
                      }), (null == H ? true : H.reasons_to_join) != null ? (0, Chunk951288.jsx)(Chunk481060.Text, {
                        color: "text-danger",
                        variant: "text-sm/normal",
                        children: H.reasons_to_join
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
                      }), (0, Chunk951288.jsx)(Chunk755721.iS, {
                        showCharacterCount: true,
                        className: Chunk539981.textArea,
                        value: Z.about,
                        placeholder: Chunk388032.intl.string(Chunk388032.t.TduTbm),
                        onChange: e => {
                          (0, m.mA)(c.id, e)
                        },
                        minLength: 300,
                        maxLength: 2400,
                        disabled: !w,
                        defaultDirty: (null == (e = Z.about) ? true : module.length) > 0
                      }, "text-area-".concat(R))]
                    }), (null == H ? true : H.about) != null ? (0, Chunk951288.jsx)(Chunk481060.Text, {
                      color: "text-danger",
                      variant: "text-sm/normal",
                      children: H.about
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
                    }), Z.socialLinks.map((e, t) => {
                      let n = B[t],
                        i = Object.values(C.z).find(e => e.presentation === n),
                        l = null != i ? "".concat(i.baseUrl) : true;
                      return (0, r.jsxs)("div", {
                        className: I.socialLinksContainer,
                        onMouseOver: () => K(t, true),
                        onFocus: () => K(t, true),
                        onMouseOut: () => K(t, false),
                        onBlur: () => K(t, false),
                        children: [(0, r.jsx)(s.q4e, {
                          className: Z.isPublished ? I.socialLinksDropdownMax : I.socialLinksDropdownMin,
                          options: (e => {
                            let t = Object.entries(C.z).filter(e => !B.includes(e[1].presentation)).map(e => ({
                              label: e[1].presentation,
                              value: e[0]
                            }));
                            return null == e || "" === e ? t : t.concat({
                              label: e,
                              value: e
                            })
                          })(B[t]),
                          placeholder: E.intl.string(E.t.xSALIC),
                          value: B[t],
                          onChange: e => ((e, t) => {
                            let n = [...Z.socialLinks],
                              r = [...B],
                              i = [...A];
                            r[t] = e, n[t] = C.z[e].baseUrl, i[t] = true, L(i), F(r), M(i.every(e => true === e)), (0, m.t$)(c.id, n)
                          })(e, t),
                          isDisabled: !w
                        }), (0, r.jsx)(s.oil, {
                          value: e.replace(null != l ? l : "", ""),
                          onChange: e => ((e, t) => {
                            let n = [...Z.socialLinks],
                              r = n[t],
                              i = e;
                            0 === r.length && i.length > 1 && false === RegExp("^https?:").test(i) && (i = "https://" + i), /\.(zip|exe|pdf|dmg|msi|apk|rar|7z|tar|gz|iso|docx?|xlsx?|pptx?|mp4|mp3)$/i.test(i) || (n[t] = i, (0, m.t$)(c.id, n))
                          })("".concat(l).concat(e), t),
                          placeholder: null != l ? true : E.intl.string(E.t.Q6o4pK),
                          maxLength: 150,
                          disabled: !w || null == B[t],
                          fullWidth: true,
                          leading: l,
                          trailing: w ? {
                            icon: s.XHJ,
                            "aria-label": E.intl.string(E.t.N86XcH),
                            onClick: () => (e => {
                              let t = [...G];
                              t.splice(e, 1), U(t);
                              let n = [...A];
                              n.splice(e, 1), L(n);
                              let r = [...B];
                              r.splice(e, 1), F(r);
                              let i = [...Z.socialLinks];
                              i.splice(e, 1), (0, m.t$)(c.id, i)
                            })(t)
                          } : true
                        })]
                      }, "social-container-" + t)
                    }), (null == H ? true : H.social_links) != null ? (0, Chunk951288.jsx)(Chunk481060.Text, {
                      color: "text-danger",
                      variant: "text-sm/normal",
                      children: H.social_links
                    }) : null, (0, Chunk951288.jsx)(Chunk481060.zxk, {
                      variant: "secondary",
                      size: "sm",
                      text: Chunk388032.intl.string(Chunk388032.t.QvovjY),
                      onClick: () => {
                        if (Z.socialLinks.length < 9) {
                          let e = [...Z.socialLinks];
                          (0, Chunk456268.t$)(Chunk852860.id, module.concat("")), F(B.concat(""))
                        }
                      },
                      disabled: !w || Z.socialLinks.length >= 9
                    })]
                  }), Z.isPublished && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
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
                        onClick: () => W(false),
                        disabled: !w
                      })]
                    })]
                  }), (null == H ? true : H.is_published) != null ? (0, Chunk951288.jsx)(Chunk481060.Text, {
                    color: "text-danger",
                    variant: "text-sm/normal",
                    children: H.is_published
                  }) : null]
                }), !Z.isPublished && (0, Chunk951288.jsx)("div", {
                  className: Chunk539981.checklist,
                  children: (0, Chunk951288.jsx)(Chunk970061.Z, {
                    title: Chunk388032.intl.string(Chunk388032.t["2kCyn5"]),
                    children: Y,
                    buttonLabel: Chunk388032.intl.string(Chunk388032.t.tVK6S0),
                    buttonCallback: () => W(true),
                    disabled: !w || !k
                  })
                })]
              })
            })
          })
        })
      })
    })
  },
  w = () => null == (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()) ? null : (0, Chunk951288.jsx)(P, {})