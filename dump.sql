--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12
-- Dumped by pg_dump version 12.12

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

--
-- Name: app; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA app;


SET default_table_access_method = heap;

--
-- Name: episodes; Type: TABLE; Schema: app; Owner: -
--

CREATE TABLE app.episodes (
    id bigint NOT NULL,
    name text NOT NULL,
    rating bigint NOT NULL,
    active boolean NOT NULL,
    series_id bigint NOT NULL,
    launched_at timestamp with time zone,
    duration text
);


--
-- Name: movie; Type: TABLE; Schema: app; Owner: -
--

CREATE TABLE app.movie (
    id bigint NOT NULL,
    name text NOT NULL,
    rating bigint NOT NULL,
    active boolean NOT NULL,
    launched_at timestamp with time zone NOT NULL,
    duration text NOT NULL
);


--
-- Name: series; Type: TABLE; Schema: app; Owner: -
--

CREATE TABLE app.series (
    id bigint NOT NULL,
    name text NOT NULL,
    episodes numeric NOT NULL,
    rating bigint NOT NULL,
    active boolean NOT NULL,
    launched_at timestamp with time zone NOT NULL
);


--
-- Name: user; Type: TABLE; Schema: app; Owner: -
--

CREATE TABLE app."user" (
    id bigint NOT NULL,
    name text NOT NULL,
    active boolean DEFAULT true NOT NULL,
    email_id text NOT NULL,
    password text
);


--
-- Name: user_episode_watched; Type: TABLE; Schema: app; Owner: -
--

CREATE TABLE app.user_episode_watched (
    id bigint NOT NULL,
    user_id bigint NOT NULL,
    episode_id bigint NOT NULL,
    series_id bigint NOT NULL,
    liked boolean,
    rating bigint,
    user_comment text,
    is_completed boolean DEFAULT false,
    completed_at timestamp with time zone
);


--
-- Name: user_episode_watched_id_seq; Type: SEQUENCE; Schema: app; Owner: -
--

ALTER TABLE app.user_episode_watched ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME app.user_episode_watched_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: user_id_seq; Type: SEQUENCE; Schema: app; Owner: -
--

ALTER TABLE app."user" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME app.user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: user_movie_watched; Type: TABLE; Schema: app; Owner: -
--

CREATE TABLE app.user_movie_watched (
    id bigint NOT NULL,
    user_id bigint NOT NULL,
    movie_id bigint NOT NULL,
    liked boolean,
    rating bigint,
    user_comment text,
    is_completed boolean DEFAULT false,
    completed_at timestamp with time zone
);


--
-- Name: user_movie_watched_id_seq; Type: SEQUENCE; Schema: app; Owner: -
--

ALTER TABLE app.user_movie_watched ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME app.user_movie_watched_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: user_series_watched; Type: TABLE; Schema: app; Owner: -
--

CREATE TABLE app.user_series_watched (
    id bigint NOT NULL,
    user_id bigint NOT NULL,
    series_id bigint NOT NULL,
    liked boolean,
    rating bigint,
    user_comment text,
    is_completed boolean DEFAULT false,
    completed_at timestamp with time zone
);


--
-- Name: user_series_watched_id_seq; Type: SEQUENCE; Schema: app; Owner: -
--

ALTER TABLE app.user_series_watched ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME app.user_series_watched_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: user_session; Type: TABLE; Schema: app; Owner: -
--

CREATE TABLE app.user_session (
    id bigint NOT NULL,
    user_id bigint NOT NULL,
    active boolean DEFAULT true NOT NULL,
    token text NOT NULL
);


--
-- Name: user_session_id_seq; Type: SEQUENCE; Schema: app; Owner: -
--

ALTER TABLE app.user_session ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME app.user_session_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: episodes episodes_pkey; Type: CONSTRAINT; Schema: app; Owner: -
--

ALTER TABLE ONLY app.episodes
    ADD CONSTRAINT episodes_pkey PRIMARY KEY (id);


--
-- Name: user movie_one_pkey; Type: CONSTRAINT; Schema: app; Owner: -
--

ALTER TABLE ONLY app."user"
    ADD CONSTRAINT movie_one_pkey PRIMARY KEY (id);


--
-- Name: movie movie_pkey; Type: CONSTRAINT; Schema: app; Owner: -
--

ALTER TABLE ONLY app.movie
    ADD CONSTRAINT movie_pkey PRIMARY KEY (id);


--
-- Name: series series_pkey; Type: CONSTRAINT; Schema: app; Owner: -
--

ALTER TABLE ONLY app.series
    ADD CONSTRAINT series_pkey PRIMARY KEY (id);


--
-- Name: user_episode_watched user_episode_watched_pkey; Type: CONSTRAINT; Schema: app; Owner: -
--

ALTER TABLE ONLY app.user_episode_watched
    ADD CONSTRAINT user_episode_watched_pkey PRIMARY KEY (id);


--
-- Name: user_movie_watched user_movie_watched_pkey; Type: CONSTRAINT; Schema: app; Owner: -
--

ALTER TABLE ONLY app.user_movie_watched
    ADD CONSTRAINT user_movie_watched_pkey PRIMARY KEY (id);


--
-- Name: user_series_watched user_series_watched_pkey; Type: CONSTRAINT; Schema: app; Owner: -
--

ALTER TABLE ONLY app.user_series_watched
    ADD CONSTRAINT user_series_watched_pkey PRIMARY KEY (id);


--
-- Name: user_session user_session_pkey; Type: CONSTRAINT; Schema: app; Owner: -
--

ALTER TABLE ONLY app.user_session
    ADD CONSTRAINT user_session_pkey PRIMARY KEY (id);


--
-- Name: user_episode_watched fk_episode; Type: FK CONSTRAINT; Schema: app; Owner: -
--

ALTER TABLE ONLY app.user_episode_watched
    ADD CONSTRAINT fk_episode FOREIGN KEY (episode_id) REFERENCES app.episodes(id);


--
-- Name: user_movie_watched fk_movie; Type: FK CONSTRAINT; Schema: app; Owner: -
--

ALTER TABLE ONLY app.user_movie_watched
    ADD CONSTRAINT fk_movie FOREIGN KEY (movie_id) REFERENCES app.movie(id);


--
-- Name: episodes fk_series; Type: FK CONSTRAINT; Schema: app; Owner: -
--

ALTER TABLE ONLY app.episodes
    ADD CONSTRAINT fk_series FOREIGN KEY (series_id) REFERENCES app.series(id);


--
-- Name: user_series_watched fk_series; Type: FK CONSTRAINT; Schema: app; Owner: -
--

ALTER TABLE ONLY app.user_series_watched
    ADD CONSTRAINT fk_series FOREIGN KEY (series_id) REFERENCES app.series(id);


--
-- Name: user_episode_watched fk_series; Type: FK CONSTRAINT; Schema: app; Owner: -
--

ALTER TABLE ONLY app.user_episode_watched
    ADD CONSTRAINT fk_series FOREIGN KEY (series_id) REFERENCES app.series(id);


--
-- Name: user_session fk_user; Type: FK CONSTRAINT; Schema: app; Owner: -
--

ALTER TABLE ONLY app.user_session
    ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES app."user"(id);


--
-- PostgreSQL database dump complete
--

