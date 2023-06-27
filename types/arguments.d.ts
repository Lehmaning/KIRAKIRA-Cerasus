export namespace FlyoutModelNS {
	export type Target = MaybeRef<MouseEvent | PointerEvent | TwoD | HTMLElement | EventTarget | DOMRect | undefined | null>;
	export type Tuple = [target: Target, placement?: Placement, offset?: number];
	export type Object = { target: Target; placement?: Placement; offset?: number };
}

namespace AnimatedIconStateNS {
	export type Tuple = [marker?: string, loop?: boolean, speed?: number];
	export type Object = { marker?: string; loop?: boolean; speed?: number };
}

/**
 * 在此处声明各组件或函数等希望全局使用的类型名称，其名称应尽可能复杂以规避重名。有必要时可使用命名空间。
 */
declare global {
	/** TAB 移动方向。 */
	type Movement = "previous" | "next";
	/** 复选框选中状态。 */
	type CheckState = "unchecked" | "indeterminate" | "checked";
	/** 遮罩的插槽位置方向。 */
	type MaskSlotPosition = "left top" | "center top" | "right top" | "left center" | "center" | "right center" | "left bottom" | "center bottom" | "right bottom";
	/** 标志文本形态。 */
	type LogoTextFormType = "hidden" | "half" | "full";
	/** 隐私公开性。 */
	type PrivacyType = "public" | "following" | "private";
	/** 工具提示、浮窗等的放置位置方向。 */
	type Placement = "top" | "right" | "bottom" | "left" | "x" | "y";

	type FlyoutModel = FlyoutModelNS.Tuple | FlyoutModelNS.Object;
	type MenuModel = MouseEvent | PointerEvent | null;
	type AnimatedIconState = AnimatedIconStateNS.Tuple | AnimatedIconStateNS.Object;

	/**
	 * 使用 `role` 可以增强组件的可读性和语义化。值得注意的是这个属性是枚举而并非任意填写的。
	 * @remarks 不包含: "meter" | "rating"
	 */
	type Role = "alert" | "alertdialog" | "button" | "checkbox" | "dialog" | "gridcell" | "link" | "log" | "marquee" | "menuitem" | "menuitemcheckbox" | "menuitemradio" | "option" | "progressbar" | "radio" | "scrollbar" | "searchbox" | "slider" | "spinbutton" | "status" | "switch" | "tab" | "tabpanel" | "textbox" | "timer" | "tooltip" | "treeitem" | "combobox" | "grid" | "listbox" | "menu" | "menubar" | "radiogroup" | "tablist" | "tree" | "treegrid" | "application" | "article" | "cell" | "columnheader" | "definition" | "directory" | "document" | "feed" | "figure" | "group" | "heading" | "img" | "list" | "listitem" | "math" | "none" | "note" | "presentation" | "region" | "row" | "rowgroup" | "rowheader" | "separator" | "table" | "term" | "text" | "toolbar" | "banner" | "complementary" | "contentinfo" | "form" | "main" | "navigation" | "search" | "doc-abstract" | "doc-acknowledgments" | "doc-afterword" | "doc-appendix" | "doc-backlink" | "doc-biblioentry" | "doc-bibliography" | "doc-biblioref" | "doc-chapter" | "doc-colophon" | "doc-conclusion" | "doc-cover" | "doc-credit" | "doc-credits" | "doc-dedication" | "doc-endnote" | "doc-endnotes" | "doc-epigraph" | "doc-epilogue" | "doc-errata" | "doc-example" | "doc-footnote" | "doc-foreword" | "doc-glossary" | "doc-glossref" | "doc-index" | "doc-introduction" | "doc-noteref" | "doc-notice" | "doc-pagebreak" | "doc-pagelist" | "doc-part" | "doc-preface" | "doc-prologue" | "doc-pullquote" | "doc-qna" | "doc-subtitle" | "doc-tip" | "doc-toc";
}