import { Blog, User } from "@prisma/client";

// export type SafeReservation = Omit<Reservation, "createdAt" | "startDate" | "endDate" | "listing"> & {
//   createdAt: string;
//   startDate: string;
//   endDate: string;
//   listing: SafeBlogs;
// };

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};

export type SafeBlogs = Omit<Blog, "createdAt"> & {
  createdAt: string;
};
