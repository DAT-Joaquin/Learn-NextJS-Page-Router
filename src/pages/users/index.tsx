import { useState } from "react";
import UserTemplate from "./user";

export default function Login({ data, sort, searchText }: any) {
  return (
    <div>
      <UserTemplate data={data} />
      <div>Sort: {sort}</div>
      <div>Search Text: {searchText}</div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  // Gọi API để lấy dữ liệu bằng fetch
  const { sort, searchText } = context?.query;
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json(); // Chuyển đổi phản hồi thành JSON

  console.log("data", data);

  // Truyền dữ liệu vào props của trang
  return {
    props: {
      data,
      sort: sort || 1,
      searchText: searchText || "",
    },
  };
}
