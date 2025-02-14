export const useSelfUserInfoStore = defineStore("user-info", () => {
	/** 是否已经登录？ */
	const isLogined = ref(false);
	/** 当前登录的用户的 UID */
	const uid = ref<number>();
	/** 当前登录的用户用户名。 */
	const username = ref("");
	/** 当前登录的用户昵称 */
	const userNickname = ref("");
	/** 当前登录的用户的头像 */
	const userAvatar = ref("");
	/** 当前登录的用户的性别 */
	const gender = ref("");
	/** 当前登录的用户的个性签名或简介 */
	const signature = ref("");
	/** 当前登录的用户的生日 */
	const birthday = ref(0);
	/** 当前登录的用户的标签 */
	const tags = ref<string[]>([]);

	return { isLogined, uid, username, userNickname, userAvatar, gender, signature, birthday, tags };
});
