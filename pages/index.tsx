import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import { Post } from "../interfaces/typings";
import Link from "next/link";

interface Props {
	posts: [Post];
}

export default function Home({ posts }: Props) {
	return <h1 className="max-w-7xl mx-auto">hello</h1>;
}
