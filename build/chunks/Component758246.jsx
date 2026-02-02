/** Chunk was on 39048 **/
/** chunk id: 758246, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => P,
  j: () => C
}), require("./228524.js"), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./747238.js"), require("./812715.js"), require("./866193.js"), require("./591487.js"), require("./727858.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js");
require("./516773.js");
var Chunk311907 = require("./311907.js"),
  Chunk36525 = require("./36525.jsx"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk416052 = require("./416052.jsx"),
  Chunk611371 = require("./611371.jsx"),
  Chunk938925 = require("./938925.jsx"),
  Chunk460760 = require("./460760.js"),
  Chunk776231 = require("./776231.js"),
  Chunk946274 = require("./946274.jsx"),
  Chunk342298 = require("./342298.jsx"),
  Chunk576705 = require("./576705.js"),
  Chunk486020 = require("./486020.js"),
  Chunk975571 = require("./975571.js"),
  Chunk997509 = require("./997509.js"),
  Chunk555337 = require("./555337.js"),
  Chunk458907 = require("./458907.jsx"),
  Chunk719175 = require("./719175.jsx"),
  Chunk643674 = require("./643674.jsx"),
  Chunk156057 = require("./156057.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk628080 = require("./628080.js");
let I = "https:" + window.GLOBAL_ENV.MARKETING_ENDPOINT + "/servers/",
  C = () => {
    let {
      guild: e,
      guildMetadata: t,
      submitting: n
    } = (0, l.cf)([_.A], () => ({
      submitting: _.A.isSubmitting(),
      guild: _.A.getGuild(),
      guildMetadata: _.A.getMetadata()
    }));
    return (0, r.jsx)(s.A, {
      submitting: n,
      onReset: () => {
        null != e && j.A.init(e.id)
      },
      onSave: () => {
        null != e && (j.A.saveGuild(e.id, {
          discoverySplash: e.discoverySplash,
          description: e.description
        }), (0, g.Oh)({
          guildId: e.id,
          primaryCategoryId: t.primaryCategoryId,
          keywords: t.keywords,
          emojiDiscoverabilityEnabled: t.emojiDiscoverabilityEnabled,
          partnerActionedTimestamp: t.partnerActionedTimestamp,
          partnerApplicationTimestamp: t.partnerApplicationTimestamp,
          isPublished: t.isPublished,
          reasonsToJoin: t.reasonsToJoin,
          socialLinks: t.socialLinks.filter(e => e),
          about: t.about
        }))
      }
    })
  },
  T = () => {
    var e;
    let t = i.useRef(null),
      s = (0, l.bG)([_.A], () => _.A.getGuild()),
      [C, T] = i.useState(false);
    i.useEffect(() => {
      C || null == s || ((0, g.Mu)(), (0, g.mo)(s.id), (0, g.ax)(s.id), T(true))
    }, [s, C]);
    let {
      canManageGuild: P
    } = (0, l.cf)([h.A], () => ({
      canManageGuild: h.A.can(E.xBc.MANAGE_GUILD, s)
    })), w = (0, l.bG)([_.A], () => _.A.isGuildMetadataLoaded()), R = (0, l.bG)([_.A], () => null != s ? _.A.getMetadata() : null), D = (0, l.bG)([_.A], () => null != s && (null == R ? true : R.isPublished) ? _.A.getSlug() : null), [G, L] = i.useState([true]), [k, M] = i.useState(true), [U, B] = i.useState([false]), [F, H] = i.useState([""]);
    i.useEffect(() => {
      if (null !== R) {
        let e = [],
          t = [];
        R.socialLinks.forEach((n, r) => {
          if ("" !== n) {
            let i = (e => {
              try {
                var t, n, r, i;
                let l = new URL(e).hostname.split(".");
                if (3 === l.length && "bandcamp" === l[1].toLowerCase()) return A.x.bandcamp.presentation;
                let s = null != (t = null == (n = l.shift()) ? true : n.toLowerCase()) ? t : "";
                if ("www" === s && (s = null != (r = null == (i = l.shift()) ? true : i.toLowerCase()) ? r : ""), s in A.x) return A.x[s].presentation;
                return null
              } catch (e) {
                return null
              }
            })(n);
            null !== i ? (t[r] = i, e[r] = true) : e[r] = false
          } else e[r] = true
        }), H(t), L(e), M(e.every(e => true === e))
      }
    }, [R]);
    let V = (0, l.bG)([_.A], () => null != s ? _.A.getErrors() : null);
    if (null == s || null == R) return null;
    let K = e => {
        j.A.updateGuild({
          discoverySplash: e
        })
      },
      z = e => {
        let t = () => {
          (0, g.Ok)(s.id, e), e ? (0, g.Oh)({
            guildId: s.id,
            primaryCategoryId: R.primaryCategoryId,
            keywords: R.keywords,
            emojiDiscoverabilityEnabled: R.emojiDiscoverabilityEnabled,
            partnerActionedTimestamp: R.partnerActionedTimestamp,
            partnerApplicationTimestamp: R.partnerApplicationTimestamp,
            isPublished: true,
            reasonsToJoin: R.reasonsToJoin,
            socialLinks: R.socialLinks,
            about: R.about
          }) : (0, g.Oh)({
            guildId: s.id,
            primaryCategoryId: R.primaryCategoryId,
            keywords: R.keywords,
            emojiDiscoverabilityEnabled: R.emojiDiscoverabilityEnabled,
            partnerActionedTimestamp: R.partnerActionedTimestamp,
            partnerApplicationTimestamp: R.partnerApplicationTimestamp,
            isPublished: false,
            reasonsToJoin: R.reasonsToJoin,
            socialLinks: R.socialLinks,
            about: R.about
          }), j.A.saveGuild(s.id, {
            discoverySplash: s.discoverySplash,
            description: s.description
          })
        };
        e ? t() : null != s.vanityURLCode ? n.e("63983").then(n.bind(n, 256050)).then(e => {
          e.default.open(t)
        }) : t()
      },
      W = e => {
        let {
          reason: t = "",
          emoji_name: n = ""
        } = e;
        return null !== t && t.length >= 10 && t.length <= 128 && null !== n
      },
      Y = [{
        title: N.intl.string(N.t["/SWsH3"]),
        items: [{
          description: N.intl.string(N.t.DU8jF2),
          completed: null !== s.discoverySplash && "" !== s.discoverySplash
        }, {
          description: N.intl.string(N.t.SW5OH6),
          completed: null !== s.description && "" !== s.description
        }, {
          description: N.intl.string(N.t.m3b3WL),
          completed: null !== R.about && R.about.length >= 300 && R.about.length <= 2400
        }, {
          description: N.intl.string(N.t.qpx5MN),
          completed: null !== R.reasonsToJoin && R.reasonsToJoin.every(e => (e => {
            let {
              reason: t = "",
              emoji_name: n = ""
            } = e;
            return (null === t || "" === t) && null === n
          })(e) || W(e)) && R.reasonsToJoin.filter(W).length >= 2
        }]
      }],
      X = (e, t) => {
        let n = [...U];
        n[e] = t, B(n)
      };
    return (0, r.jsx)("div", {
      className: S.ed,
      children: (0, r.jsx)("div", {
        className: S.V1,
        children: (0, r.jsx)(o.ArX, {
          className: S.iL,
          children: (0, r.jsx)("main", {
            ref: t,
            className: S.z1,
            children: (0, r.jsx)(o.xpW, {
              containerRef: t,
              children: (0, r.jsxs)("div", {
                className: S.kL,
                children: [(0, r.jsxs)("div", {
                  className: S.rb,
                  children: [(0, r.jsxs)(o.Heading, {
                    variant: "heading-lg/semibold",
                    children: [N.intl.string(N.t.kGlQGF), (0, r.jsx)(d.A, {
                      className: S.TN
                    })]
                  }), (0, r.jsxs)(o.Text, {
                    variant: "text-sm/normal",
                    className: S.NG,
                    children: [N.intl.format(N.t["+ScrMf"], {
                      discordURL: window.GLOBAL_ENV.MARKETING_ENDPOINT
                    }), " ", N.intl.format(N.t.T6WtKw, {
                      learnMoreURL: x.A.getArticleURL(E.MVz.SERVER_WEB_PAGES)
                    })]
                  }), (0, r.jsxs)(o.BJc, {
                    gap: 40,
                    children: [(() => {
                      if (!R.isPublished || null == D) return;
                      let e = I + D;
                      return (0, r.jsxs)(o.BJc, {
                        gap: 16,
                        children: [(0, r.jsx)(o.D0$, {
                          label: N.intl.string(N.t.safBZ9),
                          children: (0, r.jsx)(c.A, {
                            value: e
                          })
                        }), (0, r.jsx)(o.Button, {
                          variant: "primary",
                          size: "sm",
                          text: N.intl.string(N.t.NI8iGI),
                          onClick: () => window.open(e)
                        })]
                      })
                    })(), (0, r.jsx)(o.cGx, {}), (() => {
                      if (null != s) return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(O.T, {
                          label: N.intl.string(N.t.GjPpSu),
                          description: N.intl.string(N.t.MVXonM),
                          guildId: s.id,
                          guildMetadata: R,
                          isDisabled: !P
                        }), (0, r.jsx)(v.A, {
                          label: N.intl.string(N.t.oOPlPA),
                          guild: s,
                          guildMetadata: R,
                          disabled: !P
                        }), (null == V ? true : V.category) != null ? (0, r.jsx)(o.Text, {
                          color: "text-feedback-critical",
                          className: S.z3,
                          variant: "text-sm/normal",
                          children: V.category
                        }) : null]
                      })
                    })(), (0, r.jsx)(o.cGx, {}), (() => {
                      if (null != s) return (0, r.jsx)(o.D0$, {
                        label: N.intl.string(N.t["8bT/Cu"]),
                        description: N.intl.string(N.t.WCWT7A),
                        errorMessage: (null == V ? true : V.discovery_splash) != null ? V.discovery_splash : true,
                        layout: "horizontal",
                        children: (0, r.jsxs)(o.BJc, {
                          gap: 16,
                          children: [(0, r.jsx)(f.A, {
                            image: s.discoverySplash,
                            makeURL: e => b.Ay.getGuildDiscoverySplashURL({
                              id: s.id,
                              splash: e,
                              size: 512 * (0, m.mZ)()
                            }),
                            disabled: !P,
                            onChange: K,
                            hint: N.intl.string(N.t.uPvxqJ),
                            imageClassName: S.$U,
                            hideSize: true
                          }), (0, r.jsxs)(a.$n, {
                            size: a.$n.Sizes.SMALL,
                            color: a.$n.Colors.PRIMARY,
                            children: [N.intl.string(N.t.yG2pUi), (0, r.jsx)(p.Ay, {
                              disabled: !P,
                              onChange: K
                            })]
                          })]
                        })
                      })
                    })(), (0, r.jsx)(o.cGx, {}), (0, r.jsx)(o.fs1, {
                      label: N.intl.string(N.t["RSfm+i"]),
                      description: N.intl.string(N.t.IBi6hz),
                      value: null !== s.description ? s.description : "",
                      placeholder: N.intl.string(N.t.rFa9Ui),
                      onChange: e => {
                        var t;
                        j.A.updateGuild({
                          description: null != (t = null == e ? true : e.replaceAll("\n", "")) ? t : ""
                        })
                      },
                      maxLength: 300,
                      disabled: !P
                    }), (0, r.jsx)(o.cGx, {}), (() => {
                      if (null == R) return null;
                      let e = 0 === R.reasonsToJoin.length ? [, , , , ].fill({
                        reason: "",
                        emoji_name: null
                      }) : R.reasonsToJoin;
                      return (0, r.jsx)(o.D0$, {
                        label: N.intl.string(N.t.vUmXsR),
                        description: N.intl.string(N.t.esnBnW),
                        errorMessage: (null == V ? true : V.reasons_to_join) != null ? V.reasons_to_join : true,
                        children: (0, r.jsx)(y.A, {
                          reasonMinLength: 10,
                          reasonMaxLength: 128,
                          guildId: s.id,
                          reasons: e
                        })
                      })
                    })(), (0, r.jsx)(o.cGx, {}), (0, r.jsx)(o.fs1, {
                      label: N.intl.string(N.t["lu+BmJ"]),
                      description: N.intl.string(N.t.ozSi8g),
                      error: (null == V ? true : V.about) != null ? V.about : true,
                      showCharacterCount: true,
                      rows: 10,
                      value: R.about,
                      placeholder: N.intl.string(N.t.TduTbs),
                      onChange: e => {
                        (0, g.xN)(s.id, e)
                      },
                      minLength: 300,
                      maxLength: 2400,
                      disabled: !P,
                      defaultDirty: (null == (e = R.about) ? true : e.length) > 0
                    }, "text-area-".concat(w)), (0, r.jsx)(o.cGx, {}), (0, r.jsxs)(o.D0$, {
                      label: N.intl.string(N.t.V5mNyb),
                      description: N.intl.string(N.t.d3kA9a),
                      errorMessage: (null == V ? true : V.social_links) != null ? V.social_links : true,
                      children: [R.socialLinks.map((e, t) => {
                        var n;
                        let i, l = F[t],
                          a = Object.values(A.x).find(e => e.presentation === l),
                          c = null != a ? "".concat(a.baseUrl) : true;
                        return (0, r.jsxs)("div", {
                          className: S.Au,
                          onMouseOver: () => X(t, true),
                          onFocus: () => X(t, true),
                          onMouseOut: () => X(t, false),
                          onBlur: () => X(t, false),
                          children: [(0, r.jsx)(o.l6P, {
                            selectionMode: "single",
                            options: (n = F[t], i = Object.entries(A.x).filter(e => !F.includes(e[1].presentation)).map(e => ({
                              id: e[0],
                              label: e[1].presentation,
                              value: e[0]
                            })), null == n || "" === n ? i : i.concat({
                              id: n,
                              label: n,
                              value: n
                            })),
                            label: N.intl.string(N.t.xSALIK),
                            hideLabel: true,
                            placeholder: N.intl.string(N.t.xSALIK),
                            value: F[t],
                            onSelectionChange: e => {
                              let n, r, i;
                              return n = [...R.socialLinks], r = [...F], i = [...G], void(r[t] = e, n[t] = A.x[e].baseUrl, i[t] = true, L(i), H(r), M(i.every(e => true === e)), (0, g.uh)(s.id, n))
                            },
                            disabled: !P
                          }), (0, r.jsx)(o.ksK, {
                            value: e.replace(null != c ? c : "", ""),
                            onChange: e => {
                              var n;
                              let r, i, l;
                              return n = "".concat(c).concat(e), i = (r = [...R.socialLinks])[t], l = n, 0 === i.length && l.length > 1 && false === RegExp("^https?:").test(l) && (l = "https://" + l), void(!/\.(zip|exe|pdf|dmg|msi|apk|rar|7z|tar|gz|iso|docx?|xlsx?|pptx?|mp4|mp3)$/i.test(l) && (r[t] = l, (0, g.uh)(s.id, r)))
                            },
                            placeholder: null != c ? true : N.intl.string(N.t.Q6o4pJ),
                            maxLength: 150,
                            disabled: !P || null == F[t],
                            fullWidth: true,
                            leading: c,
                            trailing: P ? {
                              icon: o.ucK,
                              "aria-label": N.intl.string(N.t.N86XcP),
                              onClick: () => {
                                let e, n, r, i;
                                return (e = [...U]).splice(t, 1), B(e), (n = [...G]).splice(t, 1), L(n), (r = [...F]).splice(t, 1), H(r), void((i = [...R.socialLinks]).splice(t, 1), (0, g.uh)(s.id, i))
                              }
                            } : true
                          })]
                        }, "social-container-" + t)
                      }), (null == V ? true : V.social_links) != null ? (0, r.jsx)(o.Text, {
                        color: "text-feedback-critical",
                        variant: "text-sm/normal",
                        children: V.social_links
                      }) : null, (0, r.jsx)(o.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: N.intl.string(N.t.Qvovjc),
                        onClick: () => {
                          if (R.socialLinks.length < 9) {
                            let e = [...R.socialLinks];
                            (0, g.uh)(s.id, e.concat("")), H(F.concat(""))
                          }
                        },
                        disabled: !P || R.socialLinks.length >= 9
                      })]
                    }), R.isPublished && (0, r.jsxs)(r.Fragment, {
                      children: [(0, r.jsx)(o.cGx, {}), (0, r.jsx)(o.D0$, {
                        label: N.intl.string(N.t["5yF7e1"]),
                        description: N.intl.string(N.t.eOFvqT),
                        children: (0, r.jsx)(o.Button, {
                          variant: "critical-primary",
                          size: "sm",
                          text: N.intl.string(N.t["DCHd/G"]),
                          onClick: () => z(false),
                          disabled: !P
                        })
                      })]
                    }), (null == V ? true : V.is_published) != null ? (0, r.jsx)(o.Text, {
                      color: "text-feedback-critical",
                      variant: "text-sm/normal",
                      children: V.is_published
                    }) : null]
                  })]
                }), !R.isPublished && (0, r.jsx)("div", {
                  className: S.D4,
                  children: (0, r.jsx)(u.A, {
                    title: N.intl.string(N.t["2kCyn/"]),
                    children: Y,
                    buttonLabel: N.intl.string(N.t.tVK6S9),
                    buttonCallback: () => z(true),
                    disabled: !P || !k
                  })
                })]
              })
            })
          })
        })
      })
    })
  },
  P = () => null == (0, l.bG)([_.A], () => _.A.getGuild()) ? null : (0, r.jsx)(T, {})