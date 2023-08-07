(() => {
    var __webpack_modules__ = {
        711: function(module) {
            !function(e, t) {
                true ? module.exports = t() : 0;
            }(0, (function() {
                return function(e) {
                    function t(o) {
                        if (n[o]) return n[o].exports;
                        var i = n[o] = {
                            exports: {},
                            id: o,
                            loaded: !1
                        };
                        return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports;
                    }
                    var n = {};
                    return t.m = e, t.c = n, t.p = "dist/", t(0);
                }([ function(e, t, n) {
                    "use strict";
                    function o(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var i = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                        }
                        return e;
                    }, r = n(1), a = (o(r), n(6)), u = o(a), c = n(7), s = o(c), f = n(8), d = o(f), l = n(9), p = o(l), m = n(10), b = o(m), v = n(11), y = o(v), g = n(14), h = o(g), w = [], k = !1, x = {
                        offset: 120,
                        delay: 0,
                        easing: "ease",
                        duration: 400,
                        disable: !1,
                        once: !1,
                        startEvent: "DOMContentLoaded",
                        throttleDelay: 99,
                        debounceDelay: 50,
                        disableMutationObserver: !1
                    }, j = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (e && (k = !0), k) return w = (0, y.default)(w, x), (0, b.default)(w, x.once), 
                        w;
                    }, O = function() {
                        w = (0, h.default)(), j();
                    }, M = function() {
                        w.forEach((function(e, t) {
                            e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), 
                            e.node.removeAttribute("data-aos-delay");
                        }));
                    }, S = function(e) {
                        return e === !0 || "mobile" === e && p.default.mobile() || "phone" === e && p.default.phone() || "tablet" === e && p.default.tablet() || "function" == typeof e && e() === !0;
                    }, _ = function(e) {
                        x = i(x, e), w = (0, h.default)();
                        var t = document.all && !window.atob;
                        return S(x.disable) || t ? M() : (x.disableMutationObserver || d.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), 
                        x.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", x.easing), 
                        document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), 
                        "DOMContentLoaded" === x.startEvent && [ "complete", "interactive" ].indexOf(document.readyState) > -1 ? j(!0) : "load" === x.startEvent ? window.addEventListener(x.startEvent, (function() {
                            j(!0);
                        })) : document.addEventListener(x.startEvent, (function() {
                            j(!0);
                        })), window.addEventListener("resize", (0, s.default)(j, x.debounceDelay, !0)), 
                        window.addEventListener("orientationchange", (0, s.default)(j, x.debounceDelay, !0)), 
                        window.addEventListener("scroll", (0, u.default)((function() {
                            (0, b.default)(w, x.once);
                        }), x.throttleDelay)), x.disableMutationObserver || d.default.ready("[data-aos]", O), 
                        w);
                    };
                    e.exports = {
                        init: _,
                        refresh: j,
                        refreshHard: O
                    };
                }, function(e, t) {}, , , , , function(e, t) {
                    (function(t) {
                        "use strict";
                        function n(e, t, n) {
                            function o(t) {
                                var n = b, o = v;
                                return b = v = void 0, k = t, g = e.apply(o, n);
                            }
                            function r(e) {
                                return k = e, h = setTimeout(f, t), M ? o(e) : g;
                            }
                            function a(e) {
                                var n = e - w, o = e - k, i = t - n;
                                return S ? j(i, y - o) : i;
                            }
                            function c(e) {
                                var n = e - w, o = e - k;
                                return void 0 === w || n >= t || n < 0 || S && o >= y;
                            }
                            function f() {
                                var e = O();
                                return c(e) ? d(e) : void (h = setTimeout(f, a(e)));
                            }
                            function d(e) {
                                return h = void 0, _ && b ? o(e) : (b = v = void 0, g);
                            }
                            function l() {
                                void 0 !== h && clearTimeout(h), k = 0, b = w = v = h = void 0;
                            }
                            function p() {
                                return void 0 === h ? g : d(O());
                            }
                            function m() {
                                var e = O(), n = c(e);
                                if (b = arguments, v = this, w = e, n) {
                                    if (void 0 === h) return r(w);
                                    if (S) return h = setTimeout(f, t), o(w);
                                }
                                return void 0 === h && (h = setTimeout(f, t)), g;
                            }
                            var b, v, y, g, h, w, k = 0, M = !1, S = !1, _ = !0;
                            if ("function" != typeof e) throw new TypeError(s);
                            return t = u(t) || 0, i(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? x(u(n.maxWait) || 0, t) : y, 
                            _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m;
                        }
                        function o(e, t, o) {
                            var r = !0, a = !0;
                            if ("function" != typeof e) throw new TypeError(s);
                            return i(o) && (r = "leading" in o ? !!o.leading : r, a = "trailing" in o ? !!o.trailing : a), 
                            n(e, t, {
                                leading: r,
                                maxWait: t,
                                trailing: a
                            });
                        }
                        function i(e) {
                            var t = "undefined" == typeof e ? "undefined" : c(e);
                            return !!e && ("object" == t || "function" == t);
                        }
                        function r(e) {
                            return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e));
                        }
                        function a(e) {
                            return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || r(e) && k.call(e) == d;
                        }
                        function u(e) {
                            if ("number" == typeof e) return e;
                            if (a(e)) return f;
                            if (i(e)) {
                                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                                e = i(t) ? t + "" : t;
                            }
                            if ("string" != typeof e) return 0 === e ? e : +e;
                            e = e.replace(l, "");
                            var n = m.test(e);
                            return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? f : +e;
                        }
                        var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e;
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                        }, s = "Expected a function", f = NaN, d = "[object Symbol]", l = /^\s+|\s+$/g, p = /^[-+]0x[0-9a-f]+$/i, m = /^0b[01]+$/i, b = /^0o[0-7]+$/i, v = parseInt, y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t, g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self, h = y || g || Function("return this")(), w = Object.prototype, k = w.toString, x = Math.max, j = Math.min, O = function() {
                            return h.Date.now();
                        };
                        e.exports = o;
                    }).call(t, function() {
                        return this;
                    }());
                }, function(e, t) {
                    (function(t) {
                        "use strict";
                        function n(e, t, n) {
                            function i(t) {
                                var n = b, o = v;
                                return b = v = void 0, O = t, g = e.apply(o, n);
                            }
                            function r(e) {
                                return O = e, h = setTimeout(f, t), M ? i(e) : g;
                            }
                            function u(e) {
                                var n = e - w, o = e - O, i = t - n;
                                return S ? x(i, y - o) : i;
                            }
                            function s(e) {
                                var n = e - w, o = e - O;
                                return void 0 === w || n >= t || n < 0 || S && o >= y;
                            }
                            function f() {
                                var e = j();
                                return s(e) ? d(e) : void (h = setTimeout(f, u(e)));
                            }
                            function d(e) {
                                return h = void 0, _ && b ? i(e) : (b = v = void 0, g);
                            }
                            function l() {
                                void 0 !== h && clearTimeout(h), O = 0, b = w = v = h = void 0;
                            }
                            function p() {
                                return void 0 === h ? g : d(j());
                            }
                            function m() {
                                var e = j(), n = s(e);
                                if (b = arguments, v = this, w = e, n) {
                                    if (void 0 === h) return r(w);
                                    if (S) return h = setTimeout(f, t), i(w);
                                }
                                return void 0 === h && (h = setTimeout(f, t)), g;
                            }
                            var b, v, y, g, h, w, O = 0, M = !1, S = !1, _ = !0;
                            if ("function" != typeof e) throw new TypeError(c);
                            return t = a(t) || 0, o(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? k(a(n.maxWait) || 0, t) : y, 
                            _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m;
                        }
                        function o(e) {
                            var t = "undefined" == typeof e ? "undefined" : u(e);
                            return !!e && ("object" == t || "function" == t);
                        }
                        function i(e) {
                            return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e));
                        }
                        function r(e) {
                            return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || i(e) && w.call(e) == f;
                        }
                        function a(e) {
                            if ("number" == typeof e) return e;
                            if (r(e)) return s;
                            if (o(e)) {
                                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                                e = o(t) ? t + "" : t;
                            }
                            if ("string" != typeof e) return 0 === e ? e : +e;
                            e = e.replace(d, "");
                            var n = p.test(e);
                            return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? s : +e;
                        }
                        var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e;
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                        }, c = "Expected a function", s = NaN, f = "[object Symbol]", d = /^\s+|\s+$/g, l = /^[-+]0x[0-9a-f]+$/i, p = /^0b[01]+$/i, m = /^0o[0-7]+$/i, b = parseInt, v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t, y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self, g = v || y || Function("return this")(), h = Object.prototype, w = h.toString, k = Math.max, x = Math.min, j = function() {
                            return g.Date.now();
                        };
                        e.exports = n;
                    }).call(t, function() {
                        return this;
                    }());
                }, function(e, t) {
                    "use strict";
                    function n(e) {
                        var t = void 0, o = void 0;
                        for (t = 0; t < e.length; t += 1) {
                            if (o = e[t], o.dataset && o.dataset.aos) return !0;
                            if (o.children && n(o.children)) return !0;
                        }
                        return !1;
                    }
                    function o() {
                        return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                    }
                    function i() {
                        return !!o();
                    }
                    function r(e, t) {
                        var n = window.document, i = o(), r = new i(a);
                        u = t, r.observe(n.documentElement, {
                            childList: !0,
                            subtree: !0,
                            removedNodes: !0
                        });
                    }
                    function a(e) {
                        e && e.forEach((function(e) {
                            var t = Array.prototype.slice.call(e.addedNodes), o = Array.prototype.slice.call(e.removedNodes), i = t.concat(o);
                            if (n(i)) return u();
                        }));
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var u = function() {};
                    t.default = {
                        isSupported: i,
                        ready: r
                    };
                }, function(e, t) {
                    "use strict";
                    function n(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }
                    function o() {
                        return navigator.userAgent || navigator.vendor || window.opera || "";
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var i = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var o = t[n];
                                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                                Object.defineProperty(e, o.key, o);
                            }
                        }
                        return function(t, n, o) {
                            return n && e(t.prototype, n), o && e(t, o), t;
                        };
                    }(), r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, s = function() {
                        function e() {
                            n(this, e);
                        }
                        return i(e, [ {
                            key: "phone",
                            value: function() {
                                var e = o();
                                return !(!r.test(e) && !a.test(e.substr(0, 4)));
                            }
                        }, {
                            key: "mobile",
                            value: function() {
                                var e = o();
                                return !(!u.test(e) && !c.test(e.substr(0, 4)));
                            }
                        }, {
                            key: "tablet",
                            value: function() {
                                return this.mobile() && !this.phone();
                            }
                        } ]), e;
                    }();
                    t.default = new s;
                }, function(e, t) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = function(e, t, n) {
                        var o = e.node.getAttribute("data-aos-once");
                        t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || !n && "true" !== o) && e.node.classList.remove("aos-animate");
                    }, o = function(e, t) {
                        var o = window.pageYOffset, i = window.innerHeight;
                        e.forEach((function(e, r) {
                            n(e, i + o, t);
                        }));
                    };
                    t.default = o;
                }, function(e, t, n) {
                    "use strict";
                    function o(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var i = n(12), r = o(i), a = function(e, t) {
                        return e.forEach((function(e, n) {
                            e.node.classList.add("aos-init"), e.position = (0, r.default)(e.node, t.offset);
                        })), e;
                    };
                    t.default = a;
                }, function(e, t, n) {
                    "use strict";
                    function o(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var i = n(13), r = o(i), a = function(e, t) {
                        var n = 0, o = 0, i = window.innerHeight, a = {
                            offset: e.getAttribute("data-aos-offset"),
                            anchor: e.getAttribute("data-aos-anchor"),
                            anchorPlacement: e.getAttribute("data-aos-anchor-placement")
                        };
                        switch (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), 
                        n = (0, r.default)(e).top, a.anchorPlacement) {
                          case "top-bottom":
                            break;

                          case "center-bottom":
                            n += e.offsetHeight / 2;
                            break;

                          case "bottom-bottom":
                            n += e.offsetHeight;
                            break;

                          case "top-center":
                            n += i / 2;
                            break;

                          case "bottom-center":
                            n += i / 2 + e.offsetHeight;
                            break;

                          case "center-center":
                            n += i / 2 + e.offsetHeight / 2;
                            break;

                          case "top-top":
                            n += i;
                            break;

                          case "bottom-top":
                            n += e.offsetHeight + i;
                            break;

                          case "center-top":
                            n += e.offsetHeight / 2 + i;
                        }
                        return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o;
                    };
                    t.default = a;
                }, function(e, t) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = function(e) {
                        for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop); ) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), 
                        n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
                        return {
                            top: n,
                            left: t
                        };
                    };
                    t.default = n;
                }, function(e, t) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = function(e) {
                        return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, (function(e) {
                            return {
                                node: e
                            };
                        }));
                    };
                    t.default = n;
                } ]);
            }));
        },
        443: function(module, __unused_webpack_exports, __webpack_require__) {
            "object" == typeof navigator && function(e, t) {
                true ? module.exports = t() : 0;
            }(0, (function() {
                "use strict";
                function e(e, t, i) {
                    return (t = function(e) {
                        var t = function(e, t) {
                            if ("object" != typeof e || null === e) return e;
                            var i = e[Symbol.toPrimitive];
                            if (void 0 !== i) {
                                var s = i.call(e, t || "default");
                                if ("object" != typeof s) return s;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return ("string" === t ? String : Number)(e);
                        }(e, "string");
                        return "symbol" == typeof t ? t : String(t);
                    }(t)) in e ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = i, e;
                }
                function t(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var s = t[i];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), 
                        Object.defineProperty(e, s.key, s);
                    }
                }
                function i(e, t, i) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = i, e;
                }
                function s(e, t) {
                    var i = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(e);
                        t && (s = s.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        }))), i.push.apply(i, s);
                    }
                    return i;
                }
                function n(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? s(Object(n), !0).forEach((function(t) {
                            i(e, t, n[t]);
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                        }));
                    }
                    return e;
                }
                var a = {
                    addCSS: !0,
                    thumbWidth: 15,
                    watch: !0
                };
                var l = function(e) {
                    return null != e ? e.constructor : null;
                }, r = function(e, t) {
                    return !!(e && t && e instanceof t);
                }, o = function(e) {
                    return null == e;
                }, c = function(e) {
                    return l(e) === Object;
                }, u = function(e) {
                    return l(e) === String;
                }, h = function(e) {
                    return Array.isArray(e);
                }, d = function(e) {
                    return r(e, NodeList);
                }, m = {
                    nullOrUndefined: o,
                    object: c,
                    number: function(e) {
                        return l(e) === Number && !Number.isNaN(e);
                    },
                    string: u,
                    boolean: function(e) {
                        return l(e) === Boolean;
                    },
                    function: function(e) {
                        return l(e) === Function;
                    },
                    array: h,
                    nodeList: d,
                    element: function(e) {
                        return r(e, Element);
                    },
                    event: function(e) {
                        return r(e, Event);
                    },
                    empty: function(e) {
                        return o(e) || (u(e) || h(e) || d(e)) && !e.length || c(e) && !Object.keys(e).length;
                    }
                };
                function p(e, t) {
                    if (1 > t) {
                        var i = function(e) {
                            var t = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                            return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
                        }(t);
                        return parseFloat(e.toFixed(i));
                    }
                    return Math.round(e / t) * t;
                }
                var g = function() {
                    function e(t, i) {
                        (function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        })(this, e), m.element(t) ? this.element = t : m.string(t) && (this.element = document.querySelector(t)), 
                        m.element(this.element) && m.empty(this.element.rangeTouch) && (this.config = n({}, a, {}, i), 
                        this.init());
                    }
                    return function(e, i, s) {
                        i && t(e.prototype, i), s && t(e, s);
                    }(e, [ {
                        key: "init",
                        value: function() {
                            e.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", 
                            this.element.style.touchAction = "manipulation"), this.listeners(!0), this.element.rangeTouch = this);
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            e.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", 
                            this.element.style.touchAction = ""), this.listeners(!1), this.element.rangeTouch = null);
                        }
                    }, {
                        key: "listeners",
                        value: function(e) {
                            var t = this, i = e ? "addEventListener" : "removeEventListener";
                            [ "touchstart", "touchmove", "touchend" ].forEach((function(e) {
                                t.element[i](e, (function(e) {
                                    return t.set(e);
                                }), !1);
                            }));
                        }
                    }, {
                        key: "get",
                        value: function(t) {
                            if (!e.enabled || !m.event(t)) return null;
                            var i, s = t.target, n = t.changedTouches[0], a = parseFloat(s.getAttribute("min")) || 0, l = parseFloat(s.getAttribute("max")) || 100, r = parseFloat(s.getAttribute("step")) || 1, o = s.getBoundingClientRect(), c = 100 / o.width * (this.config.thumbWidth / 2) / 100;
                            return 0 > (i = 100 / o.width * (n.clientX - o.left)) ? i = 0 : 100 < i && (i = 100), 
                            50 > i ? i -= (100 - 2 * i) * c : 50 < i && (i += 2 * (i - 50) * c), a + p(i / 100 * (l - a), r);
                        }
                    }, {
                        key: "set",
                        value: function(t) {
                            e.enabled && m.event(t) && !t.target.disabled && (t.preventDefault(), t.target.value = this.get(t), 
                            function(e, t) {
                                if (e && t) {
                                    var i = new Event(t, {
                                        bubbles: !0
                                    });
                                    e.dispatchEvent(i);
                                }
                            }(t.target, "touchend" === t.type ? "change" : "input"));
                        }
                    } ], [ {
                        key: "setup",
                        value: function(t) {
                            var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, s = null;
                            if (m.empty(t) || m.string(t) ? s = Array.from(document.querySelectorAll(m.string(t) ? t : 'input[type="range"]')) : m.element(t) ? s = [ t ] : m.nodeList(t) ? s = Array.from(t) : m.array(t) && (s = t.filter(m.element)), 
                            m.empty(s)) return null;
                            var l = n({}, a, {}, i);
                            if (m.string(t) && l.watch) {
                                var r = new MutationObserver((function(i) {
                                    Array.from(i).forEach((function(i) {
                                        Array.from(i.addedNodes).forEach((function(i) {
                                            m.element(i) && function(e, t) {
                                                return function() {
                                                    return Array.from(document.querySelectorAll(t)).includes(this);
                                                }.call(e, t);
                                            }(i, t) && new e(i, l);
                                        }));
                                    }));
                                }));
                                r.observe(document.body, {
                                    childList: !0,
                                    subtree: !0
                                });
                            }
                            return s.map((function(t) {
                                return new e(t, i);
                            }));
                        }
                    }, {
                        key: "enabled",
                        get: function() {
                            return "ontouchstart" in document.documentElement;
                        }
                    } ]), e;
                }();
                const f = e => null != e ? e.constructor : null, y = (e, t) => Boolean(e && t && e instanceof t), b = e => null == e, v = e => f(e) === Object, w = e => f(e) === String, T = e => "function" == typeof e, k = e => Array.isArray(e), C = e => y(e, NodeList), A = e => b(e) || (w(e) || k(e) || C(e)) && !e.length || v(e) && !Object.keys(e).length;
                var S = {
                    nullOrUndefined: b,
                    object: v,
                    number: e => f(e) === Number && !Number.isNaN(e),
                    string: w,
                    boolean: e => f(e) === Boolean,
                    function: T,
                    array: k,
                    weakMap: e => y(e, WeakMap),
                    nodeList: C,
                    element: e => null !== e && "object" == typeof e && 1 === e.nodeType && "object" == typeof e.style && "object" == typeof e.ownerDocument,
                    textNode: e => f(e) === Text,
                    event: e => y(e, Event),
                    keyboardEvent: e => y(e, KeyboardEvent),
                    cue: e => y(e, window.TextTrackCue) || y(e, window.VTTCue),
                    track: e => y(e, TextTrack) || !b(e) && w(e.kind),
                    promise: e => y(e, Promise) && T(e.then),
                    url: e => {
                        if (y(e, window.URL)) return !0;
                        if (!w(e)) return !1;
                        let t = e;
                        e.startsWith("http://") && e.startsWith("https://") || (t = `http://${e}`);
                        try {
                            return !A(new URL(t).hostname);
                        } catch (e) {
                            return !1;
                        }
                    },
                    empty: A
                };
                const E = (() => {
                    const e = document.createElement("span"), t = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    }, i = Object.keys(t).find((t => void 0 !== e.style[t]));
                    return !!S.string(i) && t[i];
                })();
                function P(e, t) {
                    setTimeout((() => {
                        try {
                            e.hidden = !0, e.offsetHeight, e.hidden = !1;
                        } catch (e) {}
                    }), t);
                }
                var M = {
                    isIE: Boolean(window.document.documentMode),
                    isEdge: /Edge/g.test(navigator.userAgent),
                    isWebKit: "WebkitAppearance" in document.documentElement.style && !/Edge/g.test(navigator.userAgent),
                    isIPhone: /iPhone|iPod/gi.test(navigator.userAgent) && navigator.maxTouchPoints > 1,
                    isIPadOS: "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1,
                    isIos: /iPad|iPhone|iPod/gi.test(navigator.userAgent) && navigator.maxTouchPoints > 1
                };
                function N(e, t) {
                    return t.split(".").reduce(((e, t) => e && e[t]), e);
                }
                function x(e = {}, ...t) {
                    if (!t.length) return e;
                    const i = t.shift();
                    return S.object(i) ? (Object.keys(i).forEach((t => {
                        S.object(i[t]) ? (Object.keys(e).includes(t) || Object.assign(e, {
                            [t]: {}
                        }), x(e[t], i[t])) : Object.assign(e, {
                            [t]: i[t]
                        });
                    })), x(e, ...t)) : e;
                }
                function L(e, t) {
                    const i = e.length ? e : [ e ];
                    Array.from(i).reverse().forEach(((e, i) => {
                        const s = i > 0 ? t.cloneNode(!0) : t, n = e.parentNode, a = e.nextSibling;
                        s.appendChild(e), a ? n.insertBefore(s, a) : n.appendChild(s);
                    }));
                }
                function I(e, t) {
                    S.element(e) && !S.empty(t) && Object.entries(t).filter((([, e]) => !S.nullOrUndefined(e))).forEach((([t, i]) => e.setAttribute(t, i)));
                }
                function $(e, t, i) {
                    const s = document.createElement(e);
                    return S.object(t) && I(s, t), S.string(i) && (s.innerText = i), s;
                }
                function _(e, t, i, s) {
                    S.element(t) && t.appendChild($(e, i, s));
                }
                function O(e) {
                    S.nodeList(e) || S.array(e) ? Array.from(e).forEach(O) : S.element(e) && S.element(e.parentNode) && e.parentNode.removeChild(e);
                }
                function j(e) {
                    if (!S.element(e)) return;
                    let {length: t} = e.childNodes;
                    for (;t > 0; ) e.removeChild(e.lastChild), t -= 1;
                }
                function q(e, t) {
                    return S.element(t) && S.element(t.parentNode) && S.element(e) ? (t.parentNode.replaceChild(e, t), 
                    e) : null;
                }
                function D(e, t) {
                    if (!S.string(e) || S.empty(e)) return {};
                    const i = {}, s = x({}, t);
                    return e.split(",").forEach((e => {
                        const t = e.trim(), n = t.replace(".", ""), a = t.replace(/[[\]]/g, "").split("="), [l] = a, r = a.length > 1 ? a[1].replace(/["']/g, "") : "";
                        switch (t.charAt(0)) {
                          case ".":
                            S.string(s.class) ? i.class = `${s.class} ${n}` : i.class = n;
                            break;

                          case "#":
                            i.id = t.replace("#", "");
                            break;

                          case "[":
                            i[l] = r;
                        }
                    })), x(s, i);
                }
                function H(e, t) {
                    if (!S.element(e)) return;
                    let i = t;
                    S.boolean(i) || (i = !e.hidden), e.hidden = i;
                }
                function R(e, t, i) {
                    if (S.nodeList(e)) return Array.from(e).map((e => R(e, t, i)));
                    if (S.element(e)) {
                        let s = "toggle";
                        return void 0 !== i && (s = i ? "add" : "remove"), e.classList[s](t), e.classList.contains(t);
                    }
                    return !1;
                }
                function F(e, t) {
                    return S.element(e) && e.classList.contains(t);
                }
                function V(e, t) {
                    const {prototype: i} = Element;
                    return (i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector || function() {
                        return Array.from(document.querySelectorAll(t)).includes(this);
                    }).call(e, t);
                }
                function U(e) {
                    return this.elements.container.querySelectorAll(e);
                }
                function B(e) {
                    return this.elements.container.querySelector(e);
                }
                function W(e = null, t = !1) {
                    S.element(e) && e.focus({
                        preventScroll: !0,
                        focusVisible: t
                    });
                }
                const z = {
                    "audio/ogg": "vorbis",
                    "audio/wav": "1",
                    "video/webm": "vp8, vorbis",
                    "video/mp4": "avc1.42E01E, mp4a.40.2",
                    "video/ogg": "theora"
                }, K = {
                    audio: "canPlayType" in document.createElement("audio"),
                    video: "canPlayType" in document.createElement("video"),
                    check(e, t) {
                        const i = K[e] || "html5" !== t;
                        return {
                            api: i,
                            ui: i && K.rangeInput
                        };
                    },
                    pip: !(M.isIPhone || !S.function($("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || $("video").disablePictureInPicture)),
                    airplay: S.function(window.WebKitPlaybackTargetAvailabilityEvent),
                    playsinline: "playsInline" in document.createElement("video"),
                    mime(e) {
                        if (S.empty(e)) return !1;
                        const [t] = e.split("/");
                        let i = e;
                        if (!this.isHTML5 || t !== this.type) return !1;
                        Object.keys(z).includes(i) && (i += `; codecs="${z[e]}"`);
                        try {
                            return Boolean(i && this.media.canPlayType(i).replace(/no/, ""));
                        } catch (e) {
                            return !1;
                        }
                    },
                    textTracks: "textTracks" in document.createElement("video"),
                    rangeInput: (() => {
                        const e = document.createElement("input");
                        return e.type = "range", "range" === e.type;
                    })(),
                    touch: "ontouchstart" in document.documentElement,
                    transitions: !1 !== E,
                    reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
                }, Y = (() => {
                    let e = !1;
                    try {
                        const t = Object.defineProperty({}, "passive", {
                            get: () => (e = !0, null)
                        });
                        window.addEventListener("test", null, t), window.removeEventListener("test", null, t);
                    } catch (e) {}
                    return e;
                })();
                function Q(e, t, i, s = !1, n = !0, a = !1) {
                    if (!e || !("addEventListener" in e) || S.empty(t) || !S.function(i)) return;
                    const l = t.split(" ");
                    let r = a;
                    Y && (r = {
                        passive: n,
                        capture: a
                    }), l.forEach((t => {
                        this && this.eventListeners && s && this.eventListeners.push({
                            element: e,
                            type: t,
                            callback: i,
                            options: r
                        }), e[s ? "addEventListener" : "removeEventListener"](t, i, r);
                    }));
                }
                function X(e, t = "", i, s = !0, n = !1) {
                    Q.call(this, e, t, i, !0, s, n);
                }
                function J(e, t = "", i, s = !0, n = !1) {
                    Q.call(this, e, t, i, !1, s, n);
                }
                function G(e, t = "", i, s = !0, n = !1) {
                    const a = (...l) => {
                        J(e, t, a, s, n), i.apply(this, l);
                    };
                    Q.call(this, e, t, a, !0, s, n);
                }
                function Z(e, t = "", i = !1, s = {}) {
                    if (!S.element(e) || S.empty(t)) return;
                    const n = new CustomEvent(t, {
                        bubbles: i,
                        detail: {
                            ...s,
                            plyr: this
                        }
                    });
                    e.dispatchEvent(n);
                }
                function ee() {
                    this && this.eventListeners && (this.eventListeners.forEach((e => {
                        const {element: t, type: i, callback: s, options: n} = e;
                        t.removeEventListener(i, s, n);
                    })), this.eventListeners = []);
                }
                function te() {
                    return new Promise((e => this.ready ? setTimeout(e, 0) : X.call(this, this.elements.container, "ready", e))).then((() => {}));
                }
                function ie(e) {
                    S.promise(e) && e.then(null, (() => {}));
                }
                function se(e) {
                    return S.array(e) ? e.filter(((t, i) => e.indexOf(t) === i)) : e;
                }
                function ne(e, t) {
                    return S.array(e) && e.length ? e.reduce(((e, i) => Math.abs(i - t) < Math.abs(e - t) ? i : e)) : null;
                }
                function ae(e) {
                    return !(!window || !window.CSS) && window.CSS.supports(e);
                }
                const le = [ [ 1, 1 ], [ 4, 3 ], [ 3, 4 ], [ 5, 4 ], [ 4, 5 ], [ 3, 2 ], [ 2, 3 ], [ 16, 10 ], [ 10, 16 ], [ 16, 9 ], [ 9, 16 ], [ 21, 9 ], [ 9, 21 ], [ 32, 9 ], [ 9, 32 ] ].reduce(((e, [t, i]) => ({
                    ...e,
                    [t / i]: [ t, i ]
                })), {});
                function re(e) {
                    if (!(S.array(e) || S.string(e) && e.includes(":"))) return !1;
                    return (S.array(e) ? e : e.split(":")).map(Number).every(S.number);
                }
                function oe(e) {
                    if (!S.array(e) || !e.every(S.number)) return null;
                    const [t, i] = e, s = (e, t) => 0 === t ? e : s(t, e % t), n = s(t, i);
                    return [ t / n, i / n ];
                }
                function ce(e) {
                    const t = e => re(e) ? e.split(":").map(Number) : null;
                    let i = t(e);
                    if (null === i && (i = t(this.config.ratio)), null === i && !S.empty(this.embed) && S.array(this.embed.ratio) && ({ratio: i} = this.embed), 
                    null === i && this.isHTML5) {
                        const {videoWidth: e, videoHeight: t} = this.media;
                        i = [ e, t ];
                    }
                    return oe(i);
                }
                function ue(e) {
                    if (!this.isVideo) return {};
                    const {wrapper: t} = this.elements, i = ce.call(this, e);
                    if (!S.array(i)) return {};
                    const [s, n] = oe(i), a = 100 / s * n;
                    if (ae(`aspect-ratio: ${s}/${n}`) ? t.style.aspectRatio = `${s}/${n}` : t.style.paddingBottom = `${a}%`, 
                    this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
                        const e = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10), i = (e - a) / (e / 50);
                        this.fullscreen.active ? t.style.paddingBottom = null : this.media.style.transform = `translateY(-${i}%)`;
                    } else this.isHTML5 && t.classList.add(this.config.classNames.videoFixedRatio);
                    return {
                        padding: a,
                        ratio: i
                    };
                }
                function he(e, t, i = .05) {
                    const s = e / t, n = ne(Object.keys(le), s);
                    return Math.abs(n - s) <= i ? le[n] : [ e, t ];
                }
                const de = {
                    getSources() {
                        if (!this.isHTML5) return [];
                        return Array.from(this.media.querySelectorAll("source")).filter((e => {
                            const t = e.getAttribute("type");
                            return !!S.empty(t) || K.mime.call(this, t);
                        }));
                    },
                    getQualityOptions() {
                        return this.config.quality.forced ? this.config.quality.options : de.getSources.call(this).map((e => Number(e.getAttribute("size")))).filter(Boolean);
                    },
                    setup() {
                        if (!this.isHTML5) return;
                        const e = this;
                        e.options.speed = e.config.speed.options, S.empty(this.config.ratio) || ue.call(e), 
                        Object.defineProperty(e.media, "quality", {
                            get() {
                                const t = de.getSources.call(e).find((t => t.getAttribute("src") === e.source));
                                return t && Number(t.getAttribute("size"));
                            },
                            set(t) {
                                if (e.quality !== t) {
                                    if (e.config.quality.forced && S.function(e.config.quality.onChange)) e.config.quality.onChange(t); else {
                                        const i = de.getSources.call(e).find((e => Number(e.getAttribute("size")) === t));
                                        if (!i) return;
                                        const {currentTime: s, paused: n, preload: a, readyState: l, playbackRate: r} = e.media;
                                        e.media.src = i.getAttribute("src"), ("none" !== a || l) && (e.once("loadedmetadata", (() => {
                                            e.speed = r, e.currentTime = s, n || ie(e.play());
                                        })), e.media.load());
                                    }
                                    Z.call(e, e.media, "qualitychange", !1, {
                                        quality: t
                                    });
                                }
                            }
                        });
                    },
                    cancelRequests() {
                        this.isHTML5 && (O(de.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), 
                        this.media.load(), this.debug.log("Cancelled network requests"));
                    }
                };
                function me(e, ...t) {
                    return S.empty(e) ? e : e.toString().replace(/{(\d+)}/g, ((e, i) => t[i].toString()));
                }
                const pe = (e = "", t = "", i = "") => e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), i.toString()), ge = (e = "") => e.toString().replace(/\w\S*/g, (e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()));
                function fe(e = "") {
                    let t = e.toString();
                    return t = function(e = "") {
                        let t = e.toString();
                        return t = pe(t, "-", " "), t = pe(t, "_", " "), t = ge(t), pe(t, " ", "");
                    }(t), t.charAt(0).toLowerCase() + t.slice(1);
                }
                function ye(e) {
                    const t = document.createElement("div");
                    return t.appendChild(e), t.innerHTML;
                }
                const be = {
                    pip: "PIP",
                    airplay: "AirPlay",
                    html5: "HTML5",
                    vimeo: "Vimeo",
                    youtube: "YouTube"
                }, ve = {
                    get(e = "", t = {}) {
                        if (S.empty(e) || S.empty(t)) return "";
                        let i = N(t.i18n, e);
                        if (S.empty(i)) return Object.keys(be).includes(e) ? be[e] : "";
                        const s = {
                            "{seektime}": t.seekTime,
                            "{title}": t.title
                        };
                        return Object.entries(s).forEach((([e, t]) => {
                            i = pe(i, e, t);
                        })), i;
                    }
                };
                class we {
                    constructor(t) {
                        e(this, "get", (e => {
                            if (!we.supported || !this.enabled) return null;
                            const t = window.localStorage.getItem(this.key);
                            if (S.empty(t)) return null;
                            const i = JSON.parse(t);
                            return S.string(e) && e.length ? i[e] : i;
                        })), e(this, "set", (e => {
                            if (!we.supported || !this.enabled) return;
                            if (!S.object(e)) return;
                            let t = this.get();
                            S.empty(t) && (t = {}), x(t, e);
                            try {
                                window.localStorage.setItem(this.key, JSON.stringify(t));
                            } catch (e) {}
                        })), this.enabled = t.config.storage.enabled, this.key = t.config.storage.key;
                    }
                    static get supported() {
                        try {
                            if (!("localStorage" in window)) return !1;
                            const e = "___test";
                            return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), !0;
                        } catch (e) {
                            return !1;
                        }
                    }
                }
                function Te(e, t = "text") {
                    return new Promise(((i, s) => {
                        try {
                            const s = new XMLHttpRequest;
                            if (!("withCredentials" in s)) return;
                            s.addEventListener("load", (() => {
                                if ("text" === t) try {
                                    i(JSON.parse(s.responseText));
                                } catch (e) {
                                    i(s.responseText);
                                } else i(s.response);
                            })), s.addEventListener("error", (() => {
                                throw new Error(s.status);
                            })), s.open("GET", e, !0), s.responseType = t, s.send();
                        } catch (e) {
                            s(e);
                        }
                    }));
                }
                function ke(e, t) {
                    if (!S.string(e)) return;
                    const i = "cache", s = S.string(t);
                    let n = !1;
                    const a = () => null !== document.getElementById(t), l = (e, t) => {
                        e.innerHTML = t, s && a() || document.body.insertAdjacentElement("afterbegin", e);
                    };
                    if (!s || !a()) {
                        const a = we.supported, r = document.createElement("div");
                        if (r.setAttribute("hidden", ""), s && r.setAttribute("id", t), a) {
                            const e = window.localStorage.getItem(`${i}-${t}`);
                            if (n = null !== e, n) {
                                const t = JSON.parse(e);
                                l(r, t.content);
                            }
                        }
                        Te(e).then((e => {
                            if (!S.empty(e)) {
                                if (a) try {
                                    window.localStorage.setItem(`${i}-${t}`, JSON.stringify({
                                        content: e
                                    }));
                                } catch (e) {}
                                l(r, e);
                            }
                        })).catch((() => {}));
                    }
                }
                const Ce = e => Math.trunc(e / 60 / 60 % 60, 10), Ae = e => Math.trunc(e / 60 % 60, 10), Se = e => Math.trunc(e % 60, 10);
                function Ee(e = 0, t = !1, i = !1) {
                    if (!S.number(e)) return Ee(void 0, t, i);
                    const s = e => `0${e}`.slice(-2);
                    let n = Ce(e);
                    const a = Ae(e), l = Se(e);
                    return n = t || n > 0 ? `${n}:` : "", `${i && e > 0 ? "-" : ""}${n}${s(a)}:${s(l)}`;
                }
                const Pe = {
                    getIconUrl() {
                        const e = new URL(this.config.iconUrl, window.location), t = window.location.host ? window.location.host : window.top.location.host, i = e.host !== t || M.isIE && !window.svg4everybody;
                        return {
                            url: this.config.iconUrl,
                            cors: i
                        };
                    },
                    findElements() {
                        try {
                            return this.elements.controls = B.call(this, this.config.selectors.controls.wrapper), 
                            this.elements.buttons = {
                                play: U.call(this, this.config.selectors.buttons.play),
                                pause: B.call(this, this.config.selectors.buttons.pause),
                                restart: B.call(this, this.config.selectors.buttons.restart),
                                rewind: B.call(this, this.config.selectors.buttons.rewind),
                                fastForward: B.call(this, this.config.selectors.buttons.fastForward),
                                mute: B.call(this, this.config.selectors.buttons.mute),
                                pip: B.call(this, this.config.selectors.buttons.pip),
                                airplay: B.call(this, this.config.selectors.buttons.airplay),
                                settings: B.call(this, this.config.selectors.buttons.settings),
                                captions: B.call(this, this.config.selectors.buttons.captions),
                                fullscreen: B.call(this, this.config.selectors.buttons.fullscreen)
                            }, this.elements.progress = B.call(this, this.config.selectors.progress), this.elements.inputs = {
                                seek: B.call(this, this.config.selectors.inputs.seek),
                                volume: B.call(this, this.config.selectors.inputs.volume)
                            }, this.elements.display = {
                                buffer: B.call(this, this.config.selectors.display.buffer),
                                currentTime: B.call(this, this.config.selectors.display.currentTime),
                                duration: B.call(this, this.config.selectors.display.duration)
                            }, S.element(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(`.${this.config.classNames.tooltip}`)), 
                            !0;
                        } catch (e) {
                            return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), 
                            this.toggleNativeControls(!0), !1;
                        }
                    },
                    createIcon(e, t) {
                        const i = "http://www.w3.org/2000/svg", s = Pe.getIconUrl.call(this), n = `${s.cors ? "" : s.url}#${this.config.iconPrefix}`, a = document.createElementNS(i, "svg");
                        I(a, x(t, {
                            "aria-hidden": "true",
                            focusable: "false"
                        }));
                        const l = document.createElementNS(i, "use"), r = `${n}-${e}`;
                        return "href" in l && l.setAttributeNS("http://www.w3.org/1999/xlink", "href", r), 
                        l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", r), a.appendChild(l), 
                        a;
                    },
                    createLabel(e, t = {}) {
                        const i = ve.get(e, this.config);
                        return $("span", {
                            ...t,
                            class: [ t.class, this.config.classNames.hidden ].filter(Boolean).join(" ")
                        }, i);
                    },
                    createBadge(e) {
                        if (S.empty(e)) return null;
                        const t = $("span", {
                            class: this.config.classNames.menu.value
                        });
                        return t.appendChild($("span", {
                            class: this.config.classNames.menu.badge
                        }, e)), t;
                    },
                    createButton(e, t) {
                        const i = x({}, t);
                        let s = fe(e);
                        const n = {
                            element: "button",
                            toggle: !1,
                            label: null,
                            icon: null,
                            labelPressed: null,
                            iconPressed: null
                        };
                        switch ([ "element", "icon", "label" ].forEach((e => {
                            Object.keys(i).includes(e) && (n[e] = i[e], delete i[e]);
                        })), "button" !== n.element || Object.keys(i).includes("type") || (i.type = "button"), 
                        Object.keys(i).includes("class") ? i.class.split(" ").some((e => e === this.config.classNames.control)) || x(i, {
                            class: `${i.class} ${this.config.classNames.control}`
                        }) : i.class = this.config.classNames.control, e) {
                          case "play":
                            n.toggle = !0, n.label = "play", n.labelPressed = "pause", n.icon = "play", n.iconPressed = "pause";
                            break;

                          case "mute":
                            n.toggle = !0, n.label = "mute", n.labelPressed = "unmute", n.icon = "volume", n.iconPressed = "muted";
                            break;

                          case "captions":
                            n.toggle = !0, n.label = "enableCaptions", n.labelPressed = "disableCaptions", n.icon = "captions-off", 
                            n.iconPressed = "captions-on";
                            break;

                          case "fullscreen":
                            n.toggle = !0, n.label = "enterFullscreen", n.labelPressed = "exitFullscreen", n.icon = "enter-fullscreen", 
                            n.iconPressed = "exit-fullscreen";
                            break;

                          case "play-large":
                            i.class += ` ${this.config.classNames.control}--overlaid`, s = "play", n.label = "play", 
                            n.icon = "play";
                            break;

                          default:
                            S.empty(n.label) && (n.label = s), S.empty(n.icon) && (n.icon = e);
                        }
                        const a = $(n.element);
                        return n.toggle ? (a.appendChild(Pe.createIcon.call(this, n.iconPressed, {
                            class: "icon--pressed"
                        })), a.appendChild(Pe.createIcon.call(this, n.icon, {
                            class: "icon--not-pressed"
                        })), a.appendChild(Pe.createLabel.call(this, n.labelPressed, {
                            class: "label--pressed"
                        })), a.appendChild(Pe.createLabel.call(this, n.label, {
                            class: "label--not-pressed"
                        }))) : (a.appendChild(Pe.createIcon.call(this, n.icon)), a.appendChild(Pe.createLabel.call(this, n.label))), 
                        x(i, D(this.config.selectors.buttons[s], i)), I(a, i), "play" === s ? (S.array(this.elements.buttons[s]) || (this.elements.buttons[s] = []), 
                        this.elements.buttons[s].push(a)) : this.elements.buttons[s] = a, a;
                    },
                    createRange(e, t) {
                        const i = $("input", x(D(this.config.selectors.inputs[e]), {
                            type: "range",
                            min: 0,
                            max: 100,
                            step: .01,
                            value: 0,
                            autocomplete: "off",
                            role: "slider",
                            "aria-label": ve.get(e, this.config),
                            "aria-valuemin": 0,
                            "aria-valuemax": 100,
                            "aria-valuenow": 0
                        }, t));
                        return this.elements.inputs[e] = i, Pe.updateRangeFill.call(this, i), g.setup(i), 
                        i;
                    },
                    createProgress(e, t) {
                        const i = $("progress", x(D(this.config.selectors.display[e]), {
                            min: 0,
                            max: 100,
                            value: 0,
                            role: "progressbar",
                            "aria-hidden": !0
                        }, t));
                        if ("volume" !== e) {
                            i.appendChild($("span", null, "0"));
                            const t = {
                                played: "played",
                                buffer: "buffered"
                            }[e], s = t ? ve.get(t, this.config) : "";
                            i.innerText = `% ${s.toLowerCase()}`;
                        }
                        return this.elements.display[e] = i, i;
                    },
                    createTime(e, t) {
                        const i = D(this.config.selectors.display[e], t), s = $("div", x(i, {
                            class: `${i.class ? i.class : ""} ${this.config.classNames.display.time} `.trim(),
                            "aria-label": ve.get(e, this.config),
                            role: "timer"
                        }), "00:00");
                        return this.elements.display[e] = s, s;
                    },
                    bindMenuItemShortcuts(e, t) {
                        X.call(this, e, "keydown keyup", (i => {
                            if (![ " ", "ArrowUp", "ArrowDown", "ArrowRight" ].includes(i.key)) return;
                            if (i.preventDefault(), i.stopPropagation(), "keydown" === i.type) return;
                            const s = V(e, '[role="menuitemradio"]');
                            if (!s && [ " ", "ArrowRight" ].includes(i.key)) Pe.showMenuPanel.call(this, t, !0); else {
                                let t;
                                " " !== i.key && ("ArrowDown" === i.key || s && "ArrowRight" === i.key ? (t = e.nextElementSibling, 
                                S.element(t) || (t = e.parentNode.firstElementChild)) : (t = e.previousElementSibling, 
                                S.element(t) || (t = e.parentNode.lastElementChild)), W.call(this, t, !0));
                            }
                        }), !1), X.call(this, e, "keyup", (e => {
                            "Return" === e.key && Pe.focusFirstMenuItem.call(this, null, !0);
                        }));
                    },
                    createMenuItem({value: e, list: t, type: i, title: s, badge: n = null, checked: a = !1}) {
                        const l = D(this.config.selectors.inputs[i]), r = $("button", x(l, {
                            type: "button",
                            role: "menuitemradio",
                            class: `${this.config.classNames.control} ${l.class ? l.class : ""}`.trim(),
                            "aria-checked": a,
                            value: e
                        })), o = $("span");
                        o.innerHTML = s, S.element(n) && o.appendChild(n), r.appendChild(o), Object.defineProperty(r, "checked", {
                            enumerable: !0,
                            get: () => "true" === r.getAttribute("aria-checked"),
                            set(e) {
                                e && Array.from(r.parentNode.children).filter((e => V(e, '[role="menuitemradio"]'))).forEach((e => e.setAttribute("aria-checked", "false"))), 
                                r.setAttribute("aria-checked", e ? "true" : "false");
                            }
                        }), this.listeners.bind(r, "click keyup", (t => {
                            if (!S.keyboardEvent(t) || " " === t.key) {
                                switch (t.preventDefault(), t.stopPropagation(), r.checked = !0, i) {
                                  case "language":
                                    this.currentTrack = Number(e);
                                    break;

                                  case "quality":
                                    this.quality = e;
                                    break;

                                  case "speed":
                                    this.speed = parseFloat(e);
                                }
                                Pe.showMenuPanel.call(this, "home", S.keyboardEvent(t));
                            }
                        }), i, !1), Pe.bindMenuItemShortcuts.call(this, r, i), t.appendChild(r);
                    },
                    formatTime(e = 0, t = !1) {
                        if (!S.number(e)) return e;
                        return Ee(e, Ce(this.duration) > 0, t);
                    },
                    updateTimeDisplay(e = null, t = 0, i = !1) {
                        S.element(e) && S.number(t) && (e.innerText = Pe.formatTime(t, i));
                    },
                    updateVolume() {
                        this.supported.ui && (S.element(this.elements.inputs.volume) && Pe.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), 
                        S.element(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume));
                    },
                    setRange(e, t = 0) {
                        S.element(e) && (e.value = t, Pe.updateRangeFill.call(this, e));
                    },
                    updateProgress(e) {
                        if (!this.supported.ui || !S.event(e)) return;
                        let t = 0;
                        const i = (e, t) => {
                            const i = S.number(t) ? t : 0, s = S.element(e) ? e : this.elements.display.buffer;
                            if (S.element(s)) {
                                s.value = i;
                                const e = s.getElementsByTagName("span")[0];
                                S.element(e) && (e.childNodes[0].nodeValue = i);
                            }
                        };
                        if (e) switch (e.type) {
                          case "timeupdate":
                          case "seeking":
                          case "seeked":
                            s = this.currentTime, n = this.duration, t = 0 === s || 0 === n || Number.isNaN(s) || Number.isNaN(n) ? 0 : (s / n * 100).toFixed(2), 
                            "timeupdate" === e.type && Pe.setRange.call(this, this.elements.inputs.seek, t);
                            break;

                          case "playing":
                          case "progress":
                            i(this.elements.display.buffer, 100 * this.buffered);
                        }
                        var s, n;
                    },
                    updateRangeFill(e) {
                        const t = S.event(e) ? e.target : e;
                        if (S.element(t) && "range" === t.getAttribute("type")) {
                            if (V(t, this.config.selectors.inputs.seek)) {
                                t.setAttribute("aria-valuenow", this.currentTime);
                                const e = Pe.formatTime(this.currentTime), i = Pe.formatTime(this.duration), s = ve.get("seekLabel", this.config);
                                t.setAttribute("aria-valuetext", s.replace("{currentTime}", e).replace("{duration}", i));
                            } else if (V(t, this.config.selectors.inputs.volume)) {
                                const e = 100 * t.value;
                                t.setAttribute("aria-valuenow", e), t.setAttribute("aria-valuetext", `${e.toFixed(1)}%`);
                            } else t.setAttribute("aria-valuenow", t.value);
                            (M.isWebKit || M.isIPadOS) && t.style.setProperty("--value", t.value / t.max * 100 + "%");
                        }
                    },
                    updateSeekTooltip(e) {
                        var t, i;
                        if (!this.config.tooltips.seek || !S.element(this.elements.inputs.seek) || !S.element(this.elements.display.seekTooltip) || 0 === this.duration) return;
                        const s = this.elements.display.seekTooltip, n = `${this.config.classNames.tooltip}--visible`, a = e => R(s, n, e);
                        if (this.touch) return void a(!1);
                        let l = 0;
                        const r = this.elements.progress.getBoundingClientRect();
                        if (S.event(e)) l = 100 / r.width * (e.pageX - r.left); else {
                            if (!F(s, n)) return;
                            l = parseFloat(s.style.left, 10);
                        }
                        l < 0 ? l = 0 : l > 100 && (l = 100);
                        const o = this.duration / 100 * l;
                        s.innerText = Pe.formatTime(o);
                        const c = null === (t = this.config.markers) || void 0 === t || null === (i = t.points) || void 0 === i ? void 0 : i.find((({time: e}) => e === Math.round(o)));
                        c && s.insertAdjacentHTML("afterbegin", `${c.label}<br>`), s.style.left = `${l}%`, 
                        S.event(e) && [ "mouseenter", "mouseleave" ].includes(e.type) && a("mouseenter" === e.type);
                    },
                    timeUpdate(e) {
                        const t = !S.element(this.elements.display.duration) && this.config.invertTime;
                        Pe.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), 
                        e && "timeupdate" === e.type && this.media.seeking || Pe.updateProgress.call(this, e);
                    },
                    durationUpdate() {
                        if (!this.supported.ui || !this.config.invertTime && this.currentTime) return;
                        if (this.duration >= 2 ** 32) return H(this.elements.display.currentTime, !0), void H(this.elements.progress, !0);
                        S.element(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
                        const e = S.element(this.elements.display.duration);
                        !e && this.config.displayDuration && this.paused && Pe.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), 
                        e && Pe.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), 
                        this.config.markers.enabled && Pe.setMarkers.call(this), Pe.updateSeekTooltip.call(this);
                    },
                    toggleMenuButton(e, t) {
                        H(this.elements.settings.buttons[e], !t);
                    },
                    updateSetting(e, t, i) {
                        const s = this.elements.settings.panels[e];
                        let n = null, a = t;
                        if ("captions" === e) n = this.currentTrack; else {
                            if (n = S.empty(i) ? this[e] : i, S.empty(n) && (n = this.config[e].default), !S.empty(this.options[e]) && !this.options[e].includes(n)) return void this.debug.warn(`Unsupported value of '${n}' for ${e}`);
                            if (!this.config[e].options.includes(n)) return void this.debug.warn(`Disabled value of '${n}' for ${e}`);
                        }
                        if (S.element(a) || (a = s && s.querySelector('[role="menu"]')), !S.element(a)) return;
                        this.elements.settings.buttons[e].querySelector(`.${this.config.classNames.menu.value}`).innerHTML = Pe.getLabel.call(this, e, n);
                        const l = a && a.querySelector(`[value="${n}"]`);
                        S.element(l) && (l.checked = !0);
                    },
                    getLabel(e, t) {
                        switch (e) {
                          case "speed":
                            return 1 === t ? ve.get("normal", this.config) : `${t}&times;`;

                          case "quality":
                            if (S.number(t)) {
                                const e = ve.get(`qualityLabel.${t}`, this.config);
                                return e.length ? e : `${t}p`;
                            }
                            return ge(t);

                          case "captions":
                            return xe.getLabel.call(this);

                          default:
                            return null;
                        }
                    },
                    setQualityMenu(e) {
                        if (!S.element(this.elements.settings.panels.quality)) return;
                        const t = "quality", i = this.elements.settings.panels.quality.querySelector('[role="menu"]');
                        S.array(e) && (this.options.quality = se(e).filter((e => this.config.quality.options.includes(e))));
                        const s = !S.empty(this.options.quality) && this.options.quality.length > 1;
                        if (Pe.toggleMenuButton.call(this, t, s), j(i), Pe.checkMenu.call(this), !s) return;
                        const n = e => {
                            const t = ve.get(`qualityBadge.${e}`, this.config);
                            return t.length ? Pe.createBadge.call(this, t) : null;
                        };
                        this.options.quality.sort(((e, t) => {
                            const i = this.config.quality.options;
                            return i.indexOf(e) > i.indexOf(t) ? 1 : -1;
                        })).forEach((e => {
                            Pe.createMenuItem.call(this, {
                                value: e,
                                list: i,
                                type: t,
                                title: Pe.getLabel.call(this, "quality", e),
                                badge: n(e)
                            });
                        })), Pe.updateSetting.call(this, t, i);
                    },
                    setCaptionsMenu() {
                        if (!S.element(this.elements.settings.panels.captions)) return;
                        const e = "captions", t = this.elements.settings.panels.captions.querySelector('[role="menu"]'), i = xe.getTracks.call(this), s = Boolean(i.length);
                        if (Pe.toggleMenuButton.call(this, e, s), j(t), Pe.checkMenu.call(this), !s) return;
                        const n = i.map(((e, i) => ({
                            value: i,
                            checked: this.captions.toggled && this.currentTrack === i,
                            title: xe.getLabel.call(this, e),
                            badge: e.language && Pe.createBadge.call(this, e.language.toUpperCase()),
                            list: t,
                            type: "language"
                        })));
                        n.unshift({
                            value: -1,
                            checked: !this.captions.toggled,
                            title: ve.get("disabled", this.config),
                            list: t,
                            type: "language"
                        }), n.forEach(Pe.createMenuItem.bind(this)), Pe.updateSetting.call(this, e, t);
                    },
                    setSpeedMenu() {
                        if (!S.element(this.elements.settings.panels.speed)) return;
                        const e = "speed", t = this.elements.settings.panels.speed.querySelector('[role="menu"]');
                        this.options.speed = this.options.speed.filter((e => e >= this.minimumSpeed && e <= this.maximumSpeed));
                        const i = !S.empty(this.options.speed) && this.options.speed.length > 1;
                        Pe.toggleMenuButton.call(this, e, i), j(t), Pe.checkMenu.call(this), i && (this.options.speed.forEach((i => {
                            Pe.createMenuItem.call(this, {
                                value: i,
                                list: t,
                                type: e,
                                title: Pe.getLabel.call(this, "speed", i)
                            });
                        })), Pe.updateSetting.call(this, e, t));
                    },
                    checkMenu() {
                        const {buttons: e} = this.elements.settings, t = !S.empty(e) && Object.values(e).some((e => !e.hidden));
                        H(this.elements.settings.menu, !t);
                    },
                    focusFirstMenuItem(e, t = !1) {
                        if (this.elements.settings.popup.hidden) return;
                        let i = e;
                        S.element(i) || (i = Object.values(this.elements.settings.panels).find((e => !e.hidden)));
                        const s = i.querySelector('[role^="menuitem"]');
                        W.call(this, s, t);
                    },
                    toggleMenu(e) {
                        const {popup: t} = this.elements.settings, i = this.elements.buttons.settings;
                        if (!S.element(t) || !S.element(i)) return;
                        const {hidden: s} = t;
                        let n = s;
                        if (S.boolean(e)) n = e; else if (S.keyboardEvent(e) && "Escape" === e.key) n = !1; else if (S.event(e)) {
                            const s = S.function(e.composedPath) ? e.composedPath()[0] : e.target, a = t.contains(s);
                            if (a || !a && e.target !== i && n) return;
                        }
                        i.setAttribute("aria-expanded", n), H(t, !n), R(this.elements.container, this.config.classNames.menu.open, n), 
                        n && S.keyboardEvent(e) ? Pe.focusFirstMenuItem.call(this, null, !0) : n || s || W.call(this, i, S.keyboardEvent(e));
                    },
                    getMenuSize(e) {
                        const t = e.cloneNode(!0);
                        t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), 
                        e.parentNode.appendChild(t);
                        const i = t.scrollWidth, s = t.scrollHeight;
                        return O(t), {
                            width: i,
                            height: s
                        };
                    },
                    showMenuPanel(e = "", t = !1) {
                        const i = this.elements.container.querySelector(`#plyr-settings-${this.id}-${e}`);
                        if (!S.element(i)) return;
                        const s = i.parentNode, n = Array.from(s.children).find((e => !e.hidden));
                        if (K.transitions && !K.reducedMotion) {
                            s.style.width = `${n.scrollWidth}px`, s.style.height = `${n.scrollHeight}px`;
                            const e = Pe.getMenuSize.call(this, i), t = e => {
                                e.target === s && [ "width", "height" ].includes(e.propertyName) && (s.style.width = "", 
                                s.style.height = "", J.call(this, s, E, t));
                            };
                            X.call(this, s, E, t), s.style.width = `${e.width}px`, s.style.height = `${e.height}px`;
                        }
                        H(n, !0), H(i, !1), Pe.focusFirstMenuItem.call(this, i, t);
                    },
                    setDownloadUrl() {
                        const e = this.elements.buttons.download;
                        S.element(e) && e.setAttribute("href", this.download);
                    },
                    create(e) {
                        const {bindMenuItemShortcuts: t, createButton: i, createProgress: s, createRange: n, createTime: a, setQualityMenu: l, setSpeedMenu: r, showMenuPanel: o} = Pe;
                        this.elements.controls = null, S.array(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(i.call(this, "play-large"));
                        const c = $("div", D(this.config.selectors.controls.wrapper));
                        this.elements.controls = c;
                        const u = {
                            class: "plyr__controls__item"
                        };
                        return se(S.array(this.config.controls) ? this.config.controls : []).forEach((l => {
                            if ("restart" === l && c.appendChild(i.call(this, "restart", u)), "rewind" === l && c.appendChild(i.call(this, "rewind", u)), 
                            "play" === l && c.appendChild(i.call(this, "play", u)), "fast-forward" === l && c.appendChild(i.call(this, "fast-forward", u)), 
                            "progress" === l) {
                                const t = $("div", {
                                    class: `${u.class} plyr__progress__container`
                                }), i = $("div", D(this.config.selectors.progress));
                                if (i.appendChild(n.call(this, "seek", {
                                    id: `plyr-seek-${e.id}`
                                })), i.appendChild(s.call(this, "buffer")), this.config.tooltips.seek) {
                                    const e = $("span", {
                                        class: this.config.classNames.tooltip
                                    }, "00:00");
                                    i.appendChild(e), this.elements.display.seekTooltip = e;
                                }
                                this.elements.progress = i, t.appendChild(this.elements.progress), c.appendChild(t);
                            }
                            if ("current-time" === l && c.appendChild(a.call(this, "currentTime", u)), "duration" === l && c.appendChild(a.call(this, "duration", u)), 
                            "mute" === l || "volume" === l) {
                                let {volume: t} = this.elements;
                                if (S.element(t) && c.contains(t) || (t = $("div", x({}, u, {
                                    class: `${u.class} plyr__volume`.trim()
                                })), this.elements.volume = t, c.appendChild(t)), "mute" === l && t.appendChild(i.call(this, "mute")), 
                                "volume" === l && !M.isIos && !M.isIPadOS) {
                                    const i = {
                                        max: 1,
                                        step: .05,
                                        value: this.config.volume
                                    };
                                    t.appendChild(n.call(this, "volume", x(i, {
                                        id: `plyr-volume-${e.id}`
                                    })));
                                }
                            }
                            if ("captions" === l && c.appendChild(i.call(this, "captions", u)), "settings" === l && !S.empty(this.config.settings)) {
                                const s = $("div", x({}, u, {
                                    class: `${u.class} plyr__menu`.trim(),
                                    hidden: ""
                                }));
                                s.appendChild(i.call(this, "settings", {
                                    "aria-haspopup": !0,
                                    "aria-controls": `plyr-settings-${e.id}`,
                                    "aria-expanded": !1
                                }));
                                const n = $("div", {
                                    class: "plyr__menu__container",
                                    id: `plyr-settings-${e.id}`,
                                    hidden: ""
                                }), a = $("div"), l = $("div", {
                                    id: `plyr-settings-${e.id}-home`
                                }), r = $("div", {
                                    role: "menu"
                                });
                                l.appendChild(r), a.appendChild(l), this.elements.settings.panels.home = l, this.config.settings.forEach((i => {
                                    const s = $("button", x(D(this.config.selectors.buttons.settings), {
                                        type: "button",
                                        class: `${this.config.classNames.control} ${this.config.classNames.control}--forward`,
                                        role: "menuitem",
                                        "aria-haspopup": !0,
                                        hidden: ""
                                    }));
                                    t.call(this, s, i), X.call(this, s, "click", (() => {
                                        o.call(this, i, !1);
                                    }));
                                    const n = $("span", null, ve.get(i, this.config)), l = $("span", {
                                        class: this.config.classNames.menu.value
                                    });
                                    l.innerHTML = e[i], n.appendChild(l), s.appendChild(n), r.appendChild(s);
                                    const c = $("div", {
                                        id: `plyr-settings-${e.id}-${i}`,
                                        hidden: ""
                                    }), u = $("button", {
                                        type: "button",
                                        class: `${this.config.classNames.control} ${this.config.classNames.control}--back`
                                    });
                                    u.appendChild($("span", {
                                        "aria-hidden": !0
                                    }, ve.get(i, this.config))), u.appendChild($("span", {
                                        class: this.config.classNames.hidden
                                    }, ve.get("menuBack", this.config))), X.call(this, c, "keydown", (e => {
                                        "ArrowLeft" === e.key && (e.preventDefault(), e.stopPropagation(), o.call(this, "home", !0));
                                    }), !1), X.call(this, u, "click", (() => {
                                        o.call(this, "home", !1);
                                    })), c.appendChild(u), c.appendChild($("div", {
                                        role: "menu"
                                    })), a.appendChild(c), this.elements.settings.buttons[i] = s, this.elements.settings.panels[i] = c;
                                })), n.appendChild(a), s.appendChild(n), c.appendChild(s), this.elements.settings.popup = n, 
                                this.elements.settings.menu = s;
                            }
                            if ("pip" === l && K.pip && c.appendChild(i.call(this, "pip", u)), "airplay" === l && K.airplay && c.appendChild(i.call(this, "airplay", u)), 
                            "download" === l) {
                                const e = x({}, u, {
                                    element: "a",
                                    href: this.download,
                                    target: "_blank"
                                });
                                this.isHTML5 && (e.download = "");
                                const {download: t} = this.config.urls;
                                !S.url(t) && this.isEmbed && x(e, {
                                    icon: `logo-${this.provider}`,
                                    label: this.provider
                                }), c.appendChild(i.call(this, "download", e));
                            }
                            "fullscreen" === l && c.appendChild(i.call(this, "fullscreen", u));
                        })), this.isHTML5 && l.call(this, de.getQualityOptions.call(this)), r.call(this), 
                        c;
                    },
                    inject() {
                        if (this.config.loadSprite) {
                            const e = Pe.getIconUrl.call(this);
                            e.cors && ke(e.url, "sprite-plyr");
                        }
                        this.id = Math.floor(1e4 * Math.random());
                        let e = null;
                        this.elements.controls = null;
                        const t = {
                            id: this.id,
                            seektime: this.config.seekTime,
                            title: this.config.title
                        };
                        let i = !0;
                        S.function(this.config.controls) && (this.config.controls = this.config.controls.call(this, t)), 
                        this.config.controls || (this.config.controls = []), S.element(this.config.controls) || S.string(this.config.controls) ? e = this.config.controls : (e = Pe.create.call(this, {
                            id: this.id,
                            seektime: this.config.seekTime,
                            speed: this.speed,
                            quality: this.quality,
                            captions: xe.getLabel.call(this)
                        }), i = !1);
                        let s;
                        i && S.string(this.config.controls) && (e = (e => {
                            let i = e;
                            return Object.entries(t).forEach((([e, t]) => {
                                i = pe(i, `{${e}}`, t);
                            })), i;
                        })(e)), S.string(this.config.selectors.controls.container) && (s = document.querySelector(this.config.selectors.controls.container)), 
                        S.element(s) || (s = this.elements.container);
                        if (s[S.element(e) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", e), 
                        S.element(this.elements.controls) || Pe.findElements.call(this), !S.empty(this.elements.buttons)) {
                            const e = e => {
                                const t = this.config.classNames.controlPressed;
                                e.setAttribute("aria-pressed", "false"), Object.defineProperty(e, "pressed", {
                                    configurable: !0,
                                    enumerable: !0,
                                    get: () => F(e, t),
                                    set(i = !1) {
                                        R(e, t, i), e.setAttribute("aria-pressed", i ? "true" : "false");
                                    }
                                });
                            };
                            Object.values(this.elements.buttons).filter(Boolean).forEach((t => {
                                S.array(t) || S.nodeList(t) ? Array.from(t).filter(Boolean).forEach(e) : e(t);
                            }));
                        }
                        if (M.isEdge && P(s), this.config.tooltips.controls) {
                            const {classNames: e, selectors: t} = this.config, i = `${t.controls.wrapper} ${t.labels} .${e.hidden}`, s = U.call(this, i);
                            Array.from(s).forEach((e => {
                                R(e, this.config.classNames.hidden, !1), R(e, this.config.classNames.tooltip, !0);
                            }));
                        }
                    },
                    setMediaMetadata() {
                        try {
                            "mediaSession" in navigator && (navigator.mediaSession.metadata = new window.MediaMetadata({
                                title: this.config.mediaMetadata.title,
                                artist: this.config.mediaMetadata.artist,
                                album: this.config.mediaMetadata.album,
                                artwork: this.config.mediaMetadata.artwork
                            }));
                        } catch (e) {}
                    },
                    setMarkers() {
                        var e, t;
                        if (!this.duration || this.elements.markers) return;
                        const i = null === (e = this.config.markers) || void 0 === e || null === (t = e.points) || void 0 === t ? void 0 : t.filter((({time: e}) => e > 0 && e < this.duration));
                        if (null == i || !i.length) return;
                        const s = document.createDocumentFragment(), n = document.createDocumentFragment();
                        let a = null;
                        const l = `${this.config.classNames.tooltip}--visible`, r = e => R(a, l, e);
                        i.forEach((e => {
                            const t = $("span", {
                                class: this.config.classNames.marker
                            }, ""), i = e.time / this.duration * 100 + "%";
                            a && (t.addEventListener("mouseenter", (() => {
                                e.label || (a.style.left = i, a.innerHTML = e.label, r(!0));
                            })), t.addEventListener("mouseleave", (() => {
                                r(!1);
                            }))), t.addEventListener("click", (() => {
                                this.currentTime = e.time;
                            })), t.style.left = i, n.appendChild(t);
                        })), s.appendChild(n), this.config.tooltips.seek || (a = $("span", {
                            class: this.config.classNames.tooltip
                        }, ""), s.appendChild(a)), this.elements.markers = {
                            points: n,
                            tip: a
                        }, this.elements.progress.appendChild(s);
                    }
                };
                function Me(e, t = !0) {
                    let i = e;
                    if (t) {
                        const e = document.createElement("a");
                        e.href = i, i = e.href;
                    }
                    try {
                        return new URL(i);
                    } catch (e) {
                        return null;
                    }
                }
                function Ne(e) {
                    const t = new URLSearchParams;
                    return S.object(e) && Object.entries(e).forEach((([e, i]) => {
                        t.set(e, i);
                    })), t;
                }
                const xe = {
                    setup() {
                        if (!this.supported.ui) return;
                        if (!this.isVideo || this.isYouTube || this.isHTML5 && !K.textTracks) return void (S.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && Pe.setCaptionsMenu.call(this));
                        var e, t;
                        if (S.element(this.elements.captions) || (this.elements.captions = $("div", D(this.config.selectors.captions)), 
                        this.elements.captions.setAttribute("dir", "auto"), e = this.elements.captions, 
                        t = this.elements.wrapper, S.element(e) && S.element(t) && t.parentNode.insertBefore(e, t.nextSibling)), 
                        M.isIE && window.URL) {
                            const e = this.media.querySelectorAll("track");
                            Array.from(e).forEach((e => {
                                const t = e.getAttribute("src"), i = Me(t);
                                null !== i && i.hostname !== window.location.href.hostname && [ "http:", "https:" ].includes(i.protocol) && Te(t, "blob").then((t => {
                                    e.setAttribute("src", window.URL.createObjectURL(t));
                                })).catch((() => {
                                    O(e);
                                }));
                            }));
                        }
                        const i = se((navigator.languages || [ navigator.language || navigator.userLanguage || "en" ]).map((e => e.split("-")[0])));
                        let s = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
                        "auto" === s && ([s] = i);
                        let n = this.storage.get("captions");
                        if (S.boolean(n) || ({active: n} = this.config.captions), Object.assign(this.captions, {
                            toggled: !1,
                            active: n,
                            language: s,
                            languages: i
                        }), this.isHTML5) {
                            const e = this.config.captions.update ? "addtrack removetrack" : "removetrack";
                            X.call(this, this.media.textTracks, e, xe.update.bind(this));
                        }
                        setTimeout(xe.update.bind(this), 0);
                    },
                    update() {
                        const e = xe.getTracks.call(this, !0), {active: t, language: i, meta: s, currentTrackNode: n} = this.captions, a = Boolean(e.find((e => e.language === i)));
                        this.isHTML5 && this.isVideo && e.filter((e => !s.get(e))).forEach((e => {
                            this.debug.log("Track added", e), s.set(e, {
                                default: "showing" === e.mode
                            }), "showing" === e.mode && (e.mode = "hidden"), X.call(this, e, "cuechange", (() => xe.updateCues.call(this)));
                        })), (a && this.language !== i || !e.includes(n)) && (xe.setLanguage.call(this, i), 
                        xe.toggle.call(this, t && a)), this.elements && R(this.elements.container, this.config.classNames.captions.enabled, !S.empty(e)), 
                        S.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && Pe.setCaptionsMenu.call(this);
                    },
                    toggle(e, t = !0) {
                        if (!this.supported.ui) return;
                        const {toggled: i} = this.captions, s = this.config.classNames.captions.active, n = S.nullOrUndefined(e) ? !i : e;
                        if (n !== i) {
                            if (t || (this.captions.active = n, this.storage.set({
                                captions: n
                            })), !this.language && n && !t) {
                                const e = xe.getTracks.call(this), t = xe.findTrack.call(this, [ this.captions.language, ...this.captions.languages ], !0);
                                return this.captions.language = t.language, void xe.set.call(this, e.indexOf(t));
                            }
                            this.elements.buttons.captions && (this.elements.buttons.captions.pressed = n), 
                            R(this.elements.container, s, n), this.captions.toggled = n, Pe.updateSetting.call(this, "captions"), 
                            Z.call(this, this.media, n ? "captionsenabled" : "captionsdisabled");
                        }
                        setTimeout((() => {
                            n && this.captions.toggled && (this.captions.currentTrackNode.mode = "hidden");
                        }));
                    },
                    set(e, t = !0) {
                        const i = xe.getTracks.call(this);
                        if (-1 !== e) if (S.number(e)) if (e in i) {
                            if (this.captions.currentTrack !== e) {
                                this.captions.currentTrack = e;
                                const s = i[e], {language: n} = s || {};
                                this.captions.currentTrackNode = s, Pe.updateSetting.call(this, "captions"), t || (this.captions.language = n, 
                                this.storage.set({
                                    language: n
                                })), this.isVimeo && this.embed.enableTextTrack(n), Z.call(this, this.media, "languagechange");
                            }
                            xe.toggle.call(this, !0, t), this.isHTML5 && this.isVideo && xe.updateCues.call(this);
                        } else this.debug.warn("Track not found", e); else this.debug.warn("Invalid caption argument", e); else xe.toggle.call(this, !1, t);
                    },
                    setLanguage(e, t = !0) {
                        if (!S.string(e)) return void this.debug.warn("Invalid language argument", e);
                        const i = e.toLowerCase();
                        this.captions.language = i;
                        const s = xe.getTracks.call(this), n = xe.findTrack.call(this, [ i ]);
                        xe.set.call(this, s.indexOf(n), t);
                    },
                    getTracks(e = !1) {
                        return Array.from((this.media || {}).textTracks || []).filter((t => !this.isHTML5 || e || this.captions.meta.has(t))).filter((e => [ "captions", "subtitles" ].includes(e.kind)));
                    },
                    findTrack(e, t = !1) {
                        const i = xe.getTracks.call(this), s = e => Number((this.captions.meta.get(e) || {}).default), n = Array.from(i).sort(((e, t) => s(t) - s(e)));
                        let a;
                        return e.every((e => (a = n.find((t => t.language === e)), !a))), a || (t ? n[0] : void 0);
                    },
                    getCurrentTrack() {
                        return xe.getTracks.call(this)[this.currentTrack];
                    },
                    getLabel(e) {
                        let t = e;
                        return !S.track(t) && K.textTracks && this.captions.toggled && (t = xe.getCurrentTrack.call(this)), 
                        S.track(t) ? S.empty(t.label) ? S.empty(t.language) ? ve.get("enabled", this.config) : e.language.toUpperCase() : t.label : ve.get("disabled", this.config);
                    },
                    updateCues(e) {
                        if (!this.supported.ui) return;
                        if (!S.element(this.elements.captions)) return void this.debug.warn("No captions element to render to");
                        if (!S.nullOrUndefined(e) && !Array.isArray(e)) return void this.debug.warn("updateCues: Invalid input", e);
                        let t = e;
                        if (!t) {
                            const e = xe.getCurrentTrack.call(this);
                            t = Array.from((e || {}).activeCues || []).map((e => e.getCueAsHTML())).map(ye);
                        }
                        const i = t.map((e => e.trim())).join("\n");
                        if (i !== this.elements.captions.innerHTML) {
                            j(this.elements.captions);
                            const e = $("span", D(this.config.selectors.caption));
                            e.innerHTML = i, this.elements.captions.appendChild(e), Z.call(this, this.media, "cuechange");
                        }
                    }
                }, Le = {
                    enabled: !0,
                    title: "",
                    debug: !1,
                    autoplay: !1,
                    autopause: !0,
                    playsinline: !0,
                    seekTime: 10,
                    volume: 1,
                    muted: !1,
                    duration: null,
                    displayDuration: !0,
                    invertTime: !0,
                    toggleInvert: !0,
                    ratio: null,
                    clickToPlay: !0,
                    hideControls: !0,
                    resetOnEnd: !1,
                    disableContextMenu: !0,
                    loadSprite: !0,
                    iconPrefix: "plyr",
                    iconUrl: "https://cdn.plyr.io/3.7.8/plyr.svg",
                    blankVideo: "https://cdn.plyr.io/static/blank.mp4",
                    quality: {
                        default: 576,
                        options: [ 4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240 ],
                        forced: !1,
                        onChange: null
                    },
                    loop: {
                        active: !1
                    },
                    speed: {
                        selected: 1,
                        options: [ .5, .75, 1, 1.25, 1.5, 1.75, 2, 4 ]
                    },
                    keyboard: {
                        focused: !0,
                        global: !1
                    },
                    tooltips: {
                        controls: !1,
                        seek: !0
                    },
                    captions: {
                        active: !1,
                        language: "auto",
                        update: !1
                    },
                    fullscreen: {
                        enabled: !0,
                        fallback: !0,
                        iosNative: !1
                    },
                    storage: {
                        enabled: !0,
                        key: "plyr"
                    },
                    controls: [ "play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen" ],
                    settings: [ "captions", "quality", "speed" ],
                    i18n: {
                        restart: "Restart",
                        rewind: "Rewind {seektime}s",
                        play: "Play",
                        pause: "Pause",
                        fastForward: "Forward {seektime}s",
                        seek: "Seek",
                        seekLabel: "{currentTime} of {duration}",
                        played: "Played",
                        buffered: "Buffered",
                        currentTime: "Current time",
                        duration: "Duration",
                        volume: "Volume",
                        mute: "Mute",
                        unmute: "Unmute",
                        enableCaptions: "Enable captions",
                        disableCaptions: "Disable captions",
                        download: "Download",
                        enterFullscreen: "Enter fullscreen",
                        exitFullscreen: "Exit fullscreen",
                        frameTitle: "Player for {title}",
                        captions: "Captions",
                        settings: "Settings",
                        pip: "PIP",
                        menuBack: "Go back to previous menu",
                        speed: "Speed",
                        normal: "Normal",
                        quality: "Quality",
                        loop: "Loop",
                        start: "Start",
                        end: "End",
                        all: "All",
                        reset: "Reset",
                        disabled: "Disabled",
                        enabled: "Enabled",
                        advertisement: "Ad",
                        qualityBadge: {
                            2160: "4K",
                            1440: "HD",
                            1080: "HD",
                            720: "HD",
                            576: "SD",
                            480: "SD"
                        }
                    },
                    urls: {
                        download: null,
                        vimeo: {
                            sdk: "https://player.vimeo.com/api/player.js",
                            iframe: "https://player.vimeo.com/video/{0}?{1}",
                            api: "https://vimeo.com/api/oembed.json?url={0}"
                        },
                        youtube: {
                            sdk: "https://www.youtube.com/iframe_api",
                            api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
                        },
                        googleIMA: {
                            sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
                        }
                    },
                    listeners: {
                        seek: null,
                        play: null,
                        pause: null,
                        restart: null,
                        rewind: null,
                        fastForward: null,
                        mute: null,
                        volume: null,
                        captions: null,
                        download: null,
                        fullscreen: null,
                        pip: null,
                        airplay: null,
                        speed: null,
                        quality: null,
                        loop: null,
                        language: null
                    },
                    events: [ "ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick" ],
                    selectors: {
                        editable: "input, textarea, select, [contenteditable]",
                        container: ".plyr",
                        controls: {
                            container: null,
                            wrapper: ".plyr__controls"
                        },
                        labels: "[data-plyr]",
                        buttons: {
                            play: '[data-plyr="play"]',
                            pause: '[data-plyr="pause"]',
                            restart: '[data-plyr="restart"]',
                            rewind: '[data-plyr="rewind"]',
                            fastForward: '[data-plyr="fast-forward"]',
                            mute: '[data-plyr="mute"]',
                            captions: '[data-plyr="captions"]',
                            download: '[data-plyr="download"]',
                            fullscreen: '[data-plyr="fullscreen"]',
                            pip: '[data-plyr="pip"]',
                            airplay: '[data-plyr="airplay"]',
                            settings: '[data-plyr="settings"]',
                            loop: '[data-plyr="loop"]'
                        },
                        inputs: {
                            seek: '[data-plyr="seek"]',
                            volume: '[data-plyr="volume"]',
                            speed: '[data-plyr="speed"]',
                            language: '[data-plyr="language"]',
                            quality: '[data-plyr="quality"]'
                        },
                        display: {
                            currentTime: ".plyr__time--current",
                            duration: ".plyr__time--duration",
                            buffer: ".plyr__progress__buffer",
                            loop: ".plyr__progress__loop",
                            volume: ".plyr__volume--display"
                        },
                        progress: ".plyr__progress",
                        captions: ".plyr__captions",
                        caption: ".plyr__caption"
                    },
                    classNames: {
                        type: "plyr--{0}",
                        provider: "plyr--{0}",
                        video: "plyr__video-wrapper",
                        embed: "plyr__video-embed",
                        videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
                        embedContainer: "plyr__video-embed__container",
                        poster: "plyr__poster",
                        posterEnabled: "plyr__poster-enabled",
                        ads: "plyr__ads",
                        control: "plyr__control",
                        controlPressed: "plyr__control--pressed",
                        playing: "plyr--playing",
                        paused: "plyr--paused",
                        stopped: "plyr--stopped",
                        loading: "plyr--loading",
                        hover: "plyr--hover",
                        tooltip: "plyr__tooltip",
                        cues: "plyr__cues",
                        marker: "plyr__progress__marker",
                        hidden: "plyr__sr-only",
                        hideControls: "plyr--hide-controls",
                        isTouch: "plyr--is-touch",
                        uiSupported: "plyr--full-ui",
                        noTransition: "plyr--no-transition",
                        display: {
                            time: "plyr__time"
                        },
                        menu: {
                            value: "plyr__menu__value",
                            badge: "plyr__badge",
                            open: "plyr--menu-open"
                        },
                        captions: {
                            enabled: "plyr--captions-enabled",
                            active: "plyr--captions-active"
                        },
                        fullscreen: {
                            enabled: "plyr--fullscreen-enabled",
                            fallback: "plyr--fullscreen-fallback"
                        },
                        pip: {
                            supported: "plyr--pip-supported",
                            active: "plyr--pip-active"
                        },
                        airplay: {
                            supported: "plyr--airplay-supported",
                            active: "plyr--airplay-active"
                        },
                        previewThumbnails: {
                            thumbContainer: "plyr__preview-thumb",
                            thumbContainerShown: "plyr__preview-thumb--is-shown",
                            imageContainer: "plyr__preview-thumb__image-container",
                            timeContainer: "plyr__preview-thumb__time-container",
                            scrubbingContainer: "plyr__preview-scrubbing",
                            scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
                        }
                    },
                    attributes: {
                        embed: {
                            provider: "data-plyr-provider",
                            id: "data-plyr-embed-id",
                            hash: "data-plyr-embed-hash"
                        }
                    },
                    ads: {
                        enabled: !1,
                        publisherId: "",
                        tagUrl: ""
                    },
                    previewThumbnails: {
                        enabled: !1,
                        src: ""
                    },
                    vimeo: {
                        byline: !1,
                        portrait: !1,
                        title: !1,
                        speed: !0,
                        transparent: !1,
                        customControls: !0,
                        referrerPolicy: null,
                        premium: !1
                    },
                    youtube: {
                        rel: 0,
                        showinfo: 0,
                        iv_load_policy: 3,
                        modestbranding: 1,
                        customControls: !0,
                        noCookie: !1
                    },
                    mediaMetadata: {
                        title: "",
                        artist: "",
                        album: "",
                        artwork: []
                    },
                    markers: {
                        enabled: !1,
                        points: []
                    }
                }, Ie = "picture-in-picture", $e = "inline", _e = {
                    html5: "html5",
                    youtube: "youtube",
                    vimeo: "vimeo"
                }, Oe = "audio", je = "video";
                const qe = () => {};
                class De {
                    constructor(e = !1) {
                        this.enabled = window.console && e, this.enabled && this.log("Debugging enabled");
                    }
                    get log() {
                        return this.enabled ? Function.prototype.bind.call(console.log, console) : qe;
                    }
                    get warn() {
                        return this.enabled ? Function.prototype.bind.call(console.warn, console) : qe;
                    }
                    get error() {
                        return this.enabled ? Function.prototype.bind.call(console.error, console) : qe;
                    }
                }
                class He {
                    constructor(t) {
                        e(this, "onChange", (() => {
                            if (!this.supported) return;
                            const e = this.player.elements.buttons.fullscreen;
                            S.element(e) && (e.pressed = this.active);
                            const t = this.target === this.player.media ? this.target : this.player.elements.container;
                            Z.call(this.player, t, this.active ? "enterfullscreen" : "exitfullscreen", !0);
                        })), e(this, "toggleFallback", ((e = !1) => {
                            if (e ? this.scrollPosition = {
                                x: window.scrollX ?? 0,
                                y: window.scrollY ?? 0
                            } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = e ? "hidden" : "", 
                            R(this.target, this.player.config.classNames.fullscreen.fallback, e), M.isIos) {
                                let t = document.head.querySelector('meta[name="viewport"]');
                                const i = "viewport-fit=cover";
                                t || (t = document.createElement("meta"), t.setAttribute("name", "viewport"));
                                const s = S.string(t.content) && t.content.includes(i);
                                e ? (this.cleanupViewport = !s, s || (t.content += `,${i}`)) : this.cleanupViewport && (t.content = t.content.split(",").filter((e => e.trim() !== i)).join(","));
                            }
                            this.onChange();
                        })), e(this, "trapFocus", (e => {
                            if (M.isIos || M.isIPadOS || !this.active || "Tab" !== e.key) return;
                            const t = document.activeElement, i = U.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"), [s] = i, n = i[i.length - 1];
                            t !== n || e.shiftKey ? t === s && e.shiftKey && (n.focus(), e.preventDefault()) : (s.focus(), 
                            e.preventDefault());
                        })), e(this, "update", (() => {
                            if (this.supported) {
                                let e;
                                e = this.forceFallback ? "Fallback (forced)" : He.nativeSupported ? "Native" : "Fallback", 
                                this.player.debug.log(`${e} fullscreen enabled`);
                            } else this.player.debug.log("Fullscreen not supported and fallback disabled");
                            R(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.supported);
                        })), e(this, "enter", (() => {
                            this.supported && (M.isIos && this.player.config.fullscreen.iosNative ? this.player.isVimeo ? this.player.embed.requestFullscreen() : this.target.webkitEnterFullscreen() : !He.nativeSupported || this.forceFallback ? this.toggleFallback(!0) : this.prefix ? S.empty(this.prefix) || this.target[`${this.prefix}Request${this.property}`]() : this.target.requestFullscreen({
                                navigationUI: "hide"
                            }));
                        })), e(this, "exit", (() => {
                            if (this.supported) if (M.isIos && this.player.config.fullscreen.iosNative) this.player.isVimeo ? this.player.embed.exitFullscreen() : this.target.webkitEnterFullscreen(), 
                            ie(this.player.play()); else if (!He.nativeSupported || this.forceFallback) this.toggleFallback(!1); else if (this.prefix) {
                                if (!S.empty(this.prefix)) {
                                    const e = "moz" === this.prefix ? "Cancel" : "Exit";
                                    document[`${this.prefix}${e}${this.property}`]();
                                }
                            } else (document.cancelFullScreen || document.exitFullscreen).call(document);
                        })), e(this, "toggle", (() => {
                            this.active ? this.exit() : this.enter();
                        })), this.player = t, this.prefix = He.prefix, this.property = He.property, this.scrollPosition = {
                            x: 0,
                            y: 0
                        }, this.forceFallback = "force" === t.config.fullscreen.fallback, this.player.elements.fullscreen = t.config.fullscreen.container && function(e, t) {
                            const {prototype: i} = Element;
                            return (i.closest || function() {
                                let e = this;
                                do {
                                    if (V.matches(e, t)) return e;
                                    e = e.parentElement || e.parentNode;
                                } while (null !== e && 1 === e.nodeType);
                                return null;
                            }).call(e, t);
                        }(this.player.elements.container, t.config.fullscreen.container), X.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : `${this.prefix}fullscreenchange`, (() => {
                            this.onChange();
                        })), X.call(this.player, this.player.elements.container, "dblclick", (e => {
                            S.element(this.player.elements.controls) && this.player.elements.controls.contains(e.target) || this.player.listeners.proxy(e, this.toggle, "fullscreen");
                        })), X.call(this, this.player.elements.container, "keydown", (e => this.trapFocus(e))), 
                        this.update();
                    }
                    static get nativeSupported() {
                        return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
                    }
                    get useNative() {
                        return He.nativeSupported && !this.forceFallback;
                    }
                    static get prefix() {
                        if (S.function(document.exitFullscreen)) return "";
                        let e = "";
                        return [ "webkit", "moz", "ms" ].some((t => !(!S.function(document[`${t}ExitFullscreen`]) && !S.function(document[`${t}CancelFullScreen`])) && (e = t, 
                        !0))), e;
                    }
                    static get property() {
                        return "moz" === this.prefix ? "FullScreen" : "Fullscreen";
                    }
                    get supported() {
                        return [ this.player.config.fullscreen.enabled, this.player.isVideo, He.nativeSupported || this.player.config.fullscreen.fallback, !this.player.isYouTube || He.nativeSupported || !M.isIos || this.player.config.playsinline && !this.player.config.fullscreen.iosNative ].every(Boolean);
                    }
                    get active() {
                        if (!this.supported) return !1;
                        if (!He.nativeSupported || this.forceFallback) return F(this.target, this.player.config.classNames.fullscreen.fallback);
                        const e = this.prefix ? this.target.getRootNode()[`${this.prefix}${this.property}Element`] : this.target.getRootNode().fullscreenElement;
                        return e && e.shadowRoot ? e === this.target.getRootNode().host : e === this.target;
                    }
                    get target() {
                        return M.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen ?? this.player.elements.container;
                    }
                }
                function Re(e, t = 1) {
                    return new Promise(((i, s) => {
                        const n = new Image, a = () => {
                            delete n.onload, delete n.onerror, (n.naturalWidth >= t ? i : s)(n);
                        };
                        Object.assign(n, {
                            onload: a,
                            onerror: a,
                            src: e
                        });
                    }));
                }
                const Fe = {
                    addStyleHook() {
                        R(this.elements.container, this.config.selectors.container.replace(".", ""), !0), 
                        R(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
                    },
                    toggleNativeControls(e = !1) {
                        e && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls");
                    },
                    build() {
                        if (this.listeners.media(), !this.supported.ui) return this.debug.warn(`Basic support only for ${this.provider} ${this.type}`), 
                        void Fe.toggleNativeControls.call(this, !0);
                        S.element(this.elements.controls) || (Pe.inject.call(this), this.listeners.controls()), 
                        Fe.toggleNativeControls.call(this), this.isHTML5 && xe.setup.call(this), this.volume = null, 
                        this.muted = null, this.loop = null, this.quality = null, this.speed = null, Pe.updateVolume.call(this), 
                        Pe.timeUpdate.call(this), Pe.durationUpdate.call(this), Fe.checkPlaying.call(this), 
                        R(this.elements.container, this.config.classNames.pip.supported, K.pip && this.isHTML5 && this.isVideo), 
                        R(this.elements.container, this.config.classNames.airplay.supported, K.airplay && this.isHTML5), 
                        R(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, 
                        setTimeout((() => {
                            Z.call(this, this.media, "ready");
                        }), 0), Fe.setTitle.call(this), this.poster && Fe.setPoster.call(this, this.poster, !1).catch((() => {})), 
                        this.config.duration && Pe.durationUpdate.call(this), this.config.mediaMetadata && Pe.setMediaMetadata.call(this);
                    },
                    setTitle() {
                        let e = ve.get("play", this.config);
                        if (S.string(this.config.title) && !S.empty(this.config.title) && (e += `, ${this.config.title}`), 
                        Array.from(this.elements.buttons.play || []).forEach((t => {
                            t.setAttribute("aria-label", e);
                        })), this.isEmbed) {
                            const e = B.call(this, "iframe");
                            if (!S.element(e)) return;
                            const t = S.empty(this.config.title) ? "video" : this.config.title, i = ve.get("frameTitle", this.config);
                            e.setAttribute("title", i.replace("{title}", t));
                        }
                    },
                    togglePoster(e) {
                        R(this.elements.container, this.config.classNames.posterEnabled, e);
                    },
                    setPoster(e, t = !0) {
                        return t && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", e), 
                        this.elements.poster.removeAttribute("hidden"), te.call(this).then((() => Re(e))).catch((t => {
                            throw e === this.poster && Fe.togglePoster.call(this, !1), t;
                        })).then((() => {
                            if (e !== this.poster) throw new Error("setPoster cancelled by later call to setPoster");
                        })).then((() => (Object.assign(this.elements.poster.style, {
                            backgroundImage: `url('${e}')`,
                            backgroundSize: ""
                        }), Fe.togglePoster.call(this, !0), e))));
                    },
                    checkPlaying(e) {
                        R(this.elements.container, this.config.classNames.playing, this.playing), R(this.elements.container, this.config.classNames.paused, this.paused), 
                        R(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach((e => {
                            Object.assign(e, {
                                pressed: this.playing
                            }), e.setAttribute("aria-label", ve.get(this.playing ? "pause" : "play", this.config));
                        })), S.event(e) && "timeupdate" === e.type || Fe.toggleControls.call(this);
                    },
                    checkLoading(e) {
                        this.loading = [ "stalled", "waiting" ].includes(e.type), clearTimeout(this.timers.loading), 
                        this.timers.loading = setTimeout((() => {
                            R(this.elements.container, this.config.classNames.loading, this.loading), Fe.toggleControls.call(this);
                        }), this.loading ? 250 : 0);
                    },
                    toggleControls(e) {
                        const {controls: t} = this.elements;
                        if (t && this.config.hideControls) {
                            const i = this.touch && this.lastSeekTime + 2e3 > Date.now();
                            this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover || i));
                        }
                    },
                    migrateStyles() {
                        Object.values({
                            ...this.media.style
                        }).filter((e => !S.empty(e) && S.string(e) && e.startsWith("--plyr"))).forEach((e => {
                            this.elements.container.style.setProperty(e, this.media.style.getPropertyValue(e)), 
                            this.media.style.removeProperty(e);
                        })), S.empty(this.media.style) && this.media.removeAttribute("style");
                    }
                };
                class Ve {
                    constructor(t) {
                        e(this, "firstTouch", (() => {
                            const {player: e} = this, {elements: t} = e;
                            e.touch = !0, R(t.container, e.config.classNames.isTouch, !0);
                        })), e(this, "global", ((e = !0) => {
                            const {player: t} = this;
                            t.config.keyboard.global && Q.call(t, window, "keydown keyup", this.handleKey, e, !1), 
                            Q.call(t, document.body, "click", this.toggleMenu, e), G.call(t, document.body, "touchstart", this.firstTouch);
                        })), e(this, "container", (() => {
                            const {player: e} = this, {config: t, elements: i, timers: s} = e;
                            !t.keyboard.global && t.keyboard.focused && X.call(e, i.container, "keydown keyup", this.handleKey, !1), 
                            X.call(e, i.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", (t => {
                                const {controls: n} = i;
                                n && "enterfullscreen" === t.type && (n.pressed = !1, n.hover = !1);
                                let a = 0;
                                [ "touchstart", "touchmove", "mousemove" ].includes(t.type) && (Fe.toggleControls.call(e, !0), 
                                a = e.touch ? 3e3 : 2e3), clearTimeout(s.controls), s.controls = setTimeout((() => Fe.toggleControls.call(e, !1)), a);
                            }));
                            const n = () => {
                                if (!e.isVimeo || e.config.vimeo.premium) return;
                                const t = i.wrapper, {active: s} = e.fullscreen, [n, a] = ce.call(e), l = ae(`aspect-ratio: ${n} / ${a}`);
                                if (!s) return void (l ? (t.style.width = null, t.style.height = null) : (t.style.maxWidth = null, 
                                t.style.margin = null));
                                const [r, o] = [ Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) ], c = r / o > n / a;
                                l ? (t.style.width = c ? "auto" : "100%", t.style.height = c ? "100%" : "auto") : (t.style.maxWidth = c ? o / a * n + "px" : null, 
                                t.style.margin = c ? "0 auto" : null);
                            }, a = () => {
                                clearTimeout(s.resized), s.resized = setTimeout(n, 50);
                            };
                            X.call(e, i.container, "enterfullscreen exitfullscreen", (t => {
                                const {target: s} = e.fullscreen;
                                if (s !== i.container) return;
                                if (!e.isEmbed && S.empty(e.config.ratio)) return;
                                n();
                                ("enterfullscreen" === t.type ? X : J).call(e, window, "resize", a);
                            }));
                        })), e(this, "media", (() => {
                            const {player: e} = this, {elements: t} = e;
                            if (X.call(e, e.media, "timeupdate seeking seeked", (t => Pe.timeUpdate.call(e, t))), 
                            X.call(e, e.media, "durationchange loadeddata loadedmetadata", (t => Pe.durationUpdate.call(e, t))), 
                            X.call(e, e.media, "ended", (() => {
                                e.isHTML5 && e.isVideo && e.config.resetOnEnd && (e.restart(), e.pause());
                            })), X.call(e, e.media, "progress playing seeking seeked", (t => Pe.updateProgress.call(e, t))), 
                            X.call(e, e.media, "volumechange", (t => Pe.updateVolume.call(e, t))), X.call(e, e.media, "playing play pause ended emptied timeupdate", (t => Fe.checkPlaying.call(e, t))), 
                            X.call(e, e.media, "waiting canplay seeked playing", (t => Fe.checkLoading.call(e, t))), 
                            e.supported.ui && e.config.clickToPlay && !e.isAudio) {
                                const i = B.call(e, `.${e.config.classNames.video}`);
                                if (!S.element(i)) return;
                                X.call(e, t.container, "click", (s => {
                                    ([ t.container, i ].includes(s.target) || i.contains(s.target)) && (e.touch && e.config.hideControls || (e.ended ? (this.proxy(s, e.restart, "restart"), 
                                    this.proxy(s, (() => {
                                        ie(e.play());
                                    }), "play")) : this.proxy(s, (() => {
                                        ie(e.togglePlay());
                                    }), "play")));
                                }));
                            }
                            e.supported.ui && e.config.disableContextMenu && X.call(e, t.wrapper, "contextmenu", (e => {
                                e.preventDefault();
                            }), !1), X.call(e, e.media, "volumechange", (() => {
                                e.storage.set({
                                    volume: e.volume,
                                    muted: e.muted
                                });
                            })), X.call(e, e.media, "ratechange", (() => {
                                Pe.updateSetting.call(e, "speed"), e.storage.set({
                                    speed: e.speed
                                });
                            })), X.call(e, e.media, "qualitychange", (t => {
                                Pe.updateSetting.call(e, "quality", null, t.detail.quality);
                            })), X.call(e, e.media, "ready qualitychange", (() => {
                                Pe.setDownloadUrl.call(e);
                            }));
                            const i = e.config.events.concat([ "keyup", "keydown" ]).join(" ");
                            X.call(e, e.media, i, (i => {
                                let {detail: s = {}} = i;
                                "error" === i.type && (s = e.media.error), Z.call(e, t.container, i.type, !0, s);
                            }));
                        })), e(this, "proxy", ((e, t, i) => {
                            const {player: s} = this, n = s.config.listeners[i];
                            let a = !0;
                            S.function(n) && (a = n.call(s, e)), !1 !== a && S.function(t) && t.call(s, e);
                        })), e(this, "bind", ((e, t, i, s, n = !0) => {
                            const {player: a} = this, l = a.config.listeners[s], r = S.function(l);
                            X.call(a, e, t, (e => this.proxy(e, i, s)), n && !r);
                        })), e(this, "controls", (() => {
                            const {player: e} = this, {elements: t} = e, i = M.isIE ? "change" : "input";
                            if (t.buttons.play && Array.from(t.buttons.play).forEach((t => {
                                this.bind(t, "click", (() => {
                                    ie(e.togglePlay());
                                }), "play");
                            })), this.bind(t.buttons.restart, "click", e.restart, "restart"), this.bind(t.buttons.rewind, "click", (() => {
                                e.lastSeekTime = Date.now(), e.rewind();
                            }), "rewind"), this.bind(t.buttons.fastForward, "click", (() => {
                                e.lastSeekTime = Date.now(), e.forward();
                            }), "fastForward"), this.bind(t.buttons.mute, "click", (() => {
                                e.muted = !e.muted;
                            }), "mute"), this.bind(t.buttons.captions, "click", (() => e.toggleCaptions())), 
                            this.bind(t.buttons.download, "click", (() => {
                                Z.call(e, e.media, "download");
                            }), "download"), this.bind(t.buttons.fullscreen, "click", (() => {
                                e.fullscreen.toggle();
                            }), "fullscreen"), this.bind(t.buttons.pip, "click", (() => {
                                e.pip = "toggle";
                            }), "pip"), this.bind(t.buttons.airplay, "click", e.airplay, "airplay"), this.bind(t.buttons.settings, "click", (t => {
                                t.stopPropagation(), t.preventDefault(), Pe.toggleMenu.call(e, t);
                            }), null, !1), this.bind(t.buttons.settings, "keyup", (t => {
                                [ " ", "Enter" ].includes(t.key) && ("Enter" !== t.key ? (t.preventDefault(), t.stopPropagation(), 
                                Pe.toggleMenu.call(e, t)) : Pe.focusFirstMenuItem.call(e, null, !0));
                            }), null, !1), this.bind(t.settings.menu, "keydown", (t => {
                                "Escape" === t.key && Pe.toggleMenu.call(e, t);
                            })), this.bind(t.inputs.seek, "mousedown mousemove", (e => {
                                const i = t.progress.getBoundingClientRect(), s = 100 / i.width * (e.pageX - i.left);
                                e.currentTarget.setAttribute("seek-value", s);
                            })), this.bind(t.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", (t => {
                                const i = t.currentTarget, s = "play-on-seeked";
                                if (S.keyboardEvent(t) && ![ "ArrowLeft", "ArrowRight" ].includes(t.key)) return;
                                e.lastSeekTime = Date.now();
                                const n = i.hasAttribute(s), a = [ "mouseup", "touchend", "keyup" ].includes(t.type);
                                n && a ? (i.removeAttribute(s), ie(e.play())) : !a && e.playing && (i.setAttribute(s, ""), 
                                e.pause());
                            })), M.isIos) {
                                const t = U.call(e, 'input[type="range"]');
                                Array.from(t).forEach((e => this.bind(e, i, (e => P(e.target)))));
                            }
                            this.bind(t.inputs.seek, i, (t => {
                                const i = t.currentTarget;
                                let s = i.getAttribute("seek-value");
                                S.empty(s) && (s = i.value), i.removeAttribute("seek-value"), e.currentTime = s / i.max * e.duration;
                            }), "seek"), this.bind(t.progress, "mouseenter mouseleave mousemove", (t => Pe.updateSeekTooltip.call(e, t))), 
                            this.bind(t.progress, "mousemove touchmove", (t => {
                                const {previewThumbnails: i} = e;
                                i && i.loaded && i.startMove(t);
                            })), this.bind(t.progress, "mouseleave touchend click", (() => {
                                const {previewThumbnails: t} = e;
                                t && t.loaded && t.endMove(!1, !0);
                            })), this.bind(t.progress, "mousedown touchstart", (t => {
                                const {previewThumbnails: i} = e;
                                i && i.loaded && i.startScrubbing(t);
                            })), this.bind(t.progress, "mouseup touchend", (t => {
                                const {previewThumbnails: i} = e;
                                i && i.loaded && i.endScrubbing(t);
                            })), M.isWebKit && Array.from(U.call(e, 'input[type="range"]')).forEach((t => {
                                this.bind(t, "input", (t => Pe.updateRangeFill.call(e, t.target)));
                            })), e.config.toggleInvert && !S.element(t.display.duration) && this.bind(t.display.currentTime, "click", (() => {
                                0 !== e.currentTime && (e.config.invertTime = !e.config.invertTime, Pe.timeUpdate.call(e));
                            })), this.bind(t.inputs.volume, i, (t => {
                                e.volume = t.target.value;
                            }), "volume"), this.bind(t.controls, "mouseenter mouseleave", (i => {
                                t.controls.hover = !e.touch && "mouseenter" === i.type;
                            })), t.fullscreen && Array.from(t.fullscreen.children).filter((e => !e.contains(t.container))).forEach((i => {
                                this.bind(i, "mouseenter mouseleave", (i => {
                                    t.controls && (t.controls.hover = !e.touch && "mouseenter" === i.type);
                                }));
                            })), this.bind(t.controls, "mousedown mouseup touchstart touchend touchcancel", (e => {
                                t.controls.pressed = [ "mousedown", "touchstart" ].includes(e.type);
                            })), this.bind(t.controls, "focusin", (() => {
                                const {config: i, timers: s} = e;
                                R(t.controls, i.classNames.noTransition, !0), Fe.toggleControls.call(e, !0), setTimeout((() => {
                                    R(t.controls, i.classNames.noTransition, !1);
                                }), 0);
                                const n = this.touch ? 3e3 : 4e3;
                                clearTimeout(s.controls), s.controls = setTimeout((() => Fe.toggleControls.call(e, !1)), n);
                            })), this.bind(t.inputs.volume, "wheel", (t => {
                                const i = t.webkitDirectionInvertedFromDevice, [s, n] = [ t.deltaX, -t.deltaY ].map((e => i ? -e : e)), a = Math.sign(Math.abs(s) > Math.abs(n) ? s : n);
                                e.increaseVolume(a / 50);
                                const {volume: l} = e.media;
                                (1 === a && l < 1 || -1 === a && l > 0) && t.preventDefault();
                            }), "volume", !1);
                        })), this.player = t, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, 
                        this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), 
                        this.firstTouch = this.firstTouch.bind(this);
                    }
                    handleKey(e) {
                        const {player: t} = this, {elements: i} = t, {key: s, type: n, altKey: a, ctrlKey: l, metaKey: r, shiftKey: o} = e, c = "keydown" === n, u = c && s === this.lastKey;
                        if (a || l || r || o) return;
                        if (!s) return;
                        if (c) {
                            const n = document.activeElement;
                            if (S.element(n)) {
                                const {editable: s} = t.config.selectors, {seek: a} = i.inputs;
                                if (n !== a && V(n, s)) return;
                                if (" " === e.key && V(n, 'button, [role^="menuitem"]')) return;
                            }
                            switch ([ " ", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "c", "f", "k", "l", "m" ].includes(s) && (e.preventDefault(), 
                            e.stopPropagation()), s) {
                              case "0":
                              case "1":
                              case "2":
                              case "3":
                              case "4":
                              case "5":
                              case "6":
                              case "7":
                              case "8":
                              case "9":
                                u || (h = parseInt(s, 10), t.currentTime = t.duration / 10 * h);
                                break;

                              case " ":
                              case "k":
                                u || ie(t.togglePlay());
                                break;

                              case "ArrowUp":
                                t.increaseVolume(.1);
                                break;

                              case "ArrowDown":
                                t.decreaseVolume(.1);
                                break;

                              case "m":
                                u || (t.muted = !t.muted);
                                break;

                              case "ArrowRight":
                                t.forward();
                                break;

                              case "ArrowLeft":
                                t.rewind();
                                break;

                              case "f":
                                t.fullscreen.toggle();
                                break;

                              case "c":
                                u || t.toggleCaptions();
                                break;

                              case "l":
                                t.loop = !t.loop;
                            }
                            "Escape" === s && !t.fullscreen.usingNative && t.fullscreen.active && t.fullscreen.toggle(), 
                            this.lastKey = s;
                        } else this.lastKey = null;
                        var h;
                    }
                    toggleMenu(e) {
                        Pe.toggleMenu.call(this.player, e);
                    }
                }
                "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof __webpack_require__.g ? __webpack_require__.g : "undefined" != typeof self && self;
                var Ue = function(e, t) {
                    return e(t = {
                        exports: {}
                    }, t.exports), t.exports;
                }((function(e, t) {
                    e.exports = function() {
                        var e = function() {}, t = {}, i = {}, s = {};
                        function n(e, t) {
                            e = e.push ? e : [ e ];
                            var n, a, l, r = [], o = e.length, c = o;
                            for (n = function(e, i) {
                                i.length && r.push(e), --c || t(r);
                            }; o--; ) a = e[o], (l = i[a]) ? n(a, l) : (s[a] = s[a] || []).push(n);
                        }
                        function a(e, t) {
                            if (e) {
                                var n = s[e];
                                if (i[e] = t, n) for (;n.length; ) n[0](e, t), n.splice(0, 1);
                            }
                        }
                        function l(t, i) {
                            t.call && (t = {
                                success: t
                            }), i.length ? (t.error || e)(i) : (t.success || e)(t);
                        }
                        function r(t, i, s, n) {
                            var a, l, o = document, c = s.async, u = (s.numRetries || 0) + 1, h = s.before || e, d = t.replace(/[\?|#].*$/, ""), m = t.replace(/^(css|img)!/, "");
                            n = n || 0, /(^css!|\.css$)/.test(d) ? ((l = o.createElement("link")).rel = "stylesheet", 
                            l.href = m, (a = "hideFocus" in l) && l.relList && (a = 0, l.rel = "preload", l.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(d) ? (l = o.createElement("img")).src = m : ((l = o.createElement("script")).src = t, 
                            l.async = void 0 === c || c), l.onload = l.onerror = l.onbeforeload = function(e) {
                                var o = e.type[0];
                                if (a) try {
                                    l.sheet.cssText.length || (o = "e");
                                } catch (e) {
                                    18 != e.code && (o = "e");
                                }
                                if ("e" == o) {
                                    if ((n += 1) < u) return r(t, i, s, n);
                                } else if ("preload" == l.rel && "style" == l.as) return l.rel = "stylesheet";
                                i(t, o, e.defaultPrevented);
                            }, !1 !== h(t, l) && o.head.appendChild(l);
                        }
                        function o(e, t, i) {
                            var s, n, a = (e = e.push ? e : [ e ]).length, l = a, o = [];
                            for (s = function(e, i, s) {
                                if ("e" == i && o.push(e), "b" == i) {
                                    if (!s) return;
                                    o.push(e);
                                }
                                --a || t(o);
                            }, n = 0; n < l; n++) r(e[n], s, i);
                        }
                        function c(e, i, s) {
                            var n, r;
                            if (i && i.trim && (n = i), r = (n ? s : i) || {}, n) {
                                if (n in t) throw "LoadJS";
                                t[n] = !0;
                            }
                            function c(t, i) {
                                o(e, (function(e) {
                                    l(r, e), t && l({
                                        success: t,
                                        error: i
                                    }, e), a(n, e);
                                }), r);
                            }
                            if (r.returnPromise) return new Promise(c);
                            c();
                        }
                        return c.ready = function(e, t) {
                            return n(e, (function(e) {
                                l(t, e);
                            })), c;
                        }, c.done = function(e) {
                            a(e, []);
                        }, c.reset = function() {
                            t = {}, i = {}, s = {};
                        }, c.isDefined = function(e) {
                            return e in t;
                        }, c;
                    }();
                }));
                function Be(e) {
                    return new Promise(((t, i) => {
                        Ue(e, {
                            success: t,
                            error: i
                        });
                    }));
                }
                function We(e) {
                    e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, 
                    Z.call(this, this.media, e ? "play" : "pause"));
                }
                const ze = {
                    setup() {
                        const e = this;
                        R(e.elements.wrapper, e.config.classNames.embed, !0), e.options.speed = e.config.speed.options, 
                        ue.call(e), S.object(window.Vimeo) ? ze.ready.call(e) : Be(e.config.urls.vimeo.sdk).then((() => {
                            ze.ready.call(e);
                        })).catch((t => {
                            e.debug.warn("Vimeo SDK (player.js) failed to load", t);
                        }));
                    },
                    ready() {
                        const e = this, t = e.config.vimeo, {premium: i, referrerPolicy: s, ...n} = t;
                        let a = e.media.getAttribute("src"), l = "";
                        S.empty(a) ? (a = e.media.getAttribute(e.config.attributes.embed.id), l = e.media.getAttribute(e.config.attributes.embed.hash)) : l = function(e) {
                            const t = e.match(/^.*(vimeo.com\/|video\/)(\d+)(\?.*&*h=|\/)+([\d,a-f]+)/);
                            return t && 5 === t.length ? t[4] : null;
                        }(a);
                        const r = l ? {
                            h: l
                        } : {};
                        i && Object.assign(n, {
                            controls: !1,
                            sidedock: !1
                        });
                        const o = Ne({
                            loop: e.config.loop.active,
                            autoplay: e.autoplay,
                            muted: e.muted,
                            gesture: "media",
                            playsinline: e.config.playsinline,
                            ...r,
                            ...n
                        }), c = (u = a, S.empty(u) ? null : S.number(Number(u)) ? u : u.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : u);
                        var u;
                        const h = $("iframe"), d = me(e.config.urls.vimeo.iframe, c, o);
                        if (h.setAttribute("src", d), h.setAttribute("allowfullscreen", ""), h.setAttribute("allow", [ "autoplay", "fullscreen", "picture-in-picture", "encrypted-media", "accelerometer", "gyroscope" ].join("; ")), 
                        S.empty(s) || h.setAttribute("referrerPolicy", s), i || !t.customControls) h.setAttribute("data-poster", e.poster), 
                        e.media = q(h, e.media); else {
                            const t = $("div", {
                                class: e.config.classNames.embedContainer,
                                "data-poster": e.poster
                            });
                            t.appendChild(h), e.media = q(t, e.media);
                        }
                        t.customControls || Te(me(e.config.urls.vimeo.api, d)).then((t => {
                            !S.empty(t) && t.thumbnail_url && Fe.setPoster.call(e, t.thumbnail_url).catch((() => {}));
                        })), e.embed = new window.Vimeo.Player(h, {
                            autopause: e.config.autopause,
                            muted: e.muted
                        }), e.media.paused = !0, e.media.currentTime = 0, e.supported.ui && e.embed.disableTextTrack(), 
                        e.media.play = () => (We.call(e, !0), e.embed.play()), e.media.pause = () => (We.call(e, !1), 
                        e.embed.pause()), e.media.stop = () => {
                            e.pause(), e.currentTime = 0;
                        };
                        let {currentTime: m} = e.media;
                        Object.defineProperty(e.media, "currentTime", {
                            get: () => m,
                            set(t) {
                                const {embed: i, media: s, paused: n, volume: a} = e, l = n && !i.hasPlayed;
                                s.seeking = !0, Z.call(e, s, "seeking"), Promise.resolve(l && i.setVolume(0)).then((() => i.setCurrentTime(t))).then((() => l && i.pause())).then((() => l && i.setVolume(a))).catch((() => {}));
                            }
                        });
                        let p = e.config.speed.selected;
                        Object.defineProperty(e.media, "playbackRate", {
                            get: () => p,
                            set(t) {
                                e.embed.setPlaybackRate(t).then((() => {
                                    p = t, Z.call(e, e.media, "ratechange");
                                })).catch((() => {
                                    e.options.speed = [ 1 ];
                                }));
                            }
                        });
                        let {volume: g} = e.config;
                        Object.defineProperty(e.media, "volume", {
                            get: () => g,
                            set(t) {
                                e.embed.setVolume(t).then((() => {
                                    g = t, Z.call(e, e.media, "volumechange");
                                }));
                            }
                        });
                        let {muted: f} = e.config;
                        Object.defineProperty(e.media, "muted", {
                            get: () => f,
                            set(t) {
                                const i = !!S.boolean(t) && t;
                                e.embed.setMuted(!!i || e.config.muted).then((() => {
                                    f = i, Z.call(e, e.media, "volumechange");
                                }));
                            }
                        });
                        let y, {loop: b} = e.config;
                        Object.defineProperty(e.media, "loop", {
                            get: () => b,
                            set(t) {
                                const i = S.boolean(t) ? t : e.config.loop.active;
                                e.embed.setLoop(i).then((() => {
                                    b = i;
                                }));
                            }
                        }), e.embed.getVideoUrl().then((t => {
                            y = t, Pe.setDownloadUrl.call(e);
                        })).catch((e => {
                            this.debug.warn(e);
                        })), Object.defineProperty(e.media, "currentSrc", {
                            get: () => y
                        }), Object.defineProperty(e.media, "ended", {
                            get: () => e.currentTime === e.duration
                        }), Promise.all([ e.embed.getVideoWidth(), e.embed.getVideoHeight() ]).then((t => {
                            const [i, s] = t;
                            e.embed.ratio = he(i, s), ue.call(this);
                        })), e.embed.setAutopause(e.config.autopause).then((t => {
                            e.config.autopause = t;
                        })), e.embed.getVideoTitle().then((t => {
                            e.config.title = t, Fe.setTitle.call(this);
                        })), e.embed.getCurrentTime().then((t => {
                            m = t, Z.call(e, e.media, "timeupdate");
                        })), e.embed.getDuration().then((t => {
                            e.media.duration = t, Z.call(e, e.media, "durationchange");
                        })), e.embed.getTextTracks().then((t => {
                            e.media.textTracks = t, xe.setup.call(e);
                        })), e.embed.on("cuechange", (({cues: t = []}) => {
                            const i = t.map((e => function(e) {
                                const t = document.createDocumentFragment(), i = document.createElement("div");
                                return t.appendChild(i), i.innerHTML = e, t.firstChild.innerText;
                            }(e.text)));
                            xe.updateCues.call(e, i);
                        })), e.embed.on("loaded", (() => {
                            if (e.embed.getPaused().then((t => {
                                We.call(e, !t), t || Z.call(e, e.media, "playing");
                            })), S.element(e.embed.element) && e.supported.ui) e.embed.element.setAttribute("tabindex", -1);
                        })), e.embed.on("bufferstart", (() => {
                            Z.call(e, e.media, "waiting");
                        })), e.embed.on("bufferend", (() => {
                            Z.call(e, e.media, "playing");
                        })), e.embed.on("play", (() => {
                            We.call(e, !0), Z.call(e, e.media, "playing");
                        })), e.embed.on("pause", (() => {
                            We.call(e, !1);
                        })), e.embed.on("timeupdate", (t => {
                            e.media.seeking = !1, m = t.seconds, Z.call(e, e.media, "timeupdate");
                        })), e.embed.on("progress", (t => {
                            e.media.buffered = t.percent, Z.call(e, e.media, "progress"), 1 === parseInt(t.percent, 10) && Z.call(e, e.media, "canplaythrough"), 
                            e.embed.getDuration().then((t => {
                                t !== e.media.duration && (e.media.duration = t, Z.call(e, e.media, "durationchange"));
                            }));
                        })), e.embed.on("seeked", (() => {
                            e.media.seeking = !1, Z.call(e, e.media, "seeked");
                        })), e.embed.on("ended", (() => {
                            e.media.paused = !0, Z.call(e, e.media, "ended");
                        })), e.embed.on("error", (t => {
                            e.media.error = t, Z.call(e, e.media, "error");
                        })), t.customControls && setTimeout((() => Fe.build.call(e)), 0);
                    }
                };
                function Ke(e) {
                    e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, 
                    Z.call(this, this.media, e ? "play" : "pause"));
                }
                function Ye(e) {
                    return e.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0;
                }
                const Qe = {
                    setup() {
                        if (R(this.elements.wrapper, this.config.classNames.embed, !0), S.object(window.YT) && S.function(window.YT.Player)) Qe.ready.call(this); else {
                            const e = window.onYouTubeIframeAPIReady;
                            window.onYouTubeIframeAPIReady = () => {
                                S.function(e) && e(), Qe.ready.call(this);
                            }, Be(this.config.urls.youtube.sdk).catch((e => {
                                this.debug.warn("YouTube API failed to load", e);
                            }));
                        }
                    },
                    getTitle(e) {
                        Te(me(this.config.urls.youtube.api, e)).then((e => {
                            if (S.object(e)) {
                                const {title: t, height: i, width: s} = e;
                                this.config.title = t, Fe.setTitle.call(this), this.embed.ratio = he(s, i);
                            }
                            ue.call(this);
                        })).catch((() => {
                            ue.call(this);
                        }));
                    },
                    ready() {
                        const e = this, t = e.config.youtube, i = e.media && e.media.getAttribute("id");
                        if (!S.empty(i) && i.startsWith("youtube-")) return;
                        let s = e.media.getAttribute("src");
                        S.empty(s) && (s = e.media.getAttribute(this.config.attributes.embed.id));
                        const n = (a = s, S.empty(a) ? null : a.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : a);
                        var a;
                        const l = $("div", {
                            id: `${e.provider}-${Math.floor(1e4 * Math.random())}`,
                            "data-poster": t.customControls ? e.poster : void 0
                        });
                        if (e.media = q(l, e.media), t.customControls) {
                            const t = e => `https://i.ytimg.com/vi/${n}/${e}default.jpg`;
                            Re(t("maxres"), 121).catch((() => Re(t("sd"), 121))).catch((() => Re(t("hq")))).then((t => Fe.setPoster.call(e, t.src))).then((t => {
                                t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover");
                            })).catch((() => {}));
                        }
                        e.embed = new window.YT.Player(e.media, {
                            videoId: n,
                            host: Ye(t),
                            playerVars: x({}, {
                                autoplay: e.config.autoplay ? 1 : 0,
                                hl: e.config.hl,
                                controls: e.supported.ui && t.customControls ? 0 : 1,
                                disablekb: 1,
                                playsinline: e.config.playsinline && !e.config.fullscreen.iosNative ? 1 : 0,
                                cc_load_policy: e.captions.active ? 1 : 0,
                                cc_lang_pref: e.config.captions.language,
                                widget_referrer: window ? window.location.href : null
                            }, t),
                            events: {
                                onError(t) {
                                    if (!e.media.error) {
                                        const i = t.data, s = {
                                            2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                                            5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                                            100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                                            101: "The owner of the requested video does not allow it to be played in embedded players.",
                                            150: "The owner of the requested video does not allow it to be played in embedded players."
                                        }[i] || "An unknown error occurred";
                                        e.media.error = {
                                            code: i,
                                            message: s
                                        }, Z.call(e, e.media, "error");
                                    }
                                },
                                onPlaybackRateChange(t) {
                                    const i = t.target;
                                    e.media.playbackRate = i.getPlaybackRate(), Z.call(e, e.media, "ratechange");
                                },
                                onReady(i) {
                                    if (S.function(e.media.play)) return;
                                    const s = i.target;
                                    Qe.getTitle.call(e, n), e.media.play = () => {
                                        Ke.call(e, !0), s.playVideo();
                                    }, e.media.pause = () => {
                                        Ke.call(e, !1), s.pauseVideo();
                                    }, e.media.stop = () => {
                                        s.stopVideo();
                                    }, e.media.duration = s.getDuration(), e.media.paused = !0, e.media.currentTime = 0, 
                                    Object.defineProperty(e.media, "currentTime", {
                                        get: () => Number(s.getCurrentTime()),
                                        set(t) {
                                            e.paused && !e.embed.hasPlayed && e.embed.mute(), e.media.seeking = !0, Z.call(e, e.media, "seeking"), 
                                            s.seekTo(t);
                                        }
                                    }), Object.defineProperty(e.media, "playbackRate", {
                                        get: () => s.getPlaybackRate(),
                                        set(e) {
                                            s.setPlaybackRate(e);
                                        }
                                    });
                                    let {volume: a} = e.config;
                                    Object.defineProperty(e.media, "volume", {
                                        get: () => a,
                                        set(t) {
                                            a = t, s.setVolume(100 * a), Z.call(e, e.media, "volumechange");
                                        }
                                    });
                                    let {muted: l} = e.config;
                                    Object.defineProperty(e.media, "muted", {
                                        get: () => l,
                                        set(t) {
                                            const i = S.boolean(t) ? t : l;
                                            l = i, s[i ? "mute" : "unMute"](), s.setVolume(100 * a), Z.call(e, e.media, "volumechange");
                                        }
                                    }), Object.defineProperty(e.media, "currentSrc", {
                                        get: () => s.getVideoUrl()
                                    }), Object.defineProperty(e.media, "ended", {
                                        get: () => e.currentTime === e.duration
                                    });
                                    const r = s.getAvailablePlaybackRates();
                                    e.options.speed = r.filter((t => e.config.speed.options.includes(t))), e.supported.ui && t.customControls && e.media.setAttribute("tabindex", -1), 
                                    Z.call(e, e.media, "timeupdate"), Z.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), 
                                    e.timers.buffering = setInterval((() => {
                                        e.media.buffered = s.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && Z.call(e, e.media, "progress"), 
                                        e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), 
                                        Z.call(e, e.media, "canplaythrough"));
                                    }), 200), t.customControls && setTimeout((() => Fe.build.call(e)), 50);
                                },
                                onStateChange(i) {
                                    const s = i.target;
                                    clearInterval(e.timers.playing);
                                    switch (e.media.seeking && [ 1, 2 ].includes(i.data) && (e.media.seeking = !1, Z.call(e, e.media, "seeked")), 
                                    i.data) {
                                      case -1:
                                        Z.call(e, e.media, "timeupdate"), e.media.buffered = s.getVideoLoadedFraction(), 
                                        Z.call(e, e.media, "progress");
                                        break;

                                      case 0:
                                        Ke.call(e, !1), e.media.loop ? (s.stopVideo(), s.playVideo()) : Z.call(e, e.media, "ended");
                                        break;

                                      case 1:
                                        t.customControls && !e.config.autoplay && e.media.paused && !e.embed.hasPlayed ? e.media.pause() : (Ke.call(e, !0), 
                                        Z.call(e, e.media, "playing"), e.timers.playing = setInterval((() => {
                                            Z.call(e, e.media, "timeupdate");
                                        }), 50), e.media.duration !== s.getDuration() && (e.media.duration = s.getDuration(), 
                                        Z.call(e, e.media, "durationchange")));
                                        break;

                                      case 2:
                                        e.muted || e.embed.unMute(), Ke.call(e, !1);
                                        break;

                                      case 3:
                                        Z.call(e, e.media, "waiting");
                                    }
                                    Z.call(e, e.elements.container, "statechange", !1, {
                                        code: i.data
                                    });
                                }
                            }
                        });
                    }
                }, Xe = {
                    setup() {
                        this.media ? (R(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), 
                        R(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), 
                        this.isEmbed && R(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), 
                        this.isVideo && (this.elements.wrapper = $("div", {
                            class: this.config.classNames.video
                        }), L(this.media, this.elements.wrapper), this.elements.poster = $("div", {
                            class: this.config.classNames.poster
                        }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? de.setup.call(this) : this.isYouTube ? Qe.setup.call(this) : this.isVimeo && ze.setup.call(this)) : this.debug.warn("No media element found!");
                    }
                };
                class Je {
                    constructor(t) {
                        e(this, "load", (() => {
                            this.enabled && (S.object(window.google) && S.object(window.google.ima) ? this.ready() : Be(this.player.config.urls.googleIMA.sdk).then((() => {
                                this.ready();
                            })).catch((() => {
                                this.trigger("error", new Error("Google IMA SDK failed to load"));
                            })));
                        })), e(this, "ready", (() => {
                            var e;
                            this.enabled || ((e = this).manager && e.manager.destroy(), e.elements.displayContainer && e.elements.displayContainer.destroy(), 
                            e.elements.container.remove()), this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then((() => {
                                this.clearSafetyTimer("onAdsManagerLoaded()");
                            })), this.listeners(), this.setupIMA();
                        })), e(this, "setupIMA", (() => {
                            this.elements.container = $("div", {
                                class: this.player.config.classNames.ads
                            }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), 
                            google.ima.settings.setLocale(this.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline), 
                            this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media), 
                            this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, (e => this.onAdsManagerLoaded(e)), !1), 
                            this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (e => this.onAdError(e)), !1), 
                            this.requestAds();
                        })), e(this, "requestAds", (() => {
                            const {container: e} = this.player.elements;
                            try {
                                const t = new google.ima.AdsRequest;
                                t.adTagUrl = this.tagUrl, t.linearAdSlotWidth = e.offsetWidth, t.linearAdSlotHeight = e.offsetHeight, 
                                t.nonLinearAdSlotWidth = e.offsetWidth, t.nonLinearAdSlotHeight = e.offsetHeight, 
                                t.forceNonLinearFullSlot = !1, t.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(t);
                            } catch (e) {
                                this.onAdError(e);
                            }
                        })), e(this, "pollCountdown", ((e = !1) => {
                            if (!e) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
                            this.countdownTimer = setInterval((() => {
                                const e = Ee(Math.max(this.manager.getRemainingTime(), 0)), t = `${ve.get("advertisement", this.player.config)} - ${e}`;
                                this.elements.container.setAttribute("data-badge-text", t);
                            }), 100);
                        })), e(this, "onAdsManagerLoaded", (e => {
                            if (!this.enabled) return;
                            const t = new google.ima.AdsRenderingSettings;
                            t.restoreCustomPlaybackStateOnAdBreakComplete = !0, t.enablePreloading = !0, this.manager = e.getAdsManager(this.player, t), 
                            this.cuePoints = this.manager.getCuePoints(), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (e => this.onAdError(e))), 
                            Object.keys(google.ima.AdEvent.Type).forEach((e => {
                                this.manager.addEventListener(google.ima.AdEvent.Type[e], (e => this.onAdEvent(e)));
                            })), this.trigger("loaded");
                        })), e(this, "addCuePoints", (() => {
                            S.empty(this.cuePoints) || this.cuePoints.forEach((e => {
                                if (0 !== e && -1 !== e && e < this.player.duration) {
                                    const t = this.player.elements.progress;
                                    if (S.element(t)) {
                                        const i = 100 / this.player.duration * e, s = $("span", {
                                            class: this.player.config.classNames.cues
                                        });
                                        s.style.left = `${i.toString()}%`, t.appendChild(s);
                                    }
                                }
                            }));
                        })), e(this, "onAdEvent", (e => {
                            const {container: t} = this.player.elements, i = e.getAd(), s = e.getAdData();
                            switch ((e => {
                                Z.call(this.player, this.player.media, `ads${e.replace(/_/g, "").toLowerCase()}`);
                            })(e.type), e.type) {
                              case google.ima.AdEvent.Type.LOADED:
                                this.trigger("loaded"), this.pollCountdown(!0), i.isLinear() || (i.width = t.offsetWidth, 
                                i.height = t.offsetHeight);
                                break;

                              case google.ima.AdEvent.Type.STARTED:
                                this.manager.setVolume(this.player.volume);
                                break;

                              case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                                this.player.ended ? this.loadAds() : this.loader.contentComplete();
                                break;

                              case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                                this.pauseContent();
                                break;

                              case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                                this.pollCountdown(), this.resumeContent();
                                break;

                              case google.ima.AdEvent.Type.LOG:
                                s.adError && this.player.debug.warn(`Non-fatal ad error: ${s.adError.getMessage()}`);
                            }
                        })), e(this, "onAdError", (e => {
                            this.cancel(), this.player.debug.warn("Ads error", e);
                        })), e(this, "listeners", (() => {
                            const {container: e} = this.player.elements;
                            let t;
                            this.player.on("canplay", (() => {
                                this.addCuePoints();
                            })), this.player.on("ended", (() => {
                                this.loader.contentComplete();
                            })), this.player.on("timeupdate", (() => {
                                t = this.player.currentTime;
                            })), this.player.on("seeked", (() => {
                                const e = this.player.currentTime;
                                S.empty(this.cuePoints) || this.cuePoints.forEach(((i, s) => {
                                    t < i && i < e && (this.manager.discardAdBreak(), this.cuePoints.splice(s, 1));
                                }));
                            })), window.addEventListener("resize", (() => {
                                this.manager && this.manager.resize(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL);
                            }));
                        })), e(this, "play", (() => {
                            const {container: e} = this.player.elements;
                            this.managerPromise || this.resumeContent(), this.managerPromise.then((() => {
                                this.manager.setVolume(this.player.volume), this.elements.displayContainer.initialize();
                                try {
                                    this.initialized || (this.manager.init(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL), 
                                    this.manager.start()), this.initialized = !0;
                                } catch (e) {
                                    this.onAdError(e);
                                }
                            })).catch((() => {}));
                        })), e(this, "resumeContent", (() => {
                            this.elements.container.style.zIndex = "", this.playing = !1, ie(this.player.media.play());
                        })), e(this, "pauseContent", (() => {
                            this.elements.container.style.zIndex = 3, this.playing = !0, this.player.media.pause();
                        })), e(this, "cancel", (() => {
                            this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds();
                        })), e(this, "loadAds", (() => {
                            this.managerPromise.then((() => {
                                this.manager && this.manager.destroy(), this.managerPromise = new Promise((e => {
                                    this.on("loaded", e), this.player.debug.log(this.manager);
                                })), this.initialized = !1, this.requestAds();
                            })).catch((() => {}));
                        })), e(this, "trigger", ((e, ...t) => {
                            const i = this.events[e];
                            S.array(i) && i.forEach((e => {
                                S.function(e) && e.apply(this, t);
                            }));
                        })), e(this, "on", ((e, t) => (S.array(this.events[e]) || (this.events[e] = []), 
                        this.events[e].push(t), this))), e(this, "startSafetyTimer", ((e, t) => {
                            this.player.debug.log(`Safety timer invoked from: ${t}`), this.safetyTimer = setTimeout((() => {
                                this.cancel(), this.clearSafetyTimer("startSafetyTimer()");
                            }), e);
                        })), e(this, "clearSafetyTimer", (e => {
                            S.nullOrUndefined(this.safetyTimer) || (this.player.debug.log(`Safety timer cleared from: ${e}`), 
                            clearTimeout(this.safetyTimer), this.safetyTimer = null);
                        })), this.player = t, this.config = t.config.ads, this.playing = !1, this.initialized = !1, 
                        this.elements = {
                            container: null,
                            displayContainer: null
                        }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, 
                        this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise(((e, t) => {
                            this.on("loaded", e), this.on("error", t);
                        })), this.load();
                    }
                    get enabled() {
                        const {config: e} = this;
                        return this.player.isHTML5 && this.player.isVideo && e.enabled && (!S.empty(e.publisherId) || S.url(e.tagUrl));
                    }
                    get tagUrl() {
                        const {config: e} = this;
                        if (S.url(e.tagUrl)) return e.tagUrl;
                        return `https://go.aniview.com/api/adserver6/vast/?${Ne({
                            AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
                            AV_CHANNELID: "5a0458dc28a06145e4519d21",
                            AV_URL: window.location.hostname,
                            cb: Date.now(),
                            AV_WIDTH: 640,
                            AV_HEIGHT: 480,
                            AV_CDIM2: e.publisherId
                        })}`;
                    }
                }
                function Ge(e = 0, t = 0, i = 255) {
                    return Math.min(Math.max(e, t), i);
                }
                const Ze = e => {
                    const t = [];
                    return e.split(/\r\n\r\n|\n\n|\r\r/).forEach((e => {
                        const i = {};
                        e.split(/\r\n|\n|\r/).forEach((e => {
                            if (S.number(i.startTime)) {
                                if (!S.empty(e.trim()) && S.empty(i.text)) {
                                    const t = e.trim().split("#xywh=");
                                    [i.text] = t, t[1] && ([i.x, i.y, i.w, i.h] = t[1].split(","));
                                }
                            } else {
                                const t = e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                                t && (i.startTime = 60 * Number(t[1] || 0) * 60 + 60 * Number(t[2]) + Number(t[3]) + Number(`0.${t[4]}`), 
                                i.endTime = 60 * Number(t[6] || 0) * 60 + 60 * Number(t[7]) + Number(t[8]) + Number(`0.${t[9]}`));
                            }
                        })), i.text && t.push(i);
                    })), t;
                }, et = (e, t) => {
                    const i = {};
                    return e > t.width / t.height ? (i.width = t.width, i.height = 1 / e * t.width) : (i.height = t.height, 
                    i.width = e * t.height), i;
                };
                class tt {
                    constructor(t) {
                        e(this, "load", (() => {
                            this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled), 
                            this.enabled && this.getThumbnails().then((() => {
                                this.enabled && (this.render(), this.determineContainerAutoSizing(), this.listeners(), 
                                this.loaded = !0);
                            }));
                        })), e(this, "getThumbnails", (() => new Promise((e => {
                            const {src: t} = this.player.config.previewThumbnails;
                            if (S.empty(t)) throw new Error("Missing previewThumbnails.src config attribute");
                            const i = () => {
                                this.thumbnails.sort(((e, t) => e.height - t.height)), this.player.debug.log("Preview thumbnails", this.thumbnails), 
                                e();
                            };
                            if (S.function(t)) t((e => {
                                this.thumbnails = e, i();
                            })); else {
                                const e = (S.string(t) ? [ t ] : t).map((e => this.getThumbnail(e)));
                                Promise.all(e).then(i);
                            }
                        })))), e(this, "getThumbnail", (e => new Promise((t => {
                            Te(e).then((i => {
                                const s = {
                                    frames: Ze(i),
                                    height: null,
                                    urlPrefix: ""
                                };
                                s.frames[0].text.startsWith("/") || s.frames[0].text.startsWith("http://") || s.frames[0].text.startsWith("https://") || (s.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
                                const n = new Image;
                                n.onload = () => {
                                    s.height = n.naturalHeight, s.width = n.naturalWidth, this.thumbnails.push(s), t();
                                }, n.src = s.urlPrefix + s.frames[0].text;
                            }));
                        })))), e(this, "startMove", (e => {
                            if (this.loaded && S.event(e) && [ "touchmove", "mousemove" ].includes(e.type) && this.player.media.duration) {
                                if ("touchmove" === e.type) this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100); else {
                                    var t, i;
                                    const s = this.player.elements.progress.getBoundingClientRect(), n = 100 / s.width * (e.pageX - s.left);
                                    this.seekTime = this.player.media.duration * (n / 100), this.seekTime < 0 && (this.seekTime = 0), 
                                    this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1), 
                                    this.mousePosX = e.pageX, this.elements.thumb.time.innerText = Ee(this.seekTime);
                                    const a = null === (t = this.player.config.markers) || void 0 === t || null === (i = t.points) || void 0 === i ? void 0 : i.find((({time: e}) => e === Math.round(this.seekTime)));
                                    a && this.elements.thumb.time.insertAdjacentHTML("afterbegin", `${a.label}<br>`);
                                }
                                this.showImageAtCurrentTime();
                            }
                        })), e(this, "endMove", (() => {
                            this.toggleThumbContainer(!1, !0);
                        })), e(this, "startScrubbing", (e => {
                            (S.nullOrUndefined(e.button) || !1 === e.button || 0 === e.button) && (this.mouseDown = !0, 
                            this.player.media.duration && (this.toggleScrubbingContainer(!0), this.toggleThumbContainer(!1, !0), 
                            this.showImageAtCurrentTime()));
                        })), e(this, "endScrubbing", (() => {
                            this.mouseDown = !1, Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(!1) : G.call(this.player, this.player.media, "timeupdate", (() => {
                                this.mouseDown || this.toggleScrubbingContainer(!1);
                            }));
                        })), e(this, "listeners", (() => {
                            this.player.on("play", (() => {
                                this.toggleThumbContainer(!1, !0);
                            })), this.player.on("seeked", (() => {
                                this.toggleThumbContainer(!1);
                            })), this.player.on("timeupdate", (() => {
                                this.lastTime = this.player.media.currentTime;
                            }));
                        })), e(this, "render", (() => {
                            this.elements.thumb.container = $("div", {
                                class: this.player.config.classNames.previewThumbnails.thumbContainer
                            }), this.elements.thumb.imageContainer = $("div", {
                                class: this.player.config.classNames.previewThumbnails.imageContainer
                            }), this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
                            const e = $("div", {
                                class: this.player.config.classNames.previewThumbnails.timeContainer
                            });
                            this.elements.thumb.time = $("span", {}, "00:00"), e.appendChild(this.elements.thumb.time), 
                            this.elements.thumb.imageContainer.appendChild(e), S.element(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container), 
                            this.elements.scrubbing.container = $("div", {
                                class: this.player.config.classNames.previewThumbnails.scrubbingContainer
                            }), this.player.elements.wrapper.appendChild(this.elements.scrubbing.container);
                        })), e(this, "destroy", (() => {
                            this.elements.thumb.container && this.elements.thumb.container.remove(), this.elements.scrubbing.container && this.elements.scrubbing.container.remove();
                        })), e(this, "showImageAtCurrentTime", (() => {
                            this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
                            const e = this.thumbnails[0].frames.findIndex((e => this.seekTime >= e.startTime && this.seekTime <= e.endTime)), t = e >= 0;
                            let i = 0;
                            this.mouseDown || this.toggleThumbContainer(t), t && (this.thumbnails.forEach(((t, s) => {
                                this.loadedImages.includes(t.frames[e].text) && (i = s);
                            })), e !== this.showingThumb && (this.showingThumb = e, this.loadImage(i)));
                        })), e(this, "loadImage", ((e = 0) => {
                            const t = this.showingThumb, i = this.thumbnails[e], {urlPrefix: s} = i, n = i.frames[t], a = i.frames[t].text, l = s + a;
                            if (this.currentImageElement && this.currentImageElement.dataset.filename === a) this.showImage(this.currentImageElement, n, e, t, a, !1), 
                            this.currentImageElement.dataset.index = t, this.removeOldImages(this.currentImageElement); else {
                                this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
                                const i = new Image;
                                i.src = l, i.dataset.index = t, i.dataset.filename = a, this.showingThumbFilename = a, 
                                this.player.debug.log(`Loading image: ${l}`), i.onload = () => this.showImage(i, n, e, t, a, !0), 
                                this.loadingImage = i, this.removeOldImages(i);
                            }
                        })), e(this, "showImage", ((e, t, i, s, n, a = !0) => {
                            this.player.debug.log(`Showing thumb: ${n}. num: ${s}. qual: ${i}. newimg: ${a}`), 
                            this.setImageSizeAndOffset(e, t), a && (this.currentImageContainer.appendChild(e), 
                            this.currentImageElement = e, this.loadedImages.includes(n) || this.loadedImages.push(n)), 
                            this.preloadNearby(s, !0).then(this.preloadNearby(s, !1)).then(this.getHigherQuality(i, e, t, n));
                        })), e(this, "removeOldImages", (e => {
                            Array.from(this.currentImageContainer.children).forEach((t => {
                                if ("img" !== t.tagName.toLowerCase()) return;
                                const i = this.usingSprites ? 500 : 1e3;
                                if (t.dataset.index !== e.dataset.index && !t.dataset.deleting) {
                                    t.dataset.deleting = !0;
                                    const {currentImageContainer: e} = this;
                                    setTimeout((() => {
                                        e.removeChild(t), this.player.debug.log(`Removing thumb: ${t.dataset.filename}`);
                                    }), i);
                                }
                            }));
                        })), e(this, "preloadNearby", ((e, t = !0) => new Promise((i => {
                            setTimeout((() => {
                                const s = this.thumbnails[0].frames[e].text;
                                if (this.showingThumbFilename === s) {
                                    let n;
                                    n = t ? this.thumbnails[0].frames.slice(e) : this.thumbnails[0].frames.slice(0, e).reverse();
                                    let a = !1;
                                    n.forEach((e => {
                                        const t = e.text;
                                        if (t !== s && !this.loadedImages.includes(t)) {
                                            a = !0, this.player.debug.log(`Preloading thumb filename: ${t}`);
                                            const {urlPrefix: e} = this.thumbnails[0], s = e + t, n = new Image;
                                            n.src = s, n.onload = () => {
                                                this.player.debug.log(`Preloaded thumb filename: ${t}`), this.loadedImages.includes(t) || this.loadedImages.push(t), 
                                                i();
                                            };
                                        }
                                    })), a || i();
                                }
                            }), 300);
                        })))), e(this, "getHigherQuality", ((e, t, i, s) => {
                            if (e < this.thumbnails.length - 1) {
                                let n = t.naturalHeight;
                                this.usingSprites && (n = i.h), n < this.thumbContainerHeight && setTimeout((() => {
                                    this.showingThumbFilename === s && (this.player.debug.log(`Showing higher quality thumb for: ${s}`), 
                                    this.loadImage(e + 1));
                                }), 300);
                            }
                        })), e(this, "toggleThumbContainer", ((e = !1, t = !1) => {
                            const i = this.player.config.classNames.previewThumbnails.thumbContainerShown;
                            this.elements.thumb.container.classList.toggle(i, e), !e && t && (this.showingThumb = null, 
                            this.showingThumbFilename = null);
                        })), e(this, "toggleScrubbingContainer", ((e = !1) => {
                            const t = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
                            this.elements.scrubbing.container.classList.toggle(t, e), e || (this.showingThumb = null, 
                            this.showingThumbFilename = null);
                        })), e(this, "determineContainerAutoSizing", (() => {
                            (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) && (this.sizeSpecifiedInCSS = !0);
                        })), e(this, "setThumbContainerSizeAndPos", (() => {
                            const {imageContainer: e} = this.elements.thumb;
                            if (this.sizeSpecifiedInCSS) {
                                if (e.clientHeight > 20 && e.clientWidth < 20) {
                                    const t = Math.floor(e.clientHeight * this.thumbAspectRatio);
                                    e.style.width = `${t}px`;
                                } else if (e.clientHeight < 20 && e.clientWidth > 20) {
                                    const t = Math.floor(e.clientWidth / this.thumbAspectRatio);
                                    e.style.height = `${t}px`;
                                }
                            } else {
                                const t = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
                                e.style.height = `${this.thumbContainerHeight}px`, e.style.width = `${t}px`;
                            }
                            this.setThumbContainerPos();
                        })), e(this, "setThumbContainerPos", (() => {
                            const e = this.player.elements.progress.getBoundingClientRect(), t = this.player.elements.container.getBoundingClientRect(), {container: i} = this.elements.thumb, s = t.left - e.left + 10, n = t.right - e.left - i.clientWidth - 10, a = this.mousePosX - e.left - i.clientWidth / 2, l = Ge(a, s, n);
                            i.style.left = `${l}px`, i.style.setProperty("--preview-arrow-offset", a - l + "px");
                        })), e(this, "setScrubbingContainerSize", (() => {
                            const {width: e, height: t} = et(this.thumbAspectRatio, {
                                width: this.player.media.clientWidth,
                                height: this.player.media.clientHeight
                            });
                            this.elements.scrubbing.container.style.width = `${e}px`, this.elements.scrubbing.container.style.height = `${t}px`;
                        })), e(this, "setImageSizeAndOffset", ((e, t) => {
                            if (!this.usingSprites) return;
                            const i = this.thumbContainerHeight / t.h;
                            e.style.height = e.naturalHeight * i + "px", e.style.width = e.naturalWidth * i + "px", 
                            e.style.left = `-${t.x * i}px`, e.style.top = `-${t.y * i}px`;
                        })), this.player = t, this.thumbnails = [], this.loaded = !1, this.lastMouseMoveTime = Date.now(), 
                        this.mouseDown = !1, this.loadedImages = [], this.elements = {
                            thumb: {},
                            scrubbing: {}
                        }, this.load();
                    }
                    get enabled() {
                        return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled;
                    }
                    get currentImageContainer() {
                        return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer;
                    }
                    get usingSprites() {
                        return Object.keys(this.thumbnails[0].frames[0]).includes("w");
                    }
                    get thumbAspectRatio() {
                        return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height;
                    }
                    get thumbContainerHeight() {
                        if (this.mouseDown) {
                            const {height: e} = et(this.thumbAspectRatio, {
                                width: this.player.media.clientWidth,
                                height: this.player.media.clientHeight
                            });
                            return e;
                        }
                        return this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4);
                    }
                    get currentImageElement() {
                        return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement;
                    }
                    set currentImageElement(e) {
                        this.mouseDown ? this.currentScrubbingImageElement = e : this.currentThumbnailImageElement = e;
                    }
                }
                const it = {
                    insertElements(e, t) {
                        S.string(t) ? _(e, this.media, {
                            src: t
                        }) : S.array(t) && t.forEach((t => {
                            _(e, this.media, t);
                        }));
                    },
                    change(e) {
                        N(e, "sources.length") ? (de.cancelRequests.call(this), this.destroy.call(this, (() => {
                            this.options.quality = [], O(this.media), this.media = null, S.element(this.elements.container) && this.elements.container.removeAttribute("class");
                            const {sources: t, type: i} = e, [{provider: s = _e.html5, src: n}] = t, a = "html5" === s ? i : "div", l = "html5" === s ? {} : {
                                src: n
                            };
                            Object.assign(this, {
                                provider: s,
                                type: i,
                                supported: K.check(i, s, this.config.playsinline),
                                media: $(a, l)
                            }), this.elements.container.appendChild(this.media), S.boolean(e.autoplay) && (this.config.autoplay = e.autoplay), 
                            this.isHTML5 && (this.config.crossorigin && this.media.setAttribute("crossorigin", ""), 
                            this.config.autoplay && this.media.setAttribute("autoplay", ""), S.empty(e.poster) || (this.poster = e.poster), 
                            this.config.loop.active && this.media.setAttribute("loop", ""), this.config.muted && this.media.setAttribute("muted", ""), 
                            this.config.playsinline && this.media.setAttribute("playsinline", "")), Fe.addStyleHook.call(this), 
                            this.isHTML5 && it.insertElements.call(this, "source", t), this.config.title = e.title, 
                            Xe.setup.call(this), this.isHTML5 && Object.keys(e).includes("tracks") && it.insertElements.call(this, "track", e.tracks), 
                            (this.isHTML5 || this.isEmbed && !this.supported.ui) && Fe.build.call(this), this.isHTML5 && this.media.load(), 
                            S.empty(e.previewThumbnails) || (Object.assign(this.config.previewThumbnails, e.previewThumbnails), 
                            this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), 
                            this.previewThumbnails = null), this.config.previewThumbnails.enabled && (this.previewThumbnails = new tt(this))), 
                            this.fullscreen.update();
                        }), !0)) : this.debug.warn("Invalid source format");
                    }
                };
                class st {
                    constructor(t, i) {
                        if (e(this, "play", (() => S.function(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then((() => this.ads.play())).catch((() => ie(this.media.play()))), 
                        this.media.play()) : null)), e(this, "pause", (() => this.playing && S.function(this.media.pause) ? this.media.pause() : null)), 
                        e(this, "togglePlay", (e => (S.boolean(e) ? e : !this.playing) ? this.play() : this.pause())), 
                        e(this, "stop", (() => {
                            this.isHTML5 ? (this.pause(), this.restart()) : S.function(this.media.stop) && this.media.stop();
                        })), e(this, "restart", (() => {
                            this.currentTime = 0;
                        })), e(this, "rewind", (e => {
                            this.currentTime -= S.number(e) ? e : this.config.seekTime;
                        })), e(this, "forward", (e => {
                            this.currentTime += S.number(e) ? e : this.config.seekTime;
                        })), e(this, "increaseVolume", (e => {
                            const t = this.media.muted ? 0 : this.volume;
                            this.volume = t + (S.number(e) ? e : 0);
                        })), e(this, "decreaseVolume", (e => {
                            this.increaseVolume(-e);
                        })), e(this, "airplay", (() => {
                            K.airplay && this.media.webkitShowPlaybackTargetPicker();
                        })), e(this, "toggleControls", (e => {
                            if (this.supported.ui && !this.isAudio) {
                                const t = F(this.elements.container, this.config.classNames.hideControls), i = void 0 === e ? void 0 : !e, s = R(this.elements.container, this.config.classNames.hideControls, i);
                                if (s && S.array(this.config.controls) && this.config.controls.includes("settings") && !S.empty(this.config.settings) && Pe.toggleMenu.call(this, !1), 
                                s !== t) {
                                    const e = s ? "controlshidden" : "controlsshown";
                                    Z.call(this, this.media, e);
                                }
                                return !s;
                            }
                            return !1;
                        })), e(this, "on", ((e, t) => {
                            X.call(this, this.elements.container, e, t);
                        })), e(this, "once", ((e, t) => {
                            G.call(this, this.elements.container, e, t);
                        })), e(this, "off", ((e, t) => {
                            J(this.elements.container, e, t);
                        })), e(this, "destroy", ((e, t = !1) => {
                            if (!this.ready) return;
                            const i = () => {
                                document.body.style.overflow = "", this.embed = null, t ? (Object.keys(this.elements).length && (O(this.elements.buttons.play), 
                                O(this.elements.captions), O(this.elements.controls), O(this.elements.wrapper), 
                                this.elements.buttons.play = null, this.elements.captions = null, this.elements.controls = null, 
                                this.elements.wrapper = null), S.function(e) && e()) : (ee.call(this), de.cancelRequests.call(this), 
                                q(this.elements.original, this.elements.container), Z.call(this, this.elements.original, "destroyed", !0), 
                                S.function(e) && e.call(this.elements.original), this.ready = !1, setTimeout((() => {
                                    this.elements = null, this.media = null;
                                }), 200));
                            };
                            this.stop(), clearTimeout(this.timers.loading), clearTimeout(this.timers.controls), 
                            clearTimeout(this.timers.resized), this.isHTML5 ? (Fe.toggleNativeControls.call(this, !0), 
                            i()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), 
                            null !== this.embed && S.function(this.embed.destroy) && this.embed.destroy(), i()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(i), 
                            setTimeout(i, 200));
                        })), e(this, "supports", (e => K.mime.call(this, e))), this.timers = {}, this.ready = !1, 
                        this.loading = !1, this.failed = !1, this.touch = K.touch, this.media = t, S.string(this.media) && (this.media = document.querySelectorAll(this.media)), 
                        (window.jQuery && this.media instanceof jQuery || S.nodeList(this.media) || S.array(this.media)) && (this.media = this.media[0]), 
                        this.config = x({}, Le, st.defaults, i || {}, (() => {
                            try {
                                return JSON.parse(this.media.getAttribute("data-plyr-config"));
                            } catch (e) {
                                return {};
                            }
                        })()), this.elements = {
                            container: null,
                            fullscreen: null,
                            captions: null,
                            buttons: {},
                            display: {},
                            progress: {},
                            inputs: {},
                            settings: {
                                popup: null,
                                menu: null,
                                panels: {},
                                buttons: {}
                            }
                        }, this.captions = {
                            active: null,
                            currentTrack: -1,
                            meta: new WeakMap
                        }, this.fullscreen = {
                            active: !1
                        }, this.options = {
                            speed: [],
                            quality: []
                        }, this.debug = new De(this.config.debug), this.debug.log("Config", this.config), 
                        this.debug.log("Support", K), S.nullOrUndefined(this.media) || !S.element(this.media)) return void this.debug.error("Setup failed: no suitable element passed");
                        if (this.media.plyr) return void this.debug.warn("Target already setup");
                        if (!this.config.enabled) return void this.debug.error("Setup failed: disabled by config");
                        if (!K.check().api) return void this.debug.error("Setup failed: no support");
                        const s = this.media.cloneNode(!0);
                        s.autoplay = !1, this.elements.original = s;
                        const n = this.media.tagName.toLowerCase();
                        let a = null, l = null;
                        switch (n) {
                          case "div":
                            if (a = this.media.querySelector("iframe"), S.element(a)) {
                                if (l = Me(a.getAttribute("src")), this.provider = function(e) {
                                    return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e) ? _e.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? _e.vimeo : null;
                                }(l.toString()), this.elements.container = this.media, this.media = a, this.elements.container.className = "", 
                                l.search.length) {
                                    const e = [ "1", "true" ];
                                    e.includes(l.searchParams.get("autoplay")) && (this.config.autoplay = !0), e.includes(l.searchParams.get("loop")) && (this.config.loop.active = !0), 
                                    this.isYouTube ? (this.config.playsinline = e.includes(l.searchParams.get("playsinline")), 
                                    this.config.youtube.hl = l.searchParams.get("hl")) : this.config.playsinline = !0;
                                }
                            } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), 
                            this.media.removeAttribute(this.config.attributes.embed.provider);
                            if (S.empty(this.provider) || !Object.values(_e).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                            this.type = je;
                            break;

                          case "video":
                          case "audio":
                            this.type = n, this.provider = _e.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), 
                            this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), 
                            this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                            break;

                          default:
                            return void this.debug.error("Setup failed: unsupported type");
                        }
                        this.supported = K.check(this.type, this.provider), this.supported.api ? (this.eventListeners = [], 
                        this.listeners = new Ve(this), this.storage = new we(this), this.media.plyr = this, 
                        S.element(this.elements.container) || (this.elements.container = $("div"), L(this.media, this.elements.container)), 
                        Fe.migrateStyles.call(this), Fe.addStyleHook.call(this), Xe.setup.call(this), this.config.debug && X.call(this, this.elements.container, this.config.events.join(" "), (e => {
                            this.debug.log(`event: ${e.type}`);
                        })), this.fullscreen = new He(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && Fe.build.call(this), 
                        this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new Je(this)), 
                        this.isHTML5 && this.config.autoplay && this.once("canplay", (() => ie(this.play()))), 
                        this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new tt(this))) : this.debug.error("Setup failed: no support");
                    }
                    get isHTML5() {
                        return this.provider === _e.html5;
                    }
                    get isEmbed() {
                        return this.isYouTube || this.isVimeo;
                    }
                    get isYouTube() {
                        return this.provider === _e.youtube;
                    }
                    get isVimeo() {
                        return this.provider === _e.vimeo;
                    }
                    get isVideo() {
                        return this.type === je;
                    }
                    get isAudio() {
                        return this.type === Oe;
                    }
                    get playing() {
                        return Boolean(this.ready && !this.paused && !this.ended);
                    }
                    get paused() {
                        return Boolean(this.media.paused);
                    }
                    get stopped() {
                        return Boolean(this.paused && 0 === this.currentTime);
                    }
                    get ended() {
                        return Boolean(this.media.ended);
                    }
                    set currentTime(e) {
                        if (!this.duration) return;
                        const t = S.number(e) && e > 0;
                        this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log(`Seeking to ${this.currentTime} seconds`);
                    }
                    get currentTime() {
                        return Number(this.media.currentTime);
                    }
                    get buffered() {
                        const {buffered: e} = this.media;
                        return S.number(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0;
                    }
                    get seeking() {
                        return Boolean(this.media.seeking);
                    }
                    get duration() {
                        const e = parseFloat(this.config.duration), t = (this.media || {}).duration, i = S.number(t) && t !== 1 / 0 ? t : 0;
                        return e || i;
                    }
                    set volume(e) {
                        let t = e;
                        S.string(t) && (t = Number(t)), S.number(t) || (t = this.storage.get("volume")), 
                        S.number(t) || ({volume: t} = this.config), t > 1 && (t = 1), t < 0 && (t = 0), 
                        this.config.volume = t, this.media.volume = t, !S.empty(e) && this.muted && t > 0 && (this.muted = !1);
                    }
                    get volume() {
                        return Number(this.media.volume);
                    }
                    set muted(e) {
                        let t = e;
                        S.boolean(t) || (t = this.storage.get("muted")), S.boolean(t) || (t = this.config.muted), 
                        this.config.muted = t, this.media.muted = t;
                    }
                    get muted() {
                        return Boolean(this.media.muted);
                    }
                    get hasAudio() {
                        return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length);
                    }
                    set speed(e) {
                        let t = null;
                        S.number(e) && (t = e), S.number(t) || (t = this.storage.get("speed")), S.number(t) || (t = this.config.speed.selected);
                        const {minimumSpeed: i, maximumSpeed: s} = this;
                        t = Ge(t, i, s), this.config.speed.selected = t, setTimeout((() => {
                            this.media && (this.media.playbackRate = t);
                        }), 0);
                    }
                    get speed() {
                        return Number(this.media.playbackRate);
                    }
                    get minimumSpeed() {
                        return this.isYouTube ? Math.min(...this.options.speed) : this.isVimeo ? .5 : .0625;
                    }
                    get maximumSpeed() {
                        return this.isYouTube ? Math.max(...this.options.speed) : this.isVimeo ? 2 : 16;
                    }
                    set quality(e) {
                        const t = this.config.quality, i = this.options.quality;
                        if (!i.length) return;
                        let s = [ !S.empty(e) && Number(e), this.storage.get("quality"), t.selected, t.default ].find(S.number), n = !0;
                        if (!i.includes(s)) {
                            const e = ne(i, s);
                            this.debug.warn(`Unsupported quality option: ${s}, using ${e} instead`), s = e, 
                            n = !1;
                        }
                        t.selected = s, this.media.quality = s, n && this.storage.set({
                            quality: s
                        });
                    }
                    get quality() {
                        return this.media.quality;
                    }
                    set loop(e) {
                        const t = S.boolean(e) ? e : this.config.loop.active;
                        this.config.loop.active = t, this.media.loop = t;
                    }
                    get loop() {
                        return Boolean(this.media.loop);
                    }
                    set source(e) {
                        it.change.call(this, e);
                    }
                    get source() {
                        return this.media.currentSrc;
                    }
                    get download() {
                        const {download: e} = this.config.urls;
                        return S.url(e) ? e : this.source;
                    }
                    set download(e) {
                        S.url(e) && (this.config.urls.download = e, Pe.setDownloadUrl.call(this));
                    }
                    set poster(e) {
                        this.isVideo ? Fe.setPoster.call(this, e, !1).catch((() => {})) : this.debug.warn("Poster can only be set for video");
                    }
                    get poster() {
                        return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null;
                    }
                    get ratio() {
                        if (!this.isVideo) return null;
                        const e = oe(ce.call(this));
                        return S.array(e) ? e.join(":") : e;
                    }
                    set ratio(e) {
                        this.isVideo ? S.string(e) && re(e) ? (this.config.ratio = oe(e), ue.call(this)) : this.debug.error(`Invalid aspect ratio specified (${e})`) : this.debug.warn("Aspect ratio can only be set for video");
                    }
                    set autoplay(e) {
                        this.config.autoplay = S.boolean(e) ? e : this.config.autoplay;
                    }
                    get autoplay() {
                        return Boolean(this.config.autoplay);
                    }
                    toggleCaptions(e) {
                        xe.toggle.call(this, e, !1);
                    }
                    set currentTrack(e) {
                        xe.set.call(this, e, !1), xe.setup.call(this);
                    }
                    get currentTrack() {
                        const {toggled: e, currentTrack: t} = this.captions;
                        return e ? t : -1;
                    }
                    set language(e) {
                        xe.setLanguage.call(this, e, !1);
                    }
                    get language() {
                        return (xe.getCurrentTrack.call(this) || {}).language;
                    }
                    set pip(e) {
                        if (!K.pip) return;
                        const t = S.boolean(e) ? e : !this.pip;
                        S.function(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t ? Ie : $e), 
                        S.function(this.media.requestPictureInPicture) && (!this.pip && t ? this.media.requestPictureInPicture() : this.pip && !t && document.exitPictureInPicture());
                    }
                    get pip() {
                        return K.pip ? S.empty(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === Ie : null;
                    }
                    setPreviewThumbnails(e) {
                        this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), 
                        this.previewThumbnails = null), Object.assign(this.config.previewThumbnails, e), 
                        this.config.previewThumbnails.enabled && (this.previewThumbnails = new tt(this));
                    }
                    static supported(e, t) {
                        return K.check(e, t);
                    }
                    static loadSprite(e, t) {
                        return ke(e, t);
                    }
                    static setup(e, t = {}) {
                        let i = null;
                        return S.string(e) ? i = Array.from(document.querySelectorAll(e)) : S.nodeList(e) ? i = Array.from(e) : S.array(e) && (i = e.filter(S.element)), 
                        S.empty(i) ? null : i.map((e => new st(e, t)));
                    }
                }
                var nt;
                return st.defaults = (nt = Le, JSON.parse(JSON.stringify(nt))), st;
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        __webpack_require__.g = function() {
            if (typeof globalThis === "object") return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if (typeof window === "object") return window;
            }
        }();
    })();
    (() => {
        "use strict";
        const modules_flsModules = {};
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(webP.height == 2);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = support === true ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function spollers() {
            const spollersArray = document.querySelectorAll("[data-spollers]");
            if (spollersArray.length > 0) {
                document.addEventListener("click", setSpollerAction);
                const spollersRegular = Array.from(spollersArray).filter((function(item, index, self) {
                    return !item.dataset.spollers.split(",")[0];
                }));
                if (spollersRegular.length) initSpollers(spollersRegular);
                let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
                function initSpollers(spollersArray, matchMedia = false) {
                    spollersArray.forEach((spollersBlock => {
                        spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                        if (matchMedia.matches || !matchMedia) {
                            spollersBlock.classList.add("_spoller-init");
                            initSpollerBody(spollersBlock);
                        } else {
                            spollersBlock.classList.remove("_spoller-init");
                            initSpollerBody(spollersBlock, false);
                        }
                    }));
                }
                function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                    let spollerItems = spollersBlock.querySelectorAll("details");
                    if (spollerItems.length) {
                        spollerItems = Array.from(spollerItems).filter((item => item.closest("[data-spollers]") === spollersBlock));
                        spollerItems.forEach((spollerItem => {
                            let spollerTitle = spollerItem.querySelector("summary");
                            if (hideSpollerBody) {
                                spollerTitle.removeAttribute("tabindex");
                                if (!spollerItem.hasAttribute("data-open")) {
                                    spollerItem.open = false;
                                    spollerTitle.nextElementSibling.hidden = true;
                                } else {
                                    spollerTitle.classList.add("_spoller-active");
                                    spollerItem.open = true;
                                }
                            } else {
                                spollerTitle.setAttribute("tabindex", "-1");
                                spollerTitle.classList.remove("_spoller-active");
                                spollerItem.open = true;
                                spollerTitle.nextElementSibling.hidden = false;
                            }
                        }));
                    }
                }
                function setSpollerAction(e) {
                    const el = e.target;
                    if (el.closest("summary") && el.closest("[data-spollers]")) {
                        if (el.closest("[data-spollers]").classList.contains("_spoller-init")) {
                            const spollerTitle = el.closest("summary");
                            const spollerBlock = spollerTitle.closest("details");
                            const spollersBlock = spollerTitle.closest("[data-spollers]");
                            const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                            const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                            if (!spollersBlock.querySelectorAll("._slide").length) {
                                if (oneSpoller && !spollerBlock.open) hideSpollersBody(spollersBlock);
                                spollerTitle.classList.toggle("_spoller-active");
                                _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                                !spollerBlock.open ? spollerBlock.open = true : setTimeout((() => {
                                    spollerBlock.open = false;
                                }), spollerSpeed);
                            }
                        }
                        e.preventDefault();
                    }
                    if (!el.closest("[data-spollers]")) {
                        const spollersClose = document.querySelectorAll("[data-spoller-close]");
                        if (spollersClose.length) spollersClose.forEach((spollerClose => {
                            const spollersBlock = spollerClose.closest("[data-spollers]");
                            const spollerCloseBlock = spollerClose.parentNode;
                            if (spollersBlock.classList.contains("_spoller-init")) {
                                const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                                spollerClose.classList.remove("_spoller-active");
                                _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                                setTimeout((() => {
                                    spollerCloseBlock.open = false;
                                }), spollerSpeed);
                            }
                        }));
                    }
                }
                function hideSpollersBody(spollersBlock) {
                    const spollerActiveBlock = spollersBlock.querySelector("details[open]");
                    if (spollerActiveBlock && !spollersBlock.querySelectorAll("._slide").length) {
                        const spollerActiveTitle = spollerActiveBlock.querySelector("summary");
                        const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                        spollerActiveTitle.classList.remove("_spoller-active");
                        _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                        setTimeout((() => {
                            spollerActiveBlock.open = false;
                        }), spollerSpeed);
                    }
                }
            }
        }
        function menuInit() {
            if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
                if (bodyLockStatus && e.target.closest(".icon-menu")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                    menu.classList.remove("active");
                }
            }));
        }
        function functions_menuClose() {
            bodyUnlock();
            document.documentElement.classList.remove("menu-open");
        }
        const functions_button = document.querySelector(".header__top-first-button");
        const menu = document.querySelector(".header__top-menu");
        functions_button.addEventListener("click", (() => {
            menu.classList.toggle("active");
            functions_menuClose();
        }));
        function functions_FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        function uniqArray(array) {
            return array.filter((function(item, index, self) {
                return self.indexOf(item) === index;
            }));
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter((function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            }));
            if (media.length) {
                const breakpointsArray = [];
                media.forEach((item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                }));
                let mdQueries = breakpointsArray.map((function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                }));
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach((breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter((function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        }));
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    }));
                    return mdQueriesArray;
                }
            }
        }
        function getWindow_getWindow(node) {
            if (node == null) return window;
            if (node.toString() !== "[object Window]") {
                var ownerDocument = node.ownerDocument;
                return ownerDocument ? ownerDocument.defaultView || window : window;
            }
            return node;
        }
        function isElement(node) {
            var OwnElement = getWindow_getWindow(node).Element;
            return node instanceof OwnElement || node instanceof Element;
        }
        function isHTMLElement(node) {
            var OwnElement = getWindow_getWindow(node).HTMLElement;
            return node instanceof OwnElement || node instanceof HTMLElement;
        }
        function isShadowRoot(node) {
            if (typeof ShadowRoot === "undefined") return false;
            var OwnElement = getWindow_getWindow(node).ShadowRoot;
            return node instanceof OwnElement || node instanceof ShadowRoot;
        }
        var math_max = Math.max;
        var math_min = Math.min;
        var round = Math.round;
        function getUAString() {
            var uaData = navigator.userAgentData;
            if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) return uaData.brands.map((function(item) {
                return item.brand + "/" + item.version;
            })).join(" ");
            return navigator.userAgent;
        }
        function isLayoutViewport() {
            return !/^((?!chrome|android).)*safari/i.test(getUAString());
        }
        function getBoundingClientRect(element, includeScale, isFixedStrategy) {
            if (includeScale === void 0) includeScale = false;
            if (isFixedStrategy === void 0) isFixedStrategy = false;
            var clientRect = element.getBoundingClientRect();
            var scaleX = 1;
            var scaleY = 1;
            if (includeScale && isHTMLElement(element)) {
                scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
                scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
            }
            var _ref = isElement(element) ? getWindow_getWindow(element) : window, visualViewport = _ref.visualViewport;
            var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
            var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
            var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
            var width = clientRect.width / scaleX;
            var height = clientRect.height / scaleY;
            return {
                width,
                height,
                top: y,
                right: x + width,
                bottom: y + height,
                left: x,
                x,
                y
            };
        }
        function getWindowScroll(node) {
            var win = getWindow_getWindow(node);
            var scrollLeft = win.pageXOffset;
            var scrollTop = win.pageYOffset;
            return {
                scrollLeft,
                scrollTop
            };
        }
        function getHTMLElementScroll(element) {
            return {
                scrollLeft: element.scrollLeft,
                scrollTop: element.scrollTop
            };
        }
        function getNodeScroll(node) {
            if (node === getWindow_getWindow(node) || !isHTMLElement(node)) return getWindowScroll(node); else return getHTMLElementScroll(node);
        }
        function getNodeName(element) {
            return element ? (element.nodeName || "").toLowerCase() : null;
        }
        function getDocumentElement(element) {
            return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
        }
        function getWindowScrollBarX(element) {
            return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
        }
        function getComputedStyle_getComputedStyle(element) {
            return getWindow_getWindow(element).getComputedStyle(element);
        }
        function isScrollParent(element) {
            var _getComputedStyle = getComputedStyle_getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
            return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
        }
        function isElementScaled(element) {
            var rect = element.getBoundingClientRect();
            var scaleX = round(rect.width) / element.offsetWidth || 1;
            var scaleY = round(rect.height) / element.offsetHeight || 1;
            return scaleX !== 1 || scaleY !== 1;
        }
        function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
            if (isFixed === void 0) isFixed = false;
            var isOffsetParentAnElement = isHTMLElement(offsetParent);
            var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
            var documentElement = getDocumentElement(offsetParent);
            var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
            var scroll = {
                scrollLeft: 0,
                scrollTop: 0
            };
            var offsets = {
                x: 0,
                y: 0
            };
            if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
                if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) scroll = getNodeScroll(offsetParent);
                if (isHTMLElement(offsetParent)) {
                    offsets = getBoundingClientRect(offsetParent, true);
                    offsets.x += offsetParent.clientLeft;
                    offsets.y += offsetParent.clientTop;
                } else if (documentElement) offsets.x = getWindowScrollBarX(documentElement);
            }
            return {
                x: rect.left + scroll.scrollLeft - offsets.x,
                y: rect.top + scroll.scrollTop - offsets.y,
                width: rect.width,
                height: rect.height
            };
        }
        function getLayoutRect(element) {
            var clientRect = getBoundingClientRect(element);
            var width = element.offsetWidth;
            var height = element.offsetHeight;
            if (Math.abs(clientRect.width - width) <= 1) width = clientRect.width;
            if (Math.abs(clientRect.height - height) <= 1) height = clientRect.height;
            return {
                x: element.offsetLeft,
                y: element.offsetTop,
                width,
                height
            };
        }
        function getParentNode(element) {
            if (getNodeName(element) === "html") return element;
            return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
        }
        function getScrollParent(node) {
            if ([ "html", "body", "#document" ].indexOf(getNodeName(node)) >= 0) return node.ownerDocument.body;
            if (isHTMLElement(node) && isScrollParent(node)) return node;
            return getScrollParent(getParentNode(node));
        }
        function listScrollParents(element, list) {
            var _element$ownerDocumen;
            if (list === void 0) list = [];
            var scrollParent = getScrollParent(element);
            var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
            var win = getWindow_getWindow(scrollParent);
            var target = isBody ? [ win ].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
            var updatedList = list.concat(target);
            return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
        }
        function isTableElement(element) {
            return [ "table", "td", "th" ].indexOf(getNodeName(element)) >= 0;
        }
        function getTrueOffsetParent(element) {
            if (!isHTMLElement(element) || getComputedStyle_getComputedStyle(element).position === "fixed") return null;
            return element.offsetParent;
        }
        function getContainingBlock(element) {
            var isFirefox = /firefox/i.test(getUAString());
            var isIE = /Trident/i.test(getUAString());
            if (isIE && isHTMLElement(element)) {
                var elementCss = getComputedStyle_getComputedStyle(element);
                if (elementCss.position === "fixed") return null;
            }
            var currentNode = getParentNode(element);
            if (isShadowRoot(currentNode)) currentNode = currentNode.host;
            while (isHTMLElement(currentNode) && [ "html", "body" ].indexOf(getNodeName(currentNode)) < 0) {
                var css = getComputedStyle_getComputedStyle(currentNode);
                if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || [ "transform", "perspective" ].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") return currentNode; else currentNode = currentNode.parentNode;
            }
            return null;
        }
        function getOffsetParent(element) {
            var window = getWindow_getWindow(element);
            var offsetParent = getTrueOffsetParent(element);
            while (offsetParent && isTableElement(offsetParent) && getComputedStyle_getComputedStyle(offsetParent).position === "static") offsetParent = getTrueOffsetParent(offsetParent);
            if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle_getComputedStyle(offsetParent).position === "static")) return window;
            return offsetParent || getContainingBlock(element) || window;
        }
        var enums_top = "top";
        var bottom = "bottom";
        var right = "right";
        var left = "left";
        var auto = "auto";
        var basePlacements = [ enums_top, bottom, right, left ];
        var start = "start";
        var end = "end";
        var clippingParents = "clippingParents";
        var viewport = "viewport";
        var popper = "popper";
        var reference = "reference";
        var variationPlacements = basePlacements.reduce((function(acc, placement) {
            return acc.concat([ placement + "-" + start, placement + "-" + end ]);
        }), []);
        var enums_placements = [].concat(basePlacements, [ auto ]).reduce((function(acc, placement) {
            return acc.concat([ placement, placement + "-" + start, placement + "-" + end ]);
        }), []);
        var beforeRead = "beforeRead";
        var read = "read";
        var afterRead = "afterRead";
        var beforeMain = "beforeMain";
        var main = "main";
        var afterMain = "afterMain";
        var beforeWrite = "beforeWrite";
        var write = "write";
        var afterWrite = "afterWrite";
        var modifierPhases = [ beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite ];
        function order(modifiers) {
            var map = new Map;
            var visited = new Set;
            var result = [];
            modifiers.forEach((function(modifier) {
                map.set(modifier.name, modifier);
            }));
            function sort(modifier) {
                visited.add(modifier.name);
                var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
                requires.forEach((function(dep) {
                    if (!visited.has(dep)) {
                        var depModifier = map.get(dep);
                        if (depModifier) sort(depModifier);
                    }
                }));
                result.push(modifier);
            }
            modifiers.forEach((function(modifier) {
                if (!visited.has(modifier.name)) sort(modifier);
            }));
            return result;
        }
        function orderModifiers(modifiers) {
            var orderedModifiers = order(modifiers);
            return modifierPhases.reduce((function(acc, phase) {
                return acc.concat(orderedModifiers.filter((function(modifier) {
                    return modifier.phase === phase;
                })));
            }), []);
        }
        function debounce(fn) {
            var pending;
            return function() {
                if (!pending) pending = new Promise((function(resolve) {
                    Promise.resolve().then((function() {
                        pending = void 0;
                        resolve(fn());
                    }));
                }));
                return pending;
            };
        }
        function mergeByName(modifiers) {
            var merged = modifiers.reduce((function(merged, current) {
                var existing = merged[current.name];
                merged[current.name] = existing ? Object.assign({}, existing, current, {
                    options: Object.assign({}, existing.options, current.options),
                    data: Object.assign({}, existing.data, current.data)
                }) : current;
                return merged;
            }), {});
            return Object.keys(merged).map((function(key) {
                return merged[key];
            }));
        }
        var DEFAULT_OPTIONS = {
            placement: "bottom",
            modifiers: [],
            strategy: "absolute"
        };
        function areValidElements() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
            return !args.some((function(element) {
                return !(element && typeof element.getBoundingClientRect === "function");
            }));
        }
        function popperGenerator(generatorOptions) {
            if (generatorOptions === void 0) generatorOptions = {};
            var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
            return function createPopper(reference, popper, options) {
                if (options === void 0) options = defaultOptions;
                var state = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
                    modifiersData: {},
                    elements: {
                        reference,
                        popper
                    },
                    attributes: {},
                    styles: {}
                };
                var effectCleanupFns = [];
                var isDestroyed = false;
                var instance = {
                    state,
                    setOptions: function setOptions(setOptionsAction) {
                        var options = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
                        cleanupModifierEffects();
                        state.options = Object.assign({}, defaultOptions, state.options, options);
                        state.scrollParents = {
                            reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
                            popper: listScrollParents(popper)
                        };
                        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers)));
                        state.orderedModifiers = orderedModifiers.filter((function(m) {
                            return m.enabled;
                        }));
                        runModifierEffects();
                        return instance.update();
                    },
                    forceUpdate: function forceUpdate() {
                        if (isDestroyed) return;
                        var _state$elements = state.elements, reference = _state$elements.reference, popper = _state$elements.popper;
                        if (!areValidElements(reference, popper)) return;
                        state.rects = {
                            reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === "fixed"),
                            popper: getLayoutRect(popper)
                        };
                        state.reset = false;
                        state.placement = state.options.placement;
                        state.orderedModifiers.forEach((function(modifier) {
                            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
                        }));
                        for (var index = 0; index < state.orderedModifiers.length; index++) {
                            if (state.reset === true) {
                                state.reset = false;
                                index = -1;
                                continue;
                            }
                            var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                            if (typeof fn === "function") state = fn({
                                state,
                                options: _options,
                                name,
                                instance
                            }) || state;
                        }
                    },
                    update: debounce((function() {
                        return new Promise((function(resolve) {
                            instance.forceUpdate();
                            resolve(state);
                        }));
                    })),
                    destroy: function destroy() {
                        cleanupModifierEffects();
                        isDestroyed = true;
                    }
                };
                if (!areValidElements(reference, popper)) return instance;
                instance.setOptions(options).then((function(state) {
                    if (!isDestroyed && options.onFirstUpdate) options.onFirstUpdate(state);
                }));
                function runModifierEffects() {
                    state.orderedModifiers.forEach((function(_ref) {
                        var name = _ref.name, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options, effect = _ref.effect;
                        if (typeof effect === "function") {
                            var cleanupFn = effect({
                                state,
                                name,
                                instance,
                                options
                            });
                            var noopFn = function noopFn() {};
                            effectCleanupFns.push(cleanupFn || noopFn);
                        }
                    }));
                }
                function cleanupModifierEffects() {
                    effectCleanupFns.forEach((function(fn) {
                        return fn();
                    }));
                    effectCleanupFns = [];
                }
                return instance;
            };
        }
        null && popperGenerator();
        var passive = {
            passive: true
        };
        function effect(_ref) {
            var state = _ref.state, instance = _ref.instance, options = _ref.options;
            var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
            var window = getWindow_getWindow(state.elements.popper);
            var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
            if (scroll) scrollParents.forEach((function(scrollParent) {
                scrollParent.addEventListener("scroll", instance.update, passive);
            }));
            if (resize) window.addEventListener("resize", instance.update, passive);
            return function() {
                if (scroll) scrollParents.forEach((function(scrollParent) {
                    scrollParent.removeEventListener("scroll", instance.update, passive);
                }));
                if (resize) window.removeEventListener("resize", instance.update, passive);
            };
        }
        const eventListeners = {
            name: "eventListeners",
            enabled: true,
            phase: "write",
            fn: function fn() {},
            effect,
            data: {}
        };
        function getBasePlacement(placement) {
            return placement.split("-")[0];
        }
        function getVariation(placement) {
            return placement.split("-")[1];
        }
        function getMainAxisFromPlacement(placement) {
            return [ "top", "bottom" ].indexOf(placement) >= 0 ? "x" : "y";
        }
        function computeOffsets(_ref) {
            var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
            var basePlacement = placement ? getBasePlacement(placement) : null;
            var variation = placement ? getVariation(placement) : null;
            var commonX = reference.x + reference.width / 2 - element.width / 2;
            var commonY = reference.y + reference.height / 2 - element.height / 2;
            var offsets;
            switch (basePlacement) {
              case enums_top:
                offsets = {
                    x: commonX,
                    y: reference.y - element.height
                };
                break;

              case bottom:
                offsets = {
                    x: commonX,
                    y: reference.y + reference.height
                };
                break;

              case right:
                offsets = {
                    x: reference.x + reference.width,
                    y: commonY
                };
                break;

              case left:
                offsets = {
                    x: reference.x - element.width,
                    y: commonY
                };
                break;

              default:
                offsets = {
                    x: reference.x,
                    y: reference.y
                };
            }
            var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
            if (mainAxis != null) {
                var len = mainAxis === "y" ? "height" : "width";
                switch (variation) {
                  case start:
                    offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                    break;

                  case end:
                    offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                    break;

                  default:
                }
            }
            return offsets;
        }
        function popperOffsets(_ref) {
            var state = _ref.state, name = _ref.name;
            state.modifiersData[name] = computeOffsets({
                reference: state.rects.reference,
                element: state.rects.popper,
                strategy: "absolute",
                placement: state.placement
            });
        }
        const modifiers_popperOffsets = {
            name: "popperOffsets",
            enabled: true,
            phase: "read",
            fn: popperOffsets,
            data: {}
        };
        var unsetSides = {
            top: "auto",
            right: "auto",
            bottom: "auto",
            left: "auto"
        };
        function roundOffsetsByDPR(_ref, win) {
            var x = _ref.x, y = _ref.y;
            var dpr = win.devicePixelRatio || 1;
            return {
                x: round(x * dpr) / dpr || 0,
                y: round(y * dpr) / dpr || 0
            };
        }
        function mapToStyles(_ref2) {
            var _Object$assign2;
            var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
            var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
            var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
                x,
                y
            }) : {
                x,
                y
            };
            x = _ref3.x;
            y = _ref3.y;
            var hasX = offsets.hasOwnProperty("x");
            var hasY = offsets.hasOwnProperty("y");
            var sideX = left;
            var sideY = enums_top;
            var win = window;
            if (adaptive) {
                var offsetParent = getOffsetParent(popper);
                var heightProp = "clientHeight";
                var widthProp = "clientWidth";
                if (offsetParent === getWindow_getWindow(popper)) {
                    offsetParent = getDocumentElement(popper);
                    if (getComputedStyle_getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
                        heightProp = "scrollHeight";
                        widthProp = "scrollWidth";
                    }
                }
                offsetParent;
                if (placement === enums_top || (placement === left || placement === right) && variation === end) {
                    sideY = bottom;
                    var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
                    y -= offsetY - popperRect.height;
                    y *= gpuAcceleration ? 1 : -1;
                }
                if (placement === left || (placement === enums_top || placement === bottom) && variation === end) {
                    sideX = right;
                    var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
                    x -= offsetX - popperRect.width;
                    x *= gpuAcceleration ? 1 : -1;
                }
            }
            var commonStyles = Object.assign({
                position
            }, adaptive && unsetSides);
            var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
                x,
                y
            }, getWindow_getWindow(popper)) : {
                x,
                y
            };
            x = _ref4.x;
            y = _ref4.y;
            if (gpuAcceleration) {
                var _Object$assign;
                return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", 
                _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", 
                _Object$assign));
            }
            return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", 
            _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
        }
        function computeStyles(_ref5) {
            var state = _ref5.state, options = _ref5.options;
            var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
            var commonStyles = {
                placement: getBasePlacement(state.placement),
                variation: getVariation(state.placement),
                popper: state.elements.popper,
                popperRect: state.rects.popper,
                gpuAcceleration,
                isFixed: state.options.strategy === "fixed"
            };
            if (state.modifiersData.popperOffsets != null) state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
                offsets: state.modifiersData.popperOffsets,
                position: state.options.strategy,
                adaptive,
                roundOffsets
            })));
            if (state.modifiersData.arrow != null) state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
                offsets: state.modifiersData.arrow,
                position: "absolute",
                adaptive: false,
                roundOffsets
            })));
            state.attributes.popper = Object.assign({}, state.attributes.popper, {
                "data-popper-placement": state.placement
            });
        }
        const modifiers_computeStyles = {
            name: "computeStyles",
            enabled: true,
            phase: "beforeWrite",
            fn: computeStyles,
            data: {}
        };
        function applyStyles(_ref) {
            var state = _ref.state;
            Object.keys(state.elements).forEach((function(name) {
                var style = state.styles[name] || {};
                var attributes = state.attributes[name] || {};
                var element = state.elements[name];
                if (!isHTMLElement(element) || !getNodeName(element)) return;
                Object.assign(element.style, style);
                Object.keys(attributes).forEach((function(name) {
                    var value = attributes[name];
                    if (value === false) element.removeAttribute(name); else element.setAttribute(name, value === true ? "" : value);
                }));
            }));
        }
        function applyStyles_effect(_ref2) {
            var state = _ref2.state;
            var initialStyles = {
                popper: {
                    position: state.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
            Object.assign(state.elements.popper.style, initialStyles.popper);
            state.styles = initialStyles;
            if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
            return function() {
                Object.keys(state.elements).forEach((function(name) {
                    var element = state.elements[name];
                    var attributes = state.attributes[name] || {};
                    var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
                    var style = styleProperties.reduce((function(style, property) {
                        style[property] = "";
                        return style;
                    }), {});
                    if (!isHTMLElement(element) || !getNodeName(element)) return;
                    Object.assign(element.style, style);
                    Object.keys(attributes).forEach((function(attribute) {
                        element.removeAttribute(attribute);
                    }));
                }));
            };
        }
        const modifiers_applyStyles = {
            name: "applyStyles",
            enabled: true,
            phase: "write",
            fn: applyStyles,
            effect: applyStyles_effect,
            requires: [ "computeStyles" ]
        };
        function distanceAndSkiddingToXY(placement, rects, offset) {
            var basePlacement = getBasePlacement(placement);
            var invertDistance = [ left, enums_top ].indexOf(basePlacement) >= 0 ? -1 : 1;
            var _ref = typeof offset === "function" ? offset(Object.assign({}, rects, {
                placement
            })) : offset, skidding = _ref[0], distance = _ref[1];
            skidding = skidding || 0;
            distance = (distance || 0) * invertDistance;
            return [ left, right ].indexOf(basePlacement) >= 0 ? {
                x: distance,
                y: skidding
            } : {
                x: skidding,
                y: distance
            };
        }
        function offset(_ref2) {
            var state = _ref2.state, options = _ref2.options, name = _ref2.name;
            var _options$offset = options.offset, offset = _options$offset === void 0 ? [ 0, 0 ] : _options$offset;
            var data = enums_placements.reduce((function(acc, placement) {
                acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
                return acc;
            }), {});
            var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
            if (state.modifiersData.popperOffsets != null) {
                state.modifiersData.popperOffsets.x += x;
                state.modifiersData.popperOffsets.y += y;
            }
            state.modifiersData[name] = data;
        }
        const modifiers_offset = {
            name: "offset",
            enabled: true,
            phase: "main",
            requires: [ "popperOffsets" ],
            fn: offset
        };
        var hash = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        function getOppositePlacement(placement) {
            return placement.replace(/left|right|bottom|top/g, (function(matched) {
                return hash[matched];
            }));
        }
        var getOppositeVariationPlacement_hash = {
            start: "end",
            end: "start"
        };
        function getOppositeVariationPlacement(placement) {
            return placement.replace(/start|end/g, (function(matched) {
                return getOppositeVariationPlacement_hash[matched];
            }));
        }
        function getViewportRect(element, strategy) {
            var win = getWindow_getWindow(element);
            var html = getDocumentElement(element);
            var visualViewport = win.visualViewport;
            var width = html.clientWidth;
            var height = html.clientHeight;
            var x = 0;
            var y = 0;
            if (visualViewport) {
                width = visualViewport.width;
                height = visualViewport.height;
                var layoutViewport = isLayoutViewport();
                if (layoutViewport || !layoutViewport && strategy === "fixed") {
                    x = visualViewport.offsetLeft;
                    y = visualViewport.offsetTop;
                }
            }
            return {
                width,
                height,
                x: x + getWindowScrollBarX(element),
                y
            };
        }
        function getDocumentRect(element) {
            var _element$ownerDocumen;
            var html = getDocumentElement(element);
            var winScroll = getWindowScroll(element);
            var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
            var width = math_max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
            var height = math_max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
            var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
            var y = -winScroll.scrollTop;
            if (getComputedStyle_getComputedStyle(body || html).direction === "rtl") x += math_max(html.clientWidth, body ? body.clientWidth : 0) - width;
            return {
                width,
                height,
                x,
                y
            };
        }
        function contains(parent, child) {
            var rootNode = child.getRootNode && child.getRootNode();
            if (parent.contains(child)) return true; else if (rootNode && isShadowRoot(rootNode)) {
                var next = child;
                do {
                    if (next && parent.isSameNode(next)) return true;
                    next = next.parentNode || next.host;
                } while (next);
            }
            return false;
        }
        function rectToClientRect(rect) {
            return Object.assign({}, rect, {
                left: rect.x,
                top: rect.y,
                right: rect.x + rect.width,
                bottom: rect.y + rect.height
            });
        }
        function getInnerBoundingClientRect(element, strategy) {
            var rect = getBoundingClientRect(element, false, strategy === "fixed");
            rect.top = rect.top + element.clientTop;
            rect.left = rect.left + element.clientLeft;
            rect.bottom = rect.top + element.clientHeight;
            rect.right = rect.left + element.clientWidth;
            rect.width = element.clientWidth;
            rect.height = element.clientHeight;
            rect.x = rect.left;
            rect.y = rect.top;
            return rect;
        }
        function getClientRectFromMixedType(element, clippingParent, strategy) {
            return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
        }
        function getClippingParents(element) {
            var clippingParents = listScrollParents(getParentNode(element));
            var canEscapeClipping = [ "absolute", "fixed" ].indexOf(getComputedStyle_getComputedStyle(element).position) >= 0;
            var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
            if (!isElement(clipperElement)) return [];
            return clippingParents.filter((function(clippingParent) {
                return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
            }));
        }
        function getClippingRect(element, boundary, rootBoundary, strategy) {
            var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
            var clippingParents = [].concat(mainClippingParents, [ rootBoundary ]);
            var firstClippingParent = clippingParents[0];
            var clippingRect = clippingParents.reduce((function(accRect, clippingParent) {
                var rect = getClientRectFromMixedType(element, clippingParent, strategy);
                accRect.top = math_max(rect.top, accRect.top);
                accRect.right = math_min(rect.right, accRect.right);
                accRect.bottom = math_min(rect.bottom, accRect.bottom);
                accRect.left = math_max(rect.left, accRect.left);
                return accRect;
            }), getClientRectFromMixedType(element, firstClippingParent, strategy));
            clippingRect.width = clippingRect.right - clippingRect.left;
            clippingRect.height = clippingRect.bottom - clippingRect.top;
            clippingRect.x = clippingRect.left;
            clippingRect.y = clippingRect.top;
            return clippingRect;
        }
        function getFreshSideObject() {
            return {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            };
        }
        function mergePaddingObject(paddingObject) {
            return Object.assign({}, getFreshSideObject(), paddingObject);
        }
        function expandToHashMap(value, keys) {
            return keys.reduce((function(hashMap, key) {
                hashMap[key] = value;
                return hashMap;
            }), {});
        }
        function detectOverflow(state, options) {
            if (options === void 0) options = {};
            var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
            var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
            var altContext = elementContext === popper ? reference : popper;
            var popperRect = state.rects.popper;
            var element = state.elements[altBoundary ? altContext : elementContext];
            var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
            var referenceClientRect = getBoundingClientRect(state.elements.reference);
            var popperOffsets = computeOffsets({
                reference: referenceClientRect,
                element: popperRect,
                strategy: "absolute",
                placement
            });
            var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
            var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
            var overflowOffsets = {
                top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
                bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
                left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
                right: elementClientRect.right - clippingClientRect.right + paddingObject.right
            };
            var offsetData = state.modifiersData.offset;
            if (elementContext === popper && offsetData) {
                var offset = offsetData[placement];
                Object.keys(overflowOffsets).forEach((function(key) {
                    var multiply = [ right, bottom ].indexOf(key) >= 0 ? 1 : -1;
                    var axis = [ enums_top, bottom ].indexOf(key) >= 0 ? "y" : "x";
                    overflowOffsets[key] += offset[axis] * multiply;
                }));
            }
            return overflowOffsets;
        }
        function computeAutoPlacement(state, options) {
            if (options === void 0) options = {};
            var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? enums_placements : _options$allowedAutoP;
            var variation = getVariation(placement);
            var placements = variation ? flipVariations ? variationPlacements : variationPlacements.filter((function(placement) {
                return getVariation(placement) === variation;
            })) : basePlacements;
            var allowedPlacements = placements.filter((function(placement) {
                return allowedAutoPlacements.indexOf(placement) >= 0;
            }));
            if (allowedPlacements.length === 0) allowedPlacements = placements;
            var overflows = allowedPlacements.reduce((function(acc, placement) {
                acc[placement] = detectOverflow(state, {
                    placement,
                    boundary,
                    rootBoundary,
                    padding
                })[getBasePlacement(placement)];
                return acc;
            }), {});
            return Object.keys(overflows).sort((function(a, b) {
                return overflows[a] - overflows[b];
            }));
        }
        function getExpandedFallbackPlacements(placement) {
            if (getBasePlacement(placement) === auto) return [];
            var oppositePlacement = getOppositePlacement(placement);
            return [ getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement) ];
        }
        function flip(_ref) {
            var state = _ref.state, options = _ref.options, name = _ref.name;
            if (state.modifiersData[name]._skip) return;
            var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
            var preferredPlacement = state.options.placement;
            var basePlacement = getBasePlacement(preferredPlacement);
            var isBasePlacement = basePlacement === preferredPlacement;
            var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [ getOppositePlacement(preferredPlacement) ] : getExpandedFallbackPlacements(preferredPlacement));
            var placements = [ preferredPlacement ].concat(fallbackPlacements).reduce((function(acc, placement) {
                return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
                    placement,
                    boundary,
                    rootBoundary,
                    padding,
                    flipVariations,
                    allowedAutoPlacements
                }) : placement);
            }), []);
            var referenceRect = state.rects.reference;
            var popperRect = state.rects.popper;
            var checksMap = new Map;
            var makeFallbackChecks = true;
            var firstFittingPlacement = placements[0];
            for (var i = 0; i < placements.length; i++) {
                var placement = placements[i];
                var _basePlacement = getBasePlacement(placement);
                var isStartVariation = getVariation(placement) === start;
                var isVertical = [ enums_top, bottom ].indexOf(_basePlacement) >= 0;
                var len = isVertical ? "width" : "height";
                var overflow = detectOverflow(state, {
                    placement,
                    boundary,
                    rootBoundary,
                    altBoundary,
                    padding
                });
                var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : enums_top;
                if (referenceRect[len] > popperRect[len]) mainVariationSide = getOppositePlacement(mainVariationSide);
                var altVariationSide = getOppositePlacement(mainVariationSide);
                var checks = [];
                if (checkMainAxis) checks.push(overflow[_basePlacement] <= 0);
                if (checkAltAxis) checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
                if (checks.every((function(check) {
                    return check;
                }))) {
                    firstFittingPlacement = placement;
                    makeFallbackChecks = false;
                    break;
                }
                checksMap.set(placement, checks);
            }
            if (makeFallbackChecks) {
                var numberOfChecks = flipVariations ? 3 : 1;
                var _loop = function _loop(_i) {
                    var fittingPlacement = placements.find((function(placement) {
                        var checks = checksMap.get(placement);
                        if (checks) return checks.slice(0, _i).every((function(check) {
                            return check;
                        }));
                    }));
                    if (fittingPlacement) {
                        firstFittingPlacement = fittingPlacement;
                        return "break";
                    }
                };
                for (var _i = numberOfChecks; _i > 0; _i--) {
                    var _ret = _loop(_i);
                    if (_ret === "break") break;
                }
            }
            if (state.placement !== firstFittingPlacement) {
                state.modifiersData[name]._skip = true;
                state.placement = firstFittingPlacement;
                state.reset = true;
            }
        }
        const modifiers_flip = {
            name: "flip",
            enabled: true,
            phase: "main",
            fn: flip,
            requiresIfExists: [ "offset" ],
            data: {
                _skip: false
            }
        };
        function getAltAxis(axis) {
            return axis === "x" ? "y" : "x";
        }
        function within(min, value, max) {
            return math_max(min, math_min(value, max));
        }
        function withinMaxClamp(min, value, max) {
            var v = within(min, value, max);
            return v > max ? max : v;
        }
        function preventOverflow(_ref) {
            var state = _ref.state, options = _ref.options, name = _ref.name;
            var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
            var overflow = detectOverflow(state, {
                boundary,
                rootBoundary,
                padding,
                altBoundary
            });
            var basePlacement = getBasePlacement(state.placement);
            var variation = getVariation(state.placement);
            var isBasePlacement = !variation;
            var mainAxis = getMainAxisFromPlacement(basePlacement);
            var altAxis = getAltAxis(mainAxis);
            var popperOffsets = state.modifiersData.popperOffsets;
            var referenceRect = state.rects.reference;
            var popperRect = state.rects.popper;
            var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
                placement: state.placement
            })) : tetherOffset;
            var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
                mainAxis: tetherOffsetValue,
                altAxis: tetherOffsetValue
            } : Object.assign({
                mainAxis: 0,
                altAxis: 0
            }, tetherOffsetValue);
            var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
            var data = {
                x: 0,
                y: 0
            };
            if (!popperOffsets) return;
            if (checkMainAxis) {
                var _offsetModifierState$;
                var mainSide = mainAxis === "y" ? enums_top : left;
                var altSide = mainAxis === "y" ? bottom : right;
                var len = mainAxis === "y" ? "height" : "width";
                var offset = popperOffsets[mainAxis];
                var min = offset + overflow[mainSide];
                var max = offset - overflow[altSide];
                var additive = tether ? -popperRect[len] / 2 : 0;
                var minLen = variation === start ? referenceRect[len] : popperRect[len];
                var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
                var arrowElement = state.elements.arrow;
                var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
                    width: 0,
                    height: 0
                };
                var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
                var arrowPaddingMin = arrowPaddingObject[mainSide];
                var arrowPaddingMax = arrowPaddingObject[altSide];
                var arrowLen = within(0, referenceRect[len], arrowRect[len]);
                var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
                var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
                var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
                var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
                var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
                var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
                var tetherMax = offset + maxOffset - offsetModifierValue;
                var preventedOffset = within(tether ? math_min(min, tetherMin) : min, offset, tether ? math_max(max, tetherMax) : max);
                popperOffsets[mainAxis] = preventedOffset;
                data[mainAxis] = preventedOffset - offset;
            }
            if (checkAltAxis) {
                var _offsetModifierState$2;
                var _mainSide = mainAxis === "x" ? enums_top : left;
                var _altSide = mainAxis === "x" ? bottom : right;
                var _offset = popperOffsets[altAxis];
                var _len = altAxis === "y" ? "height" : "width";
                var _min = _offset + overflow[_mainSide];
                var _max = _offset - overflow[_altSide];
                var isOriginSide = [ enums_top, left ].indexOf(basePlacement) !== -1;
                var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
                var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
                var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
                var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
                popperOffsets[altAxis] = _preventedOffset;
                data[altAxis] = _preventedOffset - _offset;
            }
            state.modifiersData[name] = data;
        }
        const modifiers_preventOverflow = {
            name: "preventOverflow",
            enabled: true,
            phase: "main",
            fn: preventOverflow,
            requiresIfExists: [ "offset" ]
        };
        var toPaddingObject = function toPaddingObject(padding, state) {
            padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
                placement: state.placement
            })) : padding;
            return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
        };
        function arrow(_ref) {
            var _state$modifiersData$;
            var state = _ref.state, name = _ref.name, options = _ref.options;
            var arrowElement = state.elements.arrow;
            var popperOffsets = state.modifiersData.popperOffsets;
            var basePlacement = getBasePlacement(state.placement);
            var axis = getMainAxisFromPlacement(basePlacement);
            var isVertical = [ left, right ].indexOf(basePlacement) >= 0;
            var len = isVertical ? "height" : "width";
            if (!arrowElement || !popperOffsets) return;
            var paddingObject = toPaddingObject(options.padding, state);
            var arrowRect = getLayoutRect(arrowElement);
            var minProp = axis === "y" ? enums_top : left;
            var maxProp = axis === "y" ? bottom : right;
            var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
            var startDiff = popperOffsets[axis] - state.rects.reference[axis];
            var arrowOffsetParent = getOffsetParent(arrowElement);
            var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
            var centerToReference = endDiff / 2 - startDiff / 2;
            var min = paddingObject[minProp];
            var max = clientSize - arrowRect[len] - paddingObject[maxProp];
            var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
            var offset = within(min, center, max);
            var axisProp = axis;
            state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, 
            _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
        }
        function arrow_effect(_ref2) {
            var state = _ref2.state, options = _ref2.options;
            var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
            if (arrowElement == null) return;
            if (typeof arrowElement === "string") {
                arrowElement = state.elements.popper.querySelector(arrowElement);
                if (!arrowElement) return;
            }
            if (!contains(state.elements.popper, arrowElement)) return;
            state.elements.arrow = arrowElement;
        }
        const modifiers_arrow = {
            name: "arrow",
            enabled: true,
            phase: "main",
            fn: arrow,
            effect: arrow_effect,
            requires: [ "popperOffsets" ],
            requiresIfExists: [ "preventOverflow" ]
        };
        function getSideOffsets(overflow, rect, preventedOffsets) {
            if (preventedOffsets === void 0) preventedOffsets = {
                x: 0,
                y: 0
            };
            return {
                top: overflow.top - rect.height - preventedOffsets.y,
                right: overflow.right - rect.width + preventedOffsets.x,
                bottom: overflow.bottom - rect.height + preventedOffsets.y,
                left: overflow.left - rect.width - preventedOffsets.x
            };
        }
        function isAnySideFullyClipped(overflow) {
            return [ enums_top, right, bottom, left ].some((function(side) {
                return overflow[side] >= 0;
            }));
        }
        function hide(_ref) {
            var state = _ref.state, name = _ref.name;
            var referenceRect = state.rects.reference;
            var popperRect = state.rects.popper;
            var preventedOffsets = state.modifiersData.preventOverflow;
            var referenceOverflow = detectOverflow(state, {
                elementContext: "reference"
            });
            var popperAltOverflow = detectOverflow(state, {
                altBoundary: true
            });
            var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
            var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
            var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
            var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
            state.modifiersData[name] = {
                referenceClippingOffsets,
                popperEscapeOffsets,
                isReferenceHidden,
                hasPopperEscaped
            };
            state.attributes.popper = Object.assign({}, state.attributes.popper, {
                "data-popper-reference-hidden": isReferenceHidden,
                "data-popper-escaped": hasPopperEscaped
            });
        }
        const modifiers_hide = {
            name: "hide",
            enabled: true,
            phase: "main",
            requiresIfExists: [ "preventOverflow" ],
            fn: hide
        };
        var defaultModifiers = [ eventListeners, modifiers_popperOffsets, modifiers_computeStyles, modifiers_applyStyles, modifiers_offset, modifiers_flip, modifiers_preventOverflow, modifiers_arrow, modifiers_hide ];
        var popper_createPopper = popperGenerator({
            defaultModifiers
        });
        var BOX_CLASS = "tippy-box";
        var CONTENT_CLASS = "tippy-content";
        var BACKDROP_CLASS = "tippy-backdrop";
        var ARROW_CLASS = "tippy-arrow";
        var SVG_ARROW_CLASS = "tippy-svg-arrow";
        var TOUCH_OPTIONS = {
            passive: true,
            capture: true
        };
        var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO() {
            return document.body;
        };
        function getValueAtIndexOrReturn(value, index, defaultValue) {
            if (Array.isArray(value)) {
                var v = value[index];
                return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
            }
            return value;
        }
        function isType(value, type) {
            var str = {}.toString.call(value);
            return str.indexOf("[object") === 0 && str.indexOf(type + "]") > -1;
        }
        function invokeWithArgsOrReturn(value, args) {
            return typeof value === "function" ? value.apply(void 0, args) : value;
        }
        function tippy_esm_debounce(fn, ms) {
            if (ms === 0) return fn;
            var timeout;
            return function(arg) {
                clearTimeout(timeout);
                timeout = setTimeout((function() {
                    fn(arg);
                }), ms);
            };
        }
        function splitBySpaces(value) {
            return value.split(/\s+/).filter(Boolean);
        }
        function normalizeToArray(value) {
            return [].concat(value);
        }
        function pushIfUnique(arr, value) {
            if (arr.indexOf(value) === -1) arr.push(value);
        }
        function unique(arr) {
            return arr.filter((function(item, index) {
                return arr.indexOf(item) === index;
            }));
        }
        function tippy_esm_getBasePlacement(placement) {
            return placement.split("-")[0];
        }
        function arrayFrom(value) {
            return [].slice.call(value);
        }
        function removeUndefinedProps(obj) {
            return Object.keys(obj).reduce((function(acc, key) {
                if (obj[key] !== void 0) acc[key] = obj[key];
                return acc;
            }), {});
        }
        function div() {
            return document.createElement("div");
        }
        function tippy_esm_isElement(value) {
            return [ "Element", "Fragment" ].some((function(type) {
                return isType(value, type);
            }));
        }
        function isNodeList(value) {
            return isType(value, "NodeList");
        }
        function isMouseEvent(value) {
            return isType(value, "MouseEvent");
        }
        function isReferenceElement(value) {
            return !!(value && value._tippy && value._tippy.reference === value);
        }
        function getArrayOfElements(value) {
            if (tippy_esm_isElement(value)) return [ value ];
            if (isNodeList(value)) return arrayFrom(value);
            if (Array.isArray(value)) return value;
            return arrayFrom(document.querySelectorAll(value));
        }
        function setTransitionDuration(els, value) {
            els.forEach((function(el) {
                if (el) el.style.transitionDuration = value + "ms";
            }));
        }
        function setVisibilityState(els, state) {
            els.forEach((function(el) {
                if (el) el.setAttribute("data-state", state);
            }));
        }
        function getOwnerDocument(elementOrElements) {
            var _element$ownerDocumen;
            var _normalizeToArray = normalizeToArray(elementOrElements), element = _normalizeToArray[0];
            return element != null && (_element$ownerDocumen = element.ownerDocument) != null && _element$ownerDocumen.body ? element.ownerDocument : document;
        }
        function isCursorOutsideInteractiveBorder(popperTreeData, event) {
            var clientX = event.clientX, clientY = event.clientY;
            return popperTreeData.every((function(_ref) {
                var popperRect = _ref.popperRect, popperState = _ref.popperState, props = _ref.props;
                var interactiveBorder = props.interactiveBorder;
                var basePlacement = tippy_esm_getBasePlacement(popperState.placement);
                var offsetData = popperState.modifiersData.offset;
                if (!offsetData) return true;
                var topDistance = basePlacement === "bottom" ? offsetData.top.y : 0;
                var bottomDistance = basePlacement === "top" ? offsetData.bottom.y : 0;
                var leftDistance = basePlacement === "right" ? offsetData.left.x : 0;
                var rightDistance = basePlacement === "left" ? offsetData.right.x : 0;
                var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
                var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
                var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
                var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
                return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
            }));
        }
        function updateTransitionEndListener(box, action, listener) {
            var method = action + "EventListener";
            [ "transitionend", "webkitTransitionEnd" ].forEach((function(event) {
                box[method](event, listener);
            }));
        }
        function actualContains(parent, child) {
            var target = child;
            while (target) {
                var _target$getRootNode;
                if (parent.contains(target)) return true;
                target = target.getRootNode == null ? void 0 : (_target$getRootNode = target.getRootNode()) == null ? void 0 : _target$getRootNode.host;
            }
            return false;
        }
        var currentInput = {
            isTouch: false
        };
        var lastMouseMoveTime = 0;
        function onDocumentTouchStart() {
            if (currentInput.isTouch) return;
            currentInput.isTouch = true;
            if (window.performance) document.addEventListener("mousemove", onDocumentMouseMove);
        }
        function onDocumentMouseMove() {
            var now = performance.now();
            if (now - lastMouseMoveTime < 20) {
                currentInput.isTouch = false;
                document.removeEventListener("mousemove", onDocumentMouseMove);
            }
            lastMouseMoveTime = now;
        }
        function onWindowBlur() {
            var activeElement = document.activeElement;
            if (isReferenceElement(activeElement)) {
                var instance = activeElement._tippy;
                if (activeElement.blur && !instance.state.isVisible) activeElement.blur();
            }
        }
        function bindGlobalEventListeners() {
            document.addEventListener("touchstart", onDocumentTouchStart, TOUCH_OPTIONS);
            window.addEventListener("blur", onWindowBlur);
        }
        var isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
        var isIE11 = isBrowser ? !!window.msCrypto : false;
        if (false) ;
        var pluginProps = {
            animateFill: false,
            followCursor: false,
            inlinePositioning: false,
            sticky: false
        };
        var renderProps = {
            allowHTML: false,
            animation: "fade",
            arrow: true,
            content: "",
            inertia: false,
            maxWidth: 350,
            role: "tooltip",
            theme: "",
            zIndex: 9999
        };
        var defaultProps = Object.assign({
            appendTo: TIPPY_DEFAULT_APPEND_TO,
            aria: {
                content: "auto",
                expanded: "auto"
            },
            delay: 0,
            duration: [ 300, 250 ],
            getReferenceClientRect: null,
            hideOnClick: true,
            ignoreAttributes: false,
            interactive: false,
            interactiveBorder: 2,
            interactiveDebounce: 0,
            moveTransition: "",
            offset: [ 0, 10 ],
            onAfterUpdate: function onAfterUpdate() {},
            onBeforeUpdate: function onBeforeUpdate() {},
            onCreate: function onCreate() {},
            onDestroy: function onDestroy() {},
            onHidden: function onHidden() {},
            onHide: function onHide() {},
            onMount: function onMount() {},
            onShow: function onShow() {},
            onShown: function onShown() {},
            onTrigger: function onTrigger() {},
            onUntrigger: function onUntrigger() {},
            onClickOutside: function onClickOutside() {},
            placement: "top",
            plugins: [],
            popperOptions: {},
            render: null,
            showOnCreate: false,
            touch: true,
            trigger: "mouseenter focus",
            triggerTarget: null
        }, pluginProps, renderProps);
        var defaultKeys = Object.keys(defaultProps);
        var setDefaultProps = function setDefaultProps(partialProps) {
            if (false) ;
            var keys = Object.keys(partialProps);
            keys.forEach((function(key) {
                defaultProps[key] = partialProps[key];
            }));
        };
        function getExtendedPassedProps(passedProps) {
            var plugins = passedProps.plugins || [];
            var pluginProps = plugins.reduce((function(acc, plugin) {
                var name = plugin.name, defaultValue = plugin.defaultValue;
                if (name) {
                    var _name;
                    acc[name] = passedProps[name] !== void 0 ? passedProps[name] : (_name = defaultProps[name]) != null ? _name : defaultValue;
                }
                return acc;
            }), {});
            return Object.assign({}, passedProps, pluginProps);
        }
        function getDataAttributeProps(reference, plugins) {
            var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
                plugins
            }))) : defaultKeys;
            var props = propKeys.reduce((function(acc, key) {
                var valueAsString = (reference.getAttribute("data-tippy-" + key) || "").trim();
                if (!valueAsString) return acc;
                if (key === "content") acc[key] = valueAsString; else try {
                    acc[key] = JSON.parse(valueAsString);
                } catch (e) {
                    acc[key] = valueAsString;
                }
                return acc;
            }), {});
            return props;
        }
        function evaluateProps(reference, props) {
            var out = Object.assign({}, props, {
                content: invokeWithArgsOrReturn(props.content, [ reference ])
            }, props.ignoreAttributes ? {} : getDataAttributeProps(reference, props.plugins));
            out.aria = Object.assign({}, defaultProps.aria, out.aria);
            out.aria = {
                expanded: out.aria.expanded === "auto" ? props.interactive : out.aria.expanded,
                content: out.aria.content === "auto" ? props.interactive ? null : "describedby" : out.aria.content
            };
            return out;
        }
        var innerHTML = function innerHTML() {
            return "innerHTML";
        };
        function dangerouslySetInnerHTML(element, html) {
            element[innerHTML()] = html;
        }
        function createArrowElement(value) {
            var arrow = div();
            if (value === true) arrow.className = ARROW_CLASS; else {
                arrow.className = SVG_ARROW_CLASS;
                if (tippy_esm_isElement(value)) arrow.appendChild(value); else dangerouslySetInnerHTML(arrow, value);
            }
            return arrow;
        }
        function setContent(content, props) {
            if (tippy_esm_isElement(props.content)) {
                dangerouslySetInnerHTML(content, "");
                content.appendChild(props.content);
            } else if (typeof props.content !== "function") if (props.allowHTML) dangerouslySetInnerHTML(content, props.content); else content.textContent = props.content;
        }
        function getChildren(popper) {
            var box = popper.firstElementChild;
            var boxChildren = arrayFrom(box.children);
            return {
                box,
                content: boxChildren.find((function(node) {
                    return node.classList.contains(CONTENT_CLASS);
                })),
                arrow: boxChildren.find((function(node) {
                    return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
                })),
                backdrop: boxChildren.find((function(node) {
                    return node.classList.contains(BACKDROP_CLASS);
                }))
            };
        }
        function render(instance) {
            var popper = div();
            var box = div();
            box.className = BOX_CLASS;
            box.setAttribute("data-state", "hidden");
            box.setAttribute("tabindex", "-1");
            var content = div();
            content.className = CONTENT_CLASS;
            content.setAttribute("data-state", "hidden");
            setContent(content, instance.props);
            popper.appendChild(box);
            box.appendChild(content);
            onUpdate(instance.props, instance.props);
            function onUpdate(prevProps, nextProps) {
                var _getChildren = getChildren(popper), box = _getChildren.box, content = _getChildren.content, arrow = _getChildren.arrow;
                if (nextProps.theme) box.setAttribute("data-theme", nextProps.theme); else box.removeAttribute("data-theme");
                if (typeof nextProps.animation === "string") box.setAttribute("data-animation", nextProps.animation); else box.removeAttribute("data-animation");
                if (nextProps.inertia) box.setAttribute("data-inertia", ""); else box.removeAttribute("data-inertia");
                box.style.maxWidth = typeof nextProps.maxWidth === "number" ? nextProps.maxWidth + "px" : nextProps.maxWidth;
                if (nextProps.role) box.setAttribute("role", nextProps.role); else box.removeAttribute("role");
                if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) setContent(content, instance.props);
                if (nextProps.arrow) {
                    if (!arrow) box.appendChild(createArrowElement(nextProps.arrow)); else if (prevProps.arrow !== nextProps.arrow) {
                        box.removeChild(arrow);
                        box.appendChild(createArrowElement(nextProps.arrow));
                    }
                } else if (arrow) box.removeChild(arrow);
            }
            return {
                popper,
                onUpdate
            };
        }
        render.$$tippy = true;
        var idCounter = 1;
        var mouseMoveListeners = [];
        var mountedInstances = [];
        function createTippy(reference, passedProps) {
            var props = evaluateProps(reference, Object.assign({}, defaultProps, getExtendedPassedProps(removeUndefinedProps(passedProps))));
            var showTimeout;
            var hideTimeout;
            var scheduleHideAnimationFrame;
            var isVisibleFromClick = false;
            var didHideDueToDocumentMouseDown = false;
            var didTouchMove = false;
            var ignoreOnFirstUpdate = false;
            var lastTriggerEvent;
            var currentTransitionEndListener;
            var onFirstUpdate;
            var listeners = [];
            var debouncedOnMouseMove = tippy_esm_debounce(onMouseMove, props.interactiveDebounce);
            var currentTarget;
            var id = idCounter++;
            var popperInstance = null;
            var plugins = unique(props.plugins);
            var state = {
                isEnabled: true,
                isVisible: false,
                isDestroyed: false,
                isMounted: false,
                isShown: false
            };
            var instance = {
                id,
                reference,
                popper: div(),
                popperInstance,
                props,
                state,
                plugins,
                clearDelayTimeouts,
                setProps,
                setContent,
                show,
                hide,
                hideWithInteractivity,
                enable,
                disable,
                unmount,
                destroy
            };
            if (!props.render) {
                if (false) ;
                return instance;
            }
            var _props$render = props.render(instance), popper = _props$render.popper, onUpdate = _props$render.onUpdate;
            popper.setAttribute("data-tippy-root", "");
            popper.id = "tippy-" + instance.id;
            instance.popper = popper;
            reference._tippy = instance;
            popper._tippy = instance;
            var pluginsHooks = plugins.map((function(plugin) {
                return plugin.fn(instance);
            }));
            var hasAriaExpanded = reference.hasAttribute("aria-expanded");
            addListeners();
            handleAriaExpandedAttribute();
            handleStyles();
            invokeHook("onCreate", [ instance ]);
            if (props.showOnCreate) scheduleShow();
            popper.addEventListener("mouseenter", (function() {
                if (instance.props.interactive && instance.state.isVisible) instance.clearDelayTimeouts();
            }));
            popper.addEventListener("mouseleave", (function() {
                if (instance.props.interactive && instance.props.trigger.indexOf("mouseenter") >= 0) getDocument().addEventListener("mousemove", debouncedOnMouseMove);
            }));
            return instance;
            function getNormalizedTouchSettings() {
                var touch = instance.props.touch;
                return Array.isArray(touch) ? touch : [ touch, 0 ];
            }
            function getIsCustomTouchBehavior() {
                return getNormalizedTouchSettings()[0] === "hold";
            }
            function getIsDefaultRenderFn() {
                var _instance$props$rende;
                return !!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy);
            }
            function getCurrentTarget() {
                return currentTarget || reference;
            }
            function getDocument() {
                var parent = getCurrentTarget().parentNode;
                return parent ? getOwnerDocument(parent) : document;
            }
            function getDefaultTemplateChildren() {
                return getChildren(popper);
            }
            function getDelay(isShow) {
                if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === "focus") return 0;
                return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
            }
            function handleStyles(fromHide) {
                if (fromHide === void 0) fromHide = false;
                popper.style.pointerEvents = instance.props.interactive && !fromHide ? "" : "none";
                popper.style.zIndex = "" + instance.props.zIndex;
            }
            function invokeHook(hook, args, shouldInvokePropsHook) {
                if (shouldInvokePropsHook === void 0) shouldInvokePropsHook = true;
                pluginsHooks.forEach((function(pluginHooks) {
                    if (pluginHooks[hook]) pluginHooks[hook].apply(pluginHooks, args);
                }));
                if (shouldInvokePropsHook) {
                    var _instance$props;
                    (_instance$props = instance.props)[hook].apply(_instance$props, args);
                }
            }
            function handleAriaContentAttribute() {
                var aria = instance.props.aria;
                if (!aria.content) return;
                var attr = "aria-" + aria.content;
                var id = popper.id;
                var nodes = normalizeToArray(instance.props.triggerTarget || reference);
                nodes.forEach((function(node) {
                    var currentValue = node.getAttribute(attr);
                    if (instance.state.isVisible) node.setAttribute(attr, currentValue ? currentValue + " " + id : id); else {
                        var nextValue = currentValue && currentValue.replace(id, "").trim();
                        if (nextValue) node.setAttribute(attr, nextValue); else node.removeAttribute(attr);
                    }
                }));
            }
            function handleAriaExpandedAttribute() {
                if (hasAriaExpanded || !instance.props.aria.expanded) return;
                var nodes = normalizeToArray(instance.props.triggerTarget || reference);
                nodes.forEach((function(node) {
                    if (instance.props.interactive) node.setAttribute("aria-expanded", instance.state.isVisible && node === getCurrentTarget() ? "true" : "false"); else node.removeAttribute("aria-expanded");
                }));
            }
            function cleanupInteractiveMouseListeners() {
                getDocument().removeEventListener("mousemove", debouncedOnMouseMove);
                mouseMoveListeners = mouseMoveListeners.filter((function(listener) {
                    return listener !== debouncedOnMouseMove;
                }));
            }
            function onDocumentPress(event) {
                if (currentInput.isTouch) if (didTouchMove || event.type === "mousedown") return;
                var actualTarget = event.composedPath && event.composedPath()[0] || event.target;
                if (instance.props.interactive && actualContains(popper, actualTarget)) return;
                if (normalizeToArray(instance.props.triggerTarget || reference).some((function(el) {
                    return actualContains(el, actualTarget);
                }))) {
                    if (currentInput.isTouch) return;
                    if (instance.state.isVisible && instance.props.trigger.indexOf("click") >= 0) return;
                } else invokeHook("onClickOutside", [ instance, event ]);
                if (instance.props.hideOnClick === true) {
                    instance.clearDelayTimeouts();
                    instance.hide();
                    didHideDueToDocumentMouseDown = true;
                    setTimeout((function() {
                        didHideDueToDocumentMouseDown = false;
                    }));
                    if (!instance.state.isMounted) removeDocumentPress();
                }
            }
            function onTouchMove() {
                didTouchMove = true;
            }
            function onTouchStart() {
                didTouchMove = false;
            }
            function addDocumentPress() {
                var doc = getDocument();
                doc.addEventListener("mousedown", onDocumentPress, true);
                doc.addEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
                doc.addEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
                doc.addEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
            }
            function removeDocumentPress() {
                var doc = getDocument();
                doc.removeEventListener("mousedown", onDocumentPress, true);
                doc.removeEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
                doc.removeEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
                doc.removeEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
            }
            function onTransitionedOut(duration, callback) {
                onTransitionEnd(duration, (function() {
                    if (!instance.state.isVisible && popper.parentNode && popper.parentNode.contains(popper)) callback();
                }));
            }
            function onTransitionedIn(duration, callback) {
                onTransitionEnd(duration, callback);
            }
            function onTransitionEnd(duration, callback) {
                var box = getDefaultTemplateChildren().box;
                function listener(event) {
                    if (event.target === box) {
                        updateTransitionEndListener(box, "remove", listener);
                        callback();
                    }
                }
                if (duration === 0) return callback();
                updateTransitionEndListener(box, "remove", currentTransitionEndListener);
                updateTransitionEndListener(box, "add", listener);
                currentTransitionEndListener = listener;
            }
            function on(eventType, handler, options) {
                if (options === void 0) options = false;
                var nodes = normalizeToArray(instance.props.triggerTarget || reference);
                nodes.forEach((function(node) {
                    node.addEventListener(eventType, handler, options);
                    listeners.push({
                        node,
                        eventType,
                        handler,
                        options
                    });
                }));
            }
            function addListeners() {
                if (getIsCustomTouchBehavior()) {
                    on("touchstart", onTrigger, {
                        passive: true
                    });
                    on("touchend", onMouseLeave, {
                        passive: true
                    });
                }
                splitBySpaces(instance.props.trigger).forEach((function(eventType) {
                    if (eventType === "manual") return;
                    on(eventType, onTrigger);
                    switch (eventType) {
                      case "mouseenter":
                        on("mouseleave", onMouseLeave);
                        break;

                      case "focus":
                        on(isIE11 ? "focusout" : "blur", onBlurOrFocusOut);
                        break;

                      case "focusin":
                        on("focusout", onBlurOrFocusOut);
                        break;
                    }
                }));
            }
            function removeListeners() {
                listeners.forEach((function(_ref) {
                    var node = _ref.node, eventType = _ref.eventType, handler = _ref.handler, options = _ref.options;
                    node.removeEventListener(eventType, handler, options);
                }));
                listeners = [];
            }
            function onTrigger(event) {
                var _lastTriggerEvent;
                var shouldScheduleClickHide = false;
                if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) return;
                var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === "focus";
                lastTriggerEvent = event;
                currentTarget = event.currentTarget;
                handleAriaExpandedAttribute();
                if (!instance.state.isVisible && isMouseEvent(event)) mouseMoveListeners.forEach((function(listener) {
                    return listener(event);
                }));
                if (event.type === "click" && (instance.props.trigger.indexOf("mouseenter") < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) shouldScheduleClickHide = true; else scheduleShow(event);
                if (event.type === "click") isVisibleFromClick = !shouldScheduleClickHide;
                if (shouldScheduleClickHide && !wasFocused) scheduleHide(event);
            }
            function onMouseMove(event) {
                var target = event.target;
                var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper.contains(target);
                if (event.type === "mousemove" && isCursorOverReferenceOrPopper) return;
                var popperTreeData = getNestedPopperTree().concat(popper).map((function(popper) {
                    var _instance$popperInsta;
                    var instance = popper._tippy;
                    var state = (_instance$popperInsta = instance.popperInstance) == null ? void 0 : _instance$popperInsta.state;
                    if (state) return {
                        popperRect: popper.getBoundingClientRect(),
                        popperState: state,
                        props
                    };
                    return null;
                })).filter(Boolean);
                if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
                    cleanupInteractiveMouseListeners();
                    scheduleHide(event);
                }
            }
            function onMouseLeave(event) {
                var shouldBail = isEventListenerStopped(event) || instance.props.trigger.indexOf("click") >= 0 && isVisibleFromClick;
                if (shouldBail) return;
                if (instance.props.interactive) {
                    instance.hideWithInteractivity(event);
                    return;
                }
                scheduleHide(event);
            }
            function onBlurOrFocusOut(event) {
                if (instance.props.trigger.indexOf("focusin") < 0 && event.target !== getCurrentTarget()) return;
                if (instance.props.interactive && event.relatedTarget && popper.contains(event.relatedTarget)) return;
                scheduleHide(event);
            }
            function isEventListenerStopped(event) {
                return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf("touch") >= 0 : false;
            }
            function createPopperInstance() {
                destroyPopperInstance();
                var _instance$props2 = instance.props, popperOptions = _instance$props2.popperOptions, placement = _instance$props2.placement, offset = _instance$props2.offset, getReferenceClientRect = _instance$props2.getReferenceClientRect, moveTransition = _instance$props2.moveTransition;
                var arrow = getIsDefaultRenderFn() ? getChildren(popper).arrow : null;
                var computedReference = getReferenceClientRect ? {
                    getBoundingClientRect: getReferenceClientRect,
                    contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
                } : reference;
                var tippyModifier = {
                    name: "$$tippy",
                    enabled: true,
                    phase: "beforeWrite",
                    requires: [ "computeStyles" ],
                    fn: function fn(_ref2) {
                        var state = _ref2.state;
                        if (getIsDefaultRenderFn()) {
                            var _getDefaultTemplateCh = getDefaultTemplateChildren(), box = _getDefaultTemplateCh.box;
                            [ "placement", "reference-hidden", "escaped" ].forEach((function(attr) {
                                if (attr === "placement") box.setAttribute("data-placement", state.placement); else if (state.attributes.popper["data-popper-" + attr]) box.setAttribute("data-" + attr, ""); else box.removeAttribute("data-" + attr);
                            }));
                            state.attributes.popper = {};
                        }
                    }
                };
                var modifiers = [ {
                    name: "offset",
                    options: {
                        offset
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        padding: {
                            top: 2,
                            bottom: 2,
                            left: 5,
                            right: 5
                        }
                    }
                }, {
                    name: "flip",
                    options: {
                        padding: 5
                    }
                }, {
                    name: "computeStyles",
                    options: {
                        adaptive: !moveTransition
                    }
                }, tippyModifier ];
                if (getIsDefaultRenderFn() && arrow) modifiers.push({
                    name: "arrow",
                    options: {
                        element: arrow,
                        padding: 3
                    }
                });
                modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
                instance.popperInstance = popper_createPopper(computedReference, popper, Object.assign({}, popperOptions, {
                    placement,
                    onFirstUpdate,
                    modifiers
                }));
            }
            function destroyPopperInstance() {
                if (instance.popperInstance) {
                    instance.popperInstance.destroy();
                    instance.popperInstance = null;
                }
            }
            function mount() {
                var appendTo = instance.props.appendTo;
                var parentNode;
                var node = getCurrentTarget();
                if (instance.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === "parent") parentNode = node.parentNode; else parentNode = invokeWithArgsOrReturn(appendTo, [ node ]);
                if (!parentNode.contains(popper)) parentNode.appendChild(popper);
                instance.state.isMounted = true;
                createPopperInstance();
                if (false) ;
            }
            function getNestedPopperTree() {
                return arrayFrom(popper.querySelectorAll("[data-tippy-root]"));
            }
            function scheduleShow(event) {
                instance.clearDelayTimeouts();
                if (event) invokeHook("onTrigger", [ instance, event ]);
                addDocumentPress();
                var delay = getDelay(true);
                var _getNormalizedTouchSe = getNormalizedTouchSettings(), touchValue = _getNormalizedTouchSe[0], touchDelay = _getNormalizedTouchSe[1];
                if (currentInput.isTouch && touchValue === "hold" && touchDelay) delay = touchDelay;
                if (delay) showTimeout = setTimeout((function() {
                    instance.show();
                }), delay); else instance.show();
            }
            function scheduleHide(event) {
                instance.clearDelayTimeouts();
                invokeHook("onUntrigger", [ instance, event ]);
                if (!instance.state.isVisible) {
                    removeDocumentPress();
                    return;
                }
                if (instance.props.trigger.indexOf("mouseenter") >= 0 && instance.props.trigger.indexOf("click") >= 0 && [ "mouseleave", "mousemove" ].indexOf(event.type) >= 0 && isVisibleFromClick) return;
                var delay = getDelay(false);
                if (delay) hideTimeout = setTimeout((function() {
                    if (instance.state.isVisible) instance.hide();
                }), delay); else scheduleHideAnimationFrame = requestAnimationFrame((function() {
                    instance.hide();
                }));
            }
            function enable() {
                instance.state.isEnabled = true;
            }
            function disable() {
                instance.hide();
                instance.state.isEnabled = false;
            }
            function clearDelayTimeouts() {
                clearTimeout(showTimeout);
                clearTimeout(hideTimeout);
                cancelAnimationFrame(scheduleHideAnimationFrame);
            }
            function setProps(partialProps) {
                if (false) ;
                if (instance.state.isDestroyed) return;
                invokeHook("onBeforeUpdate", [ instance, partialProps ]);
                removeListeners();
                var prevProps = instance.props;
                var nextProps = evaluateProps(reference, Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
                    ignoreAttributes: true
                }));
                instance.props = nextProps;
                addListeners();
                if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
                    cleanupInteractiveMouseListeners();
                    debouncedOnMouseMove = tippy_esm_debounce(onMouseMove, nextProps.interactiveDebounce);
                }
                if (prevProps.triggerTarget && !nextProps.triggerTarget) normalizeToArray(prevProps.triggerTarget).forEach((function(node) {
                    node.removeAttribute("aria-expanded");
                })); else if (nextProps.triggerTarget) reference.removeAttribute("aria-expanded");
                handleAriaExpandedAttribute();
                handleStyles();
                if (onUpdate) onUpdate(prevProps, nextProps);
                if (instance.popperInstance) {
                    createPopperInstance();
                    getNestedPopperTree().forEach((function(nestedPopper) {
                        requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
                    }));
                }
                invokeHook("onAfterUpdate", [ instance, partialProps ]);
            }
            function setContent(content) {
                instance.setProps({
                    content
                });
            }
            function show() {
                if (false) ;
                var isAlreadyVisible = instance.state.isVisible;
                var isDestroyed = instance.state.isDestroyed;
                var isDisabled = !instance.state.isEnabled;
                var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
                var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);
                if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) return;
                if (getCurrentTarget().hasAttribute("disabled")) return;
                invokeHook("onShow", [ instance ], false);
                if (instance.props.onShow(instance) === false) return;
                instance.state.isVisible = true;
                if (getIsDefaultRenderFn()) popper.style.visibility = "visible";
                handleStyles();
                addDocumentPress();
                if (!instance.state.isMounted) popper.style.transition = "none";
                if (getIsDefaultRenderFn()) {
                    var _getDefaultTemplateCh2 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh2.box, content = _getDefaultTemplateCh2.content;
                    setTransitionDuration([ box, content ], 0);
                }
                onFirstUpdate = function onFirstUpdate() {
                    var _instance$popperInsta2;
                    if (!instance.state.isVisible || ignoreOnFirstUpdate) return;
                    ignoreOnFirstUpdate = true;
                    void popper.offsetHeight;
                    popper.style.transition = instance.props.moveTransition;
                    if (getIsDefaultRenderFn() && instance.props.animation) {
                        var _getDefaultTemplateCh3 = getDefaultTemplateChildren(), _box = _getDefaultTemplateCh3.box, _content = _getDefaultTemplateCh3.content;
                        setTransitionDuration([ _box, _content ], duration);
                        setVisibilityState([ _box, _content ], "visible");
                    }
                    handleAriaContentAttribute();
                    handleAriaExpandedAttribute();
                    pushIfUnique(mountedInstances, instance);
                    (_instance$popperInsta2 = instance.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
                    invokeHook("onMount", [ instance ]);
                    if (instance.props.animation && getIsDefaultRenderFn()) onTransitionedIn(duration, (function() {
                        instance.state.isShown = true;
                        invokeHook("onShown", [ instance ]);
                    }));
                };
                mount();
            }
            function hide() {
                if (false) ;
                var isAlreadyHidden = !instance.state.isVisible;
                var isDestroyed = instance.state.isDestroyed;
                var isDisabled = !instance.state.isEnabled;
                var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);
                if (isAlreadyHidden || isDestroyed || isDisabled) return;
                invokeHook("onHide", [ instance ], false);
                if (instance.props.onHide(instance) === false) return;
                instance.state.isVisible = false;
                instance.state.isShown = false;
                ignoreOnFirstUpdate = false;
                isVisibleFromClick = false;
                if (getIsDefaultRenderFn()) popper.style.visibility = "hidden";
                cleanupInteractiveMouseListeners();
                removeDocumentPress();
                handleStyles(true);
                if (getIsDefaultRenderFn()) {
                    var _getDefaultTemplateCh4 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh4.box, content = _getDefaultTemplateCh4.content;
                    if (instance.props.animation) {
                        setTransitionDuration([ box, content ], duration);
                        setVisibilityState([ box, content ], "hidden");
                    }
                }
                handleAriaContentAttribute();
                handleAriaExpandedAttribute();
                if (instance.props.animation) {
                    if (getIsDefaultRenderFn()) onTransitionedOut(duration, instance.unmount);
                } else instance.unmount();
            }
            function hideWithInteractivity(event) {
                if (false) ;
                getDocument().addEventListener("mousemove", debouncedOnMouseMove);
                pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
                debouncedOnMouseMove(event);
            }
            function unmount() {
                if (false) ;
                if (instance.state.isVisible) instance.hide();
                if (!instance.state.isMounted) return;
                destroyPopperInstance();
                getNestedPopperTree().forEach((function(nestedPopper) {
                    nestedPopper._tippy.unmount();
                }));
                if (popper.parentNode) popper.parentNode.removeChild(popper);
                mountedInstances = mountedInstances.filter((function(i) {
                    return i !== instance;
                }));
                instance.state.isMounted = false;
                invokeHook("onHidden", [ instance ]);
            }
            function destroy() {
                if (false) ;
                if (instance.state.isDestroyed) return;
                instance.clearDelayTimeouts();
                instance.unmount();
                removeListeners();
                delete reference._tippy;
                instance.state.isDestroyed = true;
                invokeHook("onDestroy", [ instance ]);
            }
        }
        function tippy(targets, optionalProps) {
            if (optionalProps === void 0) optionalProps = {};
            var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
            if (false) ;
            bindGlobalEventListeners();
            var passedProps = Object.assign({}, optionalProps, {
                plugins
            });
            var elements = getArrayOfElements(targets);
            if (false) ;
            var instances = elements.reduce((function(acc, reference) {
                var instance = reference && createTippy(reference, passedProps);
                if (instance) acc.push(instance);
                return acc;
            }), []);
            return tippy_esm_isElement(targets) ? instances[0] : instances;
        }
        tippy.defaultProps = defaultProps;
        tippy.setDefaultProps = setDefaultProps;
        tippy.currentInput = currentInput;
        Object.assign({}, modifiers_applyStyles, {
            effect: function effect(_ref) {
                var state = _ref.state;
                var initialStyles = {
                    popper: {
                        position: state.options.strategy,
                        left: "0",
                        top: "0",
                        margin: "0"
                    },
                    arrow: {
                        position: "absolute"
                    },
                    reference: {}
                };
                Object.assign(state.elements.popper.style, initialStyles.popper);
                state.styles = initialStyles;
                if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
            }
        });
        var mouseCoords = {
            clientX: 0,
            clientY: 0
        };
        var activeInstances = [];
        function storeMouseCoords(_ref) {
            var clientX = _ref.clientX, clientY = _ref.clientY;
            mouseCoords = {
                clientX,
                clientY
            };
        }
        function addMouseCoordsListener(doc) {
            doc.addEventListener("mousemove", storeMouseCoords);
        }
        function removeMouseCoordsListener(doc) {
            doc.removeEventListener("mousemove", storeMouseCoords);
        }
        var followCursor = {
            name: "followCursor",
            defaultValue: false,
            fn: function fn(instance) {
                var reference = instance.reference;
                var doc = getOwnerDocument(instance.props.triggerTarget || reference);
                var isInternalUpdate = false;
                var wasFocusEvent = false;
                var isUnmounted = true;
                var prevProps = instance.props;
                function getIsInitialBehavior() {
                    return instance.props.followCursor === "initial" && instance.state.isVisible;
                }
                function addListener() {
                    doc.addEventListener("mousemove", onMouseMove);
                }
                function removeListener() {
                    doc.removeEventListener("mousemove", onMouseMove);
                }
                function unsetGetReferenceClientRect() {
                    isInternalUpdate = true;
                    instance.setProps({
                        getReferenceClientRect: null
                    });
                    isInternalUpdate = false;
                }
                function onMouseMove(event) {
                    var isCursorOverReference = event.target ? reference.contains(event.target) : true;
                    var followCursor = instance.props.followCursor;
                    var clientX = event.clientX, clientY = event.clientY;
                    var rect = reference.getBoundingClientRect();
                    var relativeX = clientX - rect.left;
                    var relativeY = clientY - rect.top;
                    if (isCursorOverReference || !instance.props.interactive) instance.setProps({
                        getReferenceClientRect: function getReferenceClientRect() {
                            var rect = reference.getBoundingClientRect();
                            var x = clientX;
                            var y = clientY;
                            if (followCursor === "initial") {
                                x = rect.left + relativeX;
                                y = rect.top + relativeY;
                            }
                            var top = followCursor === "horizontal" ? rect.top : y;
                            var right = followCursor === "vertical" ? rect.right : x;
                            var bottom = followCursor === "horizontal" ? rect.bottom : y;
                            var left = followCursor === "vertical" ? rect.left : x;
                            return {
                                width: right - left,
                                height: bottom - top,
                                top,
                                right,
                                bottom,
                                left
                            };
                        }
                    });
                }
                function create() {
                    if (instance.props.followCursor) {
                        activeInstances.push({
                            instance,
                            doc
                        });
                        addMouseCoordsListener(doc);
                    }
                }
                function destroy() {
                    activeInstances = activeInstances.filter((function(data) {
                        return data.instance !== instance;
                    }));
                    if (activeInstances.filter((function(data) {
                        return data.doc === doc;
                    })).length === 0) removeMouseCoordsListener(doc);
                }
                return {
                    onCreate: create,
                    onDestroy: destroy,
                    onBeforeUpdate: function onBeforeUpdate() {
                        prevProps = instance.props;
                    },
                    onAfterUpdate: function onAfterUpdate(_, _ref2) {
                        var followCursor = _ref2.followCursor;
                        if (isInternalUpdate) return;
                        if (followCursor !== void 0 && prevProps.followCursor !== followCursor) {
                            destroy();
                            if (followCursor) {
                                create();
                                if (instance.state.isMounted && !wasFocusEvent && !getIsInitialBehavior()) addListener();
                            } else {
                                removeListener();
                                unsetGetReferenceClientRect();
                            }
                        }
                    },
                    onMount: function onMount() {
                        if (instance.props.followCursor && !wasFocusEvent) {
                            if (isUnmounted) {
                                onMouseMove(mouseCoords);
                                isUnmounted = false;
                            }
                            if (!getIsInitialBehavior()) addListener();
                        }
                    },
                    onTrigger: function onTrigger(_, event) {
                        if (isMouseEvent(event)) mouseCoords = {
                            clientX: event.clientX,
                            clientY: event.clientY
                        };
                        wasFocusEvent = event.type === "focus";
                    },
                    onHidden: function onHidden() {
                        if (instance.props.followCursor) {
                            unsetGetReferenceClientRect();
                            removeListener();
                            isUnmounted = true;
                        }
                    }
                };
            }
        };
        tippy.setDefaultProps({
            render
        });
        const tippy_esm = tippy;
        modules_flsModules.tippy = tippy_esm("[data-tippy-content]", {
            placement: "bottom",
            allowHTML: true,
            plugins: [ followCursor ],
            followCursor: true
        });
        function ssr_window_esm_isObject(obj) {
            return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target, src) {
            if (target === void 0) target = {};
            if (src === void 0) src = {};
            Object.keys(src).forEach((key => {
                if (typeof target[key] === "undefined") target[key] = src[key]; else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
            }));
        }
        const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return {
                    initEvent() {}
                };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    }
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function ssr_window_esm_getDocument() {
            const doc = typeof document !== "undefined" ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }
        const ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return "";
                    }
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(callback) {
                if (typeof setTimeout === "undefined") {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
                if (typeof setTimeout === "undefined") return;
                clearTimeout(id);
            }
        };
        function ssr_window_esm_getWindow() {
            const win = typeof window !== "undefined" ? window : {};
            extend(win, ssrWindow);
            return win;
        }
        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach((key => {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            }));
        }
        function utils_nextTick(callback, delay) {
            if (delay === void 0) delay = 0;
            return setTimeout(callback, delay);
        }
        function utils_now() {
            return Date.now();
        }
        function utils_getComputedStyle(el) {
            const window = ssr_window_esm_getWindow();
            let style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        }
        function utils_getTranslate(el, axis) {
            if (axis === void 0) axis = "x";
            const window = ssr_window_esm_getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = utils_getComputedStyle(el);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
                transformMatrix = new window.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                matrix = transformMatrix.toString().split(",");
            }
            if (axis === "x") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
            if (axis === "y") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
            return curTransform || 0;
        }
        function utils_isObject(o) {
            return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
        }
        function isNode(node) {
            if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") return node instanceof HTMLElement;
            return node && (node.nodeType === 1 || node.nodeType === 11);
        }
        function utils_extend() {
            const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
            const noExtend = [ "__proto__", "constructor", "prototype" ];
            for (let i = 1; i < arguments.length; i += 1) {
                const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
                    const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        const nextKey = keysArray[nextIndex];
                        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (desc !== void 0 && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                        } else to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
        function utils_setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        }
        function animateCSSModeScroll(_ref) {
            let {swiper, targetPosition, side} = _ref;
            const window = ssr_window_esm_getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = "none";
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? "next" : "prev";
            const isOutOfBound = (current, target) => dir === "next" && current >= target || dir === "prev" && current <= target;
            const animate = () => {
                time = (new Date).getTime();
                if (startTime === null) startTime = time;
                const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
                let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = "hidden";
                    swiper.wrapperEl.style.scrollSnapType = "";
                    setTimeout((() => {
                        swiper.wrapperEl.style.overflow = "";
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition
                        });
                    }));
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }
                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };
            animate();
        }
        function utils_getSlideTransformEl(slideEl) {
            return slideEl.querySelector(".swiper-slide-transform") || slideEl.shadowRoot && slideEl.shadowRoot.querySelector(".swiper-slide-transform") || slideEl;
        }
        function utils_elementChildren(element, selector) {
            if (selector === void 0) selector = "";
            return [ ...element.children ].filter((el => el.matches(selector)));
        }
        function utils_createElement(tag, classes) {
            if (classes === void 0) classes = [];
            const el = document.createElement(tag);
            el.classList.add(...Array.isArray(classes) ? classes : [ classes ]);
            return el;
        }
        function elementPrevAll(el, selector) {
            const prevEls = [];
            while (el.previousElementSibling) {
                const prev = el.previousElementSibling;
                if (selector) {
                    if (prev.matches(selector)) prevEls.push(prev);
                } else prevEls.push(prev);
                el = prev;
            }
            return prevEls;
        }
        function elementNextAll(el, selector) {
            const nextEls = [];
            while (el.nextElementSibling) {
                const next = el.nextElementSibling;
                if (selector) {
                    if (next.matches(selector)) nextEls.push(next);
                } else nextEls.push(next);
                el = next;
            }
            return nextEls;
        }
        function elementStyle(el, prop) {
            const window = ssr_window_esm_getWindow();
            return window.getComputedStyle(el, null).getPropertyValue(prop);
        }
        function utils_elementIndex(el) {
            let child = el;
            let i;
            if (child) {
                i = 0;
                while ((child = child.previousSibling) !== null) if (child.nodeType === 1) i += 1;
                return i;
            }
            return;
        }
        function utils_elementParents(el, selector) {
            const parents = [];
            let parent = el.parentElement;
            while (parent) {
                if (selector) {
                    if (parent.matches(selector)) parents.push(parent);
                } else parents.push(parent);
                parent = parent.parentElement;
            }
            return parents;
        }
        function utils_elementTransitionEnd(el, callback) {
            function fireCallBack(e) {
                if (e.target !== el) return;
                callback.call(el, e);
                el.removeEventListener("transitionend", fireCallBack);
            }
            if (callback) el.addEventListener("transitionend", fireCallBack);
        }
        function utils_elementOuterSize(el, size, includeMargins) {
            const window = ssr_window_esm_getWindow();
            if (includeMargins) return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
            return el.offsetWidth;
        }
        let support;
        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            return {
                smoothScroll: document.documentElement && document.documentElement.style && "scrollBehavior" in document.documentElement.style,
                touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch)
            };
        }
        function getSupport() {
            if (!support) support = calcSupport();
            return support;
        }
        let deviceCached;
        function calcDevice(_temp) {
            let {userAgent} = _temp === void 0 ? {} : _temp;
            const support = getSupport();
            const window = ssr_window_esm_getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
                ios: false,
                android: false
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = platform === "Win32";
            let macos = platform === "MacIntel";
            const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                macos = false;
            }
            if (android && !windows) {
                device.os = "android";
                device.android = true;
            }
            if (ipad || iphone || ipod) {
                device.os = "ios";
                device.ios = true;
            }
            return device;
        }
        function getDevice(overrides) {
            if (overrides === void 0) overrides = {};
            if (!deviceCached) deviceCached = calcDevice(overrides);
            return deviceCached;
        }
        let browser;
        function calcBrowser() {
            const window = ssr_window_esm_getWindow();
            let needPerspectiveFix = false;
            function isSafari() {
                const ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
            }
            if (isSafari()) {
                const ua = String(window.navigator.userAgent);
                if (ua.includes("Version/")) {
                    const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num => Number(num)));
                    needPerspectiveFix = major < 16 || major === 16 && minor < 2;
                }
            }
            return {
                isSafari: needPerspectiveFix || isSafari(),
                needPerspectiveFix,
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
            };
        }
        function getBrowser() {
            if (!browser) browser = calcBrowser();
            return browser;
        }
        function Resize(_ref) {
            let {swiper, on, emit} = _ref;
            const window = ssr_window_esm_getWindow();
            let observer = null;
            let animationFrame = null;
            const resizeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("beforeResize");
                emit("resize");
            };
            const createObserver = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver((entries => {
                    animationFrame = window.requestAnimationFrame((() => {
                        const {width, height} = swiper;
                        let newWidth = width;
                        let newHeight = height;
                        entries.forEach((_ref2 => {
                            let {contentBoxSize, contentRect, target} = _ref2;
                            if (target && target !== swiper.el) return;
                            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                        }));
                        if (newWidth !== width || newHeight !== height) resizeHandler();
                    }));
                }));
                observer.observe(swiper.el);
            };
            const removeObserver = () => {
                if (animationFrame) window.cancelAnimationFrame(animationFrame);
                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };
            const orientationChangeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("orientationchange");
            };
            on("init", (() => {
                if (swiper.params.resizeObserver && typeof window.ResizeObserver !== "undefined") {
                    createObserver();
                    return;
                }
                window.addEventListener("resize", resizeHandler);
                window.addEventListener("orientationchange", orientationChangeHandler);
            }));
            on("destroy", (() => {
                removeObserver();
                window.removeEventListener("resize", resizeHandler);
                window.removeEventListener("orientationchange", orientationChangeHandler);
            }));
        }
        function Observer(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const observers = [];
            const window = ssr_window_esm_getWindow();
            const attach = function(target, options) {
                if (options === void 0) options = {};
                const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                const observer = new ObserverFunc((mutations => {
                    if (swiper.__preventObserver__) return;
                    if (mutations.length === 1) {
                        emit("observerUpdate", mutations[0]);
                        return;
                    }
                    const observerUpdate = function observerUpdate() {
                        emit("observerUpdate", mutations[0]);
                    };
                    if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                }));
                observer.observe(target, {
                    attributes: typeof options.attributes === "undefined" ? true : options.attributes,
                    childList: typeof options.childList === "undefined" ? true : options.childList,
                    characterData: typeof options.characterData === "undefined" ? true : options.characterData
                });
                observers.push(observer);
            };
            const init = () => {
                if (!swiper.params.observer) return;
                if (swiper.params.observeParents) {
                    const containerParents = utils_elementParents(swiper.hostEl);
                    for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
                }
                attach(swiper.hostEl, {
                    childList: swiper.params.observeSlideChildren
                });
                attach(swiper.wrapperEl, {
                    attributes: false
                });
            };
            const destroy = () => {
                observers.forEach((observer => {
                    observer.disconnect();
                }));
                observers.splice(0, observers.length);
            };
            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            });
            on("init", init);
            on("destroy", destroy);
        }
        var eventsEmitter = {
            on(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                events.split(" ").forEach((event => {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                }));
                return self;
            },
            once(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                function onceHandler() {
                    self.off(events, onceHandler);
                    if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    handler.apply(self, args);
                }
                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },
            onAny(handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                return self;
            },
            offAny(handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsAnyListeners) return self;
                const index = self.eventsAnyListeners.indexOf(handler);
                if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                return self;
            },
            off(events, handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                events.split(" ").forEach((event => {
                    if (typeof handler === "undefined") self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                    }));
                }));
                return self;
            },
            emit() {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                let events;
                let data;
                let context;
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                if (typeof args[0] === "string" || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }
                data.unshift(context);
                const eventsArray = Array.isArray(events) ? events : events.split(" ");
                eventsArray.forEach((event => {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                        eventHandler.apply(context, [ event, ...data ]);
                    }));
                    if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                        eventHandler.apply(context, data);
                    }));
                }));
                return self;
            }
        };
        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const el = swiper.el;
            if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) width = swiper.params.width; else width = el.clientWidth;
            if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) height = swiper.params.height; else height = el.clientHeight;
            if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
            width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
            height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
        function updateSlides() {
            const swiper = this;
            function getDirectionLabel(property) {
                if (swiper.isHorizontal()) return property;
                return {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[property];
            }
            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
            }
            const params = swiper.params;
            const {wrapperEl, slidesEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = utils_elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;
            if (typeof offsetBefore === "function") offsetBefore = params.slidesOffsetBefore.call(swiper);
            let offsetAfter = params.slidesOffsetAfter;
            if (typeof offsetAfter === "function") offsetAfter = params.slidesOffsetAfter.call(swiper);
            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;
            if (typeof swiperSize === "undefined") return;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
            swiper.virtualSize = -spaceBetween;
            slides.forEach((slideEl => {
                if (rtl) slideEl.style.marginLeft = ""; else slideEl.style.marginRight = "";
                slideEl.style.marginBottom = "";
                slideEl.style.marginTop = "";
            }));
            if (params.centeredSlides && params.cssMode) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
            }
            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
            if (gridEnabled) swiper.grid.initSlides(slidesLength);
            let slideSize;
            const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key => typeof params.breakpoints[key].slidesPerView !== "undefined")).length > 0;
            for (let i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                let slide;
                if (slides[i]) slide = slides[i];
                if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
                if (slides[i] && elementStyle(slide, "display") === "none") continue;
                if (params.slidesPerView === "auto") {
                    if (shouldResetSlideSize) slides[i].style[getDirectionLabel("width")] = ``;
                    const slideStyles = getComputedStyle(slide);
                    const currentTransform = slide.style.transform;
                    const currentWebKitTransform = slide.style.webkitTransform;
                    if (currentTransform) slide.style.transform = "none";
                    if (currentWebKitTransform) slide.style.webkitTransform = "none";
                    if (params.roundLengths) slideSize = swiper.isHorizontal() ? utils_elementOuterSize(slide, "width", true) : utils_elementOuterSize(slide, "height", true); else {
                        const width = getDirectionPropertyValue(slideStyles, "width");
                        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                        const boxSizing = slideStyles.getPropertyValue("box-sizing");
                        if (boxSizing && boxSizing === "border-box") slideSize = width + marginLeft + marginRight; else {
                            const {clientWidth, offsetWidth} = slide;
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }
                    if (currentTransform) slide.style.transform = currentTransform;
                    if (currentWebKitTransform) slide.style.webkitTransform = currentWebKitTransform;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                    if (slides[i]) slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
                }
                if (slides[i]) slides[i].swiperSlideSize = slideSize;
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
            if (params.setWrapperSize) wrapperEl.style[getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
            if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
            if (!params.centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
            }
            if (isVirtual && params.loop) {
                const size = slidesSizesGrid[0] + spaceBetween;
                if (params.slidesPerGroup > 1) {
                    const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
                    const groupSize = size * params.slidesPerGroup;
                    for (let i = 0; i < groups; i += 1) snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
                }
                for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
                    if (params.slidesPerGroup === 1) snapGrid.push(snapGrid[snapGrid.length - 1] + size);
                    slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
                    swiper.virtualSize += size;
                }
            }
            if (snapGrid.length === 0) snapGrid = [ 0 ];
            if (spaceBetween !== 0) {
                const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
                slides.filter(((_, slideIndex) => {
                    if (!params.cssMode || params.loop) return true;
                    if (slideIndex === slides.length - 1) return false;
                    return true;
                })).forEach((slideEl => {
                    slideEl.style[key] = `${spaceBetween}px`;
                }));
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (spaceBetween || 0);
                }));
                allSlidesSize -= spaceBetween;
                const maxSnap = allSlidesSize - swiperSize;
                snapGrid = snapGrid.map((snap => {
                    if (snap <= 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                }));
            }
            if (params.centerInsufficientSlides) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (spaceBetween || 0);
                }));
                allSlidesSize -= spaceBetween;
                if (allSlidesSize < swiperSize) {
                    const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                    snapGrid.forEach(((snap, snapIndex) => {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    }));
                    slidesGrid.forEach(((snap, snapIndex) => {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    }));
                }
            }
            Object.assign(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid
            });
            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                const addToSnapGrid = -swiper.snapGrid[0];
                const addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
                swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
            }
            if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit("snapGridLengthChange");
            }
            if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
                const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
                if (slidesLength <= params.maxBackfaceHiddenSlides) {
                    if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
                } else if (hasClassBackfaceClassAdded) swiper.el.classList.remove(backFaceHiddenClass);
            }
        }
        function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;
            if (typeof speed === "number") swiper.setTransition(speed); else if (speed === true) swiper.setTransition(swiper.params.speed);
            const getSlideByIndex = index => {
                if (isVirtual) return swiper.slides[swiper.getSlideIndexByData(index)];
                return swiper.slides[index];
            };
            if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || []).forEach((slide => {
                activeSlides.push(slide);
            })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
            for (i = 0; i < activeSlides.length; i += 1) if (typeof activeSlides[i] !== "undefined") {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
            if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
        }
        function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;
            const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
            for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
        }
        function updateSlidesProgress(translate) {
            if (translate === void 0) translate = this && this.translate || 0;
            const swiper = this;
            const params = swiper.params;
            const {slides, rtlTranslate: rtl, snapGrid} = swiper;
            if (slides.length === 0) return;
            if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate;
            slides.forEach((slideEl => {
                slideEl.classList.remove(params.slideVisibleClass);
            }));
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            let spaceBetween = params.spaceBetween;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
            for (let i = 0; i < slides.length; i += 1) {
                const slide = slides[i];
                let slideOffset = slide.swiperSlideOffset;
                if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                const slideBefore = -(offsetCenter - slideOffset);
                const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides[i].classList.add(params.slideVisibleClass);
                }
                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }
        }
        function updateProgress(translate) {
            const swiper = this;
            if (typeof translate === "undefined") {
                const multiplier = swiper.rtlTranslate ? -1 : 1;
                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let {progress, isBeginning, isEnd, progressLoop} = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;
            if (translatesDiff === 0) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
                const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
                isBeginning = isBeginningRounded || progress <= 0;
                isEnd = isEndRounded || progress >= 1;
                if (isBeginningRounded) progress = 0;
                if (isEndRounded) progress = 1;
            }
            if (params.loop) {
                const firstSlideIndex = swiper.getSlideIndexByData(0);
                const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
                const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
                const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
                const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
                const translateAbs = Math.abs(translate);
                if (translateAbs >= firstSlideTranslate) progressLoop = (translateAbs - firstSlideTranslate) / translateMax; else progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
                if (progressLoop > 1) progressLoop -= 1;
            }
            Object.assign(swiper, {
                progress,
                progressLoop,
                isBeginning,
                isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
            if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
            swiper.emit("progress", progress);
        }
        function updateSlidesClasses() {
            const swiper = this;
            const {slides, params, slidesEl, activeIndex} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const getFilteredSlide = selector => utils_elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
            slides.forEach((slideEl => {
                slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
            }));
            let activeSlide;
            if (isVirtual) if (params.loop) {
                let slideIndex = activeIndex - swiper.virtual.slidesBefore;
                if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
                if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
                activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
            } else activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`); else activeSlide = slides[activeIndex];
            if (activeSlide) {
                activeSlide.classList.add(params.slideActiveClass);
                let nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                if (params.loop && !nextSlide) nextSlide = slides[0];
                if (nextSlide) nextSlide.classList.add(params.slideNextClass);
                let prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                if (params.loop && !prevSlide === 0) prevSlide = slides[slides.length - 1];
                if (prevSlide) prevSlide.classList.add(params.slidePrevClass);
            }
            swiper.emitSlidesClasses();
        }
        const processLazyPreloader = (swiper, imageEl) => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
            const slideEl = imageEl.closest(slideSelector());
            if (slideEl) {
                const lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                if (lazyEl) lazyEl.remove();
            }
        };
        const unlazy = (swiper, index) => {
            if (!swiper.slides[index]) return;
            const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
            if (imageEl) imageEl.removeAttribute("loading");
        };
        const preload = swiper => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            let amount = swiper.params.lazyPreloadPrevNext;
            const len = swiper.slides.length;
            if (!len || !amount || amount < 0) return;
            amount = Math.min(amount, len);
            const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
            const activeIndex = swiper.activeIndex;
            if (swiper.params.grid && swiper.params.grid.rows > 1) {
                const activeColumn = activeIndex;
                const preloadColumns = [ activeColumn - amount ];
                preloadColumns.push(...Array.from({
                    length: amount
                }).map(((_, i) => activeColumn + slidesPerView + i)));
                swiper.slides.forEach(((slideEl, i) => {
                    if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
                }));
                return;
            }
            const slideIndexLastInView = activeIndex + slidesPerView - 1;
            if (swiper.params.rewind || swiper.params.loop) for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
                const realIndex = (i % len + len) % len;
                if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
            } else for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) unlazy(swiper, i);
        };
        function getActiveIndexByTranslate(swiper) {
            const {slidesGrid, params} = swiper;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            let activeIndex;
            for (let i = 0; i < slidesGrid.length; i += 1) if (typeof slidesGrid[i + 1] !== "undefined") {
                if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
            } else if (translate >= slidesGrid[i]) activeIndex = i;
            if (params.normalizeSlideIndex) if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
            return activeIndex;
        }
        function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;
            const getVirtualRealIndex = aIndex => {
                let realIndex = aIndex - swiper.virtual.slidesBefore;
                if (realIndex < 0) realIndex = swiper.virtual.slides.length + realIndex;
                if (realIndex >= swiper.virtual.slides.length) realIndex -= swiper.virtual.slides.length;
                return realIndex;
            };
            if (typeof activeIndex === "undefined") activeIndex = getActiveIndexByTranslate(swiper);
            if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit("snapIndexChange");
                }
                if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.realIndex = getVirtualRealIndex(activeIndex);
                return;
            }
            let realIndex;
            if (swiper.virtual && params.virtual.enabled && params.loop) realIndex = getVirtualRealIndex(activeIndex); else if (swiper.slides[activeIndex]) realIndex = parseInt(swiper.slides[activeIndex].getAttribute("data-swiper-slide-index") || activeIndex, 10); else realIndex = activeIndex;
            Object.assign(swiper, {
                previousSnapIndex,
                snapIndex,
                previousRealIndex,
                realIndex,
                previousIndex,
                activeIndex
            });
            if (swiper.initialized) preload(swiper);
            swiper.emit("activeIndexChange");
            swiper.emit("snapIndexChange");
            if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
            if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit("slideChange");
        }
        function updateClickedSlide(e) {
            const swiper = this;
            const params = swiper.params;
            const slide = e.closest(`.${params.slideClass}, swiper-slide`);
            let slideFound = false;
            let slideIndex;
            if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
            if (slide && slideFound) {
                swiper.clickedSlide = slide;
                if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(slide.getAttribute("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
            } else {
                swiper.clickedSlide = void 0;
                swiper.clickedIndex = void 0;
                return;
            }
            if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
        }
        var update = {
            updateSize,
            updateSlides,
            updateAutoHeight,
            updateSlidesOffset,
            updateSlidesProgress,
            updateProgress,
            updateSlidesClasses,
            updateActiveIndex,
            updateClickedSlide
        };
        function getSwiperTranslate(axis) {
            if (axis === void 0) axis = this.isHorizontal() ? "x" : "y";
            const swiper = this;
            const {params, rtlTranslate: rtl, translate, wrapperEl} = swiper;
            if (params.virtualTranslate) return rtl ? -translate : translate;
            if (params.cssMode) return translate;
            let currentTranslate = utils_getTranslate(wrapperEl, axis);
            currentTranslate += swiper.cssOverflowAdjustment();
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        }
        function setTranslate(translate, byController) {
            const swiper = this;
            const {rtlTranslate: rtl, params, wrapperEl, progress} = swiper;
            let x = 0;
            let y = 0;
            const z = 0;
            if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y;
            if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) {
                if (swiper.isHorizontal()) x -= swiper.cssOverflowAdjustment(); else y -= swiper.cssOverflowAdjustment();
                wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
            }
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== progress) swiper.updateProgress(translate);
            swiper.emit("setTranslate", swiper.translate, byController);
        }
        function minTranslate() {
            return -this.snapGrid[0];
        }
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
            if (translate === void 0) translate = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (translateBounds === void 0) translateBounds = true;
            const swiper = this;
            const {params, wrapperEl} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                if (speed === 0) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: -newTranslate,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            if (speed === 0) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionEnd");
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionStart");
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        if (runCallbacks) swiper.emit("transitionEnd");
                    };
                    swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        }
        var translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
        };
        function setTransition(duration, byController) {
            const swiper = this;
            if (!swiper.params.cssMode) swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
            swiper.emit("setTransition", duration, byController);
        }
        function transitionEmit(_ref) {
            let {swiper, runCallbacks, direction, step} = _ref;
            const {activeIndex, previousIndex} = swiper;
            let dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit(`transition${step}`);
            if (runCallbacks && activeIndex !== previousIndex) {
                if (dir === "reset") {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }
                swiper.emit(`slideChangeTransition${step}`);
                if (dir === "next") swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
            }
        }
        function transitionStart(runCallbacks, direction) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "Start"
            });
        }
        function transitionEnd(runCallbacks, direction) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "End"
            });
        }
        var transition = {
            setTransition,
            transitionStart,
            transitionEnd
        };
        function slideTo(index, speed, runCallbacks, internal, initial) {
            if (index === void 0) index = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (typeof index === "string") index = parseInt(index, 10);
            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            const translate = -snapGrid[snapIndex];
            if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(translate * 100);
                const normalizedGrid = Math.floor(slidesGrid[i] * 100);
                const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
                if (typeof slidesGrid[i + 1] !== "undefined") {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
            }
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) return false;
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
            }
            if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
            swiper.updateProgress(translate);
            let direction;
            if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
            if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                swiper.updateActiveIndex(slideIndex);
                if (params.autoHeight) swiper.updateAutoHeight();
                swiper.updateSlidesClasses();
                if (params.effect !== "slide") swiper.setTranslate(translate);
                if (direction !== "reset") {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                const t = rtl ? translate : -translate;
                if (speed === 0) {
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = "none";
                        swiper._immediateVirtual = true;
                    }
                    if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
                        swiper._cssModeVirtualInitialSet = true;
                        requestAnimationFrame((() => {
                            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                        }));
                    } else wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                    if (isVirtual) requestAnimationFrame((() => {
                        swiper.wrapperEl.style.scrollSnapType = "";
                        swiper._immediateVirtual = false;
                    }));
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: t,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: t,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (speed === 0) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
                swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
            }
            return true;
        }
        function slideToLoop(index, speed, runCallbacks, internal) {
            if (index === void 0) index = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (typeof index === "string") {
                const indexAsNumber = parseInt(index, 10);
                index = indexAsNumber;
            }
            const swiper = this;
            let newIndex = index;
            if (swiper.params.loop) if (swiper.virtual && swiper.params.virtual.enabled) newIndex += swiper.virtual.slidesBefore; else newIndex = swiper.getSlideIndexByData(newIndex);
            return swiper.slideTo(newIndex, speed, runCallbacks, internal);
        }
        function slideNext(speed, runCallbacks, internal) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {enabled, params, animating} = swiper;
            if (!enabled) return swiper;
            let perGroup = params.slidesPerGroup;
            if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "next"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
            }
            if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
        function slidePrev(speed, runCallbacks, internal) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params, snapGrid, slidesGrid, rtlTranslate, enabled, animating} = swiper;
            if (!enabled) return swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "prev"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
            }
            const translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }
            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if (typeof prevSnap === "undefined" && params.cssMode) {
                let prevSnapIndex;
                snapGrid.forEach(((snap, snapIndex) => {
                    if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                }));
                if (typeof prevSnapIndex !== "undefined") prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
            let prevIndex = 0;
            if (typeof prevSnap !== "undefined") {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }
            if (params.rewind && swiper.isBeginning) {
                const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
            }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
        function slideReset(speed, runCallbacks, internal) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
        function slideToClosest(speed, runCallbacks, internal, threshold) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (threshold === void 0) threshold = .5;
            const swiper = this;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
                const currentSnap = swiper.snapGrid[snapIndex];
                const nextSnap = swiper.snapGrid[snapIndex + 1];
                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
            } else {
                const prevSnap = swiper.snapGrid[snapIndex - 1];
                const currentSnap = swiper.snapGrid[snapIndex];
                if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }
        function slideToClickedSlide() {
            const swiper = this;
            const {params, slidesEl} = swiper;
            const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;
            const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
                if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex);
            } else swiper.slideTo(slideToIndex);
        }
        var slide = {
            slideTo,
            slideToLoop,
            slideNext,
            slidePrev,
            slideReset,
            slideToClosest,
            slideToClickedSlide
        };
        function loopCreate(slideRealIndex) {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            slides.forEach(((el, index) => {
                el.setAttribute("data-swiper-slide-index", index);
            }));
            swiper.loopFix({
                slideRealIndex,
                direction: params.centeredSlides ? void 0 : "next"
            });
        }
        function loopFix(_temp) {
            let {slideRealIndex, slideTo = true, direction, setTranslate, activeSlideIndex, byController, byMousewheel} = _temp === void 0 ? {} : _temp;
            const swiper = this;
            if (!swiper.params.loop) return;
            swiper.emit("beforeLoopFix");
            const {slides, allowSlidePrev, allowSlideNext, slidesEl, params} = swiper;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            if (swiper.virtual && params.virtual.enabled) {
                if (slideTo) if (!params.centeredSlides && swiper.snapIndex === 0) swiper.slideTo(swiper.virtual.slides.length, 0, false, true); else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true); else if (swiper.snapIndex === swiper.snapGrid.length - 1) swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
                swiper.allowSlidePrev = allowSlidePrev;
                swiper.allowSlideNext = allowSlideNext;
                swiper.emit("loopFix");
                return;
            }
            const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10));
            let loopedSlides = params.loopedSlides || slidesPerView;
            if (loopedSlides % params.slidesPerGroup !== 0) loopedSlides += params.slidesPerGroup - loopedSlides % params.slidesPerGroup;
            swiper.loopedSlides = loopedSlides;
            const prependSlidesIndexes = [];
            const appendSlidesIndexes = [];
            let activeIndex = swiper.activeIndex;
            if (typeof activeSlideIndex === "undefined") activeSlideIndex = swiper.getSlideIndex(swiper.slides.filter((el => el.classList.contains(params.slideActiveClass)))[0]); else activeIndex = activeSlideIndex;
            const isNext = direction === "next" || !direction;
            const isPrev = direction === "prev" || !direction;
            let slidesPrepended = 0;
            let slidesAppended = 0;
            if (activeSlideIndex < loopedSlides) {
                slidesPrepended = Math.max(loopedSlides - activeSlideIndex, params.slidesPerGroup);
                for (let i = 0; i < loopedSlides - activeSlideIndex; i += 1) {
                    const index = i - Math.floor(i / slides.length) * slides.length;
                    prependSlidesIndexes.push(slides.length - index - 1);
                }
            } else if (activeSlideIndex > swiper.slides.length - loopedSlides * 2) {
                slidesAppended = Math.max(activeSlideIndex - (swiper.slides.length - loopedSlides * 2), params.slidesPerGroup);
                for (let i = 0; i < slidesAppended; i += 1) {
                    const index = i - Math.floor(i / slides.length) * slides.length;
                    appendSlidesIndexes.push(index);
                }
            }
            if (isPrev) prependSlidesIndexes.forEach((index => {
                swiper.slides[index].swiperLoopMoveDOM = true;
                slidesEl.prepend(swiper.slides[index]);
                swiper.slides[index].swiperLoopMoveDOM = false;
            }));
            if (isNext) appendSlidesIndexes.forEach((index => {
                swiper.slides[index].swiperLoopMoveDOM = true;
                slidesEl.append(swiper.slides[index]);
                swiper.slides[index].swiperLoopMoveDOM = false;
            }));
            swiper.recalcSlides();
            if (params.slidesPerView === "auto") swiper.updateSlides();
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (slideTo) if (prependSlidesIndexes.length > 0 && isPrev) {
                if (typeof slideRealIndex === "undefined") {
                    const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                    const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
                    const diff = newSlideTranslate - currentSlideTranslate;
                    if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                        swiper.slideTo(activeIndex + slidesPrepended, 0, false, true);
                        if (setTranslate) {
                            swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
                            swiper.touchEventsData.currentTranslate = swiper.translate;
                        }
                    }
                } else if (setTranslate) {
                    swiper.slideToLoop(slideRealIndex, 0, false, true);
                    swiper.touchEventsData.currentTranslate = swiper.translate;
                }
            } else if (appendSlidesIndexes.length > 0 && isNext) if (typeof slideRealIndex === "undefined") {
                const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
                const diff = newSlideTranslate - currentSlideTranslate;
                if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                    swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
                    if (setTranslate) {
                        swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
                        swiper.touchEventsData.currentTranslate = swiper.translate;
                    }
                }
            } else swiper.slideToLoop(slideRealIndex, 0, false, true);
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.controller && swiper.controller.control && !byController) {
                const loopParams = {
                    slideRealIndex,
                    slideTo: false,
                    direction,
                    setTranslate,
                    activeSlideIndex,
                    byController: true
                };
                if (Array.isArray(swiper.controller.control)) swiper.controller.control.forEach((c => {
                    if (!c.destroyed && c.params.loop) c.loopFix(loopParams);
                })); else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) swiper.controller.control.loopFix(loopParams);
            }
            swiper.emit("loopFix");
        }
        function loopDestroy() {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            swiper.recalcSlides();
            const newSlidesOrder = [];
            swiper.slides.forEach((slideEl => {
                const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
                newSlidesOrder[index] = slideEl;
            }));
            swiper.slides.forEach((slideEl => {
                slideEl.removeAttribute("data-swiper-slide-index");
            }));
            newSlidesOrder.forEach((slideEl => {
                slidesEl.append(slideEl);
            }));
            swiper.recalcSlides();
            swiper.slideTo(swiper.realIndex, 0);
        }
        var loop = {
            loopCreate,
            loopFix,
            loopDestroy
        };
        function setGrabCursor(moving) {
            const swiper = this;
            if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            el.style.cursor = "move";
            el.style.cursor = moving ? "grabbing" : "grab";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        function unsetGrabCursor() {
            const swiper = this;
            if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        var grabCursor = {
            setGrabCursor,
            unsetGrabCursor
        };
        function closestElement(selector, base) {
            if (base === void 0) base = this;
            function __closestFrom(el) {
                if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                if (!found && !el.getRootNode) return null;
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        }
        function onTouchStart(event) {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const window = ssr_window_esm_getWindow();
            const data = swiper.touchEventsData;
            data.evCache.push(event);
            const {params, touches, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let targetEl = e.target;
            if (params.touchEventsTarget === "wrapper") if (!swiper.wrapperEl.contains(targetEl)) return;
            if ("which" in e && e.which === 3) return;
            if ("button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
            const eventPath = event.composedPath ? event.composedPath() : event.path;
            if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) targetEl = eventPath[0];
            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) if (!targetEl.closest(params.swipeHandler)) return;
            touches.currentX = e.pageX;
            touches.currentY = e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY;
            const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) if (edgeSwipeDetection === "prevent") event.preventDefault(); else return;
            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: void 0,
                startMoving: void 0
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = utils_now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = void 0;
            if (params.threshold > 0) data.allowThresholdMove = false;
            let preventDefault = true;
            if (targetEl.matches(data.focusableElements)) {
                preventDefault = false;
                if (targetEl.nodeName === "SELECT") data.isTouched = false;
            }
            if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) document.activeElement.blur();
            const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
            if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) e.preventDefault();
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
            swiper.emit("touchStart", e);
        }
        function onTouchMove(event) {
            const document = ssr_window_esm_getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                return;
            }
            const pointerIndex = data.evCache.findIndex((cachedEv => cachedEv.pointerId === e.pointerId));
            if (pointerIndex >= 0) data.evCache[pointerIndex] = e;
            const targetTouch = data.evCache.length > 1 ? data.evCache[0] : e;
            const pageX = targetTouch.pageX;
            const pageY = targetTouch.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                if (!e.target.matches(data.focusableElements)) swiper.allowClick = false;
                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        prevX: swiper.touches.currentX,
                        prevY: swiper.touches.currentY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = utils_now();
                }
                return;
            }
            if (params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
            if (document.activeElement) if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
            if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
            if (e.targetTouches && e.targetTouches.length > 1) return;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if (typeof data.isScrolling === "undefined") {
                let touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
            if (typeof data.startMoving === "undefined") if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            if (data.isScrolling || swiper.zoom && swiper.params.zoom && swiper.params.zoom.enabled && data.evCache.length > 1) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            let diff = swiper.isHorizontal() ? diffX : diffY;
            let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
            if (params.oneWayMovement) {
                diff = Math.abs(diff) * (rtl ? 1 : -1);
                touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
            }
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) {
                diff = -diff;
                touchesDiff = -touchesDiff;
            }
            const prevTouchesDirection = swiper.touchesDirection;
            swiper.swipeDirection = diff > 0 ? "prev" : "next";
            swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
            const isLoop = swiper.params.loop && !params.cssMode;
            if (!data.isMoved) {
                if (isLoop) swiper.loopFix({
                    direction: swiper.swipeDirection
                });
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) {
                    const evt = new window.CustomEvent("transitionend", {
                        bubbles: true,
                        cancelable: true
                    });
                    swiper.wrapperEl.dispatchEvent(evt);
                }
                data.allowMomentumBounce = false;
                if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
                swiper.emit("sliderFirstMove", e);
            }
            let loopFixed;
            if (data.isMoved && prevTouchesDirection !== swiper.touchesDirection && isLoop && Math.abs(diff) >= 1) {
                swiper.loopFix({
                    direction: swiper.swipeDirection,
                    setTranslate: true
                });
                loopFixed = true;
            }
            swiper.emit("sliderMove", e);
            data.isMoved = true;
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0) {
                if (isLoop && !loopFixed && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.size / 2 : swiper.minTranslate())) swiper.loopFix({
                    direction: "prev",
                    setTranslate: true,
                    activeSlideIndex: 0
                });
                if (data.currentTranslate > swiper.minTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
                }
            } else if (diff < 0) {
                if (isLoop && !loopFixed && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.size / 2 : swiper.maxTranslate())) swiper.loopFix({
                    direction: "next",
                    setTranslate: true,
                    activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
                });
                if (data.currentTranslate < swiper.maxTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
                }
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
            if (!params.followFinger || params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }
        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            const pointerIndex = data.evCache.findIndex((cachedEv => cachedEv.pointerId === event.pointerId));
            if (pointerIndex >= 0) data.evCache.splice(pointerIndex, 1);
            if ([ "pointercancel", "pointerout", "pointerleave" ].includes(event.type)) {
                const proceed = event.type === "pointercancel" && (swiper.browser.isSafari || swiper.browser.isWebView);
                if (!proceed) return;
            }
            const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
            const touchEndTime = utils_now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                const pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
                swiper.emit("tap click", e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
            }
            data.lastClickTime = utils_now();
            utils_nextTick((() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            }));
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return;
            }
            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if (typeof slidesGrid[i + increment] !== "undefined") {
                    if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            let rewindFirstIndex = null;
            let rewindLastIndex = null;
            if (params.rewind) if (swiper.isBeginning) rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if (swiper.swipeDirection === "next") if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                if (swiper.swipeDirection === "prev") if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if (swiper.swipeDirection === "next") swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
                    if (swiper.swipeDirection === "prev") swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        }
        function onResize() {
            const swiper = this;
            const {params, el} = swiper;
            if (el && el.offsetWidth === 0) return;
            if (params.breakpoints) swiper.setBreakpoint();
            const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            const isVirtualLoop = isVirtual && params.loop;
            if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else if (swiper.params.loop && !isVirtual) swiper.slideToLoop(swiper.realIndex, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
                clearTimeout(swiper.autoplay.resizeTimeout);
                swiper.autoplay.resizeTimeout = setTimeout((() => {
                    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.resume();
                }), 500);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        }
        function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        function onScroll() {
            const swiper = this;
            const {wrapperEl, rtlTranslate, enabled} = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
            if (swiper.translate === 0) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            swiper.emit("setTranslate", swiper.translate, false);
        }
        function onLoad(e) {
            const swiper = this;
            processLazyPreloader(swiper, e.target);
            if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) return;
            swiper.update();
        }
        let dummyEventAttached = false;
        function dummyEventListener() {}
        const events = (swiper, method) => {
            const document = ssr_window_esm_getDocument();
            const {params, el, wrapperEl, device} = swiper;
            const capture = !!params.nested;
            const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
            const swiperMethod = method;
            el[domMethod]("pointerdown", swiper.onTouchStart, {
                passive: false
            });
            document[domMethod]("pointermove", swiper.onTouchMove, {
                passive: false,
                capture
            });
            document[domMethod]("pointerup", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointercancel", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerout", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerleave", swiper.onTouchEnd, {
                passive: true
            });
            if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
            if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
            if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
            el[domMethod]("load", swiper.onLoad, {
                capture: true
            });
        };
        function attachEvents() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params} = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
            swiper.onClick = onClick.bind(swiper);
            swiper.onLoad = onLoad.bind(swiper);
            if (!dummyEventAttached) {
                document.addEventListener("touchstart", dummyEventListener);
                dummyEventAttached = true;
            }
            events(swiper, "on");
        }
        function detachEvents() {
            const swiper = this;
            events(swiper, "off");
        }
        var events$1 = {
            attachEvents,
            detachEvents
        };
        const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
        function setBreakpoint() {
            const swiper = this;
            const {realIndex, initialized, params, el} = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
            const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
                el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                el.classList.add(`${params.containerModifierClass}grid`);
                if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") el.classList.add(`${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            }
            [ "navigation", "pagination", "scrollbar" ].forEach((prop => {
                if (typeof breakpointParams[prop] === "undefined") return;
                const wasModuleEnabled = params[prop] && params[prop].enabled;
                const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
                if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
                if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
            }));
            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            if (directionChanged && initialized) swiper.changeDirection();
            utils_extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
            swiper.currentBreakpoint = breakpoint;
            swiper.emit("_beforeBreakpoint", breakpointParams);
            if (needsReLoop && initialized) {
                swiper.loopDestroy();
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            }
            swiper.emit("breakpoint", breakpointParams);
        }
        function getBreakpoint(breakpoints, base, containerEl) {
            if (base === void 0) base = "window";
            if (!breakpoints || base === "container" && !containerEl) return;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = base === "window" ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map((point => {
                if (typeof point === "string" && point.indexOf("@") === 0) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }
                return {
                    value: point,
                    point
                };
            }));
            points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
            for (let i = 0; i < points.length; i += 1) {
                const {point, value} = points[i];
                if (base === "window") {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                } else if (value <= containerEl.clientWidth) breakpoint = point;
            }
            return breakpoint || "max";
        }
        var breakpoints = {
            setBreakpoint,
            getBreakpoint
        };
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach((item => {
                if (typeof item === "object") Object.keys(item).forEach((classNames => {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                })); else if (typeof item === "string") resultClasses.push(prefix + item);
            }));
            return resultClasses;
        }
        function addClasses() {
            const swiper = this;
            const {classNames, params, rtl, el, device} = swiper;
            const suffixes = prepareClasses([ "initialized", params.direction, {
                "free-mode": swiper.params.freeMode && params.freeMode.enabled
            }, {
                autoheight: params.autoHeight
            }, {
                rtl
            }, {
                grid: params.grid && params.grid.rows > 1
            }, {
                "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
            }, {
                android: device.android
            }, {
                ios: device.ios
            }, {
                "css-mode": params.cssMode
            }, {
                centered: params.cssMode && params.centeredSlides
            }, {
                "watch-progress": params.watchSlidesProgress
            } ], params.containerModifierClass);
            classNames.push(...suffixes);
            el.classList.add(...classNames);
            swiper.emitContainerClasses();
        }
        function swiper_core_removeClasses() {
            const swiper = this;
            const {el, classNames} = swiper;
            el.classList.remove(...classNames);
            swiper.emitContainerClasses();
        }
        var classes = {
            addClasses,
            removeClasses: swiper_core_removeClasses
        };
        function checkOverflow() {
            const swiper = this;
            const {isLocked: wasLocked, params} = swiper;
            const {slidesOffsetBefore} = params;
            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else swiper.isLocked = swiper.snapGrid.length === 1;
            if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
            if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
        }
        var checkOverflow$1 = {
            checkOverflow
        };
        var defaults = {
            init: true,
            direction: "horizontal",
            oneWayMovement: false,
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            enabled: true,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: false,
            userAgent: null,
            url: null,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: true,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 5,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            loop: false,
            loopedSlides: null,
            loopPreventsSliding: true,
            rewind: false,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            lazyPreloaderClass: "swiper-lazy-preloader",
            lazyPreloadPrevNext: 0,
            runCallbacksOnInit: true,
            _emitClasses: false
        };
        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj) {
                if (obj === void 0) obj = {};
                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];
                if (typeof moduleParams !== "object" || moduleParams === null) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if ([ "navigation", "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) params[moduleParamName] = {
                    auto: true
                };
                if (!(moduleParamName in params && "enabled" in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (params[moduleParamName] === true) params[moduleParamName] = {
                    enabled: true
                };
                if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                utils_extend(allModulesParams, obj);
            };
        }
        const prototypes = {
            eventsEmitter,
            update,
            translate,
            transition,
            slide,
            loop,
            grabCursor,
            events: events$1,
            breakpoints,
            checkOverflow: checkOverflow$1,
            classes
        };
        const extendedDefaults = {};
        class swiper_core_Swiper {
            constructor() {
                let el;
                let params;
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") params = args[0]; else [el, params] = args;
                if (!params) params = {};
                params = utils_extend({}, params);
                if (el && !params.el) params.el = el;
                const document = ssr_window_esm_getDocument();
                if (params.el && typeof params.el === "string" && document.querySelectorAll(params.el).length > 1) {
                    const swipers = [];
                    document.querySelectorAll(params.el).forEach((containerEl => {
                        const newParams = utils_extend({}, params, {
                            el: containerEl
                        });
                        swipers.push(new swiper_core_Swiper(newParams));
                    }));
                    return swipers;
                }
                const swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                swiper.modules = [ ...swiper.__modules__ ];
                if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                const allModulesParams = {};
                swiper.modules.forEach((mod => {
                    mod({
                        params,
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    });
                }));
                const swiperParams = utils_extend({}, defaults, allModulesParams);
                swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = utils_extend({}, swiper.params);
                swiper.passedParams = utils_extend({}, params);
                if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                }));
                if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    classNames: [],
                    slides: [],
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return swiper.params.direction === "horizontal";
                    },
                    isVertical() {
                        return swiper.params.direction === "vertical";
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    cssOverflowAdjustment() {
                        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
                    },
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: swiper.params.focusableElements,
                        lastClickTime: 0,
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        startMoving: void 0,
                        evCache: []
                    },
                    allowClick: true,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.emit("_swiper");
                if (swiper.params.init) swiper.init();
                return swiper;
            }
            getSlideIndex(slideEl) {
                const {slidesEl, params} = this;
                const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
                const firstSlideIndex = utils_elementIndex(slides[0]);
                return utils_elementIndex(slideEl) - firstSlideIndex;
            }
            getSlideIndexByData(index) {
                return this.getSlideIndex(this.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === index))[0]);
            }
            recalcSlides() {
                const swiper = this;
                const {slidesEl, params} = swiper;
                swiper.slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            }
            enable() {
                const swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;
                if (swiper.params.grabCursor) swiper.setGrabCursor();
                swiper.emit("enable");
            }
            disable() {
                const swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;
                if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                swiper.emit("disable");
            }
            setProgress(progress, speed) {
                const swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                const min = swiper.minTranslate();
                const max = swiper.maxTranslate();
                const current = (max - min) * progress + min;
                swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            emitContainerClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const cls = swiper.el.className.split(" ").filter((className => className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0));
                swiper.emit("_containerClasses", cls.join(" "));
            }
            getSlideClasses(slideEl) {
                const swiper = this;
                if (swiper.destroyed) return "";
                return slideEl.className.split(" ").filter((className => className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0)).join(" ");
            }
            emitSlidesClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const updates = [];
                swiper.slides.forEach((slideEl => {
                    const classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    });
                    swiper.emit("_slideClass", slideEl, classNames);
                }));
                swiper.emit("_slideClasses", updates);
            }
            slidesPerViewDynamic(view, exact) {
                if (view === void 0) view = "current";
                if (exact === void 0) exact = false;
                const swiper = this;
                const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
                let spv = 1;
                if (params.centeredSlides) {
                    let slideSize = slides[activeIndex] ? slides[activeIndex].swiperSlideSize : 0;
                    let breakLoop;
                    for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                    for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                } else if (view === "current") for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) spv += 1;
                } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) spv += 1;
                }
                return spv;
            }
            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const {snapGrid, params} = swiper;
                if (params.breakpoints) swiper.setBreakpoint();
                [ ...swiper.el.querySelectorAll('[loading="lazy"]') ].forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl);
                }));
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                let translated;
                if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
                    setTranslate();
                    if (params.autoHeight) swiper.updateAutoHeight();
                } else {
                    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
                        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
                        translated = swiper.slideTo(slides.length - 1, 0, false, true);
                    } else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    if (!translated) setTranslate();
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                swiper.emit("update");
            }
            changeDirection(newDirection, needUpdate) {
                if (needUpdate === void 0) needUpdate = true;
                const swiper = this;
                const currentDirection = swiper.params.direction;
                if (!newDirection) newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
                if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") return swiper;
                swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
                swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.forEach((slideEl => {
                    if (newDirection === "vertical") slideEl.style.width = ""; else slideEl.style.height = "";
                }));
                swiper.emit("changeDirection");
                if (needUpdate) swiper.update();
                return swiper;
            }
            changeLanguageDirection(direction) {
                const swiper = this;
                if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
                swiper.rtl = direction === "rtl";
                swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
                if (swiper.rtl) {
                    swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "rtl";
                } else {
                    swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "ltr";
                }
                swiper.update();
            }
            mount(element) {
                const swiper = this;
                if (swiper.mounted) return true;
                let el = element || swiper.params.el;
                if (typeof el === "string") el = document.querySelector(el);
                if (!el) return false;
                el.swiper = swiper;
                if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === "SWIPER-CONTAINER") swiper.isElement = true;
                const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = el.shadowRoot.querySelector(getWrapperSelector());
                        return res;
                    }
                    return utils_elementChildren(el, getWrapperSelector())[0];
                };
                let wrapperEl = getWrapper();
                if (!wrapperEl && swiper.params.createElements) {
                    wrapperEl = utils_createElement("div", swiper.params.wrapperClass);
                    el.append(wrapperEl);
                    utils_elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl => {
                        wrapperEl.append(slideEl);
                    }));
                }
                Object.assign(swiper, {
                    el,
                    wrapperEl,
                    slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
                    hostEl: swiper.isElement ? el.parentNode.host : el,
                    mounted: true,
                    rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
                    rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
                    wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
                });
                return true;
            }
            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (mounted === false) return swiper;
                swiper.emit("beforeInit");
                if (swiper.params.breakpoints) swiper.setBreakpoint();
                swiper.addClasses();
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                if (swiper.params.loop) swiper.loopCreate();
                swiper.attachEvents();
                [ ...swiper.el.querySelectorAll('[loading="lazy"]') ].forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl); else imageEl.addEventListener("load", (e => {
                        processLazyPreloader(swiper, e.target);
                    }));
                }));
                preload(swiper);
                swiper.initialized = true;
                preload(swiper);
                swiper.emit("init");
                swiper.emit("afterInit");
                return swiper;
            }
            destroy(deleteInstance, cleanStyles) {
                if (deleteInstance === void 0) deleteInstance = true;
                if (cleanStyles === void 0) cleanStyles = true;
                const swiper = this;
                const {params, el, wrapperEl, slides} = swiper;
                if (typeof swiper.params === "undefined" || swiper.destroyed) return null;
                swiper.emit("beforeDestroy");
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) swiper.loopDestroy();
                if (cleanStyles) {
                    swiper.removeClasses();
                    el.removeAttribute("style");
                    wrapperEl.removeAttribute("style");
                    if (slides && slides.length) slides.forEach((slideEl => {
                        slideEl.classList.remove(params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                        slideEl.removeAttribute("style");
                        slideEl.removeAttribute("data-swiper-slide-index");
                    }));
                }
                swiper.emit("destroy");
                Object.keys(swiper.eventsListeners).forEach((eventName => {
                    swiper.off(eventName);
                }));
                if (deleteInstance !== false) {
                    swiper.el.swiper = null;
                    deleteProps(swiper);
                }
                swiper.destroyed = true;
                return null;
            }
            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
                return extendedDefaults;
            }
            static get defaults() {
                return defaults;
            }
            static installModule(mod) {
                if (!swiper_core_Swiper.prototype.__modules__) swiper_core_Swiper.prototype.__modules__ = [];
                const modules = swiper_core_Swiper.prototype.__modules__;
                if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
            }
            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m => swiper_core_Swiper.installModule(m)));
                    return swiper_core_Swiper;
                }
                swiper_core_Swiper.installModule(module);
                return swiper_core_Swiper;
            }
        }
        Object.keys(prototypes).forEach((prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                swiper_core_Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        swiper_core_Swiper.use([ Resize, Observer ]);
        function Mousewheel(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const window = ssr_window_esm_getWindow();
            extendParams({
                mousewheel: {
                    enabled: false,
                    releaseOnEdges: false,
                    invert: false,
                    forceToAxis: false,
                    sensitivity: 1,
                    eventsTarget: "container",
                    thresholdDelta: null,
                    thresholdTime: null,
                    noMousewheelClass: "swiper-no-mousewheel"
                }
            });
            swiper.mousewheel = {
                enabled: false
            };
            let timeout;
            let lastScrollTime = utils_now();
            let lastEventBeforeSnap;
            const recentWheelEvents = [];
            function normalize(e) {
                const PIXEL_STEP = 10;
                const LINE_HEIGHT = 40;
                const PAGE_HEIGHT = 800;
                let sX = 0;
                let sY = 0;
                let pX = 0;
                let pY = 0;
                if ("detail" in e) sY = e.detail;
                if ("wheelDelta" in e) sY = -e.wheelDelta / 120;
                if ("wheelDeltaY" in e) sY = -e.wheelDeltaY / 120;
                if ("wheelDeltaX" in e) sX = -e.wheelDeltaX / 120;
                if ("axis" in e && e.axis === e.HORIZONTAL_AXIS) {
                    sX = sY;
                    sY = 0;
                }
                pX = sX * PIXEL_STEP;
                pY = sY * PIXEL_STEP;
                if ("deltaY" in e) pY = e.deltaY;
                if ("deltaX" in e) pX = e.deltaX;
                if (e.shiftKey && !pX) {
                    pX = pY;
                    pY = 0;
                }
                if ((pX || pY) && e.deltaMode) if (e.deltaMode === 1) {
                    pX *= LINE_HEIGHT;
                    pY *= LINE_HEIGHT;
                } else {
                    pX *= PAGE_HEIGHT;
                    pY *= PAGE_HEIGHT;
                }
                if (pX && !sX) sX = pX < 1 ? -1 : 1;
                if (pY && !sY) sY = pY < 1 ? -1 : 1;
                return {
                    spinX: sX,
                    spinY: sY,
                    pixelX: pX,
                    pixelY: pY
                };
            }
            function handleMouseEnter() {
                if (!swiper.enabled) return;
                swiper.mouseEntered = true;
            }
            function handleMouseLeave() {
                if (!swiper.enabled) return;
                swiper.mouseEntered = false;
            }
            function animateSlider(newEvent) {
                if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) return false;
                if (swiper.params.mousewheel.thresholdTime && utils_now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) return false;
                if (newEvent.delta >= 6 && utils_now() - lastScrollTime < 60) return true;
                if (newEvent.direction < 0) {
                    if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
                        swiper.slideNext();
                        emit("scroll", newEvent.raw);
                    }
                } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
                    swiper.slidePrev();
                    emit("scroll", newEvent.raw);
                }
                lastScrollTime = (new window.Date).getTime();
                return false;
            }
            function releaseScroll(newEvent) {
                const params = swiper.params.mousewheel;
                if (newEvent.direction < 0) {
                    if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) return true;
                } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) return true;
                return false;
            }
            function handle(event) {
                let e = event;
                let disableParentSwiper = true;
                if (!swiper.enabled) return;
                if (event.target.closest(`.${swiper.params.mousewheel.noMousewheelClass}`)) return;
                const params = swiper.params.mousewheel;
                if (swiper.params.cssMode) e.preventDefault();
                let targetEl = swiper.el;
                if (swiper.params.mousewheel.eventsTarget !== "container") targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
                const targetElContainsTarget = targetEl && targetEl.contains(e.target);
                if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;
                if (e.originalEvent) e = e.originalEvent;
                let delta = 0;
                const rtlFactor = swiper.rtlTranslate ? -1 : 1;
                const data = normalize(e);
                if (params.forceToAxis) if (swiper.isHorizontal()) if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor; else return true; else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY; else return true; else delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
                if (delta === 0) return true;
                if (params.invert) delta = -delta;
                let positions = swiper.getTranslate() + delta * params.sensitivity;
                if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
                if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();
                disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
                if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
                if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
                    const newEvent = {
                        time: utils_now(),
                        delta: Math.abs(delta),
                        direction: Math.sign(delta),
                        raw: event
                    };
                    if (recentWheelEvents.length >= 2) recentWheelEvents.shift();
                    const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
                    recentWheelEvents.push(newEvent);
                    if (prevEvent) {
                        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) animateSlider(newEvent);
                    } else animateSlider(newEvent);
                    if (releaseScroll(newEvent)) return true;
                } else {
                    const newEvent = {
                        time: utils_now(),
                        delta: Math.abs(delta),
                        direction: Math.sign(delta)
                    };
                    const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
                    if (!ignoreWheelEvents) {
                        lastEventBeforeSnap = void 0;
                        let position = swiper.getTranslate() + delta * params.sensitivity;
                        const wasBeginning = swiper.isBeginning;
                        const wasEnd = swiper.isEnd;
                        if (position >= swiper.minTranslate()) position = swiper.minTranslate();
                        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
                        swiper.setTransition(0);
                        swiper.setTranslate(position);
                        swiper.updateProgress();
                        swiper.updateActiveIndex();
                        swiper.updateSlidesClasses();
                        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) swiper.updateSlidesClasses();
                        if (swiper.params.loop) swiper.loopFix({
                            direction: newEvent.direction < 0 ? "next" : "prev",
                            byMousewheel: true
                        });
                        if (swiper.params.freeMode.sticky) {
                            clearTimeout(timeout);
                            timeout = void 0;
                            if (recentWheelEvents.length >= 15) recentWheelEvents.shift();
                            const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
                            const firstEvent = recentWheelEvents[0];
                            recentWheelEvents.push(newEvent);
                            if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) recentWheelEvents.splice(0); else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
                                const snapToThreshold = delta > 0 ? .8 : .2;
                                lastEventBeforeSnap = newEvent;
                                recentWheelEvents.splice(0);
                                timeout = utils_nextTick((() => {
                                    swiper.slideToClosest(swiper.params.speed, true, void 0, snapToThreshold);
                                }), 0);
                            }
                            if (!timeout) timeout = utils_nextTick((() => {
                                const snapToThreshold = .5;
                                lastEventBeforeSnap = newEvent;
                                recentWheelEvents.splice(0);
                                swiper.slideToClosest(swiper.params.speed, true, void 0, snapToThreshold);
                            }), 500);
                        }
                        if (!ignoreWheelEvents) emit("scroll", e);
                        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop();
                        if (params.releaseOnEdges && (position === swiper.minTranslate() || position === swiper.maxTranslate())) return true;
                    }
                }
                if (e.preventDefault) e.preventDefault(); else e.returnValue = false;
                return false;
            }
            function events(method) {
                let targetEl = swiper.el;
                if (swiper.params.mousewheel.eventsTarget !== "container") targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
                targetEl[method]("mouseenter", handleMouseEnter);
                targetEl[method]("mouseleave", handleMouseLeave);
                targetEl[method]("wheel", handle);
            }
            function enable() {
                if (swiper.params.cssMode) {
                    swiper.wrapperEl.removeEventListener("wheel", handle);
                    return true;
                }
                if (swiper.mousewheel.enabled) return false;
                events("addEventListener");
                swiper.mousewheel.enabled = true;
                return true;
            }
            function disable() {
                if (swiper.params.cssMode) {
                    swiper.wrapperEl.addEventListener(event, handle);
                    return true;
                }
                if (!swiper.mousewheel.enabled) return false;
                events("removeEventListener");
                swiper.mousewheel.enabled = false;
                return true;
            }
            on("init", (() => {
                if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) disable();
                if (swiper.params.mousewheel.enabled) enable();
            }));
            on("destroy", (() => {
                if (swiper.params.cssMode) enable();
                if (swiper.mousewheel.enabled) disable();
            }));
            Object.assign(swiper.mousewheel, {
                enable,
                disable
            });
        }
        function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
            if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
                if (!params[key] && params.auto === true) {
                    let element = utils_elementChildren(swiper.el, `.${checkProps[key]}`)[0];
                    if (!element) {
                        element = utils_createElement("div", checkProps[key]);
                        element.className = checkProps[key];
                        swiper.el.append(element);
                    }
                    params[key] = element;
                    originalParams[key] = element;
                }
            }));
            return params;
        }
        function Navigation(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            extendParams({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: false,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            });
            swiper.navigation = {
                nextEl: null,
                prevEl: null
            };
            const makeElementsArray = el => (Array.isArray(el) ? el : [ el ]).filter((e => !!e));
            function getEl(el) {
                let res;
                if (el && typeof el === "string" && swiper.isElement) {
                    res = swiper.el.querySelector(el);
                    if (res) return res;
                }
                if (el) {
                    if (typeof el === "string") res = [ ...document.querySelectorAll(el) ];
                    if (swiper.params.uniqueNavElements && typeof el === "string" && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) res = swiper.el.querySelector(el);
                }
                if (el && !res) return el;
                return res;
            }
            function toggleEl(el, disabled) {
                const params = swiper.params.navigation;
                el = makeElementsArray(el);
                el.forEach((subEl => {
                    if (subEl) {
                        subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
                        if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
                        if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                    }
                }));
            }
            function update() {
                const {nextEl, prevEl} = swiper.navigation;
                if (swiper.params.loop) {
                    toggleEl(prevEl, false);
                    toggleEl(nextEl, false);
                    return;
                }
                toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
                toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
            }
            function onPrevClick(e) {
                e.preventDefault();
                if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slidePrev();
                emit("navigationPrev");
            }
            function onNextClick(e) {
                e.preventDefault();
                if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slideNext();
                emit("navigationNext");
            }
            function init() {
                const params = swiper.params.navigation;
                swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                });
                if (!(params.nextEl || params.prevEl)) return;
                let nextEl = getEl(params.nextEl);
                let prevEl = getEl(params.prevEl);
                Object.assign(swiper.navigation, {
                    nextEl,
                    prevEl
                });
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                const initButton = (el, dir) => {
                    if (el) el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                    if (!swiper.enabled && el) el.classList.add(...params.lockClass.split(" "));
                };
                nextEl.forEach((el => initButton(el, "next")));
                prevEl.forEach((el => initButton(el, "prev")));
            }
            function destroy() {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                const destroyButton = (el, dir) => {
                    el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                    el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
                };
                nextEl.forEach((el => destroyButton(el, "next")));
                prevEl.forEach((el => destroyButton(el, "prev")));
            }
            on("init", (() => {
                if (swiper.params.navigation.enabled === false) disable(); else {
                    init();
                    update();
                }
            }));
            on("toEdge fromEdge lock unlock", (() => {
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList[swiper.enabled ? "remove" : "add"](swiper.params.navigation.lockClass)));
            }));
            on("click", ((_s, e) => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                const targetEl = e.target;
                if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
                    if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                    let isHidden;
                    if (nextEl.length) isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass); else if (prevEl.length) isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
                    if (isHidden === true) emit("navigationShow"); else emit("navigationHide");
                    [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList.toggle(swiper.params.navigation.hiddenClass)));
                }
            }));
            const enable = () => {
                swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
                init();
                update();
            };
            const disable = () => {
                swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
                destroy();
            };
            Object.assign(swiper.navigation, {
                enable,
                disable,
                update,
                init,
                destroy
            });
        }
        function Autoplay(_ref) {
            let {swiper, extendParams, on, emit, params} = _ref;
            swiper.autoplay = {
                running: false,
                paused: false,
                timeLeft: 0
            };
            extendParams({
                autoplay: {
                    enabled: false,
                    delay: 3e3,
                    waitForTransition: true,
                    disableOnInteraction: true,
                    stopOnLastSlide: false,
                    reverseDirection: false,
                    pauseOnMouseEnter: false
                }
            });
            let timeout;
            let raf;
            let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3e3;
            let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3e3;
            let autoplayTimeLeft;
            let autoplayStartTime = (new Date).getTime;
            let wasPaused;
            let isTouched;
            let pausedByTouch;
            let touchStartTimeout;
            let slideChanged;
            let pausedByInteraction;
            function onTransitionEnd(e) {
                if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
                if (e.target !== swiper.wrapperEl) return;
                swiper.wrapperEl.removeEventListener("transitionend", onTransitionEnd);
                resume();
            }
            const calcTimeLeft = () => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                if (swiper.autoplay.paused) wasPaused = true; else if (wasPaused) {
                    autoplayDelayCurrent = autoplayTimeLeft;
                    wasPaused = false;
                }
                const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - (new Date).getTime();
                swiper.autoplay.timeLeft = timeLeft;
                emit("autoplayTimeLeft", timeLeft, timeLeft / autoplayDelayTotal);
                raf = requestAnimationFrame((() => {
                    calcTimeLeft();
                }));
            };
            const getSlideDelay = () => {
                let activeSlideEl;
                if (swiper.virtual && swiper.params.virtual.enabled) activeSlideEl = swiper.slides.filter((slideEl => slideEl.classList.contains("swiper-slide-active")))[0]; else activeSlideEl = swiper.slides[swiper.activeIndex];
                if (!activeSlideEl) return;
                const currentSlideDelay = parseInt(activeSlideEl.getAttribute("data-swiper-autoplay"), 10);
                return currentSlideDelay;
            };
            const run = delayForce => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                cancelAnimationFrame(raf);
                calcTimeLeft();
                let delay = typeof delayForce === "undefined" ? swiper.params.autoplay.delay : delayForce;
                autoplayDelayTotal = swiper.params.autoplay.delay;
                autoplayDelayCurrent = swiper.params.autoplay.delay;
                const currentSlideDelay = getSlideDelay();
                if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === "undefined") {
                    delay = currentSlideDelay;
                    autoplayDelayTotal = currentSlideDelay;
                    autoplayDelayCurrent = currentSlideDelay;
                }
                autoplayTimeLeft = delay;
                const speed = swiper.params.speed;
                const proceed = () => {
                    if (!swiper || swiper.destroyed) return;
                    if (swiper.params.autoplay.reverseDirection) {
                        if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
                            swiper.slidePrev(speed, true, true);
                            emit("autoplay");
                        } else if (!swiper.params.autoplay.stopOnLastSlide) {
                            swiper.slideTo(swiper.slides.length - 1, speed, true, true);
                            emit("autoplay");
                        }
                    } else if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
                        swiper.slideNext(speed, true, true);
                        emit("autoplay");
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        swiper.slideTo(0, speed, true, true);
                        emit("autoplay");
                    }
                    if (swiper.params.cssMode) {
                        autoplayStartTime = (new Date).getTime();
                        requestAnimationFrame((() => {
                            run();
                        }));
                    }
                };
                if (delay > 0) {
                    clearTimeout(timeout);
                    timeout = setTimeout((() => {
                        proceed();
                    }), delay);
                } else requestAnimationFrame((() => {
                    proceed();
                }));
                return delay;
            };
            const start = () => {
                swiper.autoplay.running = true;
                run();
                emit("autoplayStart");
            };
            const stop = () => {
                swiper.autoplay.running = false;
                clearTimeout(timeout);
                cancelAnimationFrame(raf);
                emit("autoplayStop");
            };
            const pause = (internal, reset) => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                clearTimeout(timeout);
                if (!internal) pausedByInteraction = true;
                const proceed = () => {
                    emit("autoplayPause");
                    if (swiper.params.autoplay.waitForTransition) swiper.wrapperEl.addEventListener("transitionend", onTransitionEnd); else resume();
                };
                swiper.autoplay.paused = true;
                if (reset) {
                    if (slideChanged) autoplayTimeLeft = swiper.params.autoplay.delay;
                    slideChanged = false;
                    proceed();
                    return;
                }
                const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
                autoplayTimeLeft = delay - ((new Date).getTime() - autoplayStartTime);
                if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
                if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
                proceed();
            };
            const resume = () => {
                if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
                autoplayStartTime = (new Date).getTime();
                if (pausedByInteraction) {
                    pausedByInteraction = false;
                    run(autoplayTimeLeft);
                } else run();
                swiper.autoplay.paused = false;
                emit("autoplayResume");
            };
            const onVisibilityChange = () => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                const document = ssr_window_esm_getDocument();
                if (document.visibilityState === "hidden") {
                    pausedByInteraction = true;
                    pause(true);
                }
                if (document.visibilityState === "visible") resume();
            };
            const onPointerEnter = e => {
                if (e.pointerType !== "mouse") return;
                pausedByInteraction = true;
                pause(true);
            };
            const onPointerLeave = e => {
                if (e.pointerType !== "mouse") return;
                if (swiper.autoplay.paused) resume();
            };
            const attachMouseEvents = () => {
                if (swiper.params.autoplay.pauseOnMouseEnter) {
                    swiper.el.addEventListener("pointerenter", onPointerEnter);
                    swiper.el.addEventListener("pointerleave", onPointerLeave);
                }
            };
            const detachMouseEvents = () => {
                swiper.el.removeEventListener("pointerenter", onPointerEnter);
                swiper.el.removeEventListener("pointerleave", onPointerLeave);
            };
            const attachDocumentEvents = () => {
                const document = ssr_window_esm_getDocument();
                document.addEventListener("visibilitychange", onVisibilityChange);
            };
            const detachDocumentEvents = () => {
                const document = ssr_window_esm_getDocument();
                document.removeEventListener("visibilitychange", onVisibilityChange);
            };
            on("init", (() => {
                if (swiper.params.autoplay.enabled) {
                    attachMouseEvents();
                    attachDocumentEvents();
                    autoplayStartTime = (new Date).getTime();
                    start();
                }
            }));
            on("destroy", (() => {
                detachMouseEvents();
                detachDocumentEvents();
                if (swiper.autoplay.running) stop();
            }));
            on("beforeTransitionStart", ((_s, speed, internal) => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                if (internal || !swiper.params.autoplay.disableOnInteraction) pause(true, true); else stop();
            }));
            on("sliderFirstMove", (() => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                if (swiper.params.autoplay.disableOnInteraction) {
                    stop();
                    return;
                }
                isTouched = true;
                pausedByTouch = false;
                pausedByInteraction = false;
                touchStartTimeout = setTimeout((() => {
                    pausedByInteraction = true;
                    pausedByTouch = true;
                    pause(true);
                }), 200);
            }));
            on("touchEnd", (() => {
                if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
                clearTimeout(touchStartTimeout);
                clearTimeout(timeout);
                if (swiper.params.autoplay.disableOnInteraction) {
                    pausedByTouch = false;
                    isTouched = false;
                    return;
                }
                if (pausedByTouch && swiper.params.cssMode) resume();
                pausedByTouch = false;
                isTouched = false;
            }));
            on("slideChange", (() => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                slideChanged = true;
            }));
            Object.assign(swiper.autoplay, {
                start,
                stop,
                pause,
                resume
            });
        }
        function effect_init_effectInit(params) {
            const {effect, swiper, on, setTranslate, setTransition, overwriteParams, perspective, recreateShadows, getEffectParams} = params;
            on("beforeInit", (() => {
                if (swiper.params.effect !== effect) return;
                swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
                if (perspective && perspective()) swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
                const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
                Object.assign(swiper.params, overwriteParamsResult);
                Object.assign(swiper.originalParams, overwriteParamsResult);
            }));
            on("setTranslate", (() => {
                if (swiper.params.effect !== effect) return;
                setTranslate();
            }));
            on("setTransition", ((_s, duration) => {
                if (swiper.params.effect !== effect) return;
                setTransition(duration);
            }));
            on("transitionEnd", (() => {
                if (swiper.params.effect !== effect) return;
                if (recreateShadows) {
                    if (!getEffectParams || !getEffectParams().slideShadows) return;
                    swiper.slides.forEach((slideEl => {
                        slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl => shadowEl.remove()));
                    }));
                    recreateShadows();
                }
            }));
            let requireUpdateOnVirtual;
            on("virtualUpdate", (() => {
                if (swiper.params.effect !== effect) return;
                if (!swiper.slides.length) requireUpdateOnVirtual = true;
                requestAnimationFrame((() => {
                    if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
                        setTranslate();
                        requireUpdateOnVirtual = false;
                    }
                }));
            }));
        }
        function effect_target_effectTarget(effectParams, slideEl) {
            const transformEl = utils_getSlideTransformEl(slideEl);
            if (transformEl !== slideEl) {
                transformEl.style.backfaceVisibility = "hidden";
                transformEl.style["-webkit-backface-visibility"] = "hidden";
            }
            return transformEl;
        }
        function effect_virtual_transition_end_effectVirtualTransitionEnd(_ref) {
            let {swiper, duration, transformElements, allSlides} = _ref;
            const {activeIndex} = swiper;
            const getSlide = el => {
                if (!el.parentElement) {
                    const slide = swiper.slides.filter((slideEl => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode))[0];
                    return slide;
                }
                return el.parentElement;
            };
            if (swiper.params.virtualTranslate && duration !== 0) {
                let eventTriggered = false;
                let transitionEndTarget;
                if (allSlides) transitionEndTarget = transformElements; else transitionEndTarget = transformElements.filter((transformEl => {
                    const el = transformEl.classList.contains("swiper-slide-transform") ? getSlide(transformEl) : transformEl;
                    return swiper.getSlideIndex(el) === activeIndex;
                }));
                transitionEndTarget.forEach((el => {
                    utils_elementTransitionEnd(el, (() => {
                        if (eventTriggered) return;
                        if (!swiper || swiper.destroyed) return;
                        eventTriggered = true;
                        swiper.animating = false;
                        const evt = new window.CustomEvent("transitionend", {
                            bubbles: true,
                            cancelable: true
                        });
                        swiper.wrapperEl.dispatchEvent(evt);
                    }));
                }));
            }
        }
        function EffectFade(_ref) {
            let {swiper, extendParams, on} = _ref;
            extendParams({
                fadeEffect: {
                    crossFade: false
                }
            });
            const setTranslate = () => {
                const {slides} = swiper;
                const params = swiper.params.fadeEffect;
                for (let i = 0; i < slides.length; i += 1) {
                    const slideEl = swiper.slides[i];
                    const offset = slideEl.swiperSlideOffset;
                    let tx = -offset;
                    if (!swiper.params.virtualTranslate) tx -= swiper.translate;
                    let ty = 0;
                    if (!swiper.isHorizontal()) {
                        ty = tx;
                        tx = 0;
                    }
                    const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
                    const targetEl = effect_target_effectTarget(params, slideEl);
                    targetEl.style.opacity = slideOpacity;
                    targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
                }
            };
            const setTransition = duration => {
                const transformElements = swiper.slides.map((slideEl => utils_getSlideTransformEl(slideEl)));
                transformElements.forEach((el => {
                    el.style.transitionDuration = `${duration}ms`;
                }));
                effect_virtual_transition_end_effectVirtualTransitionEnd({
                    swiper,
                    duration,
                    transformElements,
                    allSlides: true
                });
            };
            effect_init_effectInit({
                effect: "fade",
                swiper,
                on,
                setTranslate,
                setTransition,
                overwriteParams: () => ({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: true,
                    spaceBetween: 0,
                    virtualTranslate: !swiper.params.cssMode
                })
            });
        }
        function initSliders() {
            if (document.querySelector(".home-hero__slider")) {
                const slidePlays = document.querySelectorAll(".home-hero__slide-play");
                let hoverTimeout;
                slidePlays.forEach((slidePlay => {
                    slidePlay.addEventListener("mouseenter", (() => {
                        clearTimeout(hoverTimeout);
                        slidePlay.classList.add("hovered");
                    }));
                    slidePlay.addEventListener("mouseleave", (() => {
                        hoverTimeout = setTimeout((() => {
                            slidePlay.classList.remove("hovered");
                        }), 2e3);
                    }));
                }));
                const progressCircles = document.querySelectorAll(".test-svg");
                function updateProgressCircles(s, time, progress) {
                    progressCircles.forEach((circle => {
                        circle.style.setProperty("--progress", 1 - progress);
                    }));
                }
                new swiper_core_Swiper(".home-hero__slider", {
                    modules: [ Autoplay, Navigation ],
                    slidesPerView: "auto",
                    spaceBetween: 300,
                    autoHeight: false,
                    speed: 800,
                    loop: true,
                    autoplay: {
                        delay: 6e3,
                        disableOnInteraction: false
                    },
                    navigation: {
                        prevEl: ".energiekennis-slider__swiper-button-prev",
                        nextEl: ".energiekennis-slider__swiper-button-next"
                    },
                    on: {
                        autoplayTimeLeft: updateProgressCircles
                    }
                });
            }
            if (document.querySelector(".integrale-steps__slider") && window.innerWidth > 991.98) new swiper_core_Swiper(".integrale-steps__slider", {
                modules: [ Navigation, Mousewheel, EffectFade ],
                autoHeight: false,
                speed: 800,
                direction: "vertical",
                slidesPerView: 1,
                spaceBetween: 30,
                eventsTarget: "integrale-steps__slider",
                mousewheel: {
                    forceToAxis: true,
                    sensitivity: 1,
                    releaseOnEdges: true,
                    noMousewheelClass: "integrale-steps__main-circle"
                },
                effect: "fade",
                fadeEffect: {
                    crossFade: true
                },
                breakpoints: {
                    375: {
                        mousewheel: false,
                        enabled: false
                    },
                    991.98: {
                        mousewheel: {
                            forceToAxis: true,
                            sensitivity: 1,
                            releaseOnEdges: true
                        },
                        enabled: true
                    }
                }
            });
            if (document.querySelector(".home-solutions__slider")) new swiper_core_Swiper(".home-solutions__slider", {
                modules: [ Navigation ],
                slidesPerView: "auto",
                spaceBetween: 20,
                speed: 800,
                loop: true,
                navigation: {
                    prevEl: ".home-solutions__swiper-button-prev",
                    nextEl: ".home-solutions__swiper-button-next"
                },
                breakpoints: {
                    375: {
                        centeredSlides: true,
                        autoHeight: true
                    },
                    479.98: {
                        autoHeight: false,
                        centeredSlides: false
                    }
                },
                on: {}
            });
            if (document.querySelector(".home-steps__slider")) {
                const progressCircles = document.querySelectorAll(".home-steps__button-svg");
                function updateProgressCircles(s, time, progress) {
                    progressCircles.forEach((circle => {
                        circle.style.setProperty("--progress", 1 - progress);
                    }));
                }
                new swiper_core_Swiper(".home-steps__slider", {
                    modules: [ Navigation, Autoplay, EffectFade ],
                    effect: "fade",
                    fadeEffect: {
                        crossFade: true
                    },
                    allowTouchMove: false,
                    slidesPerView: "1",
                    spaceBetween: 0,
                    speed: 800,
                    loop: true,
                    autoplay: {
                        delay: 3e4,
                        disableOnInteraction: false
                    },
                    navigation: {
                        prevEl: ".steps-prev",
                        nextEl: ".steps-next"
                    },
                    on: {
                        autoplayTimeLeft: updateProgressCircles
                    }
                });
            }
            if (document.querySelector(".home-news__slider")) new swiper_core_Swiper(".home-news__slider", {
                modules: [ Navigation ],
                slidesPerView: "auto",
                spaceBetween: 20,
                autoHeight: false,
                speed: 800,
                loop: true
            });
            if (document.querySelector(".beheren-slider__slider")) new swiper_core_Swiper(".beheren-slider__slider", {
                modules: [ Navigation ],
                slidesPerView: 3,
                spaceBetween: 0,
                autoHeight: false,
                speed: 800,
                loop: true,
                breakpoints: {
                    320: {
                        slidesPerView: "auto",
                        spaceBetween: 16,
                        autoHeight: true
                    },
                    375: {
                        slidesPerView: "auto",
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: "auto",
                        spaceBetween: 30
                    },
                    1268: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    }
                }
            });
            if (document.querySelector(".opwekken-slider__slider")) new swiper_core_Swiper(".opwekken-slider__slider", {
                modules: [ Navigation ],
                slidesPerView: "auto",
                spaceBetween: 40,
                autoHeight: false,
                speed: 800,
                loop: true,
                breakpoints: {
                    375: {
                        spaceBetween: 15
                    },
                    768: {
                        spaceBetween: 25
                    },
                    1440: {
                        slidesPerView: "auto",
                        spaceBetween: 40
                    }
                }
            });
            if (window.matchMedia("(max-width: 768px)").matches) new swiper_core_Swiper(".productpagina-options__slider", {
                modules: [ Navigation ],
                slidesPerView: "auto",
                spaceBetween: 15,
                autoHeight: false,
                speed: 800,
                loop: true
            });
            if (document.querySelector(".energiekennis-slider__slider")) {
                const slides = document.querySelectorAll(".energiekennis-slider__slide");
                const bottomItems = document.querySelectorAll(".energiekennis-slider__bottom-item");
                function setActiveSlide(index) {
                    const activeSlideTitle = slides[index].querySelector(".energiekennis-slider__slide-title").textContent;
                    bottomItems.forEach((item => {
                        if (item.textContent === activeSlideTitle) item.classList.add("active"); else item.classList.remove("active");
                    }));
                }
                setActiveSlide(0);
                const progressCircles = document.querySelectorAll(".test-svg");
                function updateProgressCircles(s, time, progress) {
                    progressCircles.forEach((circle => {
                        circle.style.setProperty("--progress", 1 - progress);
                    }));
                }
                new swiper_core_Swiper(".energiekennis-slider__slider", {
                    modules: [ Navigation, Autoplay ],
                    slidesPerView: "1",
                    spaceBetween: 40,
                    autoHeight: true,
                    speed: 800,
                    loop: true,
                    autoplay: {
                        delay: 6e3,
                        disableOnInteraction: false
                    },
                    navigation: {
                        prevEl: ".energiekennis-slider__swiper-button-prev",
                        nextEl: ".energiekennis-slider__swiper-button-next"
                    },
                    breakpoints: {
                        375: {
                            spaceBetween: 50
                        },
                        768: {
                            spaceBetween: 50
                        },
                        1440: {
                            slidesPerView: "1",
                            spaceBetween: 50
                        }
                    },
                    on: {
                        slideChange: function() {
                            setActiveSlide(this.realIndex);
                        },
                        autoplayTimeLeft: updateProgressCircles
                    }
                });
            }
            if (document.querySelector(".campagne__slider")) new swiper_core_Swiper(".campagne__slider", {
                modules: [ Autoplay ],
                observer: true,
                observeParents: true,
                slidesPerView: "1",
                spaceBetween: 40,
                autoHeight: true,
                speed: 800,
                loop: true,
                autoplay: {
                    delay: 9e3,
                    disableOnInteraction: true
                },
                breakpoints: {
                    375: {
                        spaceBetween: 50
                    },
                    768: {
                        spaceBetween: 50
                    },
                    1440: {
                        slidesPerView: "1",
                        spaceBetween: 50
                    }
                },
                on: {}
            });
        }
        window.addEventListener("load", (function(e) {
            initSliders();
        }));
        class ScrollWatcher {
            constructor(props) {
                let defaultConfig = {
                    logging: true
                };
                this.config = Object.assign(defaultConfig, props);
                this.observer;
                !document.documentElement.classList.contains("watcher") ? this.scrollWatcherRun() : null;
            }
            scrollWatcherUpdate() {
                this.scrollWatcherRun();
            }
            scrollWatcherRun() {
                document.documentElement.classList.add("watcher");
                this.scrollWatcherConstructor(document.querySelectorAll("[data-watch]"));
            }
            scrollWatcherConstructor(items) {
                if (items.length) {
                    this.scrollWatcherLogging(`Прокинувся, стежу за об'єктами (${items.length})...`);
                    let uniqParams = uniqArray(Array.from(items).map((function(item) {
                        return `${item.dataset.watchRoot ? item.dataset.watchRoot : null}|${item.dataset.watchMargin ? item.dataset.watchMargin : "0px"}|${item.dataset.watchThreshold ? item.dataset.watchThreshold : 0}`;
                    })));
                    uniqParams.forEach((uniqParam => {
                        let uniqParamArray = uniqParam.split("|");
                        let paramsWatch = {
                            root: uniqParamArray[0],
                            margin: uniqParamArray[1],
                            threshold: uniqParamArray[2]
                        };
                        let groupItems = Array.from(items).filter((function(item) {
                            let watchRoot = item.dataset.watchRoot ? item.dataset.watchRoot : null;
                            let watchMargin = item.dataset.watchMargin ? item.dataset.watchMargin : "0px";
                            let watchThreshold = item.dataset.watchThreshold ? item.dataset.watchThreshold : 0;
                            if (String(watchRoot) === paramsWatch.root && String(watchMargin) === paramsWatch.margin && String(watchThreshold) === paramsWatch.threshold) return item;
                        }));
                        let configWatcher = this.getScrollWatcherConfig(paramsWatch);
                        this.scrollWatcherInit(groupItems, configWatcher);
                    }));
                } else this.scrollWatcherLogging("Сплю, немає об'єктів для стеження. ZzzZZzz");
            }
            getScrollWatcherConfig(paramsWatch) {
                let configWatcher = {};
                if (document.querySelector(paramsWatch.root)) configWatcher.root = document.querySelector(paramsWatch.root); else if (paramsWatch.root !== "null") this.scrollWatcherLogging(`Эмм... батьківського об'єкта ${paramsWatch.root} немає на сторінці`);
                configWatcher.rootMargin = paramsWatch.margin;
                if (paramsWatch.margin.indexOf("px") < 0 && paramsWatch.margin.indexOf("%") < 0) {
                    this.scrollWatcherLogging(`йой, налаштування data-watch-margin потрібно задавати в PX або %`);
                    return;
                }
                if (paramsWatch.threshold === "prx") {
                    paramsWatch.threshold = [];
                    for (let i = 0; i <= 1; i += .005) paramsWatch.threshold.push(i);
                } else paramsWatch.threshold = paramsWatch.threshold.split(",");
                configWatcher.threshold = paramsWatch.threshold;
                return configWatcher;
            }
            scrollWatcherCreate(configWatcher) {
                this.observer = new IntersectionObserver(((entries, observer) => {
                    entries.forEach((entry => {
                        this.scrollWatcherCallback(entry, observer);
                    }));
                }), configWatcher);
            }
            scrollWatcherInit(items, configWatcher) {
                this.scrollWatcherCreate(configWatcher);
                items.forEach((item => this.observer.observe(item)));
            }
            scrollWatcherIntersecting(entry, targetElement) {
                if (entry.isIntersecting) {
                    !targetElement.classList.contains("_watcher-view") ? targetElement.classList.add("_watcher-view") : null;
                    this.scrollWatcherLogging(`Я бачу ${targetElement.classList}, додав клас _watcher-view`);
                } else {
                    targetElement.classList.contains("_watcher-view") ? targetElement.classList.remove("_watcher-view") : null;
                    this.scrollWatcherLogging(`Я не бачу ${targetElement.classList}, прибрав клас _watcher-view`);
                }
            }
            scrollWatcherOff(targetElement, observer) {
                observer.unobserve(targetElement);
                this.scrollWatcherLogging(`Я перестав стежити за ${targetElement.classList}`);
            }
            scrollWatcherLogging(message) {
                this.config.logging ? functions_FLS(`[Спостерігач]: ${message}`) : null;
            }
            scrollWatcherCallback(entry, observer) {
                const targetElement = entry.target;
                this.scrollWatcherIntersecting(entry, targetElement);
                targetElement.hasAttribute("data-watch-once") && entry.isIntersecting ? this.scrollWatcherOff(targetElement, observer) : null;
                document.dispatchEvent(new CustomEvent("watcherCallback", {
                    detail: {
                        entry
                    }
                }));
            }
        }
        modules_flsModules.watcher = new ScrollWatcher({});
        let addWindowScrollEvent = false;
        function headerScroll() {
            addWindowScrollEvent = true;
            const header = document.querySelector("header.header");
            const headerShow = header.hasAttribute("data-scroll-show");
            const headerShowTimer = header.dataset.scrollShow ? header.dataset.scrollShow : 500;
            const startPoint = header.dataset.scroll ? header.dataset.scroll : 1;
            let scrollDirection = 0;
            let timer;
            document.addEventListener("windowScroll", (function(e) {
                const scrollTop = window.scrollY;
                clearTimeout(timer);
                if (scrollTop >= startPoint) {
                    !header.classList.contains("_header-scroll") ? header.classList.add("_header-scroll") : null;
                    if (headerShow) {
                        if (scrollTop > scrollDirection) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null; else !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                        timer = setTimeout((() => {
                            !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                        }), headerShowTimer);
                    }
                } else {
                    header.classList.contains("_header-scroll") ? header.classList.remove("_header-scroll") : null;
                    if (headerShow) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null;
                }
                scrollDirection = scrollTop <= 0 ? 0 : scrollTop;
            }));
        }
        function digitsCounter() {
            if (document.querySelectorAll("[data-digits-counter]").length) document.querySelectorAll("[data-digits-counter]").forEach((element => {
                element.dataset.digitsCounter = element.innerHTML;
                element.innerHTML = `0`;
            }));
            function digitsCountersInit(digitsCountersItems) {
                let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll("[data-digits-counter]");
                if (digitsCounters.length) digitsCounters.forEach((digitsCounter => {
                    digitsCountersAnimate(digitsCounter);
                }));
            }
            function digitsCountersAnimate(digitsCounter) {
                let startTimestamp = null;
                const duration = parseInt(digitsCounter.dataset.digitsCounterSpeed) ? parseInt(digitsCounter.dataset.digitsCounterSpeed) : 1e3;
                const startValue = parseInt(digitsCounter.dataset.digitsCounter);
                const startPosition = 0;
                const step = timestamp => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                    digitsCounter.innerHTML = Math.floor(progress * (startPosition + startValue));
                    if (progress < 1) window.requestAnimationFrame(step);
                };
                window.requestAnimationFrame(step);
            }
            function digitsCounterAction(e) {
                const entry = e.detail.entry;
                const targetElement = entry.target;
                if (targetElement.querySelectorAll("[data-digits-counter]").length) digitsCountersInit(targetElement.querySelectorAll("[data-digits-counter]"));
            }
            document.addEventListener("watcherCallback", digitsCounterAction);
        }
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        class DynamicAdapt {
            constructor(type) {
                this.type = type;
            }
            init() {
                this.оbjects = [];
                this.daClassname = "_dynamic_adapt_";
                this.nodes = [ ...document.querySelectorAll("[data-da]") ];
                this.nodes.forEach((node => {
                    const data = node.dataset.da.trim();
                    const dataArray = data.split(",");
                    const оbject = {};
                    оbject.element = node;
                    оbject.parent = node.parentNode;
                    оbject.destination = document.querySelector(`${dataArray[0].trim()}`);
                    оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                    оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                    оbject.index = this.indexInParent(оbject.parent, оbject.element);
                    this.оbjects.push(оbject);
                }));
                this.arraySort(this.оbjects);
                this.mediaQueries = this.оbjects.map((({breakpoint}) => `(${this.type}-width: ${breakpoint}px),${breakpoint}`)).filter(((item, index, self) => self.indexOf(item) === index));
                this.mediaQueries.forEach((media => {
                    const mediaSplit = media.split(",");
                    const matchMedia = window.matchMedia(mediaSplit[0]);
                    const mediaBreakpoint = mediaSplit[1];
                    const оbjectsFilter = this.оbjects.filter((({breakpoint}) => breakpoint === mediaBreakpoint));
                    matchMedia.addEventListener("change", (() => {
                        this.mediaHandler(matchMedia, оbjectsFilter);
                    }));
                    this.mediaHandler(matchMedia, оbjectsFilter);
                }));
            }
            mediaHandler(matchMedia, оbjects) {
                if (matchMedia.matches) оbjects.forEach((оbject => {
                    this.moveTo(оbject.place, оbject.element, оbject.destination);
                })); else оbjects.forEach((({parent, element, index}) => {
                    if (element.classList.contains(this.daClassname)) this.moveBack(parent, element, index);
                }));
            }
            moveTo(place, element, destination) {
                element.classList.add(this.daClassname);
                if (place === "last" || place >= destination.children.length) {
                    destination.append(element);
                    return;
                }
                if (place === "first") {
                    destination.prepend(element);
                    return;
                }
                destination.children[place].before(element);
            }
            moveBack(parent, element, index) {
                element.classList.remove(this.daClassname);
                if (parent.children[index] !== void 0) parent.children[index].before(element); else parent.append(element);
            }
            indexInParent(parent, element) {
                return [ ...parent.children ].indexOf(element);
            }
            arraySort(arr) {
                if (this.type === "min") arr.sort(((a, b) => {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) return 0;
                        if (a.place === "first" || b.place === "last") return -1;
                        if (a.place === "last" || b.place === "first") return 1;
                        return 0;
                    }
                    return a.breakpoint - b.breakpoint;
                })); else {
                    arr.sort(((a, b) => {
                        if (a.breakpoint === b.breakpoint) {
                            if (a.place === b.place) return 0;
                            if (a.place === "first" || b.place === "last") return 1;
                            if (a.place === "last" || b.place === "first") return -1;
                            return 0;
                        }
                        return b.breakpoint - a.breakpoint;
                    }));
                    return;
                }
            }
        }
        const da = new DynamicAdapt("max");
        da.init();
        var aos = __webpack_require__(711);
        __webpack_require__(443);
        const opwekkenLink = document.querySelector("#opwekken-link");
        const inzichtLink = document.querySelector("#inzicht-link");
        const duurzaamLink = document.querySelector("#duurzaam-link");
        const opwekkenSubmenu = document.querySelector("#opwekken");
        const inzichtSubmenu = document.querySelector("#inzicht");
        const duurzaamSubmenu = document.querySelector("#duurzaam");
        function showSubmenu(submenu, link) {
            opwekkenSubmenu.style.display = "none";
            inzichtSubmenu.style.display = "none";
            duurzaamSubmenu.style.display = "none";
            submenu.style.display = "flex";
            opwekkenLink.classList.remove("active");
            inzichtLink.classList.remove("active");
            duurzaamLink.classList.remove("active");
            link.classList.add("active");
        }
        opwekkenLink.addEventListener("mouseover", (() => {
            showSubmenu(opwekkenSubmenu, opwekkenLink);
        }));
        inzichtLink.addEventListener("mouseover", (() => {
            showSubmenu(inzichtSubmenu, inzichtLink);
        }));
        duurzaamLink.addEventListener("mouseover", (() => {
            showSubmenu(duurzaamSubmenu, duurzaamLink);
        }));
        let openDropdown = null;
        const selectButtons = document.querySelectorAll(".select-button");
        selectButtons.forEach((button => {
            button.addEventListener("click", (function() {
                const dropdownId = button.parentNode.querySelector(".select-list").id;
                if (openDropdown !== null) {
                    closeDropdown(openDropdown);
                    if (openDropdown === dropdownId) {
                        openDropdown = null;
                        return;
                    }
                }
                openDropdown = dropdownId;
                showDropdown(dropdownId);
                button.classList.add("selected");
            }));
        }));
        function showDropdown(dropdownId) {
            var dropdown = document.getElementById(dropdownId);
            if (dropdown.style.display === "none") dropdown.style.display = "block"; else dropdown.style.display = "none";
        }
        function closeDropdown(dropdownId) {
            var dropdown = document.getElementById(dropdownId);
            dropdown.style.display = "none";
            document.querySelector(".selected").classList.remove("selected");
        }
        document.addEventListener("click", (function(event) {
            if (openDropdown !== null && !event.target.closest(".select-block")) {
                closeDropdown(openDropdown);
                openDropdown = null;
            }
        }));
        const menuLinks = document.querySelectorAll(".menu__link-test");
        const submenusWrap = document.querySelectorAll(".menu__submenu-wrap");
        const arrows = document.querySelectorAll(".menu-arrow");
        function closeSubmenu() {
            submenusWrap.forEach((submenu => {
                submenu.classList.remove("submenu-open");
            }));
            arrows.forEach((arrow => {
                arrow.classList.remove("rotated");
            }));
            toggleOverlay(false);
        }
        menuLinks.forEach(((link, index) => {
            link.addEventListener("mouseover", (() => {
                if (window.innerWidth > 991.98) {
                    closeSubmenu();
                    submenusWrap[index].classList.add("submenu-open");
                    const arrow = link.nextElementSibling;
                    arrow.classList.add("rotated");
                    toggleOverlay(true);
                }
            }));
        }));
        arrows.forEach(((arrow, index) => {
            arrow.addEventListener("click", (() => {
                const submenu = arrow.closest(".menu__item").querySelector(".menu__submenu-wrap");
                submenu.classList.toggle("submenu-open");
                arrow.classList.toggle("rotated");
                toggleOverlay(submenu.classList.contains("submenu-open"));
            }));
        }));
        document.addEventListener("click", (event => {
            const isClickInsideMenu = event.target.closest(".header__bottom");
            if (!isClickInsideMenu) closeSubmenu();
        }));
        let timeoutId;
        function closeSubmenuWithDelay() {
            if (window.innerWidth > 991.98) timeoutId = setTimeout(closeSubmenu, 1e3);
        }
        document.querySelector(".header__bottom").addEventListener("mouseleave", closeSubmenuWithDelay);
        document.querySelector(".header__bottom").addEventListener("mouseenter", (() => {
            clearTimeout(timeoutId);
        }));
        if (window.innerWidth < 991.98) {
            const spoilerLinks = document.querySelectorAll(".menu__submenu-main-nav-item-wrap");
            spoilerLinks.forEach(((link, index) => {
                const arrow = link.querySelector("._icon-arrow-right");
                const submenu = link.nextElementSibling;
                const anchor = link.querySelector("a");
                arrow.addEventListener("click", (e => {
                    e.stopPropagation();
                    e.preventDefault();
                    if (submenu.style.display === "flex") {
                        submenu.style.display = "none";
                        arrow.classList.remove("open");
                    } else {
                        const openSubmenus = document.querySelectorAll('.menu__submenu-sub-nav[style="display: flex;"]');
                        openSubmenus.forEach((openSubmenu => {
                            openSubmenu.style.display = "none";
                            const openArrow = openSubmenu.previousElementSibling.querySelector("._icon-arrow-right");
                            openArrow.classList.remove("open");
                        }));
                        submenu.style.display = "flex";
                        arrow.classList.add("open");
                    }
                }));
                anchor.addEventListener("click", (e => {
                    e.stopPropagation();
                }));
                if (index === 0) {
                    submenu.style.display = "flex";
                    arrow.classList.add("open");
                }
            }));
        }
        const backButtonMenu = document.querySelector(".icon-menu");
        const backButtons = document.querySelectorAll(".menu__submenu-main-nav-back");
        backButtonMenu.addEventListener("click", closeSubmenu);
        backButtons.forEach((backButton => {
            backButton.addEventListener("click", closeSubmenu);
        }));
        const toggleOverlay = open => {
            const overlay = document.querySelector(".overlay");
            if (open && window.innerWidth > 991.98) if (!overlay) {
                const overlay = document.createElement("div");
                overlay.classList.add("overlay");
                document.body.appendChild(overlay);
            } else overlay.style.display = "block"; else if (!open && overlay) overlay.style.display = "none";
        };
        const showMoreBtns = document.querySelectorAll(".services__item-show-more");
        showMoreBtns.forEach((btn => {
            btn.addEventListener("click", (() => {
                const itemBottom = btn.parentNode.querySelector(".services__item-list");
                itemBottom.classList.toggle("show");
                btn.classList.toggle("rotated-arrow");
            }));
        }));
        const playButtons = document.querySelectorAll(".full-video__play-button");
        const videoTexts = document.querySelectorAll("#full-video__text");
        playButtons.forEach((function(button) {
            button.addEventListener("click", (function() {
                const thumbnail = button.previousElementSibling;
                const videoContainer = button.nextElementSibling;
                thumbnail.style.display = "none";
                videoContainer.style.display = "block";
                const iframe = videoContainer.querySelector("iframe");
                if (iframe) iframe.src += "&autoplay=1";
                videoTexts.forEach((function(videoText) {
                    if (videoText) videoText.style.display = "none";
                }));
            }));
        }));
        const isMobileTest = window.matchMedia("(max-width: 767.98px)").matches;
        const vooropItem = document.querySelectorAll(".voorop__item");
        vooropItem.forEach((item => {
            item.addEventListener("mouseover", (() => {
                if (!isMobileTest) item.classList.add("voorop__item-active");
            }));
            item.addEventListener("mouseout", (() => {
                if (!isMobileTest) item.classList.remove("voorop__item-active");
            }));
        }));
        const testItem = document.querySelectorAll(" .productpagina-options__slide");
        testItem.forEach((item => {
            item.addEventListener("mouseover", (() => {
                if (!isMobileTest) item.classList.add("productpagina-options__slide-active");
            }));
            item.addEventListener("mouseout", (() => {
                if (!isMobileTest) item.classList.remove("productpagina-options__slide-active");
            }));
        }));
        const filterDropdown = document.getElementById("filter-dropdown");
        const filterButton = document.getElementById("filter-btn");
        if (filterButton) filterButton.onclick = function() {
            filterDropdown.classList.toggle("show");
            filterButton.classList.toggle("rotated-arrow");
        };
        if (filterDropdown) filterDropdown.onclick = function(event) {
            const selected = event.target.innerText;
            filterButton.innerText = selected;
            filterDropdown.classList.toggle("show");
            filterButton.classList.toggle("rotated-arrow");
        };
        const terms = document.querySelectorAll(".energiekennis-term__terms-text li");
        const filterLetters = document.querySelectorAll(".energiekennis-term__filter li");
        function filterTerms(letter) {
            terms.forEach((term => {
                term.style.display = term.querySelector("a").innerText.startsWith(letter) ? "flex" : "none";
            }));
        }
        function showAllTerms() {
            filterLetters.forEach((letter => {
                letter.classList.remove("active");
            }));
            terms.forEach((term => {
                term.style.display = "inline-block";
            }));
        }
        function updateActiveFilter(index) {
            if (index >= 0 && index < filterLetters.length) {
                filterLetters[index].classList.add("active");
                filterTerms(filterLetters[index].innerText);
            }
        }
        filterLetters.forEach(((letter, index) => {
            letter.addEventListener("click", (event => {
                const selectedLetter = event.target.innerText;
                filterLetters.forEach((letter => {
                    letter.classList.remove("active");
                }));
                letter.classList.add("active");
                filterTerms(selectedLetter);
                activeIndex = index;
            }));
        }));
        const showMoreButton = document.querySelector(".energiekennis-term__show-more-button");
        if (showMoreButton) showMoreButton.addEventListener("click", (() => {
            showAllTerms();
        }));
        const filterRightArrow = document.querySelector(".energiekennis-term__filter-right");
        if (filterRightArrow) filterRightArrow.addEventListener("click", (() => {
            activeIndex = (activeIndex + 1) % filterLetters.length;
            filterLetters[activeIndex].click();
        }));
        const filterLeftArrow = document.querySelector(".energiekennis-term__filter-left");
        if (filterLeftArrow) filterLeftArrow.addEventListener("click", (() => {
            activeIndex = (activeIndex - 1 + filterLetters.length) % filterLetters.length;
            filterLetters[activeIndex].click();
        }));
        let activeIndex = 0;
        updateActiveFilter(activeIndex);
        const cookieInstellingenButton = document.getElementById("cookieInstellingen");
        const cookiesList = document.querySelector(".cookies__list");
        cookieInstellingenButton.addEventListener("click", (() => {
            cookiesList.classList.toggle("visible");
        }));
        var cookieConsent = getCookie("cookieConsent");
        if (!cookieConsent) document.querySelector(".cookies").style.display = "block"; else {
            document.querySelector(".cookies").style.display = "none";
            loadScripts();
        }
        document.getElementById("accepteerCookies").addEventListener("click", (function() {
            var functioneelCheckbox = document.getElementById("functioneel");
            var analyticsCheckbox = document.getElementById("analytisch");
            var marketingCheckbox = document.getElementById("marketing");
            var cookieValue = "";
            if (functioneelCheckbox.checked) cookieValue += "Functioneel ";
            if (analyticsCheckbox.checked) cookieValue += "Analytisch ";
            if (marketingCheckbox.checked) cookieValue += "Marketing";
            setCookie("cookieConsent", cookieValue.trim(), 365);
            document.querySelector(".cookies").style.display = "none";
            loadScripts();
        }));
        function loadScripts() {
            var cookieConsent = getCookie("cookieConsent");
            document.getElementById("functioneel");
            var analyticsCheckbox = document.getElementById("analytisch");
            var marketingCheckbox = document.getElementById("marketing");
            console.log("Functioneel script loaded");
            if (analyticsCheckbox.checked && cookieConsent.includes("Analytisch")) console.log("Analytics script loaded");
            if (marketingCheckbox.checked && cookieConsent.includes("Marketing")) console.log("Marketing script loaded");
        }
        function getCookie(name) {
            var cookies = document.cookie.split("; ");
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].split("=");
                if (cookie[0] === name) return cookie[1];
            }
            return "";
        }
        function setCookie(name, value, days) {
            var expires = "";
            if (days) {
                var date = new Date;
                date.setTime(date.getTime() + days * 24 * 60 * 60 * 1e3);
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + value + expires + "; path=/";
        }
        const headerLogo = document.querySelector(".header__logo");
        const header = document.querySelector(".header");
        headerLogo.addEventListener("click", (() => {
            if (header.classList.contains("_header-scroll")) {
                event.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        }));
        if (window.innerWidth > 991.98) {
            function moveContentToRight() {
                document.querySelector(".pillar-content__inhoud-wrap");
                var content = document.querySelector(".pillar-content__inhoud");
                var stepsRight = document.querySelector(".pillar-content__steps-right");
                stepsRight.appendChild(content);
            }
            function moveContentToWrap() {
                var contentWrap = document.querySelector(".pillar-content__inhoud-wrap");
                var content = document.querySelector(".pillar-content__inhoud");
                contentWrap.appendChild(content);
            }
            function handleIntersection(entries, observer) {
                entries.forEach((function(entry) {
                    if (entry.isIntersecting) moveContentToWrap(); else moveContentToRight();
                }));
            }
            const sections = document.querySelectorAll(".pillar-content__steps-item");
            const links = document.querySelectorAll(".pillar-content__inhoud-box li a");
            const options = {
                rootMargin: "-20% 0px -80% 0px"
            };
            const callback = (entries, observer) => {
                entries.forEach((entry => {
                    const target = entry.target;
                    const targetLink = document.querySelector(`.pillar-content__inhoud-box li a[href="#${target.id}"]`);
                    if (entry.isIntersecting) targetLink.classList.add("active"); else targetLink.classList.remove("active");
                }));
            };
            const linkObserver = new IntersectionObserver(callback, options);
            if (sections.length > 0 && links.length > 0) {
                if (window.innerWidth > 991.98) sections.forEach((section => {
                    linkObserver.observe(section);
                }));
                var contentObserver = new IntersectionObserver(handleIntersection);
                var contentWrap = document.querySelector(".pillar-content__inhoud-wrap");
                contentObserver.observe(contentWrap);
            }
        }
        function initAOS() {
            var offsetValue = window.innerWidth < 768 ? 100 : 200;
            aos.init({
                offset: offsetValue,
                once: true,
                delay: 200,
                duration: 600
            });
        }
        initAOS();
        window.addEventListener("resize", initAOS);
        const mainCircleImages = document.querySelector(".integrale-steps__main-circle-images");
        const mainCircle = document.querySelector(".integrale-steps__main-circle");
        const stepsSection = document.querySelector(".integrale-steps");
        if (stepsSection) {
            const initialWidth = 820;
            const initialHeight = 820;
            const finalWidth = 440;
            const finalHeight = 440;
            function getDistanceFromTop() {
                const rect = stepsSection.getBoundingClientRect();
                return rect.top;
            }
            function updateMainCircleDimensions() {
                const distanceFromTop = getDistanceFromTop();
                let newWidth, newHeight;
                if (distanceFromTop <= 0) {
                    const progress = Math.min(1, Math.abs(distanceFromTop) / (stepsSection.offsetHeight * .4));
                    newWidth = initialWidth - (initialWidth - finalWidth) * progress;
                    newHeight = initialHeight - (initialHeight - finalHeight) * progress;
                    mainCircleImages.style.width = newWidth + "px";
                    mainCircleImages.style.height = newHeight + "px";
                    if (newWidth <= finalWidth && newHeight <= finalHeight) {
                        mainCircle.style.display = "none";
                        document.querySelector(".integrale-steps__slider").style.opacity = 1;
                    } else {
                        mainCircle.style.display = "flex";
                        document.querySelector(".integrale-steps__slider").style.opacity = 0;
                    }
                } else {
                    mainCircleImages.style.width = initialWidth + "px";
                    mainCircleImages.style.height = initialHeight + "px";
                    mainCircle.style.display = "flex";
                    document.querySelector(".integrale-steps__slider").style.opacity = 0;
                }
            }
            updateMainCircleDimensions();
            let isScrolling = false;
            window.addEventListener("scroll", (function() {
                if (!isScrolling) window.requestAnimationFrame((function() {
                    updateMainCircleDimensions();
                    isScrolling = false;
                }));
                isScrolling = true;
            }));
        }
        window["FLS"] = false;
        isWebp();
        menuInit();
        spollers();
        headerScroll();
        digitsCounter();
    })();
})();