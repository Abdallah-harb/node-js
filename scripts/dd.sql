--
-- PostgreSQL database dump
--

-- Dumped from database version 15.5 (Ubuntu 15.5-1.pgdg22.04+1)
-- Dumped by pg_dump version 15.5 (Ubuntu 15.5-1.pgdg22.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: book; Type: TABLE; Schema: public; Owner: homestead
--

CREATE TABLE public.book (
                             id integer NOT NULL,
                             title character varying(255) NOT NULL,
                             description text,
                             isbn character varying(50) NOT NULL,
                             author character varying(255) NOT NULL,
                             publisher character varying(255),
                             pages integer,
                             store_id integer NOT NULL,
                             created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
                             CONSTRAINT book_pages_check CHECK ((pages > 0))
);


ALTER TABLE public.book OWNER TO homestead;

--
-- Name: book_id_seq; Type: SEQUENCE; Schema: public; Owner: homestead
--

CREATE SEQUENCE public.book_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.book_id_seq OWNER TO homestead;

--
-- Name: book_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: homestead
--

ALTER SEQUENCE public.book_id_seq OWNED BY public.book.id;


--
-- Name: store; Type: TABLE; Schema: public; Owner: homestead
--

CREATE TABLE public.store (
                              id integer NOT NULL,
                              name character varying(255) NOT NULL,
                              code character varying(50) NOT NULL,
                              address text,
                              created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.store OWNER TO homestead;

--
-- Name: store_id_seq; Type: SEQUENCE; Schema: public; Owner: homestead
--

CREATE SEQUENCE public.store_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.store_id_seq OWNER TO homestead;

--
-- Name: store_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: homestead
--

ALTER SEQUENCE public.store_id_seq OWNED BY public.store.id;


--
-- Name: book id; Type: DEFAULT; Schema: public; Owner: homestead
--

ALTER TABLE ONLY public.book ALTER COLUMN id SET DEFAULT nextval('public.book_id_seq'::regclass);


--
-- Name: store id; Type: DEFAULT; Schema: public; Owner: homestead
--

ALTER TABLE ONLY public.store ALTER COLUMN id SET DEFAULT nextval('public.store_id_seq'::regclass);


--
-- Data for Name: book; Type: TABLE DATA; Schema: public; Owner: homestead
--

COPY public.book (id, title, description, isbn, author, publisher, pages, store_id, created_at) FROM stdin;
1	first book	bla bla bla	642	Abdallah	zain	153	1	2025-02-02 12:00:30.497202
\.


--
-- Data for Name: store; Type: TABLE DATA; Schema: public; Owner: homestead
--

COPY public.store (id, name, code, address, created_at) FROM stdin;
2	khaled	#_khaled$ab	cairo-zagazig	2025-01-30 10:54:39.606233
3	zain_mo	#_zain_mo3349$ab	cairo-zagazig	2025-01-30 10:55:32.395498
1	zain	#_zain$ab	cairo-zagazig	2025-01-30 09:48:56.205196
\.


--
-- Name: book_id_seq; Type: SEQUENCE SET; Schema: public; Owner: homestead
--

SELECT pg_catalog.setval('public.book_id_seq', 1, true);


--
-- Name: store_id_seq; Type: SEQUENCE SET; Schema: public; Owner: homestead
--

SELECT pg_catalog.setval('public.store_id_seq', 20, true);


--
-- Name: book book_isbn_key; Type: CONSTRAINT; Schema: public; Owner: homestead
--

ALTER TABLE ONLY public.book
    ADD CONSTRAINT book_isbn_key UNIQUE (isbn);


--
-- Name: book book_pkey; Type: CONSTRAINT; Schema: public; Owner: homestead
--

ALTER TABLE ONLY public.book
    ADD CONSTRAINT book_pkey PRIMARY KEY (id);


--
-- Name: store store_name_key; Type: CONSTRAINT; Schema: public; Owner: homestead
--

ALTER TABLE ONLY public.store
    ADD CONSTRAINT store_name_key UNIQUE (name);


--
-- Name: store store_pkey; Type: CONSTRAINT; Schema: public; Owner: homestead
--

ALTER TABLE ONLY public.store
    ADD CONSTRAINT store_pkey PRIMARY KEY (id);


--
-- Name: book fk_store; Type: FK CONSTRAINT; Schema: public; Owner: homestead
--

ALTER TABLE ONLY public.book
    ADD CONSTRAINT fk_store FOREIGN KEY (store_id) REFERENCES public.store(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

CREATE TABLE public.audit (
                              id SERIAL PRIMARY KEY,
                              action VARCHAR(255) NOT NULL,
                              model VARCHAR(255) NOT NULL,
                              info JSONB NOT NULL,
                              created_by VARCHAR(255) NOT NULL,
                              created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);