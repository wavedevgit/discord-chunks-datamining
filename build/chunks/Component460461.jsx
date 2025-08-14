/** Chunk was on 40725 **/
/** chunk id: 460461, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => w,
  Z: () => Z
}), require("./953529.js"), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./35282.js"), require("./804061.js"), require("./704826.js"), require("./413496.js"), require("./433524.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk225433 = require("./225433.jsx"),
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
    return (0, Chunk255367.jsx)(Chunk852860.Z, {
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
  R = () => {
    var e;
    let t = Chunk73800.useRef(null),
      u = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()),
      [w, R] = Chunk73800.useState(false);
    Chunk73800.useEffect(() => {
      w || null == Chunk852860 || ((0, Chunk456268.le)(), (0, Chunk456268.aC)(Chunk852860.id), (0, Chunk456268.i3)(Chunk852860.id), R(true))
    }, [Chunk852860, w]);
    let {
      canManageGuild: Z
    } = (0, Chunk442837.cj)([Chunk496675.Z], () => ({
      canManageGuild: Chunk496675.Z.can(Chunk981631.Plq.MANAGE_GUILD, Chunk852860)
    })), D = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.isGuildMetadataLoaded()), A = (0, Chunk442837.e7)([Chunk999382.Z], () => null != Chunk852860 ? Chunk999382.Z.getMetadata() : null), k = (0, Chunk442837.e7)([Chunk999382.Z], () => null != Chunk852860 && (null == A ? true : A.isPublished) ? Chunk999382.Z.getSlug() : null), [L, M] = Chunk73800.useState([true]), [G, U] = Chunk73800.useState(true), [B, F] = Chunk73800.useState([false]), [H, z] = Chunk73800.useState([""]);
    Chunk73800.useEffect(() => {
      if (null !== A) {
        let e = [],
          t = [];
        A.socialLinks.forEach((n, r) => {
          if ("" !== n) {
            let i = (e => {
              try {
                var t, n, r, i;
                let l = new URL(e).hostname.split(".");
                if (3 === l.length && "bandcamp" === l[1].toLowerCase()) return I.z.bandcamp.presentation;
                let a = null != (n = null == (t = l.shift()) ? true : t.toLowerCase()) ? n : "";
                if ("www" === a && (a = null != (i = null == (r = l.shift()) ? true : r.toLowerCase()) ? i : ""), a in I.z) return I.z[a].presentation;
                return null
              } catch (e) {
                return null
              }
            })(n);
            null !== i ? (t[r] = i, e[r] = true) : e[r] = false
          } else e[r] = true
        }), z(exports), M(module), U(module.every(e => true === e))
      }
    }, [A]);
    let W = (0, Chunk442837.e7)([Chunk999382.Z], () => null != Chunk852860 ? Chunk999382.Z.getErrors() : null);
    if (null == Chunk852860 || null == A) return null;
    let V = e => {
        _.Z.updateGuild({
          discoverySplash: e
        })
      },
      Y = e => {
        let t = () => {
          (0, p.W1)(u.id, e), e ? (0, p.Vv)({
            guildId: u.id,
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
            guildId: u.id,
            primaryCategoryId: A.primaryCategoryId,
            keywords: A.keywords,
            emojiDiscoverabilityEnabled: A.emojiDiscoverabilityEnabled,
            partnerActionedTimestamp: A.partnerActionedTimestamp,
            partnerApplicationTimestamp: A.partnerApplicationTimestamp,
            isPublished: false,
            reasonsToJoin: A.reasonsToJoin,
            socialLinks: A.socialLinks,
            about: A.about
          }), _.Z.saveGuild(u.id, {
            discoverySplash: u.discoverySplash,
            description: u.description
          })
        };
        if (e) return void t();
        null != u.vanityURLCode ? n.e("66731").then(n.bind(n, 241485)).then(e => {
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
      q = [{
        title: Chunk388032.intl.string(Chunk388032.t["/SWsHx"]),
        items: [{
          description: Chunk388032.intl.string(Chunk388032.t.DU8jFx),
          completed: null !== Chunk852860.discoverySplash && "" !== Chunk852860.discoverySplash
        }, {
          description: Chunk388032.intl.string(Chunk388032.t.SW5OHx),
          completed: null !== Chunk852860.description && "" !== Chunk852860.description
        }, {
          description: Chunk388032.intl.string(Chunk388032.t.m3b3WF),
          completed: null !== A.about && A.about.length >= 300 && A.about.length <= 2400
        }, {
          description: Chunk388032.intl.string(Chunk388032.t.qpx5MD),
          completed: null !== A.reasonsToJoin && A.reasonsToJoin.every(e => (e => {
            let {
              reason: t = "",
              emoji_name: n = ""
            } = e;
            return (null === t || "" === t) && null === n
          })(e) || K(e)) && A.reasonsToJoin.filter(K).length >= 2
        }]
      }],
      X = (e, t) => {
        let n = [...B];
        n[e] = t, F(n)
      };
    return (0, Chunk255367.jsx)("div", {
      className: Chunk539981.settingsColumn,
      children: (0, Chunk255367.jsx)("div", {
        className: Chunk539981.settingsContainer,
        children: (0, Chunk255367.jsx)(Chunk481060.w0Z, {
          className: Chunk539981.settingsScroller,
          children: (0, Chunk255367.jsx)("main", {
            ref: exports,
            className: Chunk539981.settingsContent,
            children: (0, Chunk255367.jsx)(Chunk481060.JcV, {
              containerRef: exports,
              children: (0, Chunk255367.jsxs)("div", {
                className: Chunk539981.container,
                children: [(0, Chunk255367.jsxs)(Chunk481060.hjN, {
                  className: Chunk539981.mainContent,
                  title: (0, Chunk255367.jsxs)("div", {
                    children: [Chunk388032.intl.string(Chunk388032.t.kGlQGB), " ", (0, Chunk255367.jsx)(Chunk688465.Z, {
                      className: Chunk539981.betaTag
                    })]
                  }),
                  tag: Chunk481060.RB0.H1,
                  children: [(0, Chunk255367.jsxs)(Chunk481060.R94, {
                    className: Chunk539981.tabMainDescription,
                    type: Chunk481060.geA.DESCRIPTION,
                    children: [Chunk388032.intl.format(Chunk388032.t["+ScrMT"], {
                      discordURL: window.GLOBAL_ENV.MARKETING_ENDPOINT
                    }), " ", Chunk388032.intl.format(Chunk388032.t.T6WtKy, {
                      learnMoreURL: Chunk63063.Z.getArticleURL(Chunk981631.BhN.SERVER_WEB_PAGES)
                    })]
                  }), (() => {
                    if (!A.isPublished || null == k) return;
                    let e = P + k;
                    return (0, Chunk255367.jsxs)(Chunk481060.hjN, {
                      className: Chunk539981.noDividerFormSection,
                      children: [(0, Chunk255367.jsx)(Chunk481060.vwX, {
                        className: Chunk539981.formTitle,
                        children: Chunk388032.intl.string(Chunk388032.t.safBZ2)
                      }), (0, Chunk255367.jsx)(Chunk484614.Z, {
                        value: module
                      }), (0, Chunk255367.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": true,
                        className: Chunk539981.viewPageButton,
                        children: (0, Chunk255367.jsx)(Chunk481060.zxk, {
                          variant: "primary",
                          size: "sm",
                          text: Chunk388032.intl.string(Chunk388032.t.NI8iGB),
                          onClick: () => window.open(module)
                        })
                      })]
                    })
                  })(), (0, Chunk255367.jsx)(Chunk481060.$i$, {
                    className: Chunk539981.divider
                  }), (() => {
                    if (null != Chunk852860) return (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
                      children: [(0, Chunk255367.jsxs)(Chunk481060.hjN, {
                        children: [(0, Chunk255367.jsx)(Chunk481060.vwX, {
                          className: Chunk539981.formTitle,
                          children: Chunk388032.intl.string(Chunk388032.t.GjPpSk)
                        }), (0, Chunk255367.jsx)(Chunk481060.R94, {
                          type: Chunk481060.geA.DESCRIPTION,
                          className: Chunk539981.description,
                          children: Chunk388032.intl.string(Chunk388032.t.MVXonJ)
                        })]
                      }), (0, Chunk255367.jsx)(Chunk718157.E, {
                        guildId: Chunk852860.id,
                        guildMetadata: A,
                        isDisabled: !Z
                      }), (0, Chunk255367.jsxs)(Chunk481060.hjN, {
                        className: Chunk539981.noDividerFormSection,
                        children: [(0, Chunk255367.jsx)(Chunk481060.vwX, {
                          className: Chunk539981.formTitle,
                          children: Chunk388032.intl.string(Chunk388032.t.oOPlPD)
                        }), (0, Chunk255367.jsx)(Chunk450474.Z, {
                          guild: Chunk852860,
                          guildMetadata: A,
                          disabled: !Z
                        })]
                      }), (null == W ? true : W.category) != null ? (0, Chunk255367.jsx)(Chunk481060.Text, {
                        color: "text-danger",
                        className: Chunk539981.error,
                        variant: "text-sm/normal",
                        children: W.category
                      }) : null]
                    })
                  })(), (0, Chunk255367.jsx)(Chunk481060.$i$, {
                    className: Chunk539981.divider
                  }), (() => {
                    if (null != Chunk852860) return (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
                      children: [(0, Chunk255367.jsxs)(Chunk481060.hjN, {
                        className: Chunk539981.twoColumnFormSection,
                        children: [(0, Chunk255367.jsxs)("div", {
                          children: [(0, Chunk255367.jsx)(Chunk481060.vwX, {
                            className: Chunk539981.formTitle,
                            children: Chunk388032.intl.string(Chunk388032.t["8bT/Cg"])
                          }), (0, Chunk255367.jsx)(Chunk481060.R94, {
                            type: Chunk481060.geA.DESCRIPTION,
                            className: Chunk539981.formDescription,
                            children: Chunk388032.intl.string(Chunk388032.t.WCWT7O)
                          }), (0, Chunk255367.jsxs)(Chunk755721.zx, {
                            size: Chunk755721.zx.Sizes.SMALL,
                            color: Chunk755721.zx.Colors.PRIMARY,
                            children: [Chunk388032.intl.string(Chunk388032.t.yG2pUl), (0, Chunk255367.jsx)(Chunk813197.ZP, {
                              disabled: !Z,
                              onChange: V
                            })]
                          })]
                        }), (0, Chunk255367.jsx)(Chunk208567.Z, {
                          image: Chunk852860.discoverySplash,
                          makeURL: e => j.ZP.getGuildDiscoverySplashURL({
                            id: u.id,
                            splash: e,
                            size: 512 * (0, h.x_)()
                          }),
                          disabled: !Z,
                          onChange: V,
                          hint: Chunk388032.intl.string(Chunk388032.t.uPvxqK),
                          imageClassName: Chunk539981.imageUploaderInnerSquare,
                          hideSize: true
                        })]
                      }), (null == W ? true : W.discovery_splash) != null ? (0, Chunk255367.jsx)(Chunk481060.Text, {
                        color: "text-danger",
                        variant: "text-sm/normal",
                        children: W.discovery_splash
                      }) : null]
                    })
                  })(), (0, Chunk255367.jsx)(Chunk481060.$i$, {
                    className: Chunk539981.divider
                  }), (0, Chunk255367.jsxs)(Chunk481060.hjN, {
                    children: [(0, Chunk255367.jsx)(Chunk481060.vwX, {
                      className: Chunk539981.formTitle,
                      children: Chunk388032.intl.string(Chunk388032.t["RSfm+v"])
                    }), (0, Chunk255367.jsx)(Chunk481060.R94, {
                      className: Chunk539981.description,
                      type: Chunk481060.geA.DESCRIPTION,
                      children: Chunk388032.intl.string(Chunk388032.t.IBi6h4)
                    }), (0, Chunk255367.jsx)(Chunk755721.iS, {
                      value: null !== Chunk852860.description ? Chunk852860.description : "",
                      placeholder: Chunk388032.intl.string(Chunk388032.t.rFa9Ul),
                      onChange: e => {
                        var t;
                        _.Z.updateGuild({
                          description: null != (t = null == e ? true : e.replaceAll("\n", "")) ? t : ""
                        })
                      },
                      maxLength: 120,
                      disabled: !Z
                    })]
                  }), (0, Chunk255367.jsx)(Chunk481060.$i$, {
                    className: Chunk539981.divider
                  }), (() => {
                    if (null == A) return null;
                    let e = 0 === A.reasonsToJoin.length ? [, , , , ].fill({
                      reason: "",
                      emoji_name: null
                    }) : A.reasonsToJoin;
                    return (0, Chunk255367.jsxs)(Chunk481060.hjN, {
                      children: [(0, Chunk255367.jsx)(Chunk481060.vwX, {
                        className: Chunk539981.formTitle,
                        children: Chunk388032.intl.string(Chunk388032.t.vUmXsb)
                      }), (0, Chunk255367.jsx)(Chunk481060.R94, {
                        type: Chunk481060.geA.DESCRIPTION,
                        className: Chunk539981.description,
                        children: Chunk388032.intl.string(Chunk388032.t.esnBnZ)
                      }), (0, Chunk255367.jsx)("div", {
                        className: Chunk539981.reasonToJoin,
                        children: (0, Chunk255367.jsx)(Chunk190287.Z, {
                          reasonMinLength: 10,
                          reasonMaxLength: 128,
                          guildId: Chunk852860.id,
                          reasons: module
                        })
                      }), (null == W ? true : W.reasons_to_join) != null ? (0, Chunk255367.jsx)(Chunk481060.Text, {
                        color: "text-danger",
                        variant: "text-sm/normal",
                        children: W.reasons_to_join
                      }) : null]
                    })
                  })(), (0, Chunk255367.jsx)(Chunk481060.$i$, {
                    className: Chunk539981.divider
                  }), (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
                    children: [(0, Chunk255367.jsxs)(Chunk481060.hjN, {
                      children: [(0, Chunk255367.jsx)(Chunk481060.vwX, {
                        className: Chunk539981.formTitle,
                        children: Chunk388032.intl.string(Chunk388032.t["lu+BmJ"])
                      }), (0, Chunk255367.jsx)(Chunk481060.R94, {
                        className: Chunk539981.description,
                        type: Chunk481060.geA.DESCRIPTION,
                        children: Chunk388032.intl.string(Chunk388032.t.ozSi8v)
                      }), (0, Chunk255367.jsx)(Chunk755721.iS, {
                        showCharacterCount: true,
                        className: Chunk539981.textArea,
                        value: A.about,
                        placeholder: Chunk388032.intl.string(Chunk388032.t.TduTbm),
                        onChange: e => {
                          (0, p.mA)(u.id, e)
                        },
                        minLength: 300,
                        maxLength: 2400,
                        disabled: !Z,
                        defaultDirty: (null == (e = A.about) ? true : module.length) > 0
                      }, "text-area-".concat(D))]
                    }), (null == W ? true : W.about) != null ? (0, Chunk255367.jsx)(Chunk481060.Text, {
                      color: "text-danger",
                      variant: "text-sm/normal",
                      children: W.about
                    }) : null]
                  }), (0, Chunk255367.jsx)(Chunk481060.$i$, {
                    className: Chunk539981.divider
                  }), (0, Chunk255367.jsxs)(Chunk481060.hjN, {
                    children: [(0, Chunk255367.jsx)(Chunk481060.vwX, {
                      className: Chunk539981.formTitle,
                      children: Chunk388032.intl.string(Chunk388032.t.V5mNyc)
                    }), (0, Chunk255367.jsx)(Chunk481060.R94, {
                      className: Chunk539981.description,
                      type: Chunk481060.geA.DESCRIPTION,
                      children: Chunk388032.intl.string(Chunk388032.t.d3kA9f)
                    }), A.socialLinks.map((e, t) => (0, r.jsxs)("div", {
                      className: T.socialLinksContainer,
                      onMouseOver: () => X(t, true),
                      onFocus: () => X(t, true),
                      onMouseOut: () => X(t, false),
                      onBlur: () => X(t, false),
                      children: [(0, r.jsx)(o.q4e, {
                        className: A.isPublished ? T.socialLinksDropdownMax : T.socialLinksDropdownMin,
                        options: (e => {
                          let t = Object.entries(I.z).filter(e => !H.includes(e[1].presentation)).map(e => ({
                            label: e[1].presentation,
                            value: e[0]
                          }));
                          return null == e || "" === e ? t : t.concat({
                            label: e,
                            value: e
                          })
                        })(H[t]),
                        placeholder: S.intl.string(S.t.xSALIC),
                        value: H[t],
                        onChange: e => ((e, t) => {
                          let n = [...A.socialLinks],
                            r = [...H],
                            i = [...L];
                          r[t] = e, n[t] = I.z[e].baseUrl, i[t] = true, M(i), z(r), U(i.every(e => true === e)), (0, p.t$)(u.id, n)
                        })(e, t),
                        isDisabled: !Z
                      }, "dropdown-" + t), (0, r.jsx)(s.Is, {
                        value: e,
                        className: A.isPublished ? T.socialLinksMax : T.socialLinksMin,
                        onChange: e => ((e, t) => {
                          let n = [...A.socialLinks],
                            r = n[t],
                            i = e;
                          0 === r.length && i.length > 1 && false === RegExp("^https?:").test(i) && (i = "https://" + i), /\.(zip|exe|pdf|dmg|msi|apk|rar|7z|tar|gz|iso|docx?|xlsx?|pptx?|mp4|mp3)$/i.test(i) || (n[t] = i, (0, p.t$)(u.id, n))
                        })(e, t),
                        placeholder: S.intl.string(S.t.Q6o4pK),
                        maxLength: 150,
                        disabled: !Z
                      }, "link-" + t), L[t] ? (0, r.jsx)(o.owK, {
                        size: "custom",
                        className: A.isPublished ? T.validationButtonMax : T.validationButtonMin,
                        color: a.Z.unsafe_rawColors.GREEN_230.css,
                        width: 20,
                        height: 20
                      }, "validation-passed-" + t) : (0, r.jsx)(o.k$p, {
                        size: "custom",
                        className: A.isPublished ? T.validationButtonMax : T.validationButtonMin,
                        color: a.Z.unsafe_rawColors.RED_400.css,
                        width: 20,
                        height: 20
                      }, "validation-failed-" + t), Z && (0, r.jsx)(c.Z, {
                        className: B[t] ? A.isPublished ? T.deleteButtonMax : T.deleteButtonMin : A.isPublished ? T.deleteButtonHiddenMax : T.deleteButtonHiddenMin,
                        onClick: () => (e => {
                          let t = [...B];
                          t.splice(e, 1), F(t);
                          let n = [...L];
                          n.splice(e, 1), M(n);
                          let r = [...H];
                          r.splice(e, 1), z(r);
                          let i = [...A.socialLinks];
                          i.splice(e, 1), (0, p.t$)(u.id, i)
                        })(t)
                      }, "delete-button-" + t)]
                    }, "social-container-" + t)), (null == W ? true : W.social_links) != null ? (0, Chunk255367.jsx)(Chunk481060.Text, {
                      color: "text-danger",
                      variant: "text-sm/normal",
                      children: W.social_links
                    }) : null, (0, Chunk255367.jsx)(Chunk481060.zxk, {
                      variant: "secondary",
                      size: "sm",
                      text: Chunk388032.intl.string(Chunk388032.t.QvovjY),
                      onClick: () => {
                        if (A.socialLinks.length < 9) {
                          let e = [...A.socialLinks];
                          (0, Chunk456268.t$)(Chunk852860.id, module.concat("")), z(H.concat(""))
                        }
                      },
                      disabled: !Z || A.socialLinks.length >= 9
                    })]
                  }), A.isPublished && (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
                    children: [(0, Chunk255367.jsx)(Chunk481060.$i$, {
                      className: Chunk539981.divider
                    }), (0, Chunk255367.jsxs)(Chunk481060.hjN, {
                      children: [(0, Chunk255367.jsx)(Chunk481060.vwX, {
                        className: Chunk539981.formTitle,
                        children: Chunk388032.intl.string(Chunk388032.t["5yF7e3"])
                      }), (0, Chunk255367.jsx)(Chunk481060.R94, {
                        className: Chunk539981.description,
                        type: Chunk481060.geA.DESCRIPTION,
                        children: Chunk388032.intl.string(Chunk388032.t.eOFvqa)
                      }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
                        variant: "critical-primary",
                        size: "sm",
                        text: Chunk388032.intl.string(Chunk388032.t["DCHd/P"]),
                        onClick: () => Y(false),
                        disabled: !Z
                      })]
                    })]
                  }), (null == W ? true : W.is_published) != null ? (0, Chunk255367.jsx)(Chunk481060.Text, {
                    color: "text-danger",
                    variant: "text-sm/normal",
                    children: W.is_published
                  }) : null]
                }), !A.isPublished && (0, Chunk255367.jsx)("div", {
                  className: Chunk539981.checklist,
                  children: (0, Chunk255367.jsx)(Chunk970061.Z, {
                    title: Chunk388032.intl.string(Chunk388032.t["2kCyn5"]),
                    children: q,
                    buttonLabel: Chunk388032.intl.string(Chunk388032.t.tVK6S0),
                    buttonCallback: () => Y(true),
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
  Z = () => null == (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()) ? null : (0, Chunk255367.jsx)(R, {})