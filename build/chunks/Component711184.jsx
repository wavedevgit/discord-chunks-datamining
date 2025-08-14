/** Chunk was on 83264 **/
/** chunk id: 711184, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => k
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk215569 = require("./215569.js"),
  Chunk481060 = require("./481060.js"),
  Chunk401190 = require("./401190.js"),
  Chunk490529 = require("./490529.js"),
  Chunk57875 = require("./57875.jsx"),
  Chunk368003 = require("./368003.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk204699 = require("./204699.js"),
  Chunk197571 = require("./197571.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let j = e => (0, r.jsx)("div", {
    className: m.innerContentWrapper,
    children: e.children
  }),
  f = {
    [Chunk981631.gkr.HOUSE_1]: require("./530530.js"),
    [Chunk981631.gkr.HOUSE_2]: require("./230651.js"),
    [Chunk981631.gkr.HOUSE_3]: require("./497494.js")
  },
  y = {
    [Chunk981631.gkr.HOUSE_1]: Chunk204699.quizResultLogoWrapperHouse1,
    [Chunk981631.gkr.HOUSE_2]: Chunk204699.quizResultLogoWrapperHouse2,
    [Chunk981631.gkr.HOUSE_3]: Chunk204699.quizResultLogoWrapperHouse3
  };
class S extends Chunk73800.Component {
  getSelectedHouseID() {
    let e, {
        responses: t
      } = this.state,
      n = {},
      r = 0;
    return (Object.keys(exports).forEach(s => {
      let i = t[s];
      null == n[i] && (n[i] = 0), n[i]++, n[i] > r && (e = i, r = n[i])
    }), null == module || module === Chunk981631.jsM) ? (0, Chunk490529.uj)() : module
  }
  renderUnknownErrorMessage() {
    return (0, Chunk255367.jsx)(Chunk57875.Z, {
      children: (0, Chunk255367.jsxs)(Chunk73800.Fragment, {
        children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
          className: Chunk204699.quizResultHeading,
          variant: "heading-xl/semibold",
          children: Chunk388032.intl.string(Chunk388032.t["8A8ry8"])
        }), (0, Chunk255367.jsx)(Chunk481060.Text, {
          variant: "text-sm/normal",
          children: Chunk388032.intl.format(Chunk388032.t["4JWDXl"], {
            emailAddress: "hypesquad@".concat(Chunk981631.U9i),
            emailAddressLink: "mailto:hypesquad@".concat(Chunk981631.U9i)
          })
        })]
      })
    }, "error")
  }
  renderQuizResult() {
    let {
      selectedHouse: e
    } = this.state;
    if (null == module) return null;
    let t = Chunk388032.intl.formatToPlainString(Chunk388032.t.HrcQAA, {
      house: (0, Chunk490529.X8)(module)
    });
    return (0, Chunk255367.jsx)(Chunk57875.Z, {
      children: (0, Chunk255367.jsxs)(Chunk73800.Fragment, {
        children: [(0, Chunk255367.jsx)("div", {
          className: o()(Chunk204699.quizResultLogoWrapper, y[module], Chunk197571.marginBottom20),
          children: (0, Chunk255367.jsx)("img", {
            alt: exports,
            className: Chunk204699.quizResultLogo,
            src: f[module]
          })
        }), (0, Chunk255367.jsx)(Chunk481060.X6q, {
          className: Chunk204699.quizResultHeading,
          variant: "heading-xl/semibold",
          children: exports
        }), (0, Chunk255367.jsx)(Chunk481060.Text, {
          className: Chunk204699.quizResultBody,
          variant: "text-sm/normal",
          children: {
            [Chunk981631.gkr.HOUSE_1]: Chunk388032.intl.string(Chunk388032.t["hNL/nJ"]),
            [Chunk981631.gkr.HOUSE_2]: Chunk388032.intl.string(Chunk388032.t.jVomur),
            [Chunk981631.gkr.HOUSE_3]: Chunk388032.intl.string(Chunk388032.t["+kg5zs"])
          } [module]
        })]
      })
    }, "submit-step")
  }
  renderContent() {
    let {
      currentStep: e,
      hasUnknownError: t,
      hasSubmittedHouse: n,
      questions: s
    } = this.state;
    if (exports) return this.renderUnknownErrorMessage();
    if (require) return this.renderQuizResult();
    let i = Chunk73800[module];
    return (0, Chunk255367.jsx)(Chunk57875.Z, {
      children: (0, Chunk255367.jsx)(Chunk368003.Z, {
        onSelect: this.handleQuestionSelect,
        options: Chunk120356.options,
        prompt: Chunk120356.prompt
      }, module)
    }, module)
  }
  renderHeaderCopy() {
    let {
      currentStep: e,
      hasUnknownError: t,
      hasSubmittedHouse: n,
      questions: r
    } = this.state;
    return exports ? Chunk388032.intl.string(Chunk388032.t.fMgJMz) : require ? Chunk388032.intl.string(Chunk388032.t.mW2CNz) : Chunk388032.intl.formatToPlainString(Chunk388032.t["4n8Pb2"], {
      currentQuestion: module + 1,
      questionCount: Chunk255367.length
    })
  }
  renderNewsletterWarning() {
    return (0, Chunk255367.jsx)(Chunk57875.Z, {
      children: (0, Chunk255367.jsx)(Chunk481060.Text, {
        className: Chunk204699.nameFormPreface,
        variant: "text-md/normal",
        children: Chunk388032.intl.string(Chunk388032.t["3kUvgo"])
      })
    })
  }
  renderPrimaryAction() {
    let {
      currentStep: e,
      responses: t,
      hasUnknownError: n,
      hasSubmittedHouse: s,
      isRequestPending: i,
      questions: o
    } = this.state, a = null == exports[module];
    return require ? (0, Chunk255367.jsx)(Chunk481060.zxk, {
      variant: "primary",
      text: Chunk388032.intl.string(Chunk388032.t["5BGOBA"]),
      type: "submit",
      onClick: this.handleSubmitButtonClick,
      loading: Chunk120356
    }) : Chunk73800 ? (0, Chunk255367.jsx)(Chunk481060.zxk, {
      variant: "primary",
      text: Chunk388032.intl.string(Chunk388032.t["Wc/k5O"]),
      type: "submit",
      onClick: this.props.onClose
    }) : module === o.length - 1 ? (0, Chunk255367.jsx)(Chunk481060.zxk, {
      variant: "primary",
      text: Chunk388032.intl.string(Chunk388032.t.j5vHo6),
      disabled: Chunk215569,
      type: "submit",
      onClick: this.handleSubmitButtonClick,
      loading: Chunk120356
    }) : (0, Chunk255367.jsx)(Chunk481060.zxk, {
      variant: "primary",
      text: Chunk388032.intl.string(Chunk388032.t.cgonQE),
      disabled: Chunk215569,
      type: "submit",
      onClick: this.handleNextQuestionButtonClick
    })
  }
  renderSecondaryAction() {
    let {
      hasSubmittedHouse: e
    } = this.state;
    return module ? null : (0, Chunk255367.jsx)(Chunk481060.zxk, {
      variant: "secondary",
      text: Chunk388032.intl.string(Chunk388032.t["5NfNYm"]),
      type: "button",
      onClick: this.props.onClose
    })
  }
  render() {
    let {
      selectedHouse: e
    } = this.state, {
      transitionState: t
    } = this.props;
    return (0, Chunk255367.jsxs)(Chunk481060.Y0X, {
      size: null == module ? Chunk481060.CgR.MEDIUM : Chunk481060.CgR.SMALL,
      transitionState: exports,
      parentComponent: "HouseSelectionModal",
      children: [(0, Chunk255367.jsx)(Chunk481060.xBx, {
        separator: false,
        children: (0, Chunk255367.jsx)(Chunk481060.X6q, {
          variant: "heading-lg/semibold",
          children: this.renderHeaderCopy()
        })
      }), (0, Chunk255367.jsx)("div", {
        className: Chunk204699.outerContentWrapper,
        children: (0, Chunk255367.jsx)(Chunk215569.W, {
          component: j,
          children: this.renderContent()
        })
      }), (0, Chunk255367.jsxs)(Chunk481060.mzw, {
        children: [this.renderPrimaryAction(), this.renderSecondaryAction()]
      })]
    })
  }
  constructor(...e) {
    super(...e), b(this, "state", {
      currentStep: 0,
      hasSubmittedHouse: false,
      hasUnknownError: false,
      isRequestPending: false,
      questions: (0, p.tI)(),
      responses: {},
      selectedHouse: null
    }), b(this, "handleQuestionSelect", e => {
      this.setState(t => ({
        responses: function(e, t) {
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
        }(function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              b(e, t, n[t])
            })
          }
          return e
        }({}, t.responses), {
          [t.currentStep]: e
        })
      }))
    }), b(this, "handleSubmitButtonClick", () => {
      let e = this.getSelectedHouseID();
      this.setState({
        isRequestPending: true
      }, () => {
        u.Z.joinHypeSquadOnline({
          houseID: e
        }).then(() => {
          this.setState({
            hasUnknownError: false,
            hasSubmittedHouse: true,
            isRequestPending: false,
            selectedHouse: e
          })
        }).catch(() => {
          this.setState({
            hasUnknownError: true,
            hasSubmittedHouse: false,
            isRequestPending: false
          })
        })
      })
    }), b(this, "handleKeyDown", e => {
      e.keyCode === h.yXg.ENTER && this.handleSubmitButtonClick()
    }), b(this, "handleNextQuestionButtonClick", () => {
      this.setState(e => ({
        currentStep: e.currentStep + 1
      }))
    })
  }
}
let k = S