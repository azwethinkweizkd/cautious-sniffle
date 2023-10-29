import type { PageServerLoad } from "./$types";

export const action: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const user = String(formData.get("username"));
    const password = String(formData.get("password"));

    if (!user || !password) {
      return fail(400, { user, password, missing: true });
    }

    return { success: true };
  },
};
